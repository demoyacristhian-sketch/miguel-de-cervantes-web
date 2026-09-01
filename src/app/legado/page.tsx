import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ui/ComingSoonPage";

export const metadata: Metadata = {
  title: "Legado",
  description: "400 años después: la influencia de Miguel de Cervantes en la cultura.",
};

export default function LegacyPage() {
  return (
    <ComingSoonPage
      eyebrow="400 años después"
      title="Legado"
      description="La influencia de Cervantes en literatura, pintura, música, teatro, cine, cómic e idioma. Contenido en desarrollo, sujeto a verificación documental antes de publicarse."
      plannedPhase="Previsto para Fase 2"
    />
  );
}
