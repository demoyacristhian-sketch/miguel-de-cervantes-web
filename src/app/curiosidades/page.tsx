import type { Metadata } from "next";
import Link from "next/link";
import { getCuriosities } from "@/lib/content";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { BackLink } from "@/components/ui/BackLink";

export const metadata: Metadata = {
  title: "Curiosidades",
  description: "Preguntas frecuentes sobre Miguel de Cervantes, investigadas contra fuentes primarias, institucionales y académicas.",
};

export default function CuriositiesPage() {
  const curiosities = getCuriosities();
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-6">
        <BackLink fallbackHref="/" />
      </div>
      <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">¿Sabías que...?</p>
      <h1 className="mt-3 font-serif-display text-4xl font-semibold sm:text-5xl">Curiosidades</h1>
      <p className="mt-6 max-w-2xl text-foreground/70">
        Preguntas editoriales investigadas contra fuentes primarias, institucionales y académicas — nunca
        respuestas dadas por supuestas. El detalle de cada fuente está en{" "}
        <Link href="/biblioteca#fuentes-y-creditos" className="hover:text-accent">
          Biblioteca — Fuentes y créditos
        </Link>
        .
      </p>
      <ul className="mt-10 space-y-4">
        {curiosities.map((item) => (
          <li key={item.id}>
            <details className="group rounded-xl border border-border-subtle bg-surface">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                <span className="flex flex-wrap items-center gap-3">
                  <span className="font-serif-display text-lg font-semibold sm:text-xl">
                    {item.question}
                  </span>
                  <VerificationBadge status={item.status} />
                </span>
                <span
                  className="relative flex h-5 w-5 shrink-0 items-center justify-center text-xl leading-none text-detail transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="accordion-content px-6 pb-6 text-foreground/70">
                {item.answer ?? "En investigación — sin fuente institucional suficiente todavía."}
              </div>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
