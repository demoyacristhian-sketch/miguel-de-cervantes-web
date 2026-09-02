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

      <div className="mt-12">
        <QuijoteTabs entries={entries} />
      </div>
    </div>
  );
}
