import { InfoCard } from "darius-dantzler-design-system";

export function WithDetail() {
  return <InfoCard label="Delivered" value="Team VERA" detail="ISU Team Sprint" />;
}

export function ValueOnly() {
  return <InfoCard label="Native" value="English" />;
}
