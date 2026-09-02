import { getTimelineEvents } from "@/lib/content";
import type { TimelineEvent } from "@/types/content";

/**
 * Agrupación editorial de los eventos ya verificados en src/content/timeline.json
 * en etapas narrativas para "Una vida en movimiento". Las etiquetas, el "tone" y
 * las imágenes son decisiones de diseño, no afirmaciones históricas nuevas — cada
 * evento conserva su propio status/sourceIds verificados de origen. Las imágenes
 * están registradas con derechos verificados en public/media/manifest.json y
 * docs/SOURCES.md (SRC-007).
 */

export type EraTone = "dawn" | "war" | "captivity" | "return" | "triumph" | "dusk";

export interface JourneyImage {
  src: string;
  alt: string;
  credit: string;
}

export interface LifeEra {
  id: string;
  kicker: string;
  title: string;
  frame: string;
  tone: EraTone;
  image: JourneyImage;
  events: TimelineEvent[];
}

interface EraDefinition {
  id: string;
  kicker: string;
  title: string;
  frame: string;
  tone: EraTone;
  image: JourneyImage;
  yearIds: string[];
}

const ERA_DEFINITIONS: EraDefinition[] = [
  {
    id: "infancia",
    kicker: "1547",
    title: "Infancia y formación",
    frame: "Alcalá de Henares, ciudad universitaria, es el punto de partida.",
    tone: "dawn",
    image: {
      src: "/media/vida-en-movimiento/alcala-plano.png",
      alt: "Plano de Alcalá de Henares en los siglos XVI y XVII, con la ubicación de las casas de los Cervantes",
      credit: "Alcalá de Henares en los siglos XVI-XVII (dominio público)",
    },
    yearIds: ["tl-1547"],
  },
  {
    id: "italia-armas",
    kicker: "1569 — 1571",
    title: "Italia y las armas",
    frame: "De Roma a la galera Marquesa: los años del soldado.",
    tone: "war",
    image: {
      src: "/media/vida-en-movimiento/lepanto-veronese.jpeg",
      alt: "La batalla de Lepanto, pintura alegórica de Paolo Veronese",
      credit: "Paolo Veronese, The Battle of Lepanto, h. 1571-72 — Gallerie dell'Accademia, Venecia (dominio público)",
    },
    yearIds: ["tl-1569", "tl-1571"],
  },
  {
    id: "cautiverio",
    kicker: "1575 — 1580",
    title: "Cautiverio en Argel",
    frame: "Cinco años de encierro que marcarían el resto de su vida.",
    tone: "captivity",
    image: {
      src: "/media/vida-en-movimiento/argel-luyken-1684.jpg",
      alt: "Grabado de Jan Luyken (1684) mostrando la venta de cautivos cristianos como esclavos en Argel",
      credit: "Jan Luyken, 1684 — ilustración de contexto de época (dominio público, CC0)",
    },
    yearIds: ["tl-1575", "tl-1580"],
  },
  {
    id: "regreso",
    kicker: "1585",
    title: "El regreso y los años de oficio",
    frame: "De vuelta en España, entre la escritura y los empleos administrativos.",
    tone: "return",
    image: {
      src: "/media/vida-en-movimiento/galatea-1585-portada.jpg",
      alt: "Portada de la primera edición de La Galatea (1585)",
      credit: "La Galatea, primera edición, Alcalá, 1585 (dominio público)",
    },
    yearIds: ["tl-1585"],
  },
  {
    id: "consagracion",
    kicker: "1605 — 1615",
    title: "La consagración literaria",
    frame: "Don Quijote y las obras que lo consolidan como escritor.",
    tone: "triumph",
    image: {
      src: "/media/vida-en-movimiento/quijote-1605-portada.jpg",
      alt: "Portada de la primera edición de El ingenioso hidalgo don Quijote de la Mancha (1605)",
      credit: "Don Quijote de la Mancha, primera edición, Madrid, 1605 (dominio público)",
    },
    yearIds: ["tl-1605", "tl-1613", "tl-1614", "tl-1615"],
  },
  {
    id: "ultimos-dias",
    kicker: "1616 — 1617",
    title: "Los últimos días",
    frame: "El cierre de una vida, y una última obra publicada tras su muerte.",
    tone: "dusk",
    image: {
      src: "/media/vida-en-movimiento/trinitarias-madrid.jpg",
      alt: "Fachada del convento de las Trinitarias Descalzas de Madrid, donde Cervantes fue enterrado",
      credit: "Convento de las Trinitarias Descalzas, Madrid — fotografía moderna (dominio público, CC0)",
    },
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
    image: era.image,
    events: era.yearIds
      .map((id) => eventsById.get(id))
      .filter((event): event is TimelineEvent => Boolean(event)),
  }));
}

export function getJourneyStepCount(): number {
  return getTimelineEvents().length;
}
