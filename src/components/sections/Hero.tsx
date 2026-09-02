import Image from "next/image";
import Link from "next/link";

/**
 * Hero cinematográfico — especificación completa en docs/DESIGN_SYSTEM.md.
 * Fondo: retrato tradicionalmente atribuido a Juan de Jáuregui (h. 1600, Real
 * Academia de la Historia), dominio público — ver public/media/manifest.json y
 * docs/SOURCES.md (SRC-007). No hay documentación que confirme que sea obra de
 * Jáuregui ni que represente realmente a Cervantes (ver la curiosidad dedicada
 * en /curiosidades); se presenta explícitamente como el retrato tradicionalmente
 * asociado a él, no como un hecho, con el crédito visible más abajo.
 */
export function Hero() {
  return (
    <section
      aria-label="Presentación de Miguel de Cervantes"
      className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink text-ivory"
    >
      <Image
        src="/media/hero/cervantes-jauregui-rah.jpg"
        alt="Retrato tradicionalmente atribuido a Juan de Jáuregui, comúnmente asociado a Miguel de Cervantes (h. 1600)"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 28%" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(24,20,15,0.55) 0%, rgba(24,20,15,0.35) 35%, rgba(24,20,15,0.55) 65%, rgba(24,20,15,0.95) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-40 sm:pb-20">
        <p className="font-serif-display text-sm uppercase tracking-[0.3em] text-detail">
          Miguel de Cervantes Saavedra
        </p>
        <h1 className="mt-4 max-w-3xl font-serif-display text-5xl font-semibold leading-[1.05] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
          El hombre detrás del Quijote
        </h1>
        <p className="mt-6 font-serif-display text-2xl text-ivory/80">1547 — 1616</p>
        <p className="mt-4 max-w-xl text-lg text-ivory/70">
          Soldado. Cautivo. Recaudador. Dramaturgo. Poeta. Novelista.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/vida-en-movimiento"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-contrast transition-transform hover:scale-[1.02]"
          >
            Explorar su vida
          </Link>
          <Link
            href="/obras"
            className="rounded-full border border-ivory/30 px-6 py-3 text-sm font-medium text-ivory transition-colors hover:border-ivory/60"
          >
            Descubrir sus obras
          </Link>
        </div>
        <p className="mt-8 max-w-md text-xs text-ivory/40">
          Retrato tradicionalmente atribuido a Juan de Jáuregui (h. 1600) — Real Academia de la Historia.
          Autoría y autenticidad no confirmadas; dominio público.
        </p>
      </div>
    </section>
  );
}
