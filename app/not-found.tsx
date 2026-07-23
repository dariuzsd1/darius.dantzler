import Link from "next/link";
import { SectionTag } from "@/components/SectionTag";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <SectionTag label="404" />
      <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight">Page Not Found</h1>
      <p className="mt-3 text-ink/70">
        The page you're looking for doesn't exist, or it's been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block border border-ink bg-ink px-5 py-2 font-mono text-xs uppercase tracking-wide text-bone transition-opacity hover:opacity-90"
      >
        Back to Home
      </Link>
    </div>
  );
}
