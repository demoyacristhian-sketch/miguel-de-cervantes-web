import Link from "next/link";
import { getCuriosities } from "@/lib/content";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { ReadMore } from "@/components/ui/ReadMore";

export function CuriositiesTeaser() {
  const curiosities = getCuriosities().slice(0, 3);
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">
            ¿Sabías que...?
          </p>
          <h2 className="mt-3 font-serif-display text-3xl font-semibold sm:text-4xl">Curiosidades</h2>
        </div>
        <Link href="/curiosidades" className="text-sm font-medium text-accent hover:underline">
          Ver todas las curiosidades →
        </Link>
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {curiosities.map((item) => (
          <li key={item.id} className="rounded-xl border border-border-subtle bg-surface p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="font-serif-display text-lg">{item.question}</p>
              <VerificationBadge status={item.status} />
            </div>
            <ReadMore
              text={item.answer ?? "En investigación — sin fuente institucional suficiente todavía."}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
