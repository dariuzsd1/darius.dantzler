import type { ReactNode } from "react";
import "./Card.css";

export interface CardProps {
  /** Card contents. */
  children: ReactNode;
  /** `default` is the standard entry/project card padding; `compact` is tighter, for smaller stat-style cards. */
  padding?: "default" | "compact";
}

/** The site's rounded, bordered card shell, the shared container behind entry, project, and info cards. */
export function Card({ children, padding = "default" }: CardProps) {
  return <div className={`dds-card dds-card--${padding}`}>{children}</div>;
}
