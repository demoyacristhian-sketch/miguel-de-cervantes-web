import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif-display text-base font-semibold">Miguel de Cervantes</p>
          <p className="mt-2 text-sm text-foreground/70">
            El universo de Cervantes: su vida, sus obras, su mundo y su legado.
          </p>
        </div>
        <nav aria-label="Explorar">
          <p className="text-sm font-semibold">Explorar</p>
          <ul className="mt-3 space-y-2 text-sm text-foreground/70">
            <li><Link href="/vida-en-movimiento" className="hover:text-accent">Biografía</Link></li>
            <li><Link href="/obras" className="hover:text-accent">Obras</Link></li>
            <li><Link href="/quijote" className="hover:text-accent">Don Quijote</Link></li>
          </ul>
        </nav>
        <nav aria-label="Recursos">
          <p className="text-sm font-semibold">Recursos</p>
          <ul className="mt-3 space-y-2 text-sm text-foreground/70">
            <li><Link href="/curiosidades" className="hover:text-accent">Curiosidades</Link></li>
            <li><Link href="/legado" className="hover:text-accent">Legado</Link></li>
            <li><Link href="/biblioteca" className="hover:text-accent">Biblioteca digital</Link></li>
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold">Fuentes y bibliografía</p>
          <p className="mt-3 text-sm text-foreground/70">
            Cada dato histórico publicado en este sitio está trazado a una fuente primaria, institucional o
            académica. Consulta el registro completo en{" "}
            <Link href="/biblioteca#fuentes-y-creditos" className="hover:text-accent">
              Biblioteca — Fuentes y créditos
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="border-t border-border-subtle px-6 py-4 text-center text-xs text-foreground/50">
        Proyecto de TFM desarrollado e implementado por Luis Vidal — Trabajo de Fin de Máster
        realizado en el marco de sus estudios de posgrado en UNIR (Universidad Internacional de La
        Rioja).
      </div>
    </footer>
  );
}
