import Link from "next/link";
import { getWorks } from "@/lib/content";
import { VerificationBadge } from "@/components/ui/VerificationBadge";

export function FeaturedWorks() {
  const works = getWorks();
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">
              Biblioteca visual
            </p>
            <h2 className="mt-3 font-serif-display text-3xl font-semibold sm:text-4xl">Obras destacadas</h2>
          </div>
          <Link href="/obras" className="text-sm font-medium text-accent hover:underline">
            Ver todas las obras →
          </Link>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <li key={work.id} className="rounded-xl border border-border-subtle bg-background p-6">
              <p className="text-xs uppercase tracking-wide text-foreground/50">{work.type}</p>
              <Link href={`/obras/${work.slug}`}>
                <h3 className="mt-2 font-serif-display text-xl font-semibold hover:text-accent">
                  {work.title}
                </h3>
              </Link>
              {work.publicationYear && (
                <p className="mt-1 text-sm text-foreground/60">{work.publicationYear}</p>
              )}
              <div className="mt-4">
                <VerificationBadge status={work.status} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
