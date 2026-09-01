import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El universo del Quijote",
  description: "Personajes, lugares, aventuras y temas de Don Quijote de la Mancha.",
};

const SUBSECTIONS = [
  { title: "Introducción", description: "Presentación de la obra y su importancia." },
  { title: "Partes", description: "Primera y segunda parte de la novela." },
  { title: "Capítulos", description: "Estructura capitular de la obra." },
  { title: "Personajes", description: "Don Quijote, Sancho Panza, Dulcinea, Rocinante, Sansón Carrasco y más." },
  { title: "Lugares", description: "Los escenarios de las aventuras." },
  { title: "Aventuras", description: "Episodios narrativos, como \"Los molinos de viento\"." },
  { title: "Temas", description: "Ejes temáticos de la obra." },
  { title: "Frases", description: "Citas verificadas de la novela." },
  { title: "Ilustraciones", description: "Recursos visuales con derechos verificados." },
  { title: "Ediciones", description: "Historia editorial de la obra." },
  { title: "Adaptaciones", description: "Adaptaciones a otros medios." },
  { title: "Influencia", description: "Impacto cultural y literario." },
];

export default function QuijotePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">
        Don Quijote de la Mancha
      </p>
      <h1 className="mt-3 font-serif-display text-4xl font-semibold sm:text-5xl">
        El universo del Quijote
      </h1>
      <p className="mt-6 max-w-2xl text-foreground/70">
        Estructura prevista para esta sección, uno de los principales activos del sitio. El contenido de
        cada subsección se desarrolla en Fase 3 (&ldquo;Explora el Quijote&rdquo;) sobre el modelo de datos de
        <code> Character</code>, <code>Place</code> y <code>Quote</code> definido en
        <code> /docs/CONTENT_MODEL.md</code>.
      </p>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SUBSECTIONS.map((section) => (
          <li key={section.title} className="rounded-xl border border-border-subtle bg-surface p-6">
            <h2 className="font-serif-display text-lg font-semibold">{section.title}</h2>
            <p className="mt-2 text-sm text-foreground/60">{section.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
