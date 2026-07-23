"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-ink/15">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-4">
        <Link href="/" className="shrink-0 font-serif text-lg font-semibold tracking-tight">
          Darius Dantzler
        </Link>

        <nav
          aria-label="Main"
          className="flex flex-1 items-center gap-4 overflow-x-auto whitespace-nowrap sm:gap-6"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href} active={pathname === item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`shrink-0 border-b-2 py-1 font-mono text-xs uppercase tracking-wide transition-colors ${
        active ? "border-accent text-ink" : "border-transparent text-ink/60 hover:text-ink"
      }`}
    >
      {children}
    </Link>
  );
}
