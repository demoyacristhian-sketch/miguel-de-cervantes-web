"use client";

import { useRouter } from "next/navigation";

/** Botón "volver atrás": usa el historial del navegador si existe, o `fallbackHref` si la página
 * se abrió directamente (enlace externo, pestaña nueva) y no hay a dónde volver. */
export function BackLink({ fallbackHref, label = "Volver" }: { fallbackHref: string; label?: string }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push(fallbackHref);
        }
      }}
      className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-accent"
    >
      <span aria-hidden="true">←</span> {label}
    </button>
  );
}
