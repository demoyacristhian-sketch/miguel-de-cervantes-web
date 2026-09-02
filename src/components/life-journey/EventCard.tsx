import { VerificationBadge } from "@/components/ui/VerificationBadge";
import type { TimelineEvent } from "@/types/content";

/**
 * Nivel 1: año + título (siempre visibles). Nivel 2: descripción corta, visible
 * directamente. Nivel 3: descripción completa + nota de fuente, tras <details>
 * (mismo patrón nativo que ReadMore.tsx, sin JS adicional).
 */
export function EventCard({ event, dark }: { event: TimelineEvent; dark: boolean }) {
  const shortText = firstSentence(event.description);
  const hasMore = shortText.length < event.description.length;

  return (
    <li
      className={`group/card w-[260px] shrink-0 snap-start rounded-2xl border p-5 transition-transform duration-300 hover:-translate-y-1 sm:w-[300px] ${
        dark
          ? "border-ivory/15 bg-ink/50 text-ivory"
          : "border-ink/10 bg-ivory/90 text-ink"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <p className={`font-serif-display text-3xl font-semibold ${dark ? "text-detail" : "text-burgundy"}`}>
          {event.year}
        </p>
        <VerificationBadge status={event.status} />
      </div>
      <p className="mt-2 font-serif-display text-lg leading-snug">{event.title}</p>
      <p className={`mt-2 text-sm ${dark ? "text-ivory/70" : "text-ink/70"}`}>{shortText}</p>

      {hasMore && (
        <details className="group/details mt-2">
          <summary
            className={`cursor-pointer list-none text-sm font-medium [&::-webkit-details-marker]:hidden ${
              dark ? "text-detail" : "text-burgundy"
            }`}
          >
            <span className="group-open/details:hidden">Descubrir más</span>
            <span className="hidden group-open/details:inline">Cerrar ↑</span>
          </summary>
          <p className={`mt-2 text-sm ${dark ? "text-ivory/70" : "text-ink/70"}`}>
            {event.description}
          </p>
        </details>
      )}
    </li>
  );
}

function firstSentence(text: string): string {
  const match = text.match(/^.*?[.!?](?:\s|$)/);
  const sentence = match ? match[0].trim() : text;
  return sentence.length < text.length ? sentence : text;
}
