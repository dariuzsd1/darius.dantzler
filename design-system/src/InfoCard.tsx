import { Card } from "./Card";
import "./InfoCard.css";

export interface InfoCardProps {
  /** Small mono label above the value (e.g. "Native", "Active"). */
  label: string;
  /** The headline value (e.g. a language name, a credential level). */
  value: string;
  /** Optional supporting line under the value. */
  detail?: string;
}

/** A small labeled stat card: mono label, serif value, optional detail line. */
export function InfoCard({ label, value, detail }: InfoCardProps) {
  return (
    <Card padding="compact">
      <p className="dds-info-card__label">{label}</p>
      <p className="dds-info-card__value">{value}</p>
      {detail && <p className="dds-info-card__detail">{detail}</p>}
    </Card>
  );
}
