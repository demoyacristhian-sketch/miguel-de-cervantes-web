"use client";

import { useRef } from "react";
import { EventCard } from "@/components/life-journey/EventCard";
import type { TimelineEvent } from "@/types/content";

/**
 * Carril horizontal con scroll-snap nativo: funciona igual con swipe táctil,
 * trackpad o los botones prev/next — no necesita una versión distinta para
 * móvil (ver docs/DECISIONS.md, ADR de "Una vida en movimiento").
 */
export function EventRail({ events, dark }: { events: TimelineEvent[]; dark: boolean }) {
  const railRef = useRef<HTMLUListElement>(null);

  function scrollByCard(direction: 1 | -1) {
    railRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  }

  const buttonClass = dark
    ? "border-ivory/30 text-ivory hover:border-ivory/60"
    : "border-ink/15 text-ink hover:border-burgundy";

  return (
    <div className="relative">
      <ul
        ref={railRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {events.map((event) => (
          <EventCard key={event.id} event={event} dark={dark} />
        ))}
      </ul>
      {events.length > 1 && (
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Evento anterior de esta etapa"
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${buttonClass}`}
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Siguiente evento de esta etapa"
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${buttonClass}`}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
