import { getTimelineEvents } from "@/lib/content";
import type { TimelineEvent } from "@/types/content";

/**
 * Agrupación editorial de los eventos ya verificados en src/content/timeline.json
 * en etapas narrativas para "Una vida en movimiento". Las etiquetas y el "tone"
 * son decisiones de diseño, no afirmaciones históricas nuevas — cada evento
 * conserva su propio status/sourceIds verificados de origen.
 */

export type EraTone = "dawn" | "war" | "captivity" | "return" | "triumph" | "dusk";

export interface LifeEra {
  id: string;
  kicker: string;
  title: string;
  frame: string;
  tone: EraTone;
  events: TimelineEvent[];
}

const ERA_DEFINITIONS: { id: string; kicker: string; title: string; frame: string; tone: EraTone; yearIds: string[] }[] = [
  {
    id: "infancia",
    kicker: "1547",
    title: "Infancia y formación",
    frame: "Alcalá de Henares, ciudad universitaria, es el punto de partida.",
    tone: "dawn",
    yearIds: ["tl-1547"],
  },
  {
    id: "italia-armas",
    kicker: "1569 — 1571",
    title: "Italia y las armas",
    frame: "De Roma a la galera Marquesa: los años del soldado.",
    tone: "war",
    yearIds: ["tl-1569", "tl-1571"],
  },
  {
    id: "cautiverio",
    kicker: "1575 — 1580",
    title: "Cautiverio en Argel",
    frame: "Cinco años de encierro que marcarían el resto de su vida.",
    tone: "captivity",
    yearIds: ["tl-1575", "tl-1580"],
  },
  {
    id: "regreso",
    kicker: "1585",
    title: "El regreso y los años de oficio",
    frame: "De vuelta en España, entre la escritura y los empleos administrativos.",
    tone: "return",
    yearIds: ["tl-1585"],
  },
  {
    id: "consagracion",
    kicker: "1605 — 1615",
    title: "La consagración literaria",
    frame: "Don Quijote y las obras que lo consolidan como escritor.",
    tone: "triumph",
    yearIds: ["tl-1605", "tl-1613", "tl-1614", "tl-1615"],
  },
  {
    id: "ultimos-dias",
    kicker: "1616 — 1617",
    title: "Los últimos días",
    frame: "El cierre de una vida, y una última obra publicada tras su muerte.",
    tone: "dusk",
    yearIds: ["tl-1616", "tl-1617"],
  },
];

export function getLifeJourney(): LifeEra[] {
  const eventsById = new Map(getTimelineEvents().map((event) => [event.id, event]));
  return ERA_DEFINITIONS.map((era) => ({
    id: era.id,
    kicker: era.kicker,
    title: era.title,
    frame: era.frame,
    tone: era.tone,
    events: era.yearIds
      .map((id) => eventsById.get(id))
      .filter((event): event is TimelineEvent => Boolean(event)),
  }));
}
