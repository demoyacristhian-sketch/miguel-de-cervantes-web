import type { Metadata } from "next";
import Link from "next/link";
import { getWorks } from "@/lib/content";
import { VerificationBadge } from "@/components/ui/VerificationBadge";

export const metadata: Metadata = {
  title: "Obras",
  description: "Biblioteca visual de las obras de Miguel de Cervantes: novela, novela corta, teatro y poesía.",
};

const FILTERS = ["Todas", "Novela", "Novela corta", "Teatro", "Poesía"] as const;

export default function WorksPage() {
  const works = getWorks();
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">
        Biblioteca visual
      </p>
      <h1 className="mt-3 font-serif-display text-4xl font-semibold sm:text-5xl">Obras</h1>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo de obra">
        {FILTERS.map((filter, i) => (
          <span
            key={filter}
            aria-current={i === 0 ? "true" : undefined}
            className={`rounded-full border px-4 py-1.5 text-sm ${
              i === 0
                ? "border-accent bg-accent text-accent-contrast"
                : "border-border-subtle text-foreground/70"
            }`}
          >
            {filter}
          </span>
        ))}
      </div>
      <p className="mt-2 text-xs text-foreground/50">
        Filtrado interactivo pendiente de implementación (componente cliente) — se añade junto con más
        obras en Fase 2.
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <li key={work.id} className="rounded-xl border border-border-subtle bg-surface p-6">
            <p className="text-xs uppercase tracking-wide text-foreground/50">{work.type}</p>
            <Link href={`/obras/${work.slug}`}>
              <h2 className="mt-2 font-serif-display text-xl font-semibold hover:text-accent">
                {work.title}
              </h2>
            </Link>
            {work.publicationYear && (
              <p className="mt-1 text-sm text-foreground/60">{work.publicationYear}</p>
            )}
            <div className="mt-4">
              <VerificationBadge status={work.status} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
