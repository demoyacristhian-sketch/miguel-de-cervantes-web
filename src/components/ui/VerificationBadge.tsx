import type { VerificationStatus } from "@/types/content";

const LABEL: Record<VerificationStatus, string> = {
  verificado: "Verificado",
  pendiente_de_verificacion: "Pendiente de verificación",
};

export function VerificationBadge({ status }: { status: VerificationStatus }) {
  const isVerified = status === "verificado";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide ${
        isVerified
          ? "border-accent/40 text-accent"
          : "border-border-subtle text-foreground/60"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${isVerified ? "bg-accent" : "bg-foreground/40"}`}
      />
      {LABEL[status]}
    </span>
  );
}
