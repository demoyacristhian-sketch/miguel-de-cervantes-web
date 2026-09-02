import { VerificationBadge } from "@/components/ui/VerificationBadge";
import type { TimelineEvent } from "@/types/content";

function firstSentence(text: string): string {
  const match = text.match(/^.*?[.!?](?:\s|$)/);
  const sentence = match ? match[0].trim() : text;
  return sentence.length < text.length ? sentence : text;
}

/**
 * Un paso del recorrido continuo (numeración global 1..N, no reiniciada por
 * etapa) — es la pieza que arregla la queja de "no se ve la cronología".
 * Nivel 1: número + año + título (siempre visibles). Nivel 2: descripción
 * corta, visible. Nivel 3: descripción completa + fuente, tras <details>.
 */
export function JourneyStep({
  event,
  stepNumber,
  totalSteps,
  dark,
}: {
  event: TimelineEvent;
  stepNumber: number;
  totalSteps: number;
  dark: boolean;
}) {
  const shortText = firstSentence(event.description);
  const hasMore = shortText.length < event.description.length;
  const lineClass = dark ? "border-ivory/20" : "border-ink/15";
  const dotClass = dark ? "bg-detail" : "bg-burgundy";
  const mutedClass = dark ? "text-ivory/60" : "text-ink/50";
  const bodyClass = dark ? "text-ivory/75" : "text-ink/75";
  const linkClass = dark ? "text-detail" : "text-burgundy";

  return (
    <li className={`relative border-l ${lineClass} py-2 pl-8 last:pb-0`}>
      <span className={`absolute -left-[7px] top-4 h-3.5 w-3.5 rounded-full ${dotClass}`} aria-hidden="true" />
      <p className={`font-serif-display text-xs uppercase tracking-[0.2em] ${mutedClass}`}>
        {String(stepNumber).padStart(2, "0")} / {String(totalSteps).padStart(2, "0")}
      </p>
      <div className="mt-2 flex flex-wrap items-baseline gap-3">
        <p className={`font-serif-display text-2xl font-semibold ${dark ? "text-detail" : "text-burgundy"}`}>
          {event.year}
        </p>
        <p className="font-serif-display text-lg leading-snug">{event.title}</p>
        <VerificationBadge status={event.status} />
      </div>
      <p className={`mt-1 max-w-xl text-sm ${bodyClass}`}>{shortText}</p>
      {hasMore && (
        <details className="group mt-1">
          <summary
            className={`cursor-pointer list-none text-sm font-medium [&::-webkit-details-marker]:hidden ${linkClass}`}
          >
            <span className="group-open:hidden">Descubrir más</span>
            <span className="hidden group-open:inline">Cerrar ↑</span>
          </summary>
          <p className={`mt-2 max-w-xl text-sm ${bodyClass}`}>{event.description}</p>
        </details>
      )}
    </li>
  );
}
