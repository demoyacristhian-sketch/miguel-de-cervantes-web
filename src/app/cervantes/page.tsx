import type { Metadata } from "next";
import { VerificationBadge } from "@/components/ui/VerificationBadge";

export const metadata: Metadata = {
  title: "Miguel de Cervantes — Biografía",
  description:
    "Biografía narrativa de Miguel de Cervantes Saavedra, organizada por capítulos, con contenido en proceso de verificación documental.",
};

const CHAPTERS = [
  "Nacimiento e infancia",
  "Juventud",
  "Italia",
  "Vida militar",
  "Lepanto",
  "Cautiverio en Argel",
  "Regreso a España",
  "Vida profesional",
  "Literatura",
  "Dificultades económicas",
  "Valladolid",
  "Publicación del Quijote",
  "Últimos años",
  "Muerte",
  "Legado inmediato",
];

export default function CervantesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">Biografía</p>
      <h1 className="mt-3 font-serif-display text-4xl font-semibold sm:text-5xl">Miguel de Cervantes</h1>
      <p className="mt-6 max-w-2xl text-foreground/70">
        Esta biografía se organiza en los capítulos narrativos definidos para el proyecto. Ningún capítulo
        se publica con contenido histórico hasta que esté verificado contra fuentes primarias, institucionales
        o académicas (ver <code>/docs/SOURCES.md</code>).
      </p>
      <ol className="mt-10 divide-y divide-border-subtle rounded-2xl border border-border-subtle">
        {CHAPTERS.map((chapter, index) => (
          <li key={chapter} className="flex items-center justify-between gap-4 px-6 py-4">
            <span className="flex items-center gap-4">
              <span className="font-serif-display text-sm text-foreground/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-serif-display text-lg">{chapter}</span>
            </span>
            <VerificationBadge status="pendiente_de_verificacion" />
          </li>
        ))}
      </ol>
    </div>
  );
}
