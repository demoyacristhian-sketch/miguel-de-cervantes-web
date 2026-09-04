import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CtaSection } from "@/components/sections/CtaSection";
import { StorySlide } from "@/components/home/StorySlide";
import { StoryProgressNav } from "@/components/home/StoryProgressNav";
import { getLifeProfiles, getWorks } from "@/lib/content";
import { WORK_COVERS } from "@/lib/workCovers";

const STEPS = [
  { id: "hero", label: "Inicio" },
  { id: "vida", label: "Su vida" },
  { id: "obras", label: "Obras" },
  { id: "quijote", label: "Quijote" },
  { id: "explora", label: "Explora más" },
];

export default function Home() {
  const lives = getLifeProfiles();
  const works = getWorks();

  return (
    <>
      <StoryProgressNav steps={STEPS} />

      <div id="hero">
        <Hero />
      </div>

      <StorySlide
        id="vida"
        kicker="1547 — 1616"
        title="Biografía"
        text="Más de cuatro siglos después, Miguel de Cervantes sigue siendo una de las figuras más influyentes de la literatura universal: de Alcalá de Henares a las playas de Argel, de los campos de batalla a las páginas del Quijote."
        ctaHref="/vida-en-movimiento"
        ctaLabel="Explorar su vida"
        image={{
          src: "/media/vida-en-movimiento/lepanto-veronese.jpeg",
          alt: "La batalla de Lepanto, pintura alegórica de Paolo Veronese",
          credit: "Paolo Veronese, The Battle of Lepanto, h. 1571-72 (dominio público)",
        }}
        objectPosition="center 35%"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-ivory/50">Un solo hombre, siete vidas</p>
        <ul className="flex flex-wrap gap-2">
          {lives.map((life) => (
            <li
              key={life.id}
              className="rounded-full border border-ivory/25 bg-ink/60 px-4 py-1.5 text-sm text-ivory/90"
            >
              {life.role}
            </li>
          ))}
        </ul>
      </StorySlide>

      <StorySlide
        id="obras"
        kicker="Biblioteca visual"
        title="Seis obras, una vida de escritura"
        text="De La Galatea a Los trabajos de Persiles y Sigismunda, publicada tras su muerte: novela, teatro y poesía, con portadas de primera edición."
        ctaHref="/obras"
        ctaLabel="Ver todas las obras"
        image={{
          src: "/media/vida-en-movimiento/quijote-1605-portada.jpg",
          alt: "Portada de la primera edición de El ingenioso hidalgo don Quijote de la Mancha (1605)",
          credit: "Primera edición, Madrid, 1605",
        }}
        objectPosition="center 20%"
      >
        <div className="flex flex-wrap gap-3">
          {works.map((work) => {
            const cover = WORK_COVERS[work.slug];
            if (!cover) return null;
            return (
              <Link
                key={work.id}
                href={`/obras/${work.slug}`}
                className="group relative h-24 w-[72px] shrink-0 overflow-hidden rounded border border-ivory/25 transition-transform hover:-translate-y-1"
                title={work.title}
              >
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  fill
                  sizes="72px"
                  className="object-cover"
                />
              </Link>
            );
          })}
        </div>
      </StorySlide>

      <StorySlide
        id="quijote"
        kicker="El universo del Quijote"
        title="La obra que cambió la literatura"
        text="Personajes, lugares, aventuras y temas de la novela más traducida del mundo después de la Biblia, contados a partir de su propio texto."
        ctaHref="/quijote"
        ctaLabel="Entrar al universo del Quijote"
        image={{
          src: "/media/quijote/dore-molinos-de-viento.jpg",
          alt: "Grabado de Gustave Doré: Don Quijote y Rocinante derribados tras embestir contra un molino de viento",
          credit: "Gustave Doré, 1863 (dominio público)",
        }}
        objectPosition="center 30%"
      />

      <StorySlide
        id="explora"
        kicker="400 años después"
        title="Sigue explorando"
        text="El legado de Cervantes en el idioma, el arte y la cultura; curiosidades verificadas; y el registro completo de fuentes e imágenes del sitio."
        ctaHref="/legado"
        ctaLabel="Descubrir su legado"
        image={{
          src: "/media/vida-en-movimiento/trinitarias-madrid.jpg",
          alt: "Fachada del convento de las Trinitarias Descalzas de Madrid, donde Cervantes fue enterrado",
          credit: "Convento de las Trinitarias Descalzas, Madrid — fotografía moderna (dominio público, CC0)",
        }}
        objectPosition="center 60%"
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/legado#curiosidades"
            className="rounded-full border border-ivory/25 bg-ink/60 px-5 py-2 text-sm text-ivory hover:border-ivory/60"
          >
            ¿Sabías que...? →
          </Link>
          <Link
            href="/legado"
            className="rounded-full border border-ivory/25 bg-ink/60 px-5 py-2 text-sm text-ivory hover:border-ivory/60"
          >
            Legado →
          </Link>
          <Link
            href="/biblioteca"
            className="rounded-full border border-ivory/25 bg-ink/60 px-5 py-2 text-sm text-ivory hover:border-ivory/60"
          >
            Biblioteca digital →
          </Link>
        </div>
      </StorySlide>

      <CtaSection />
    </>
  );
}
