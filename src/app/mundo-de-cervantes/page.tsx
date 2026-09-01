import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ui/ComingSoonPage";

export const metadata: Metadata = {
  title: "El mundo de Cervantes",
  description: "Contexto histórico y mapa de los lugares de Miguel de Cervantes.",
};

export default function WorldPage() {
  return (
    <ComingSoonPage
      eyebrow="Su época"
      title="El mundo de Cervantes"
      description="Siglo de Oro, sociedad, monarquía, ejército, imprenta y vida cotidiana — más el mapa interactivo 'Tras los pasos de Cervantes'. Contenido en desarrollo, sujeto a verificación documental antes de publicarse."
      plannedPhase="Previsto para Fase 3"
    />
  );
}
