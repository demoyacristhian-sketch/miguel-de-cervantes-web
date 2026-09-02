import type { Metadata } from "next";
import Link from "next/link";
import { getLegacyEntries } from "@/lib/content";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Legado",
  description: "400 años después: la influencia de Miguel de Cervantes en la cultura.",
};

const EXTERNAL_LINKS: Record<string, string> = {
  "legado-arte": "https://museocasanatalpicasso.malaga.eu/",
  "legado-traducciones": "https://cervantes.org/es/sobre-nosotros/sala-prensa/notas-prensa/el-instituto-cervantes-inaugura-quijotes-por-el-mundo-con",
  "legado-idioma": "https://dle.rae.es/quijotesco",
};

export default function LegacyPage() {
  const entries = getLegacyEntries();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">
        400 años después
      </p>
      <h1 className="mt-3 font-serif-display text-4xl font-semibold sm:text-5xl">Legado</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Cervantes dejó huella más allá de sus páginas: en el diccionario, en otros idiomas, en el
        arte y en la memoria institucional de España.
      </p>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {entries.map((entry, index) => (
          <Reveal key={entry.id} delay={index * 90}>
            <li className="h-full rounded-xl border border-border-subtle bg-surface p-6">
              <p className="text-xs uppercase tracking-wide text-accent">{entry.domain}</p>
              <div className="mt-2 flex items-center justify-between gap-2">
                <h2 className="font-serif-display text-lg font-semibold">{entry.title}</h2>
                <VerificationBadge status={entry.status} />
              </div>
              <p className="mt-3 text-sm text-foreground/80">{entry.text}</p>
              {EXTERNAL_LINKS[entry.id] && (
                <a
                  href={EXTERNAL_LINKS[entry.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
                >
                  Ver fuente institucional →
                </a>
              )}
            </li>
          </Reveal>
        ))}
      </ul>

      <p className="mt-10 text-xs text-foreground/50">
        La obra de Picasso mencionada arriba está protegida por derechos de autor vigentes y no se
        reproduce en este sitio; el enlace lleva a la ficha oficial del museo. Ver{" "}
        <Link href="/biblioteca#fuentes-y-creditos" className="hover:text-accent">
          fuentes y créditos
        </Link>
        .
      </p>
    </div>
  );
}
