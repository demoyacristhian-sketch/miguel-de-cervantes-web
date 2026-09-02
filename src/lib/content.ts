import worksData from "@/content/works.json";
import timelineData from "@/content/timeline.json";
import livesData from "@/content/lives.json";
import curiositiesData from "@/content/curiosities.json";
import quijoteData from "@/content/quijote.json";
import legadoData from "@/content/legado.json";
import sourcesData from "@/content/sources.json";
import manifestData from "../../public/media/manifest.json";
import type {
  Curiosity,
  LegacyEntry,
  LifeProfile,
  MediaAsset,
  QuijoteCategory,
  QuijoteEntry,
  SourceEntry,
  TimelineEvent,
  Work,
} from "@/types/content";

/**
 * Capa de acceso a contenido. Hoy lee JSON local; una futura migración a
 * Supabase/PostgreSQL (ver docs/CONTENT_MODEL.md) solo debe tocar este archivo,
 * no los componentes que lo consumen.
 */

export function getWorks(): Work[] {
  return worksData as Work[];
}

export function getWorkBySlug(slug: string): Work | undefined {
  return getWorks().find((work) => work.slug === slug);
}

export function getTimelineEvents(): TimelineEvent[] {
  return [...(timelineData as TimelineEvent[])].sort((a, b) => a.year - b.year);
}

/** Tres hitos más reconocibles para la vista resumida de Home (nacimiento, Quijote, muerte). */
const HOME_TIMELINE_HIGHLIGHT_IDS = ["tl-1547", "tl-1605", "tl-1616"];

export function getTimelineHighlights(): TimelineEvent[] {
  const byId = new Map(getTimelineEvents().map((event) => [event.id, event]));
  return HOME_TIMELINE_HIGHLIGHT_IDS.map((id) => byId.get(id)).filter(
    (event): event is TimelineEvent => Boolean(event),
  );
}

export function getLifeProfiles(): LifeProfile[] {
  return livesData as LifeProfile[];
}

export function getCuriosities(): Curiosity[] {
  return curiositiesData as Curiosity[];
}

export function getQuijoteEntries(): QuijoteEntry[] {
  return quijoteData as QuijoteEntry[];
}

export function getQuijoteEntriesByCategory(category: QuijoteCategory): QuijoteEntry[] {
  return getQuijoteEntries().filter((entry) => entry.category === category);
}

export function getLegacyEntries(): LegacyEntry[] {
  return legadoData as LegacyEntry[];
}

export function getSources(): SourceEntry[] {
  return sourcesData as SourceEntry[];
}

export function getMediaManifest(): MediaAsset[] {
  return manifestData as MediaAsset[];
}
