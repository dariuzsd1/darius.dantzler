import { siteMeta } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink/15">
      <div className="mx-auto max-w-5xl px-6 py-8 font-mono text-xs text-ink/60">
        <p>
          © {new Date().getFullYear()} {siteMeta.name} — Last updated {siteMeta.lastUpdated}
        </p>
        <p className="mt-2 text-ink/80">Thanks for reading — my inbox is always open.</p>
      </div>
    </footer>
  );
}
