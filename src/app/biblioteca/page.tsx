import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ui/ComingSoonPage";

export const metadata: Metadata = {
  title: "Biblioteca Cervantina",
  description: "Manuscritos, primeras ediciones, documentos históricos y recursos educativos.",
};

export default function LibraryPage() {
  return (
    <ComingSoonPage
      eyebrow="Biblioteca Cervantina"
      title="Biblioteca digital"
      description="Manuscritos, primeras ediciones, ilustraciones, documentos históricos, estudios y recursos educativos, enlazados a repositorios institucionales cuando exista licencia de reutilización."
      plannedPhase="Previsto para Fase 4"
    />
  );
}
