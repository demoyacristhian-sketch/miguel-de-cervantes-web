# CHANGELOG.md

Formato por entrada: Fecha, Versión, Rama, Commit, Añadido/Modificado/Corregido/Eliminado/Documentación.

---

## 2026-09-01 — v0.0.0-foundation — rama `main`

**Commit:** `b458800`

### Añadido

- `CLAUDE.md` — fuente de verdad operativa del proyecto.
- `docs/MASTER_PROJECT.md` — memoria histórica del proyecto.
- `docs/ARCHITECTURE.md` — arquitectura técnica propuesta (Next.js 16.3.4, React 19.2.8, TypeScript 6.0.3,
  Tailwind CSS 4.3.3).
- `docs/CONTENT_MODEL.md` — modelo de entidades de contenido y relaciones.
- `docs/CONTENT_STATUS.md` — sistema de estados independientes de contenido.
- `docs/SOURCES.md` — sistema de registro y clasificación de fuentes históricas.
- `docs/DECISIONS.md` — ADR-001 a ADR-004.
- `docs/DESIGN_SYSTEM.md` — dirección de arte y tipografía preliminares.
- `docs/SEO.md`, `docs/ACCESSIBILITY.md`, `docs/SECURITY.md`, `docs/PERFORMANCE.md`, `docs/DEPLOYMENT.md`.
- `.gitignore`, `.env.example`, `README.md`.
- Repositorio GitHub `demoyacristhian-sketch/miguel-de-cervantes-web` (público).

### Documentación

- Fase 0 (Descubrimiento y Preparación) completada íntegramente.

### Estado

Fase 0 completada. Pendiente de aprobación explícita del usuario para iniciar Fase 1 (MVP).

---

## 2026-09-01 — v0.1.0-mvp-scaffold — rama `feature/mvp-scaffold`

**Commit:** `4c7554d`

### Añadido

- Scaffold real de Next.js 16.3.4 (App Router, `src/`), TypeScript 6.0.3, Tailwind CSS 4.3.3, ESLint 9.39.5.
- Sistema de diseño implementado: paleta (marfil/ink/burdeos/dorado), tipografía Playfair Display + Inter,
  modo claro/oscuro, `:focus-visible`, `prefers-reduced-motion`.
- Layout raíz con skip link, header/nav responsive (8 secciones de la arquitectura de información) y footer
  institucional.
- Home completo: Hero (sin vídeo, fallback CSS — ver ADR-006), Introducción, Las vidas de Cervantes,
  Timeline preview, Obras destacadas, teaser del Quijote, secciones "próximamente" de Lugares/Contexto/
  Legado/Biblioteca, Curiosidades, CTA final.
- Rutas: `/cervantes`, `/linea-de-tiempo`, `/obras`, `/obras/[slug]` (SSG), `/quijote`,
  `/mundo-de-cervantes`, `/legado`, `/biblioteca`.
- Capa de contenido (`src/types/content.ts`, `src/content/*.json`, `src/lib/content.ts`) con 6 obras, 12
  años ancla de timeline, 7 perfiles de "vidas de Cervantes" y 6 curiosidades — **todo marcado
  `pendiente_de_verificacion`**, sin datos históricos inventados.
- SEO base: metadata por página, `sitemap.ts`, `robots.ts`.
- `AGENTS.md` para evitar que `next dev`/`next build` escriban su bloque de instrucciones dentro de
  `CLAUDE.md` (conflicto de convención detectado y resuelto en esta sesión).

### Corregido

- `docs/ARCHITECTURE.md`: ESLint corregido de 10.9.1 (propuesto en Fase 0) a 9.39.5, verificado
  empíricamente por incompatibilidad real de peer dependencies con `eslint-config-next@16.3.4` (ver ADR-005).

### Documentación

- Actualizados `CLAUDE.md`, `docs/DESIGN_SYSTEM.md`, `docs/DECISIONS.md` (ADR-005, ADR-006),
  `docs/CONTENT_STATUS.md`, `docs/SEO.md`, `docs/ACCESSIBILITY.md`, `docs/PERFORMANCE.md`.

### Pruebas

- `tsc --noEmit`: limpio. `npm run lint`: limpio (0 errores tras corregir comillas sin escapar). `npm run
  build`: exitoso, 19 rutas generadas (estático/SSG). Verificación visual en navegador: Home completo,
  ficha de obra dinámica, navegación responsive, modo claro/oscuro, sin errores de consola.

### Estado

Implementado en `feature/mvp-scaffold`, sin mergear. **Sin Preview de Vercel todavía** — pendiente
confirmación explícita del usuario para crear la integración GitHub↔Vercel.
