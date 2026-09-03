/**
 * Tipos de contenido — ver /docs/CONTENT_MODEL.md para el modelo completo.
 * Subconjunto implementado en Fase 1 (MVP). El resto de entidades del modelo
 * (Character, Place, Person, Document, HistoricalContext...) se añaden en Fase 2/3.
 */

export type VerificationStatus = "verificado" | "pendiente_de_verificacion";

export interface WorkProfileField {
  text: string;
  status: VerificationStatus;
  sourceIds: string[];
}

export interface Work {
  id: string;
  slug: string;
  title: string;
  type: "novela" | "novela corta" | "teatro" | "poesía";
  publicationYear: number | null;
  status: VerificationStatus;
  summary: string;
  sourceIds: string[];
  /** Descripción narrativa desarrollada (varios párrafos), a diferencia de `summary` (una frase).
   * Sintetiza en prosa los datos ya verificados de `profile` — no introduce hechos nuevos. */
  description?: WorkProfileField;
  /** Ficha ampliada (sección 28 del prompt maestro). Cada campo es independiente y puede
   * estar ausente si todavía no se ha investigado — no se rellena con contenido genérico. */
  profile?: {
    context?: WorkProfileField;
    plot?: WorkProfileField;
    characters?: WorkProfileField;
    themes?: WorkProfileField;
    structure?: WorkProfileField;
    curiosities?: WorkProfileField;
    fragments?: WorkProfileField;
    editions?: WorkProfileField;
    reception?: WorkProfileField;
    influence?: WorkProfileField;
  };
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  level: "vida" | "contexto";
  status: VerificationStatus;
  description: string;
  sourceIds: string[];
}

export interface LifeProfile {
  id: string;
  role: string;
  status: VerificationStatus;
  description: string;
  sourceIds: string[];
}

export interface Curiosity {
  id: string;
  question: string;
  status: VerificationStatus;
  answer: string | null;
  sourceIds: string[];
}

export type QuijoteCategory = "personaje" | "lugar" | "aventura" | "tema" | "frase";

export interface QuijoteEntry {
  id: string;
  category: QuijoteCategory;
  title: string;
  subtitle?: string;
  status: VerificationStatus;
  /** Solo relevante para category "personaje": permite un sub-filtro Principales/Secundarios. */
  tier?: "principal" | "secundario";
  text: string;
  citation?: string;
  image?: { src: string; alt: string; credit: string };
  sourceIds: string[];
}

export interface LegacyEntry {
  id: string;
  domain: string;
  title: string;
  status: VerificationStatus;
  text: string;
  sourceIds: string[];
}

export interface SourceEntry {
  id: string;
  title: string;
  institution: string;
  type: "FUENTE PRIMARIA" | "FUENTE INSTITUCIONAL" | "FUENTE ACADÉMICA" | "FUENTE SECUNDARIA VERIFICADA";
  url: string;
  dateConsulted: string;
}

/** Espejo tipado de public/media/manifest.json (registro de derechos de imagen). */
export interface MediaAsset {
  id: string;
  filePath: string;
  title: string;
  author: string;
  date: string;
  institution: string;
  originalUrl: string;
  license: string;
  copyrightStatus: string;
  attributionRequired: boolean;
  usagePermitted: string;
  observations: string;
}
