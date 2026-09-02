import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkBySlug, getWorks } from "@/lib/content";
import { WORK_COVERS } from "@/lib/workCovers";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { ReadMore } from "@/components/ui/ReadMore";
import { Reveal } from "@/components/ui/Reveal";
import { BackLink } from "@/components/ui/BackLink";
import type { Work, WorkProfileField } from "@/types/content";

export function generateStaticParams() {
  return getWorks().map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};
  return {
    title: work.title,
    description: work.summary,
  };
}

const PROFILE_LABELS: Record<keyof NonNullable<Work["profile"]>, string> = {
  context: "Contexto",
  plot: "Argumento",
  characters: "Personajes",
  themes: "Temas",
  structure: "Estructura",
  curiosities: "Curiosidades",
  fragments: "Fragmentos",
  editions: "Ediciones",
  reception: "Recepción",
  influence: "Influencia",
};

/** Los 3 campos que más ayudan a entender la obra de un vistazo quedan siempre visibles;
 * el resto se agrupa en el acordeón "Más detalles" para no saturar la pantalla. */
const HIGHLIGHTED_FIELDS = ["context", "plot", "themes"] as const;
const MORE_FIELDS = (Object.keys(PROFILE_LABELS) as (keyof typeof PROFILE_LABELS)[]).filter(
  (field) => !HIGHLIGHTED_FIELDS.includes(field as (typeof HIGHLIGHTED_FIELDS)[number]),
);

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const profile = work.profile ?? {};
  const cover = WORK_COVERS[work.slug];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-6">
        <BackLink fallbackHref="/obras" />
      </div>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        {cover && (
          <div className="mx-auto w-40 shrink-0 sm:mx-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border-subtle shadow-sm">
              <Image src={cover.src} alt={cover.alt} fill sizes="160px" className="object-cover" />
            </div>
            <p className="mt-2 text-center text-xs text-foreground/50 sm:text-left">{cover.credit}</p>
          </div>
        )}
        <div>
          <p className="text-xs uppercase tracking-wide text-foreground/50">{work.type}</p>
          <h1 className="mt-2 font-serif-display text-4xl font-semibold sm:text-5xl">{work.title}</h1>
          <div className="mt-4 flex items-center gap-3">
            {work.publicationYear && <span className="text-foreground/60">{work.publicationYear}</span>}
            <VerificationBadge status={work.status} />
          </div>
          <p className="mt-6 text-foreground/80">{work.summary}</p>
        </div>
      </div>

      {cover?.second && (
        <div className="mt-6 flex items-center gap-3 rounded-lg border border-border-subtle bg-surface p-3">
          <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded">
            <Image src={cover.second.src} alt={cover.second.alt} fill sizes="64px" className="object-cover" />
          </div>
          <p className="text-sm text-foreground/70">
            También existe una segunda parte, publicada en 1615: <strong>{cover.second.credit}</strong>.
          </p>
        </div>
      )}

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {HIGHLIGHTED_FIELDS.map((field, index) => {
          const entry: WorkProfileField | undefined = profile[field];
          if (!entry) return null;
          return (
            <Reveal key={field} delay={index * 80}>
              <div className="h-full rounded-xl border border-border-subtle bg-surface p-4">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-sm font-semibold">{PROFILE_LABELS[field]}</h2>
                  <VerificationBadge status={entry.status} />
                </div>
                <p className="mt-2 text-sm text-foreground/80">{entry.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <details className="group mt-8 rounded-xl border border-border-subtle bg-surface">
        <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold">
          Más detalles
          <span className="ml-2 text-foreground/50 group-open:hidden">— estructura, curiosidades, ediciones…</span>
        </summary>
        <dl className="grid gap-4 px-5 pb-5 sm:grid-cols-2">
          {MORE_FIELDS.map((field) => {
            const entry: WorkProfileField | undefined = profile[field];
            if (!entry) return null;
            return (
              <div key={field} className="rounded-lg border border-border-subtle p-4">
                <div className="flex items-center justify-between gap-2">
                  <dt className="text-sm font-semibold">{PROFILE_LABELS[field]}</dt>
                  <VerificationBadge status={entry.status} />
                </div>
                <dd className="mt-1">
                  <ReadMore text={entry.text} maxLen={180} />
                </dd>
              </div>
            );
          })}
        </dl>
      </details>
    </div>
  );
}
