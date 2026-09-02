import Link from "next/link";

const NAV_ITEMS = [
  { href: "/vida-en-movimiento", label: "Una vida en movimiento" },
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
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded border border-border-subtle px-3 py-1.5 text-sm">
            Menú
          </summary>
          <nav
            aria-label="Navegación principal"
            className="absolute right-0 top-full mt-2 w-64 rounded-lg border border-border-subtle bg-background p-4 shadow-lg"
          >
            <ul className="flex flex-col gap-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
