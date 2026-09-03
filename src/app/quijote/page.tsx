import type { Metadata } from "next";
import Image from "next/image";
import { getQuijoteEntries } from "@/lib/content";
import { QuijoteTabs } from "@/components/quijote/QuijoteTabs";
import { BackLink } from "@/components/ui/BackLink";

export const metadata: Metadata = {
  title: "El universo del Quijote",
  description: "Personajes, lugares, aventuras, temas y frases de Don Quijote de la Mancha.",
};

export default function QuijotePage() {
  const entries = getQuijoteEntries();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-6">
        <BackLink fallbackHref="/" />
      </div>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
        <div className="relative mx-auto aspect-[3/4] w-32 shrink-0 overflow-hidden rounded-lg border border-border-subtle shadow-sm sm:mx-0">
          <Image
            src="/media/vida-en-movimiento/quijote-1605-portada.jpg"
            alt="Portada de la primera edición de El ingenioso hidalgo don Quijote de la Mancha (1605)"
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">
            Don Quijote de la Mancha
          </p>
          <h1 className="mt-3 font-serif-display text-4xl font-semibold sm:text-5xl">
            El universo del Quijote
          </h1>
          <p className="mt-4 max-w-2xl text-foreground/70">
            Los personajes, lugares y aventuras que hicieron de esta novela la más traducida del
            mundo después de la Biblia. Explora por categoría.
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-3xl rounded-xl border border-border-subtle bg-surface p-6">
        <p className="text-foreground/80">
          Un hidalgo pierde el juicio leyendo libros de caballerías, se hace pasar por caballero
          andante y sale en busca de aventuras para defender ideales de justicia, acompañado de su
          escudero Sancho Panza. La novela se organiza en tres &ldquo;salidas&rdquo; —dos en la
          Primera Parte (1605), una en la Segunda (1615)—, y termina en Barcelona, donde Don Quijote
          es derrotado en duelo por el Caballero de la Blanca Luna, en realidad el bachiller Sansón
          Carrasco disfrazado. Regresa a su aldea, recupera la cordura y muere rodeado de los suyos.
        </p>
      </div>

      <div className="mt-10">
        <QuijoteTabs entries={entries} />
      </div>
    </div>
  );
}
