import worksData from "@/content/works.json";
import timelineData from "@/content/timeline.json";
import livesData from "@/content/lives.json";
import curiositiesData from "@/content/curiosities.json";
import type { Curiosity, LifeProfile, TimelineEvent, Work } from "@/types/content";

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

export function getLifeProfiles(): LifeProfile[] {
  return livesData as LifeProfile[];
}

export function getCuriosities(): Curiosity[] {
  return curiositiesData as Curiosity[];
}
