import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWorkBySlug, getWorks } from "@/lib/content";
import { VerificationBadge } from "@/components/ui/VerificationBadge";

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

const PENDING_FIELDS = [
  "Contexto",
  "Argumento",
  "Personajes",
  "Temas",
  "Estructura",
  "Curiosidades",
  "Fragmentos",
  "Ediciones",
  "Recepción",
  "Influencia",
];

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

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
        {PENDING_FIELDS.map((field) => (
          <div key={field} className="rounded-xl border border-border-subtle bg-surface p-4">
            <dt className="text-sm font-semibold">{field}</dt>
            <dd className="mt-1 text-sm text-foreground/60">Pendiente de redacción y verificación (Fase 2).</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
