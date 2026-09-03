import type { Metadata } from "next";
import { getLifeJourney } from "@/lib/lifeEras";
import { LifeJourney } from "@/components/life-journey/LifeJourney";
import { BackLink } from "@/components/ui/BackLink";

export const metadata: Metadata = {
  title: "Biografía",
  description:
    "La biografía de Miguel de Cervantes contada como un viaje: infancia, Italia, el cautiverio en Argel, el regreso, la consagración literaria y sus últimos días, con cada hito verificado contra fuentes documentales.",
};

export default function VidaEnMovimientoPage() {
  const eras = getLifeJourney();

  return (
    <div>
      <div className="mx-auto max-w-3xl px-6 pt-16 pb-10 text-center">
        <div className="mb-6 text-left">
          <BackLink fallbackHref="/" />
        </div>
        <p className="font-serif-display text-sm uppercase tracking-[0.3em] text-accent">Su vida</p>
        <h1 className="mt-3 font-serif-display text-4xl font-semibold sm:text-5xl">Biografía</h1>
        <p className="mt-6 text-left text-foreground/80">
          Miguel de Cervantes Saavedra nació en Alcalá de Henares en 1547, cuarto de siete hermanos
          de una familia de recursos modestos, y murió en Madrid en 1616. Entre esas dos fechas:
          soldado en la batalla de Lepanto (1571), donde quedó manco de la mano izquierda; cinco años
          de cautiverio en Argel (1575–1580), con varios intentos de fuga frustrados por traiciones
          ajenas; una hija, Isabel, nacida de una relación anterior a su matrimonio con Catalina de
          Salazar en Esquivias (1584); dos encarcelamientos por su oficio de recaudador de impuestos,
          en Castro del Río (1592) y en Sevilla (1597); y, ya instalado entre Valladolid y Madrid, la
          publicación de <em>Don Quijote de la Mancha</em> (1605), la obra que lo consagraría como el
          mayor escritor en lengua española.
        </p>
        <p className="mt-4 text-foreground/70">
          De Alcalá de Henares a las playas de Argel, de los campos de batalla a las páginas del Quijote:
          Cervantes vivió en constante desplazamiento — físico, económico y personal. Recorre sus etapas,
          una por una, o salta directamente a la que te interese.
        </p>
      </div>
      <LifeJourney eras={eras} />
    </div>
  );
}
