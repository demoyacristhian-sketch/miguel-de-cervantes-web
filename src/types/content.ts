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
