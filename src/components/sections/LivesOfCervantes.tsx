import { getLifeProfiles } from "@/lib/content";
import { VerificationBadge } from "@/components/ui/VerificationBadge";

export function LivesOfCervantes() {
  const lives = getLifeProfiles();
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">
          Las vidas de Cervantes
        </p>
        <h2 className="mt-3 max-w-2xl font-serif-display text-3xl font-semibold sm:text-4xl">
          Un solo hombre, siete vidas
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lives.map((life) => (
            <li key={life.id} className="rounded-xl border border-border-subtle bg-background p-5">
              <div className="flex items-center justify-between gap-2">
                <p className="font-serif-display text-lg font-semibold">{life.role}</p>
                <VerificationBadge status={life.status} />
              </div>
              <p className="mt-2 text-sm text-foreground/70">{life.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
