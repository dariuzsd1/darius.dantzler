/* api/seen.mjs: "Seen it" counts for the Screening Room.
   GET  /api/seen               -> { counts: {slug: n}, mine: [slug], canVote }
   POST /api/seen {slug, on}    -> { slug, on, count }
   Storage is Upstash Redis over its REST API (connect it in Vercel > Storage; the env vars appear on their own).
   No logins: each browser gets a random ID in an HttpOnly cookie, and each ID counts once per title. */
import { createHash, randomUUID } from 'node:crypto';

// Must match the poster slugs on Screening-Room.html. Add a slug here when a title is added there.
const SLUGS = new Set([
  'arcane', 'avatar-the-last-airbender', 'beasts-of-no-nation', 'better-call-saul', 'black-mirror', 'blue-eye-samurai',
  'bojack-horseman', 'breaking-bad', 'chernobyl', 'city-of-god', 'coco', 'come-and-see', 'first-they-killed-my-father',
  'game-of-thrones', 'good-will-hunting', 'guardians-of-the-galaxy-vol-3', 'house-of-cards', 'interstellar', 'invincible',
  'jojo-rabbit', 'mindhunter', 'mudbound', 'narcos', 'no-country-for-old-men', 'parks-and-recreation',
  'pirates-of-the-caribbean-the-curse-of-the-black-pearl', 'project-hail-mary', 'regular-show', 'rick-and-morty',
  'severance', 'shogun', 'south-park', 'spider-man-across-the-spider-verse', 'ted-lasso', 'the-boondocks', 'the-boys',
  'the-expanse', 'the-marvelous-mrs-maisel', 'the-office', 'the-wild-robot', 'three-billboards-outside-ebbing-missouri',
  'toy-story-3', 'treasure-planet', 'vinland-saga', 'wall-e',
]);

const COUNTS = 'sr:counts';             // hash: slug -> number of IDs that ticked it
const voterKey = id => 'sr:voter:' + id; // set: slugs this ID has ticked
const COOKIE = 'sr_voter';
const YEAR = 60 * 60 * 24 * 365;
const TOGGLES_PER_MIN = 30;             // per network, stops scripts hammering the button
const NEW_IDS_PER_HOUR = 40;            // per network, stops cookie-clearing loops (campus Wi-Fi still fits)

// Flip one title for one ID, and only move the count if the ID's own set actually changed.
const TOGGLE = `
local changed
if ARGV[2] == '1' then changed = redis.call('SADD', KEYS[1], ARGV[1])
else changed = redis.call('SREM', KEYS[1], ARGV[1]) end
redis.call('EXPIRE', KEYS[1], ${YEAR})
if changed == 1 then redis.call('HINCRBY', KEYS[2], ARGV[1], ARGV[2] == '1' and 1 or -1) end
return tonumber(redis.call('HGET', KEYS[2], ARGV[1]) or '0')`;

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(commands) {
  const res = await fetch(REDIS_URL + '/pipeline', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + REDIS_TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(commands),
  });
  if (!res.ok) throw new Error('redis ' + res.status);
  const out = await res.json();
  return out.map(r => { if (r.error) throw new Error(r.error); return r.result; });
}

function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers },
  });
}

function voterFrom(request) {
  const m = /(?:^|;\s*)sr_voter=([0-9a-f-]{36})(?:;|$)/.exec(request.headers.get('cookie') || '');
  return m ? m[1] : null;
}

// Hashed so raw IPs never land in the database. Keys expire within the hour.
function network(request) {
  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || request.headers.get('x-real-ip') || 'unknown';
  return createHash('sha256').update(ip + REDIS_TOKEN).digest('hex').slice(0, 16);
}

// Over the limit? Counts this request either way.
async function overLimit(key, limit, seconds) {
  const [, n] = await redis([['SET', key, '0', 'EX', String(seconds), 'NX'], ['INCR', key]]);
  return n > limit;
}

export async function GET(request) {
  if (!REDIS_URL || !REDIS_TOKEN) return json({ error: 'not configured' }, 503);
  try {
    let id = voterFrom(request);
    const headers = {};
    if (!id) {
      const hour = Math.floor(Date.now() / 3600e3);
      if (!(await overLimit(`sr:new:${network(request)}:${hour}`, NEW_IDS_PER_HOUR, 3600))) {
        id = randomUUID();
        headers['Set-Cookie'] = `${COOKIE}=${id}; Path=/api; Max-Age=${YEAR}; HttpOnly; Secure; SameSite=Strict`;
      }
    }
    const [flat, mine] = await redis([['HGETALL', COUNTS], id ? ['SMEMBERS', voterKey(id)] : ['ECHO', '']]);
    const counts = {};
    for (let i = 0; i < flat.length; i += 2) if (SLUGS.has(flat[i])) counts[flat[i]] = Math.max(0, Number(flat[i + 1]));
    return json({ counts, mine: id ? mine : [], canVote: !!id }, 200, headers);
  } catch (e) {
    console.error(e);
    return json({ error: 'unavailable' }, 502);
  }
}

export async function POST(request) {
  if (!REDIS_URL || !REDIS_TOKEN) return json({ error: 'not configured' }, 503);

  // Only accept clicks from our own pages, not forms or scripts on other sites.
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  const origin = request.headers.get('origin');
  let sameOrigin = false;
  try { sameOrigin = !!origin && new URL(origin).host === host; } catch {}
  if (!sameOrigin) return json({ error: 'forbidden' }, 403);

  const id = voterFrom(request);
  if (!id) return json({ error: 'no voter id' }, 403);

  let body;
  try { body = await request.json(); } catch { return json({ error: 'bad body' }, 400); }
  const { slug, on } = body || {};
  if (!SLUGS.has(slug) || typeof on !== 'boolean') return json({ error: 'bad request' }, 400);

  try {
    const minute = Math.floor(Date.now() / 60e3);
    if (await overLimit(`sr:rl:${network(request)}:${minute}`, TOGGLES_PER_MIN, 60)) return json({ error: 'slow down' }, 429);
    const [count] = await redis([['EVAL', TOGGLE, '2', voterKey(id), COUNTS, slug, on ? '1' : '0']]);
    return json({ slug, on, count: Math.max(0, count) });
  } catch (e) {
    console.error(e);
    return json({ error: 'unavailable' }, 502);
  }
}
