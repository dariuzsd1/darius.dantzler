import { Tabs } from "darius-dantzler-design-system";

const items = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience", active: true },
  { label: "Education", href: "/education" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  return <Tabs items={items} />;
}

export function NoneActive() {
  return <Tabs items={items.map((i) => ({ ...i, active: false }))} />;
}
