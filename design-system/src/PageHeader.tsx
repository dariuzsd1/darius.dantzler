import { Tag } from "./Tag";
import "./PageHeader.css";

export interface PageHeaderProps {
  /** Small mono tag shown above the title (section name, exhibit label, status). */
  tag: string;
  /** Large serif page title. */
  title: string;
  /** Optional supporting sentence under the title. */
  dek?: string;
}

/** The header used at the top of every page: a tag, a large serif title, an optional dek, and a full-width rule line. */
export function PageHeader({ tag, title, dek }: PageHeaderProps) {
  return (
    <header className="dds-page-header">
      <Tag>{tag}</Tag>
      <h1 className="dds-page-header__title">{title}</h1>
      {dek && <p className="dds-page-header__dek">{dek}</p>}
      <div className="dds-page-header__rule" />
    </header>
  );
}
