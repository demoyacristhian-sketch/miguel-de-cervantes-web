import Link from "next/link";
import { MobileNav } from "@/components/layout/MobileNav";

const NAV_ITEMS = [
  { href: "/vida-en-movimiento", label: "Una vida, una historia" },
  { href: "/obras", label: "Obras" },
  { href: "/quijote", label: "Don Quijote" },
  { href: "/legado", label: "Legado" },
  { href: "/biblioteca", label: "Biblioteca" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="font-serif-display text-lg font-semibold tracking-tight"
        >
          Miguel de Cervantes
        </Link>
        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground/80 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNav items={NAV_ITEMS} />
      </div>
    </header>
  );
}
