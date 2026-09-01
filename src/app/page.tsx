import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { LivesOfCervantes } from "@/components/sections/LivesOfCervantes";
import { TimelinePreview } from "@/components/sections/TimelinePreview";
import { FeaturedWorks } from "@/components/sections/FeaturedWorks";
import { QuijoteTeaser } from "@/components/sections/QuijoteTeaser";
import { PendingSection } from "@/components/sections/PendingSection";
import { CuriositiesTeaser } from "@/components/sections/CuriositiesTeaser";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <LivesOfCervantes />
      <TimelinePreview />
      <FeaturedWorks />
      <QuijoteTeaser />
      <PendingSection
        eyebrow="Tras sus pasos"
        title="Los lugares de Cervantes"
        description="Un mapa de los lugares que marcaron su vida — Alcalá de Henares, Madrid, Valladolid, Sevilla, Roma, Lepanto, Argel — con la relación histórica de cada uno verificada antes de publicarse."
        href="/mundo-de-cervantes"
        linkLabel="Ver el mundo de Cervantes"
      />
      <PendingSection
        eyebrow="Su época"
        title="El mundo de Cervantes"
        description="Siglo de Oro, sociedad, imprenta, ejército y vida cotidiana: el contexto necesario para entender su obra y su vida."
        href="/mundo-de-cervantes"
        linkLabel="Explorar el contexto histórico"
      />
      <CuriositiesTeaser />
      <PendingSection
        eyebrow="400 años después"
        title="Legado"
        description="La influencia de Cervantes en literatura, pintura, música, teatro, cine e idioma, contada con datos verificados."
        href="/legado"
        linkLabel="Descubrir su legado"
      />
      <PendingSection
        eyebrow="Biblioteca Cervantina"
        title="Biblioteca digital"
        description="Manuscritos, primeras ediciones, documentos históricos y estudios, enlazados a repositorios institucionales."
        href="/biblioteca"
        linkLabel="Entrar a la biblioteca"
      />
      <CtaSection />
    </>
  );
}
