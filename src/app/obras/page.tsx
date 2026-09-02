import type { Metadata } from "next";
import { getWorks } from "@/lib/content";
import { WorksFilter } from "@/components/obras/WorksFilter";

export const metadata: Metadata = {
  title: "Obras",
  description: "Biblioteca visual de las obras de Miguel de Cervantes: novela, novela corta, teatro y poesía.",
};

export default function WorksPage() {
  const works = getWorks();
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">
        Biblioteca visual
      </p>
      <h1 className="mt-3 font-serif-display text-4xl font-semibold sm:text-5xl">Obras</h1>
      <p className="mt-4 max-w-2xl text-foreground/70">
        Seis obras, seis portadas de primera edición. Filtra por tipo o entra en cada ficha para ver
        contexto, argumento y temas verificados.
      </p>

      <WorksFilter works={works} />
    </div>
  );
}
