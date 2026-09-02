import Image from "next/image";
import Link from "next/link";

/**
 * Hero cinematográfico de superficie única — especificación completa en docs/DESIGN_SYSTEM.md.
 * El retrato ocupa todo el ancho/alto de la sección; un degradado direccional oscurece el lado del
 * texto y se aclara hacia el rostro, de forma que el fondo sea siempre la misma fotografía (nunca
 * un panel de color sólido separado). Fondo: retrato tradicionalmente atribuido a Juan de Jáuregui
 * (h. 1600, Real Academia de la Historia), dominio público — ver public/media/manifest.json y
 * docs/SOURCES.md (SRC-007). No hay documentación que confirme que sea obra de Jáuregui ni que
 * represente realmente a Cervantes (ver la curiosidad dedicada en /curiosidades); se presenta
 * explícitamente como el retrato tradicionalmente asociado a él, no como un hecho, con el crédito
 * visible más abajo.
 */
export function Hero() {
  return (
    <section
      aria-label="Presentación de Miguel de Cervantes"
      className="relative flex min-h-screen items-end overflow-hidden bg-ink text-ivory snap-start"
    >
      <Image
        src="/media/hero/cervantes-jauregui-rah.jpg"
        alt="Retrato tradicionalmente atribuido a Juan de Jáuregui, comúnmente asociado a Miguel de Cervantes (h. 1600)"
        fill
        priority
        sizes="100vw"
        className="animate-hero-zoom-loop object-cover"
        style={{ objectPosition: "right 25%" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(105deg, rgba(24,20,15,0.97) 0%, rgba(24,20,15,0.9) 32%, rgba(24,20,15,0.55) 55%, rgba(24,20,15,0.15) 78%, rgba(24,20,15,0) 100%), linear-gradient(0deg, rgba(24,20,15,0.85) 0%, rgba(24,20,15,0) 35%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-40 sm:pb-24">
        <div className="max-w-xl">
          <p
            className="animate-hero-in flex items-center gap-3 font-serif-display text-sm uppercase tracking-[0.3em] text-detail opacity-0"
            style={{ animationDelay: "150ms" }}
          >
            <span className="h-px w-10 bg-detail" aria-hidden="true" />
            Miguel de Cervantes Saavedra
          </p>
          <h1
            className="animate-hero-in mt-5 font-serif-display text-5xl font-semibold leading-[1.05] tracking-tight text-ivory opacity-0 sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "300ms" }}
          >
            El hombre detrás del Quijote
          </h1>
          <p
            className="animate-hero-in mt-6 font-serif-display text-2xl text-ivory/80 opacity-0"
            style={{ animationDelay: "450ms" }}
          >
            1547 — 1616
          </p>
          <p
            className="animate-hero-in mt-4 max-w-md text-lg text-ivory/70 opacity-0"
            style={{ animationDelay: "550ms" }}
          >
            Soldado. Cautivo. Recaudador. Dramaturgo. Poeta. Novelista.
          </p>
          <div
            className="animate-hero-in mt-10 flex flex-wrap gap-4 opacity-0"
            style={{ animationDelay: "650ms" }}
          >
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
          <p
            className="animate-hero-in mt-8 max-w-md text-xs text-ivory/40 opacity-0"
            style={{ animationDelay: "750ms" }}
          >
            Retrato tradicionalmente atribuido a Juan de Jáuregui (h. 1600) — Real Academia de la
            Historia. Autoría y autenticidad no confirmadas; dominio público.
          </p>
        </div>
      </div>
    </section>
  );
}
