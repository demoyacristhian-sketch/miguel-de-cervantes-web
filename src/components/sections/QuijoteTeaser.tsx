import Link from "next/link";

const SUBSECTIONS = [
  "Introducción",
  "Partes",
  "Personajes",
  "Lugares",
  "Aventuras",
  "Temas",
  "Frases",
];

export function QuijoteTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 rounded-2xl border border-border-subtle bg-ink p-10 text-ivory lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-detail">
            El universo del Quijote
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold sm:text-4xl">
            La obra que cambió la literatura
          </h2>
          <p className="mt-4 max-w-lg text-ivory/70">
            Personajes, lugares, aventuras y temas de la obra más influyente de Cervantes, explorados en
            profundidad.
          </p>
          <Link
            href="/quijote"
            className="mt-6 inline-block rounded-full bg-burgundy px-6 py-3 text-sm font-medium text-ivory hover:opacity-90"
          >
            Entrar al universo del Quijote
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 self-start sm:grid-cols-3 lg:grid-cols-2">
          {SUBSECTIONS.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-ivory/15 px-4 py-3 text-center text-sm text-ivory/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
