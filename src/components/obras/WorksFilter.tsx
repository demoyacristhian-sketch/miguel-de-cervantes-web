"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { Reveal } from "@/components/ui/Reveal";
import { WORK_COVERS } from "@/lib/workCovers";
import type { Work } from "@/types/content";

const FILTERS = ["Todas", "novela", "novela corta", "teatro", "poesía"] as const;
const FILTER_LABELS: Record<(typeof FILTERS)[number], string> = {
  Todas: "Todas",
  novela: "Novela",
  "novela corta": "Novela corta",
  teatro: "Teatro",
  poesía: "Poesía",
};

export function WorksFilter({ works }: { works: Work[] }) {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("Todas");

  const filtered = useMemo(
    () => (active === "Todas" ? works : works.filter((work) => work.type === active)),
    [active, works],
  );

  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo de obra">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-current={active === filter ? "true" : undefined}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active === filter
                ? "border-accent bg-accent text-accent-contrast"
                : "border-border-subtle text-foreground/70 hover:border-accent hover:text-accent"
            }`}
          >
            {FILTER_LABELS[filter]}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((work, index) => {
          const cover = WORK_COVERS[work.slug];
          return (
            <Reveal key={work.id} delay={index * 60}>
              <li className="group h-full overflow-hidden rounded-xl border border-border-subtle bg-surface transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <Link href={`/obras/${work.slug}`}>
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink/5">
                    {cover ? (
                      <Image
                        src={cover.src}
                        alt={cover.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-foreground/40">
                        Sin portada verificada
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-wide text-foreground/50">{work.type}</p>
                    <h2 className="mt-2 font-serif-display text-xl font-semibold group-hover:text-accent">
                      {work.title}
                    </h2>
                    {work.publicationYear && (
                      <p className="mt-1 text-sm text-foreground/60">{work.publicationYear}</p>
                    )}
                    <div className="mt-4">
                      <VerificationBadge status={work.status} />
                    </div>
                  </div>
                </Link>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
