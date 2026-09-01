import Link from "next/link";
import { VerificationBadge } from "@/components/ui/VerificationBadge";

interface PendingSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

export function PendingSection({ eyebrow, title, description, href, linkLabel }: PendingSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-surface p-8 sm:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
          <VerificationBadge status="pendiente_de_verificacion" />
        </div>
        <h2 className="font-serif-display text-3xl font-semibold sm:text-4xl">{title}</h2>
        <p className="max-w-2xl text-foreground/70">{description}</p>
        <Link href={href} className="mt-2 text-sm font-medium text-accent hover:underline">
          {linkLabel} →
        </Link>
      </div>
    </section>
  );
}
