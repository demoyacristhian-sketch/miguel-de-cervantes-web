"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import type { QuijoteCategory, QuijoteEntry } from "@/types/content";

const TABS: { id: QuijoteCategory; label: string }[] = [
  { id: "personaje", label: "Personajes" },
  { id: "lugar", label: "Lugares" },
  { id: "aventura", label: "Aventuras" },
  { id: "tema", label: "Temas" },
  { id: "frase", label: "Frases" },
];

export function QuijoteTabs({ entries }: { entries: QuijoteEntry[] }) {
  const [active, setActive] = useState<QuijoteCategory>("personaje");
  const items = entries.filter((entry) => entry.category === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Categorías del universo del Quijote"
        className="flex flex-wrap gap-2 border-b border-border-subtle pb-4"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active === tab.id
                ? "border-accent bg-accent text-accent-contrast"
                : "border-border-subtle text-foreground/70 hover:border-accent hover:text-accent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {active === "frase" ? (
        <ul className="mt-8 space-y-6">
          {items.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 80}>
              <li className="rounded-xl border-l-4 border-accent bg-surface p-6">
                <blockquote className="font-serif-display text-xl italic leading-relaxed text-foreground">
                  {entry.text}
                </blockquote>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <p className="text-sm text-foreground/60">
                    {entry.title} — {entry.citation}
                  </p>
                  <VerificationBadge status={entry.status} />
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      ) : (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 70}>
              <li className="group h-full overflow-hidden rounded-xl border border-border-subtle bg-surface transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                {entry.image && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={entry.image.src}
                      alt={entry.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif-display text-lg font-semibold">{entry.title}</h3>
                    <VerificationBadge status={entry.status} />
                  </div>
                  {entry.subtitle && (
                    <p className="text-xs uppercase tracking-wide text-foreground/50">{entry.subtitle}</p>
                  )}
                  <p className="mt-3 text-sm text-foreground/80">{entry.text}</p>
                  {entry.citation && (
                    <p className="mt-3 text-xs text-foreground/50">{entry.citation}</p>
                  )}
                  {entry.image && (
                    <p className="mt-2 text-xs text-foreground/40">{entry.image.credit}</p>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      )}
    </div>
  );
}
