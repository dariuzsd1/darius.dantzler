/* site-chrome.js — single source for the pill header + footer across the portfolio.
   Load it as the LAST script on any page, AFTER i18n.js:
     <script src="i18n.js"></script>
     <script src="site-chrome.js"></script>
   It injects its own CSS, replaces an existing .pillbar / <footer> (or a
   #site-header / #site-footer mount, or falls back to prepend/append), marks the
   current page's nav link active, drives the language switcher through window.ddsI18n,
   and re-renders on language change. Edit nav items / footer / styling HERE. */
(function () {
  if (window.__ddsChrome) return; window.__ddsChrome = true;

  var GITHUB = "https://github.com/dariuzsd1";
  var LINKEDIN = "https://www.linkedin.com/in/darius-dantzler";

  var NAV = [
    { label: "Home", href: "index.html", group: "home" },
    { label: "Experience", href: "Experience.html", group: "experience" },
    { label: "Education", href: "Education.html", group: "education" },
    { label: "Projects", href: "Projects.html", group: "projects" },
    { label: "Personal", href: "Personal.html", group: "personal" },
    { label: "Contact", href: "Contact.html", group: "contact" }
  ];
  var GROUPS = {
    "index.html": "home", "": "home",
    "experience.html": "experience",
    "education.html": "education", "education-gallery.html": "education",
    "projects.html": "projects", "project.html": "projects",
    "personal.html": "personal", "chronology.html": "personal",
    "personal effects.html": "personal", "music room.html": "personal",
    "screening room.html": "personal", "quotes.html": "personal",
    "contact.html": "contact"
  };

  var GH_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.7.5.5 5.7.5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.2.8-.5v-1.8c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 5 18.3 5.3 18.3 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5Z"/></svg>';
  var LI_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>';
  var GLOBE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z"/></svg>';
  var TICK = '<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>';
  var LANGS = [["English", "EN", "en"], ["Deutsch", "DE", "de"], ["Français", "FR", "fr"], ["Español", "ES", "es"]];

  function T(key, def) { return (window.ddsI18n && window.ddsI18n.t(key)) || def; }
  function curLang() { return (window.ddsI18n && window.ddsI18n.lang) || "en"; }

  var CSS = ''
    + '.pillbar{position:fixed;top:18px;left:0;right:0;z-index:50;display:flex;justify-content:center;padding:0 20px;pointer-events:none}'
    + '.pill{pointer-events:auto;width:100%;max-width:1120px;display:flex;align-items:center;gap:22px;padding:11px 14px 11px 24px;border-radius:999px;border:1px solid rgba(20,20,20,.12);background:rgba(248,246,240,.82);backdrop-filter:saturate(140%) blur(14px);-webkit-backdrop-filter:saturate(140%) blur(14px);box-shadow:0 1px 1px rgba(20,20,20,.03),0 8px 26px rgba(20,20,20,.09)}'
    + '.pill .brand{font-family:var(--dds-font-serif);font-weight:600;font-size:1.02rem;letter-spacing:-.01em;white-space:nowrap;padding-right:4px}'
    + '.pill .navlinks{display:flex;align-items:center;gap:20px;margin-left:auto}'
    + '.pill .navlink{font-family:var(--dds-font-mono);font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;color:rgba(20,20,20,.6);border-bottom:2px solid transparent;padding:2px 0;transition:color .15s,border-color .15s;white-space:nowrap;cursor:pointer}'
    + '.pill .navlink:hover{color:var(--dds-color-ink)}'
    + '.pill .navlink:focus-visible{outline:2px solid var(--dds-color-accent);outline-offset:3px}'
    + '.pill .navlink.active{color:var(--dds-color-ink);border-bottom-color:var(--dds-color-accent)}'
    + '.pill .pill-tools{display:flex;align-items:center;gap:6px;padding-left:14px;margin-left:2px;border-left:1px solid rgba(20,20,20,.12)}'
    + '.pill .icobtn{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:999px;border:1px solid transparent;color:rgba(20,20,20,.7);background:transparent;cursor:pointer;transition:background .15s,color .15s}'
    + '.pill .icobtn:hover{background:rgba(20,20,20,.06);color:var(--dds-color-ink)}'
    + '.pill .icobtn:focus-visible{outline:2px solid var(--dds-color-accent);outline-offset:2px}'
    + '.pill .icobtn svg{width:18px;height:18px;display:block}'
    + '.pill .lang{position:relative}'
    + '.pill .lang-menu{position:absolute;top:calc(100% + 12px);right:0;min-width:172px;background:var(--dds-color-bone);border:1px solid rgba(20,20,20,.14);border-radius:14px;box-shadow:0 10px 30px rgba(20,20,20,.14);padding:6px;opacity:0;visibility:hidden;transform:translateY(-6px);transition:opacity .16s,transform .16s,visibility .16s}'
    + '.pill .lang.open .lang-menu{opacity:1;visibility:visible;transform:translateY(0)}'
    + '.pill .lang-head{font-family:var(--dds-font-mono);font-size:.62rem;text-transform:uppercase;letter-spacing:.08em;color:rgba(20,20,20,.45);padding:8px 10px 6px}'
    + '.pill .lang-item{display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;text-align:left;background:transparent;border:0;cursor:pointer;padding:9px 10px;border-radius:9px;font-family:var(--dds-font-sans);font-size:.9rem;color:var(--dds-color-ink);transition:background .12s}'
    + '.pill .lang-item:hover{background:rgba(20,20,20,.06)}'
    + '.pill .lang-item:focus-visible{outline:2px solid var(--dds-color-accent);outline-offset:-2px}'
    + '.pill .lang-item .code{font-family:var(--dds-font-mono);font-size:.66rem;color:rgba(20,20,20,.5)}'
    + '.pill .lang-item[aria-checked="true"] .code{color:var(--dds-color-ink)}'
    + '.pill .lang-item .tick{width:14px;height:14px;color:var(--dds-color-accent);opacity:0}'
    + '.pill .lang-item[aria-checked="true"] .tick{opacity:1}'
    + '.site-foot{position:relative;z-index:1;border-top:1px solid rgba(20,20,20,.15);background:var(--dds-color-bone);margin-top:64px}'
    + '.site-foot-inner{max-width:1120px;margin:0 auto;padding:40px 24px 20px;display:flex;flex-wrap:wrap;gap:28px;align-items:flex-start;justify-content:space-between}'
    + '.sf-brand .sf-name{font-family:var(--dds-font-serif);font-weight:600;font-size:1.2rem;letter-spacing:-.01em}'
    + '.sf-brand .sf-tag{margin-top:6px;font-family:var(--dds-font-mono);font-size:.68rem;text-transform:uppercase;letter-spacing:.06em;color:rgba(20,20,20,.55)}'
    + '.sf-col{display:flex;flex-direction:column;gap:12px}'
    + '.sf-col .sf-h{font-family:var(--dds-font-mono);font-size:.6rem;text-transform:uppercase;letter-spacing:.09em;color:rgba(20,20,20,.4)}'
    + '.sf-links{display:flex;flex-direction:column;gap:9px}'
    + '.sf-links a{font-family:var(--dds-font-mono);font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;color:rgba(20,20,20,.62);border-bottom:1px solid transparent;transition:color .15s,border-color .15s;width:fit-content}'
    + '.sf-links a:hover{color:var(--dds-color-ink);border-bottom-color:var(--dds-color-accent)}'
    + '.sf-social{display:flex;gap:10px}'
    + '.sf-social a{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:999px;border:1px solid rgba(20,20,20,.16);color:rgba(20,20,20,.7);transition:background .15s,color .15s,border-color .15s}'
    + '.sf-social a:hover{background:var(--dds-color-ink);color:var(--dds-color-bone);border-color:var(--dds-color-ink)}'
    + '.sf-social a:focus-visible{outline:2px solid var(--dds-color-accent);outline-offset:2px}'
    + '.sf-social svg{width:18px;height:18px;display:block}'
    + '.site-foot-meta{max-width:1120px;margin:0 auto;padding:14px 24px 46px;font-family:var(--dds-font-mono);font-size:.66rem;text-transform:uppercase;letter-spacing:.06em;color:rgba(20,20,20,.42);border-top:1px solid rgba(20,20,20,.08);display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px}'
    + '@media(max-width:860px){.pill .navlinks{display:none}}'
    + '@media(max-width:620px){.site-foot-inner{flex-direction:column;gap:24px}}';

  function currentGroup() {
    var p = decodeURIComponent((location.pathname.split("/").pop() || "index.html")).toLowerCase();
    return GROUPS[p] || "";
  }

  function headerHTML() {
    var g = currentGroup(), cur = curLang();
    var links = NAV.map(function (n) {
      return '<a class="navlink' + (n.group === g ? " active" : "") + '" href="' + n.href + '"'
        + (n.group === g ? ' aria-current="page"' : "") + ' data-i18n="nav.' + n.group + '">' + T("nav." + n.group, n.label) + "</a>";
    }).join("");
    var langItems = LANGS.map(function (l) {
      return '<button class="lang-item" role="menuitemradio" aria-checked="' + (l[2] === cur ? "true" : "false")
        + '" data-lang="' + l[2] + '"><span>' + l[0] + '</span><span class="code">' + l[1] + "</span>" + TICK + "</button>";
    }).join("");
    return '<div class="pillbar"><nav class="pill" aria-label="Main">'
      + '<a class="brand" href="index.html">Darius Dantzler</a>'
      + '<div class="navlinks">' + links + "</div>"
      + '<div class="pill-tools">'
      + '<a class="icobtn" href="' + GITHUB + '" target="_blank" rel="noopener" aria-label="GitHub">' + GH_SVG + "</a>"
      + '<div class="lang"><button class="icobtn" data-lang-btn aria-label="Language" aria-haspopup="true" aria-expanded="false">' + GLOBE_SVG + "</button>"
      + '<div class="lang-menu" role="menu" aria-label="Language"><div class="lang-head">Language</div>' + langItems + "</div></div>"
      + "</div></nav></div>";
  }

  function footerHTML() {
    var quick = ["index.html", "Projects.html", "Personal.html", "Contact.html"];
    var grp = { "index.html": "home", "Projects.html": "projects", "Personal.html": "personal", "Contact.html": "contact" };
    var links = quick.map(function (h) { return '<a href="' + h + '" data-i18n="nav.' + grp[h] + '">' + T("nav." + grp[h], h) + "</a>"; }).join("");
    var year = new Date().getFullYear();
    var tag = T("tagline", "Space Security, Sustainability & Policy");
    return '<footer class="site-foot"><div class="site-foot-inner">'
      + '<div class="sf-brand"><div class="sf-name">Darius Dantzler</div><div class="sf-tag" data-i18n="tagline">' + tag + '</div></div>'
      + '<div class="sf-col"><div class="sf-h" data-i18n="footer.explore">' + T("footer.explore", "Explore") + '</div><nav class="sf-links">' + links + "</nav></div>"
      + '<div class="sf-col"><div class="sf-h" data-i18n="footer.elsewhere">' + T("footer.elsewhere", "Elsewhere") + '</div><div class="sf-social">'
      + '<a href="' + GITHUB + '" target="_blank" rel="noopener" aria-label="GitHub">' + GH_SVG + "</a>"
      + '<a href="' + LINKEDIN + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + LI_SVG + "</a>"
      + "</div></div></div>"
      + '<div class="site-foot-meta"><span>&copy; ' + year + ' Darius Dantzler</span><span data-i18n="tagline">' + tag + '</span></div></footer>';
  }

  function mount(html, mountId, replaceSelector, mode) {
    var wrap = document.createElement("div"); wrap.innerHTML = html; var node = wrap.firstChild;
    var target = document.getElementById(mountId);
    if (target) { target.replaceWith(node); return node; }
    var existing = document.querySelector(replaceSelector);
    if (existing) { existing.replaceWith(node); return node; }
    if (mode === "prepend") document.body.insertBefore(node, document.body.firstChild);
    else document.body.appendChild(node);
    return node;
  }

  function wireLang(header) {
    var lang = header.querySelector(".lang");
    var btn = header.querySelector("[data-lang-btn]");
    if (!lang || !btn) return;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = lang.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    header.querySelectorAll(".lang-item").forEach(function (it) {
      it.addEventListener("click", function (e) {
        e.stopPropagation();
        var code = it.getAttribute("data-lang");
        lang.classList.remove("open"); btn.setAttribute("aria-expanded", "false");
        if (window.ddsI18n) window.ddsI18n.setLang(code);
      });
    });
  }

  function render() {
    var header = mount(headerHTML(), "site-header", ".pillbar", "prepend");
    mount(footerHTML(), "site-footer", "footer", "append");
    wireLang(header);
  }

  function init() {
    if (!document.getElementById("dds-chrome-css")) {
      var st = document.createElement("style"); st.id = "dds-chrome-css"; st.textContent = CSS;
      document.head.appendChild(st);
    }
    render();
    // one global outside-click closes an open language menu
    document.addEventListener("click", function () {
      var l = document.querySelector(".pill .lang.open");
      if (l) { l.classList.remove("open"); var b = l.querySelector("[data-lang-btn]"); if (b) b.setAttribute("aria-expanded", "false"); }
    });
    // re-render header/footer when the language changes
    window.addEventListener("ddslangchange", render);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
