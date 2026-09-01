import { getLifeProfiles } from "@/lib/content";

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
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {lives.map((life) => (
            <li
              key={life.id}
              className="rounded-xl border border-border-subtle bg-background p-4 text-center"
            >
              <p className="font-serif-display text-base font-semibold">{life.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
