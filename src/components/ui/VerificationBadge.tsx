import type { VerificationStatus } from "@/types/content";

const LABEL: Record<VerificationStatus, string> = {
  verificado: "Verificado",
  pendiente_de_verificacion: "Pendiente de verificación",
};

/**
 * Indicador mínimo (punto) con tooltip accesible en vez de un pill de texto
 * repetido en cada tarjeta. El texto completo sigue disponible para lectores
 * de pantalla vía aria-label, y visualmente al pasar el cursor o al enfocar
 * con teclado (group-hover/group-focus-visible, sin JS).
 */
export function VerificationBadge({ status }: { status: VerificationStatus }) {
  const isVerified = status === "verificado";
  const label = LABEL[status];

  return (
    <span
      tabIndex={0}
      aria-label={label}
      className="group relative inline-flex shrink-0 items-center focus:outline-none"
    >
      <span
        aria-hidden="true"
        className={`h-2.5 w-2.5 rounded-full ${isVerified ? "bg-accent" : "bg-foreground/30"}`}
      />
      <span
        role="tooltip"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full z-10 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded bg-ink px-2 py-1 text-xs text-ivory opacity-0 shadow-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        {label}
      </span>
    </span>
  );
}
