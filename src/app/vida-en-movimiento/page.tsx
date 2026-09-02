import type { Metadata } from "next";
import { getLifeJourney } from "@/lib/lifeEras";
import { LifeJourney } from "@/components/life-journey/LifeJourney";

export const metadata: Metadata = {
  title: "Una vida en movimiento",
  description:
    "La biografía de Miguel de Cervantes contada como un viaje: infancia, Italia, el cautiverio en Argel, el regreso, la consagración literaria y sus últimos días, con cada hito verificado contra fuentes documentales.",
};

export default function VidaEnMovimientoPage() {
  const eras = getLifeJourney();

  return (
    <div>
      <div className="mx-auto max-w-3xl px-6 pt-16 pb-10 text-center">
        <p className="font-serif-display text-sm uppercase tracking-[0.3em] text-accent">Su vida</p>
        <h1 className="mt-3 font-serif-display text-4xl font-semibold sm:text-5xl">
          Una vida en movimiento
        </h1>
        <p className="mt-6 text-foreground/70">
          De Alcalá de Henares a las playas de Argel, de los campos de batalla a las páginas del Quijote:
          Cervantes vivió en constante desplazamiento — físico, económico y personal. Recorre sus etapas,
          una por una, o salta directamente a la que te interese.
        </p>
      </div>
      <LifeJourney eras={eras} />
    </div>
  );
}
