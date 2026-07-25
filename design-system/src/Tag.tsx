import type { ReactNode } from "react";
import "./Tag.css";

export interface TagProps {
  /** Label text (usually short and uppercase, e.g. a section name or status). */
  children: ReactNode;
  /** `accent` is a filled yellow badge (section/exhibit-style labels); `outline` is a quieter bordered pill (list tags, status chips). */
  variant?: "accent" | "outline";
}

/** A small mono-uppercase label pill, used for section tags, status chips, and stack/skill tags. */
export function Tag({ children, variant = "accent" }: TagProps) {
  return <span className={`dds-tag dds-tag--${variant}`}>{children}</span>;
}
