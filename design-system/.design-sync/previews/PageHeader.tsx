import { PageHeader } from "darius-dantzler-design-system";

export function WithDek() {
  return (
    <PageHeader
      tag="Experience"
      title="Professional Experience"
      dek="Time served across three USEUCOM directorates, a Chiefs of Mission planning role, and the jobs before all of it."
    />
  );
}

export function TitleOnly() {
  return <PageHeader tag="Contact" title="Get in Touch" />;
}
