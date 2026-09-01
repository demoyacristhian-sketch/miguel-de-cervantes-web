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

Implementado en `feature/mvp-scaffold`. Vercel conectado, Preview generado y revisado por el usuario. Ver
entrada siguiente para el cierre de Fase 1.

---

## 2026-09-01 — v0.1.0 — rama `develop`

**Commit:** `d4ddf1c` (merge de `feature/mvp-scaffold`)

### Añadido

- Merge de `feature/mvp-scaffold` a `develop`: todo lo listado en la entrada `v0.1.0-mvp-scaffold` queda
  integrado en `develop`.

### Documentación

- `docs/MASTER_PROJECT.md`: Fase 1 marcada como COMPLETADA; Fase 2 (Contenido) marcada como EN CURSO.
- `CLAUDE.md`: estado de desarrollo, última implementación y próximo paso actualizados para reflejar el
  cierre de Fase 1 y el inicio de Fase 2 (investigación de fuentes).

### Estado

Fase 1 (MVP) cerrada tras revisión del usuario sobre el Preview de Vercel. `main`/producción sin tocar. Fase
2 (Contenido — investigación de fuentes reales) iniciada por instrucción explícita del usuario.

---

## 2026-09-01 — v0.2.0-contenido-inicial — rama `content/fuentes-timeline-obras-vidas`

**Commit:** `d3e09e0`
**Preview:** `https://miguel-de-cervantes-56owrje56-cdmlabs.vercel.app` (generado automáticamente por la
integración Git de Vercel al hacer push — sin `vercel deploy` manual, conforme a la regla derivada de
ADR-007)

### Añadido

- `docs/SOURCES.md`: SRC-001 (Cronología de la Biblioteca Virtual Miguel de Cervantes, por Florencio Sevilla
  Arroyo y Begoña Rodríguez Rodríguez — FUENTE INSTITUCIONAL) y SRC-002 (CNN en Español, cruzada con Cope y
  otras coberturas — FUENTE SECUNDARIA VERIFICADA, sobre el desfase de calendario juliano/gregoriano).
- `src/content/timeline.json`: los 12 años ancla pasan de `pendiente_de_verificacion` a `verificado`, con
  descripción real y `sourceIds: ["SRC-001"]`.
- `src/content/works.json`: las 6 obras pasan a `verificado` para título/tipo/año de publicación
  (`sourceIds: ["SRC-001"]`); las fichas ampliadas siguen pendientes.
- `src/content/lives.json`: los 7 perfiles de "Las vidas de Cervantes" pasan a `verificado` con descripción
  real y fuente; se añaden campos `status`/`sourceIds` al tipo `LifeProfile`.
- `src/content/curiosities.json`: 2 de 6 curiosidades verificadas y respondidas ("¿murieron el mismo día
  Cervantes y Shakespeare?", "¿por qué el manco de Lepanto?"); se añade `sourceIds` a todas las entradas.

### Modificado

- `src/components/sections/LivesOfCervantes.tsx` y `CuriositiesTeaser.tsx`: ahora muestran descripción o
  respuesta real y el `VerificationBadge` correspondiente por entrada.
- `src/app/linea-de-tiempo/page.tsx`: texto introductorio actualizado para reflejar que los 12 eventos ya
  están verificados.

### Documentación

- `docs/CONTENT_STATUS.md` actualizado con el desglose real de verificación por módulo.

### Pruebas

- `tsc --noEmit`, `npm run lint` y `npm run build`: limpios. Verificación visual en navegador de Home
  (Las vidas de Cervantes, Timeline) y `/linea-de-tiempo`: badges "Verificado" renderizando correctamente,
  sin errores de consola.

### Estado

Primera iteración de Fase 2 completada. Pendiente: las 4 curiosidades restantes, las fichas ampliadas de
obra, personajes, contexto histórico y la biografía narrativa completa.

---

## 2026-09-01 — v0.2.1-curiosidades-completas — rama `content/fuentes-timeline-obras-vidas`

**Commit:** `df024d4`
**Preview:** `https://miguel-de-cervantes-hhvm0usyq-cdmlabs.vercel.app` (generado automáticamente por la
integración Git de Vercel)

### Añadido

- `docs/SOURCES.md`: SRC-003 (informe oficial del Ayuntamiento de Madrid/Sociedad de Ciencias Aranzadi,
  2015, sobre la búsqueda de los restos de Cervantes — FUENTE PRIMARIA), SRC-004 (Centro Virtual Cervantes,
  Instituto Cervantes, sobre el proceso de impresión del Quijote — FUENTE INSTITUCIONAL) y SRC-005 (ensayo
  académico de Daniel Eisenberg en la Biblioteca Virtual Miguel de Cervantes — FUENTE ACADÉMICA).
- `src/content/curiosities.json`: las 4 curiosidades restantes quedan verificadas y respondidas — dónde
  están sus restos (con la cita textual de la conclusión oficial de 2015, sin sobreafirmar identificación
  individual ni ADN), cómo llegó a publicarse el Quijote, qué se sabe de sus ingresos (con la advertencia
  académica explícita de que Cervantes solía exagerar su pobreza ante mecenas) y qué se sabe de su aspecto
  físico (autorretrato del prólogo de las Novelas ejemplares; ningún retrato pictórico de autenticidad
  confirmada).

### Documentación

- `docs/CONTENT_STATUS.md`: curiosidades marcadas TERMINADO/VERIFICADO (6/6).

### Pruebas

- `tsc --noEmit`, `npm run lint` y `npm run build`: limpios. Verificación visual de las 6 tarjetas de
  curiosidades en Home, sin errores de consola.

### Estado

Las 6 curiosidades del MVP quedan verificadas contra fuentes primarias/institucionales/académicas. Pendiente
en Fase 2: fichas ampliadas de obra, personajes, contexto histórico y biografía narrativa completa.

---

## 2026-09-01 — v1.0.0-produccion — rama `main`

**Commit:** `d886473` (merge `develop` → `main`)
**Producción:** `https://miguel-de-cervantes-web.vercel.app` (deployment
`https://miguel-de-cervantes-61ziii0ok-cdmlabs.vercel.app`)
**Aprobación:** Usuario, instrucción explícita: "Actualiza ya la producción con el contenido verificado
actual" (ver ADR-008 en `docs/DECISIONS.md`)

### Añadido / Modificado

- Se mergea todo lo acumulado en `develop` (Fase 1 completa + primera iteración de Fase 2: timeline, obras,
  vidas de Cervantes y curiosidades verificadas) a `main`, disparando el primer despliegue de producción
  real y aprobado (el anterior, ADR-007, fue accidental).

### Documentación

- `docs/MASTER_PROJECT.md`: tabla de despliegues actualizada con ambos eventos de producción.
- `docs/DEPLOYMENT.md`: confirmada la rama de producción de Vercel (`main`, vía API) y registrado el evento.
- `docs/DECISIONS.md`: ADR-008.

### Estado

Producción refleja fielmente el estado verificado del proyecto a esta fecha. Esta aprobación es puntual, no
permanente: cualquier futuro cambio a `main` requiere una nueva aprobación explícita del usuario.
