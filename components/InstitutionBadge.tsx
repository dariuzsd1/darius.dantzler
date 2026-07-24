import type { FlagCountry } from "@/types/content";

const FLAGS: Record<FlagCountry, React.ReactNode> = {
  FR: (
    <svg viewBox="0 0 3 2" preserveAspectRatio="none" className="h-full w-full">
      <rect width="1" height="2" x="0" fill="#002395" />
      <rect width="1" height="2" x="1" fill="#ffffff" />
      <rect width="1" height="2" x="2" fill="#ed2939" />
    </svg>
  ),
  US: (
    <svg viewBox="0 0 30 20" preserveAspectRatio="none" className="h-full w-full">
      <rect width="30" height="20" fill="#b31942" />
      {[1, 3, 5, 7, 9, 11].map((y) => (
        <rect key={y} width="30" height="1.54" y={y * 1.54} fill="#ffffff" />
      ))}
      <rect width="12" height="10.8" fill="#0a3161" />
    </svg>
  ),
  RU: (
    <svg viewBox="0 0 3 2" preserveAspectRatio="none" className="h-full w-full">
      <rect width="3" height="0.667" y="0" fill="#ffffff" />
      <rect width="3" height="0.667" y="0.667" fill="#0039a6" />
      <rect width="3" height="0.667" y="1.333" fill="#d52b1e" />
    </svg>
  ),
};

export function InstitutionBadge({
  logoUrl,
  flagCountry,
  alt,
  wide = false,
}: {
  logoUrl?: string;
  flagCountry?: FlagCountry;
  alt: string;
  wide?: boolean;
}) {
  // Nothing to show without at least a logo or a flag.
  if (!logoUrl && !flagCountry) return null;

  const outerShape = wide ? "h-12 w-24 rounded-lg" : "h-14 w-14 rounded-full";
  const innerShape = wide ? "inset-1 rounded-md" : "inset-1.5 rounded-full";

  return (
    <div className={`group relative shrink-0 overflow-hidden border border-ink/15 bg-bone ${outerShape}`}>
      {flagCountry && (
        <div
          className={`flag-wave absolute inset-0 transition-opacity duration-300 ${
            // Logo present: flag hides until hover. Flag-only: always visible.
            logoUrl ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          {FLAGS[flagCountry]}
        </div>
      )}
      {logoUrl && (
        <div className={`absolute overflow-hidden bg-bone ${innerShape}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoUrl} alt={alt} className="h-full w-full object-contain p-1" />
        </div>
      )}
    </div>
  );
}
