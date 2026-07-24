export function InstitutionBadge({
  logoUrl,
  alt,
  wide = false,
}: {
  logoUrl?: string;
  alt: string;
  wide?: boolean;
}) {
  if (!logoUrl) return null;

  const shape = wide ? "h-12 w-24 rounded-lg" : "h-14 w-14 rounded-full";

  return (
    <div className={`relative shrink-0 overflow-hidden border border-ink/15 bg-bone ${shape}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoUrl} alt={alt} className="h-full w-full object-contain p-1" />
    </div>
  );
}
