import Link from "next/link";
import { getTimelineHighlights } from "@/lib/content";
import { VerificationBadge } from "@/components/ui/VerificationBadge";

export function TimelinePreview() {
  const events = getTimelineHighlights();
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">
            Una vida en movimiento
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold sm:text-4xl">Línea de tiempo</h2>
        </div>
        <Link href="/linea-de-tiempo" className="text-sm font-medium text-accent hover:underline">
          Ver línea de tiempo completa →
        </Link>
      </div>
      <ol className="mt-10 grid gap-4 sm:grid-cols-3">
        {events.map((event) => (
          <li key={event.id} className="rounded-xl border border-border-subtle bg-surface p-5">
            <p className="font-serif-display text-2xl font-semibold text-accent">{event.year}</p>
            <p className="mt-2 text-sm text-foreground/70">{event.title}</p>
            <div className="mt-3">
              <VerificationBadge status={event.status} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
