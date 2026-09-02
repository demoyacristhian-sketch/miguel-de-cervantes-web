import Image from "next/image";
import { JourneyStep } from "@/components/life-journey/JourneyStep";
import type { LifeEra, EraTone } from "@/lib/lifeEras";

const TONE_STYLES: Record<EraTone, { dark: boolean; background: string; kicker: string }> = {
  dawn: {
    dark: false,
    background:
      "radial-gradient(120% 100% at 20% 0%, rgba(171,138,69,0.10), transparent 55%), linear-gradient(180deg, #f4efe4 0%, #ece4d3 100%)",
    kicker: "text-accent",
  },
  war: {
    dark: true,
    background:
      "radial-gradient(120% 90% at 80% 10%, rgba(110,20,35,0.55), transparent 60%), linear-gradient(180deg, #241012 0%, #18140f 100%)",
    kicker: "text-detail",
  },
  captivity: {
    dark: true,
    background: "linear-gradient(180deg, #18140f 0%, #100d09 100%)",
    kicker: "text-ivory/60",
  },
  return: {
    dark: false,
    background:
      "radial-gradient(120% 100% at 15% 100%, rgba(110,20,35,0.08), transparent 55%), linear-gradient(180deg, #ece4d3 0%, #f4efe4 100%)",
    kicker: "text-accent",
  },
  triumph: {
    dark: false,
    background:
      "radial-gradient(130% 100% at 85% 0%, rgba(171,138,69,0.22), transparent 60%), linear-gradient(180deg, #f4efe4 0%, #f0e9da 100%)",
    kicker: "text-detail",
  },
  dusk: {
    dark: true,
    background:
      "radial-gradient(120% 90% at 50% 100%, rgba(171,138,69,0.12), transparent 60%), linear-gradient(180deg, #18140f 0%, #392c22 100%)",
    kicker: "text-detail",
  },
};

export function EraScene({
  era,
  index,
  startingStep,
  totalSteps,
}: {
  era: LifeEra;
  index: number;
  startingStep: number;
  totalSteps: number;
}) {
  const style = TONE_STYLES[era.tone];

  return (
    <section
      id={era.id}
      aria-labelledby={`${era.id}-heading`}
      className={`scroll-mt-28 py-16 sm:py-24 ${style.dark ? "text-ivory" : "text-ink"}`}
      style={{ backgroundImage: style.background }}
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_360px] lg:gap-12">
        {/* Imagen: cabecera no-sticky en móvil, panel sticky en desktop — ver docs/DECISIONS.md */}
        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-2xl lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={era.image.src}
                alt={era.image.alt}
                fill
                sizes="(min-width: 1024px) 360px, 100vw"
                className="object-cover"
              />
            </div>
            <p
              className={`px-1 pt-2 text-xs ${style.dark ? "text-ivory/50" : "text-ink/50"}`}
            >
              {era.image.credit}
            </p>
          </div>
        </div>

        <div className="order-2 lg:order-1">
          <p className={`font-serif-display text-sm uppercase tracking-[0.3em] ${style.kicker}`}>
            {String(index + 1).padStart(2, "0")} — {era.kicker}
          </p>
          <h2 id={`${era.id}-heading`} className="mt-3 font-serif-display text-4xl font-semibold sm:text-5xl">
            {era.title}
          </h2>
          <p className={`mt-3 max-w-xl text-lg ${style.dark ? "text-ivory/70" : "text-ink/70"}`}>
            {era.frame}
          </p>

          <ol className="mt-10 space-y-8">
            {era.events.map((event, eventIndex) => (
              <JourneyStep
                key={event.id}
                event={event}
                stepNumber={startingStep + eventIndex}
                totalSteps={totalSteps}
                dark={style.dark}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
