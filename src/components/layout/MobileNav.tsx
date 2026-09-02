"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface NavItem {
  href: string;
  label: string;
}

/** Menú móvil: se cierra al tocar fuera o al elegir un enlace, algo que el <details> nativo no
 * hace por sí solo. Misma apariencia que antes, controlado con estado en vez de open/close nativo. */
export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  return (
    <div ref={containerRef} className="relative lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="cursor-pointer rounded border border-border-subtle px-3 py-1.5 text-sm"
      >
        Menú
      </button>
      {open && (
        <nav
          aria-label="Navegación principal"
          className="absolute right-0 top-full mt-2 w-64 rounded-lg border border-border-subtle bg-background p-4 shadow-lg"
        >
          <ul className="flex flex-col gap-3 text-sm">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
