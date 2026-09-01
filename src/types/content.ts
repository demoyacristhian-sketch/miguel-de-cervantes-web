/**
 * Tipos de contenido — ver /docs/CONTENT_MODEL.md para el modelo completo.
 * Subconjunto implementado en Fase 1 (MVP). El resto de entidades del modelo
 * (Character, Place, Person, Document, HistoricalContext...) se añaden en Fase 2/3.
 */

export type VerificationStatus = "verificado" | "pendiente_de_verificacion";

export interface Work {
  id: string;
  slug: string;
  title: string;
  type: "novela" | "novela corta" | "teatro" | "poesía";
  publicationYear: number | null;
  status: VerificationStatus;
  summary: string;
  sourceIds: string[];
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
  description: string;
}

export interface Curiosity {
  id: string;
  question: string;
  status: VerificationStatus;
  answer: string | null;
}
