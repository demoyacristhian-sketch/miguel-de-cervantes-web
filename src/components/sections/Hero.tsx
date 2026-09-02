import Link from "next/link";

/**
 * Hero cinematográfico — especificación completa en docs/DESIGN_SYSTEM.md.
 * Sin vídeo de fondo todavía: ningún recurso audiovisual con derechos verificados
 * ha sido registrado en public/media/manifest.json. Se usa un fallback editorial
 * (degradado + textura CSS) hasta que exista un vídeo con licencia confirmada.
 * Reemplazar por <video> respetando prefers-reduced-motion, fallback de imagen,
 * estrategia móvil y presupuesto de LCP/CLS cuando el recurso esté aprobado.
 */
export function Hero() {
  return (
    <section
      aria-label="Presentación de Miguel de Cervantes"
      className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink text-ivory"
      style={{
        backgroundImage:
          "radial-gradient(120% 90% at 15% 10%, rgba(110,20,35,0.35), transparent 60%), radial-gradient(140% 100% at 85% 100%, rgba(171,138,69,0.18), transparent 55%), linear-gradient(180deg, #18140f 0%, #241c15 55%, #18140f 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #f4efe4 0px, transparent 1px, transparent 3px)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-40 sm:pb-28">
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
      </div>
    </section>
  );
}
