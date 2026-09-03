import type { Metadata } from "next";
import Link from "next/link";
import { getLegacyEntries } from "@/lib/content";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { Reveal } from "@/components/ui/Reveal";
import { BackLink } from "@/components/ui/BackLink";

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
      <div className="mb-6">
        <BackLink fallbackHref="/" />
      </div>
      <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">
        400 años después
      </p>
      <h1 className="mt-3 font-serif-display text-4xl font-semibold sm:text-5xl">Legado</h1>

      <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-foreground/85">
        <p>
          Cuatro siglos después de su muerte, el legado de Miguel de Cervantes se extiende mucho
          más allá de la literatura. Su huella más directa está en el propio idioma: &ldquo;quijotesco&rdquo;
          y &ldquo;dulcinea&rdquo; son entradas reales del Diccionario de la Real Academia Española, y
          expresiones como &ldquo;luchar contra molinos de viento&rdquo; forman parte del habla cotidiana en
          español y en otras lenguas. El español, de hecho, es frecuentemente llamado &ldquo;la lengua de
          Cervantes&rdquo; en reconocimiento a su papel fundacional en la prosa moderna.
        </p>
        <p>
          Don Quijote es, además, uno de los libros más traducidos de la historia: el Instituto
          Cervantes reunió 185 ediciones en 56 lenguas para la exposición &ldquo;Quijotes por el
          mundo&rdquo;, y se cita ampliamente —aunque la cifra exacta varía según la fuente— como la
          obra más traducida después de la Biblia. Esa dimensión universal ha atraído a artistas de
          todas las disciplinas: Pablo Picasso dibujó su célebre &ldquo;Don Quijote y Sancho&rdquo; en 1955
          para conmemorar el 350 aniversario de la novela, hoy conservado en el Museo Casa Natal de
          Picasso, en Málaga.
        </p>
        <p>
          La propia figura de Cervantes está institucionalizada en España: la Real Academia
          Española y la Asociación de Academias de la Lengua Española publicaron ediciones
          conmemorativas del Quijote en 2004 y 2015, y desde 1976 se entrega cada 23 de abril el
          Premio Cervantes —el galardón más importante de las letras en español— en una ceremonia
          presidida por los Reyes de España en el Paraninfo de la Universidad de Alcalá, su ciudad
          natal. Esa misma fecha fue proclamada por la UNESCO en 1995 Día Internacional del Libro y
          del Derecho de Autor, por coincidir con la muerte, en 1616, de Cervantes, Shakespeare y el
          Inca Garcilaso de la Vega —aunque, como recoge una de las curiosidades de este sitio, las
          fechas reales difieren por el desfase entre calendarios.
        </p>
        <p>
          Cuatrocientos años después, Cervantes sigue siendo, en palabras que se repiten desde hace
          generaciones, el &ldquo;Príncipe de los Ingenios&rdquo;: no solo el autor de una novela
          fundacional, sino una presencia viva en el idioma, en el arte y en el calendario cultural
          de medio mundo.
        </p>
      </div>

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
