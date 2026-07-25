# Notes for future syncs

## Gotchas from this build

- **Google Fonts CSS2 API, combined weight queries**: requesting multiple weights in one query (`family=Inter:wght@400;500`) returned identical woff2 URLs for both weights in the "latin" subset block, a real bug in what was returned, not a typo on this end. Fetch each weight as a **separate** query if re-pulling fonts, and diff the resulting file bytes/md5 to confirm they're actually distinct before trusting them.
- **`Textarea` and `TextInput` needed `cfg.overrides.<Name>: {"cardMode": "column"}`** to fix `[GRID_OVERFLOW]` — full-width form fields don't fit the default grid cell. Already applied in `config.json`.
- **tsup output filenames**: with `"type": "module"` in `package.json`, tsup emits `dist/index.js` (ESM) and `dist/index.cjs` (CJS), not `index.mjs`. `package.json`'s `exports`/`main`/`module` fields must match those exact names, and `--entry ./dist/index.js` (not `.mjs`) is what the converter needs.
- **Duplicate font files in `ds-bundle/fonts/`** (hashed dist copies + unhashed src copies from `extraFonts`) are harmless — `_ds_bundle.css` only references the hashed ones. Not worth cleaning up further.

## Known render warns

None. All 9 components pass clean: zero `bad`, zero `thin`, zero `blank`, zero `variantsIdentical`.

## Re-sync risks

- **This package's component source (`design-system/src/*.tsx`) is hand-authored, not auto-extracted from the live site.** If the actual portfolio site's components (in the main repo's `components/*.tsx`) change visually, this design-system package will NOT pick that up on its own. Keeping the two in sync is a manual, deliberate step, review the site's components against `design-system/src/` before re-syncing if it's been a while.
- **Fonts are self-hosted copies** fetched once from Google Fonts (built July 2026), saved locally under `design-system/src/fonts/`. If the site's font weights or families ever change, these need to be re-fetched manually, they will not update on their own.
- **All 9 previews use realistic but static example content** (project names, nav items, copy) drawn from the live site as of this sync. If site content changes meaningfully (a project renamed, nav items added), the previews will read as stale, not wrong, just dated, worth a look on the next re-sync.
