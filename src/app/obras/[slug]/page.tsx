import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWorkBySlug, getWorks } from "@/lib/content";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { ReadMore } from "@/components/ui/ReadMore";
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

const FIELD_ORDER = Object.keys(PROFILE_LABELS) as (keyof typeof PROFILE_LABELS)[];

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const profile = work.profile ?? {};

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs uppercase tracking-wide text-foreground/50">{work.type}</p>
      <h1 className="mt-2 font-serif-display text-4xl font-semibold sm:text-5xl">{work.title}</h1>
      <div className="mt-4 flex items-center gap-3">
        {work.publicationYear && <span className="text-foreground/60">{work.publicationYear}</span>}
        <VerificationBadge status={work.status} />
      </div>
      <p className="mt-6 text-foreground/80">{work.summary}</p>

      <dl className="mt-10 grid gap-4 sm:grid-cols-2">
        {FIELD_ORDER.map((field) => {
          const entry: WorkProfileField | undefined = profile[field];
          return (
            <div key={field} className="rounded-xl border border-border-subtle bg-surface p-4">
              <div className="flex items-center justify-between gap-2">
                <dt className="text-sm font-semibold">{PROFILE_LABELS[field]}</dt>
                {entry && <VerificationBadge status={entry.status} />}
              </div>
              <dd className="mt-1">
                {entry ? (
                  <ReadMore text={entry.text} maxLen={180} />
                ) : (
                  <span className="text-sm text-foreground/60">
                    Pendiente de redacción y verificación (Fase 2).
                  </span>
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
