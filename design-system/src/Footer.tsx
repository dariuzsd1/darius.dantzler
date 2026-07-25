import "./Footer.css";

export interface FooterProps {
  /** The small meta line, e.g. "© 2026 Jane Doe · Last updated July 2026". */
  metaLine: string;
  /** A short closing line under the meta line. */
  closingLine?: string;
}

/** The site's footer: a mono meta line and an optional closing line, above a top rule. */
export function Footer({ metaLine, closingLine }: FooterProps) {
  return (
    <footer className="dds-footer">
      <div className="dds-footer__inner">
        <p>{metaLine}</p>
        {closingLine && <p className="dds-footer__closing">{closingLine}</p>}
      </div>
    </footer>
  );
}
