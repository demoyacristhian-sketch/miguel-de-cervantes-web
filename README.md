# Miguel de Cervantes — El universo de Cervantes

Plataforma web editorial e histórica dedicada a la vida, obra y legado de Miguel de Cervantes Saavedra.

> **Estado del proyecto:** Fase 0 (Descubrimiento y Preparación) completada. Sin código de aplicación
> todavía. Ver [`CLAUDE.md`](CLAUDE.md) para el estado operativo completo y [`docs/MASTER_PROJECT.md`](docs/MASTER_PROJECT.md)
> para la memoria histórica del proyecto.

## Antes de trabajar en este repositorio

Lee obligatoriamente, en este orden:

1. [`CLAUDE.md`](CLAUDE.md) — fuente de verdad operativa.
2. [`docs/MASTER_PROJECT.md`](docs/MASTER_PROJECT.md) — memoria histórica.
3. [`docs/DECISIONS.md`](docs/DECISIONS.md) — decisiones vigentes.
4. [`docs/SOURCES.md`](docs/SOURCES.md) y [`docs/CONTENT_STATUS.md`](docs/CONTENT_STATUS.md).

## Documentación completa

Toda la documentación vive en [`/docs`](docs): arquitectura, sistema de diseño, modelo de contenido,
fuentes, decisiones, changelog, despliegue, SEO, accesibilidad, seguridad y rendimiento.

## Reglas críticas

- Ningún merge a `main` ni despliegue de producción sin aprobación explícita del usuario.
- Ningún dato histórico se publica sin fuente verificable (`docs/SOURCES.md`).
- Ninguna imagen se usa sin derechos verificados (`public/media/manifest.json`).

## Stack (propuesto, ver `docs/ARCHITECTURE.md`)

Next.js 16.3.4 · React 19.2.8 · TypeScript 6.0.3 · Tailwind CSS 4.3.3 · Vercel
