interface ComingSoonPageProps {
  eyebrow: string;
  title: string;
  description: string;
  plannedPhase: string;
}

export function ComingSoonPage({ eyebrow, title, description, plannedPhase }: ComingSoonPageProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="font-serif-display text-sm uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h1 className="mt-3 font-serif-display text-4xl font-semibold sm:text-5xl">{title}</h1>
      <p className="mt-6 text-foreground/70">{description}</p>
      <p className="mt-8 inline-block rounded-full border border-border-subtle px-4 py-1.5 text-xs uppercase tracking-wide text-foreground/50">
        {plannedPhase}
      </p>
    </div>
  );
}
