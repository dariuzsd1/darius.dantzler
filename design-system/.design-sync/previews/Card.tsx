import { Card, Tag } from "darius-dantzler-design-system";

export function Default() {
  return (
    <Card>
      <Tag variant="outline">Team Project</Tag>
      <h3 style={{ marginTop: 12, fontFamily: "var(--dds-font-serif)", fontSize: 22, fontWeight: 600 }}>
        European Space Hub
      </h3>
      <p style={{ marginTop: 8, color: "rgba(20,20,20,0.7)" }}>
        A European space and aviation innovation platform connecting universities, accelerators, and
        industry.
      </p>
    </Card>
  );
}

export function Compact() {
  return (
    <Card padding="compact">
      <p style={{ fontFamily: "var(--dds-font-mono)", fontSize: 12, textTransform: "uppercase" }}>
        Status
      </p>
      <p style={{ marginTop: 4, fontFamily: "var(--dds-font-serif)", fontSize: 20, fontWeight: 600 }}>
        Active
      </p>
    </Card>
  );
}
