import { getCuriosities } from "@/lib/content";
import { VerificationBadge } from "@/components/ui/VerificationBadge";

export function CuriositiesTeaser() {
  const curiosities = getCuriosities();
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">
        ¿Sabías que...?
      </p>
      <h2 className="mt-3 font-serif-display text-3xl font-semibold sm:text-4xl">Curiosidades</h2>
      <p className="mt-2 max-w-2xl text-foreground/70">
        Preguntas investigadas contra fuentes primarias e institucionales, no respuestas dadas por
        supuestas.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {curiosities.map((item) => (
          <li key={item.id} className="rounded-xl border border-border-subtle bg-surface p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="font-serif-display text-lg">{item.question}</p>
              <VerificationBadge status={item.status} />
            </div>
            <p className="mt-2 text-sm text-foreground/70">
              {item.answer ?? "En investigación — sin fuente institucional suficiente todavía."}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
