import type { FlagCountry } from "@/types/content";

export const FLAGS: Record<FlagCountry, React.ReactNode> = {
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

/**
 * Full-bleed flag that sits behind a card's content and waves in on hover.
 * The parent must be `group relative overflow-hidden`; content should sit in
 * a sibling with `relative` so it paints above this layer.
 */
export function FlagBackdrop({ country }: { country: FlagCountry }) {
  return (
    <div aria-hidden="true" className="flag-wave pointer-events-none absolute inset-0">
      {FLAGS[country]}
    </div>
  );
}
