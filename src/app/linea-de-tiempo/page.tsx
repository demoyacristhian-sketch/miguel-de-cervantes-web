import type { Metadata } from "next";
import { getTimelineEvents } from "@/lib/content";
import { VerificationBadge } from "@/components/ui/VerificationBadge";

export const metadata: Metadata = {
  title: "Línea de tiempo",
  description: "Una vida en movimiento: la línea de tiempo de Miguel de Cervantes y su contexto histórico.",
};

export default function TimelinePage() {
  const events = getTimelineEvents();
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">
        Una vida en movimiento
      </p>
      <h1 className="mt-3 font-serif-display text-4xl font-semibold sm:text-5xl">Línea de tiempo</h1>
      <p className="mt-6 max-w-2xl text-foreground/70">
        Los años ancla de esta línea de tiempo están definidos; los acontecimientos asociados a cada año
        deben verificarse documentalmente antes de publicarse (ver <code>/docs/SOURCES.md</code>). En Fase 3
        se añadirá el nivel de contexto histórico general junto al biográfico.
      </p>
      <ol className="relative mt-12 space-y-8 border-l border-border-subtle pl-8">
        {events.map((event) => (
          <li key={event.id} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="font-serif-display text-2xl font-semibold text-accent">{event.year}</p>
            <p className="mt-1 font-serif-display text-lg">{event.title}</p>
            <p className="mt-2 max-w-xl text-sm text-foreground/60">{event.description}</p>
            <div className="mt-3">
              <VerificationBadge status={event.status} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
