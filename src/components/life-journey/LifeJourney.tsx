"use client";

import { useEffect, useRef, useState } from "react";
import { EraScene } from "@/components/life-journey/EraScene";
import type { LifeEra } from "@/lib/lifeEras";

export function LifeJourney({ eras }: { eras: LifeEra[] }) {
  const [activeId, setActiveId] = useState(eras[0]?.id);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = eras
      .map((era) => document.getElementById(era.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const OFFSET = 160; // debajo del header fijo + la barra de navegación por etapas

    // Scrollspy clásico por posición: la etapa activa es la última, en orden de
    // documento, cuyo encabezado ya cruzó la línea OFFSET. Más robusto que
    // IntersectionObserver con rootMargin asimétrico, que se queda "atascado"
    // en la última sección cuando esta es más corta que la franja observada.
    function updateActive() {
      let current = sections[0]?.id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top - OFFSET <= 0) current = section.id;
      }
      if (current) setActiveId(current);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [eras]);

  return (
    <div>
      <div
        ref={navRef}
        aria-label="Navegar por etapas de la vida de Cervantes"
        className="sticky top-[65px] z-30 overflow-x-auto border-b border-border-subtle bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      >
        <ul className="mx-auto flex max-w-6xl gap-1 px-4 py-2">
          {eras.map((era) => {
            const isActive = era.id === activeId;
            return (
              <li key={era.id} className="shrink-0">
                <a
                  href={`#${era.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`block whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                    isActive
                      ? "bg-accent text-accent-contrast"
                      : "text-foreground/60 hover:text-accent"
                  }`}
                >
                  {era.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {eras.map((era, index) => (
        <EraScene key={era.id} era={era} index={index} />
      ))}
    </div>
  );
}
