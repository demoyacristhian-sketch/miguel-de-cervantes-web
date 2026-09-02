import type { Metadata } from "next";
import { getMediaManifest, getSources } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Biblioteca Cervantina",
  description: "Recursos institucionales, y el registro completo de fuentes e imágenes usadas en este sitio.",
};

const RESOURCES = [
  {
    name: "Biblioteca Virtual Miguel de Cervantes",
    description: "Biblioteca digital académica: cronologías, ensayos y ediciones anotadas.",
    url: "https://www.cervantesvirtual.com/",
  },
  {
    name: "Centro Virtual Cervantes",
    description: "Portal del Instituto Cervantes con el texto completo y anotado del Quijote.",
    url: "https://cvc.cervantes.es/",
  },
  {
    name: "Biblioteca Digital Hispánica (BNE)",
    description: "Manuscritos y ediciones digitalizadas de la Biblioteca Nacional de España.",
    url: "https://bdh.bne.es/",
  },
  {
    name: "Real Academia Española",
    description: "Diccionario de la lengua española y ediciones conmemorativas del Quijote.",
    url: "https://www.rae.es/",
  },
  {
    name: "Museo Casa de Cervantes",
    description: "Museo dedicado a Cervantes en Valladolid, gestionado por el Ministerio de Cultura.",
    url: "https://www.cultura.gob.es/museocasacervantes/",
  },
] as const;

export default function LibraryPage() {
  const sources = getSources();
  const images = getMediaManifest();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">
        Biblioteca Cervantina
      </p>
      <h1 className="mt-3 font-serif-display text-4xl font-semibold sm:text-5xl">Biblioteca digital</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Recursos institucionales para seguir investigando, y el registro completo y público de las
        fuentes e imágenes usadas en este sitio.
      </p>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((resource, index) => (
          <Reveal key={resource.name} delay={index * 70}>
            <li className="h-full rounded-xl border border-border-subtle bg-surface p-6">
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent"
                >
                  ↗
                </div>
                <h2 className="mt-4 font-serif-display text-lg font-semibold hover:text-accent">
                  {resource.name}
                </h2>
                <p className="mt-2 text-sm text-foreground/70">{resource.description}</p>
              </a>
            </li>
          </Reveal>
        ))}
      </ul>

      <section id="fuentes-y-creditos" className="mt-20 scroll-mt-24">
        <h2 className="font-serif-display text-2xl font-semibold sm:text-3xl">Fuentes y créditos</h2>
        <p className="mt-3 max-w-2xl text-foreground/70">
          Cada dato histórico y cada imagen publicados en este sitio están trazados aquí. Nada se
          publica sin una fuente primaria, institucional o académica, o sin derechos de imagen
          verificados.
        </p>

        <details className="group mt-8 rounded-xl border border-border-subtle bg-surface" open>
          <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold">
            Fuentes documentales ({sources.length})
          </summary>
          <ul className="space-y-3 px-5 pb-5">
            {sources.map((source) => (
              <li key={source.id} className="rounded-lg border border-border-subtle p-4 text-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-foreground/50">{source.id}</span>
                  <span className="rounded-full border border-border-subtle px-2 py-0.5 text-[10px] uppercase tracking-wide text-foreground/60">
                    {source.type}
                  </span>
                </div>
                <p className="mt-1 font-medium">{source.title}</p>
                <p className="text-foreground/60">{source.institution}</p>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-accent hover:underline"
                >
                  {source.url}
                </a>
              </li>
            ))}
          </ul>
        </details>

        <details className="group mt-4 rounded-xl border border-border-subtle bg-surface">
          <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold">
            Imágenes ({images.length})
          </summary>
          <ul className="space-y-3 px-5 pb-5">
            {images.map((image) => (
              <li key={image.id} className="rounded-lg border border-border-subtle p-4 text-sm">
                <p className="font-medium">{image.title}</p>
                <p className="text-foreground/60">
                  {image.author} — {image.date}
                </p>
                <p className="mt-1 text-foreground/60">{image.license}</p>
                <a
                  href={image.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-accent hover:underline"
                >
                  Ver origen en Wikimedia Commons
                </a>
              </li>
            ))}
          </ul>
        </details>
      </section>
    </div>
  );
}
