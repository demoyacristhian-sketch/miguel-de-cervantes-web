import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

interface StorySlideProps {
  id: string;
  kicker: string;
  title: string;
  text: string;
  ctaHref: string;
  ctaLabel: string;
  image: { src: string; alt: string; credit: string };
  objectPosition?: string;
  children?: React.ReactNode;
}

/** Panel a pantalla completa reutilizable para la "historia" de Home — mismo lenguaje visual que
 * el Hero (imagen de fondo con zoom en loop + degradado direccional), sin panel de color sólido
 * separado. Ver docs/DESIGN_SYSTEM.md. */
export function StorySlide({
  id,
  kicker,
  title,
  text,
  ctaHref,
  ctaLabel,
  image,
  objectPosition = "center 30%",
  children,
}: StorySlideProps) {
  return (
    <section
      id={id}
      aria-label={title}
      className="relative flex min-h-dvh items-end overflow-hidden bg-ink text-ivory snap-start"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        className="animate-hero-zoom-loop object-cover"
        style={{ objectPosition }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(105deg, rgba(24,20,15,0.95) 0%, rgba(24,20,15,0.85) 32%, rgba(24,20,15,0.5) 55%, rgba(24,20,15,0.15) 78%, rgba(24,20,15,0) 100%), linear-gradient(0deg, rgba(24,20,15,0.85) 0%, rgba(24,20,15,0) 35%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20">
        <Reveal className="max-w-xl">
          <p className="font-serif-display text-sm uppercase tracking-[0.3em] text-detail">{kicker}</p>
          <h2 className="mt-4 font-serif-display text-4xl font-semibold leading-[1.05] tracking-tight text-ivory sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-lg text-lg text-ivory/75">{text}</p>
          <Link
            href={ctaHref}
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-contrast transition-transform hover:scale-[1.02]"
          >
            {ctaLabel}
          </Link>
        </Reveal>

        {children && (
          <Reveal delay={150} className="mt-10">
            {children}
          </Reveal>
        )}

        <p className="mt-8 max-w-md text-xs text-ivory/40">{image.credit}</p>
      </div>
    </section>
  );
}
