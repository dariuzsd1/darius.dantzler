import { Footer } from "darius-dantzler-design-system";

export function WithClosingLine() {
  return (
    <Footer
      metaLine="© 2026 Darius Dantzler · Last updated July 2026"
      closingLine="Thanks for reading. My inbox is always open."
    />
  );
}

export function MetaOnly() {
  return <Footer metaLine="© 2026 Darius Dantzler" />;
}
