import "./Tabs.css";

export interface TabItem {
  label: string;
  href: string;
  /** Marks this tab as the current page. */
  active?: boolean;
}

export interface TabsProps {
  /** The tabs to render, in order. */
  items: TabItem[];
  /** Accessible label for the nav landmark. */
  ariaLabel?: string;
}

/** A horizontal row of underline tabs (site navigation), scrolling instead of wrapping when it doesn't fit. */
export function Tabs({ items, ariaLabel = "Main" }: TabsProps) {
  return (
    <nav aria-label={ariaLabel} className="dds-tabs">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-current={item.active ? "page" : undefined}
          className={`dds-tabs__item ${item.active ? "dds-tabs__item--active" : ""}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
