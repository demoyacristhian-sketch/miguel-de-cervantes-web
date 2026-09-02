"use client";

import { useEffect, useState } from "react";

interface StoryStep {
  id: string;
  label: string;
}

/** Rail vertical de puntos, solo desktop — mismo patrón de scrollspy por posición ya probado en
 * src/components/life-journey/LifeJourney.tsx. */
export function StoryProgressNav({ steps }: { steps: StoryStep[] }) {
  const [activeId, setActiveId] = useState(steps[0]?.id);

  useEffect(() => {
    const sections = steps
      .map((step) => document.getElementById(step.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const OFFSET = 0.5;

    function updateActive() {
      let current = sections[0]?.id;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * OFFSET) current = section.id;
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
  }, [steps]);

  return (
    <nav
      aria-label="Navegar por la historia"
      className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex"
    >
      {steps.map((step) => {
        const isActive = step.id === activeId;
        return (
          <a
            key={step.id}
            href={`#${step.id}`}
            className="group flex items-center gap-3"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`whitespace-nowrap font-serif-display text-xs uppercase tracking-wide transition-opacity ${
                isActive ? "opacity-100 text-ivory" : "opacity-0 text-ivory/70 group-hover:opacity-100"
              }`}
            >
              {step.label}
            </span>
            <span
              className={`h-2.5 w-2.5 shrink-0 rounded-full border border-ivory/60 transition-colors ${
                isActive ? "bg-detail" : "bg-transparent group-hover:bg-ivory/40"
              }`}
              aria-hidden="true"
            />
          </a>
        );
      })}
    </nav>
  );
}
