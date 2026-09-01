import type { Metadata } from "next";
import { getCuriosities } from "@/lib/content";
import { VerificationBadge } from "@/components/ui/VerificationBadge";

export const metadata: Metadata = {
  title: "Curiosidades",
  description: "Preguntas frecuentes sobre Miguel de Cervantes, investigadas contra fuentes primarias, institucionales y académicas.",
};

export default function CuriositiesPage() {
  const curiosities = getCuriosities();
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">¿Sabías que...?</p>
      <h1 className="mt-3 font-serif-display text-4xl font-semibold sm:text-5xl">Curiosidades</h1>
      <p className="mt-6 max-w-2xl text-foreground/70">
        Preguntas editoriales investigadas contra fuentes primarias, institucionales y académicas — nunca
        respuestas dadas por supuestas. El detalle de cada fuente está en el repositorio del proyecto
        (<code>docs/SOURCES.md</code>).
      </p>
      <ul className="mt-10 space-y-6">
        {curiosities.map((item) => (
          <li key={item.id} className="rounded-xl border border-border-subtle bg-surface p-6">
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-serif-display text-xl font-semibold">{item.question}</h2>
              <VerificationBadge status={item.status} />
            </div>
            <p className="mt-3 text-foreground/70">
              {item.answer ?? "En investigación — sin fuente institucional suficiente todavía."}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
