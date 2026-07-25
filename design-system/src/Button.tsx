import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

interface SharedProps {
  /** Button label. */
  children: ReactNode;
  /** `solid` is the primary CTA (filled ink); `outline` is secondary. */
  variant?: "solid" | "outline";
}

export type ButtonProps = SharedProps &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  );

/** A CTA button (or link, when given an `href`) in the site's solid/outline styles. */
export function Button({ children, variant = "solid", href, ...rest }: ButtonProps) {
  const className = `dds-button dds-button--${variant}`;
  if (href !== undefined) {
    return (
      <a className={className} href={href} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={className} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
