import Link from "next/link";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <h2 className="font-serif-display text-3xl font-semibold sm:text-4xl">
        Sigue explorando el universo de Cervantes
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-foreground/70">
        Su vida, su obra, su mundo y su legado, contados con rigor documental y sensibilidad editorial.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/vida-en-movimiento"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-contrast"
        >
          Conocer al hombre
        </Link>
        <Link
          href="/biblioteca"
          className="rounded-full border border-border-subtle px-6 py-3 text-sm font-medium hover:border-accent"
        >
          Visitar la biblioteca
        </Link>
      </div>
    </section>
  );
}
