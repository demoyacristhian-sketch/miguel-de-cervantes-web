function truncate(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLen).trimEnd()}…`;
}

/**
 * Resumen/Profundizar: muestra un fragmento del texto con un toggle nativo
 * <details> (sin JS) para expandir el resto. Ver docs/MASTER_PROJECT.md
 * (sección "no sobreingeniería") — se prefiere semántica HTML nativa sobre
 * un componente cliente con estado.
 */
export function ReadMore({ text, maxLen = 140 }: { text: string; maxLen?: number }) {
  if (text.length <= maxLen) {
    return <p className="mt-2 text-sm text-foreground/70">{text}</p>;
  }

  return (
    <details className="group mt-2">
      <summary className="cursor-pointer list-none text-sm text-foreground/70 [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">
          {truncate(text, maxLen)} <span className="font-medium text-accent">Leer más</span>
        </span>
        <span className="hidden font-medium text-accent group-open:inline">Leer menos ↑</span>
      </summary>
      <p className="mt-1 text-sm text-foreground/70">{text}</p>
    </details>
  );
}
