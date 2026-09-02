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

---

## 2026-09-01 — v1.1.0-densidad — rama `design/optimizacion-densidad-home`

**Commit:** `4304988`
**Preview:** `https://miguel-de-cervantes-8giupd3ed-cdmlabs.vercel.app`

A petición del usuario ("hay demasiada información... optimizar más el diseño y funcionalidad"):

### Añadido

- `src/components/ui/ReadMore.tsx`: patrón Resumen/Profundizar sin JavaScript, usando `<details>` nativo +
  variante `group-open` de Tailwind. Trunca a ~140 caracteres con "Leer más" / "Leer menos".
- `src/app/curiosidades/page.tsx`: página dedicada con las 6 curiosidades completas (destino del "Ver
  todas" de Home).
- `src/lib/content.ts`: `getTimelineHighlights()` — cura 3 hitos icónicos (nacimiento, Quijote, muerte) para
  la vista resumida de Home en vez de los 12 años completos.

### Modificado

- `VerificationBadge`: rediseñado de pill con texto a un punto de color mínimo con tooltip accesible
  (`aria-label` + tooltip CSS en hover/focus, sin JS).
- `LivesOfCervantes`, `CuriositiesTeaser`: usan `ReadMore` para las descripciones/respuestas largas.
- `CuriositiesTeaser`, `FeaturedWorks`, `TimelinePreview`: reducidos a 3 elementos en Home (antes 6, 6 y 12
  respectivamente), cada uno con enlace "ver todo" a su página completa.
- `SiteFooter`, `sitemap.ts`: añadida la ruta `/curiosidades`.

### Pruebas

- `tsc --noEmit`, `npm run lint` y `npm run build`: limpios (20 rutas). Verificación visual: badges
  minimalistas, expand/collapse de "Leer más" probado en navegador, `/curiosidades` con las 6 completas,
  sin errores de consola.

### Estado

Cambio de diseño/UX puro, sin tocar contenido ni fuentes.

---

## 2026-09-01 — v1.1.0-produccion — rama `main`

**Commit:** `10eacb5` (merge `develop` → `main`)
**Producción:** `https://miguel-de-cervantes-web.vercel.app` (deployment
`https://miguel-de-cervantes-8uk8az5sr-cdmlabs.vercel.app`)
**Aprobación:** Usuario, instrucción explícita: "ponlo a producción" (ver ADR-009 en `docs/DECISIONS.md`)

### Estado

Producción refleja la Home optimizada (Resumen/Profundizar, badges minimalistas, secciones acortadas).
Verificado visualmente tras el despliegue. Aprobación puntual, no permanente para futuros cambios.

---

## 2026-09-01 — v1.2.0-fichas-obras — rama `content/fichas-ampliadas-obras`

**Commit:** `ae61ab5`
**Preview:** `https://miguel-de-cervantes-1rmh2jjp4-cdmlabs.vercel.app`

### Añadido

- `docs/SOURCES.md`: SRC-006 (Centro Virtual Cervantes, índice del Quijote — estructura capitular exacta).
  Se amplía el uso de SRC-005 (ensayo de Daniel Eisenberg) como fuente principal de las fichas ampliadas,
  ya que cubre con rigor académico la producción completa de Cervantes.
- `src/types/content.ts`: `Work.profile`, con 10 campos opcionales (contexto, argumento, personajes, temas,
  estructura, curiosidades, fragmentos, ediciones, recepción, influencia), cada uno con su propio
  `status`/`sourceIds` — permite verificación granular por campo, no por obra completa.
- `src/content/works.json`: ficha ampliada para las 6 obras. Don Quijote de la Mancha con las 10 secciones
  completas (incluida la cita textual de apertura, de dominio público); las otras 5 obras con los campos
  para los que se encontró información verificable — sin rellenar huecos con contenido genérico.
- `src/app/obras/[slug]/page.tsx`: renderiza cada campo con su propio `VerificationBadge` y `ReadMore`;
  cualquier campo sin investigar sigue mostrando "Pendiente de redacción y verificación (Fase 2)".

### Pruebas

- `tsc --noEmit`, `npm run lint` y `npm run build`: limpios (20 rutas). Verificación visual de la ficha
  completa de Don Quijote y de una ficha con campos mixtos (Viaje del Parnaso), sin errores de consola.

### Estado

Personajes de cada obra individual (campo "Personajes" de la ficha) quedan pendientes — se resolverán junto
con la construcción de `/quijote` en Fase 3, donde vive el modelo completo de `Character`. Resto de Fase 2
pendiente: contexto histórico general y biografía narrativa completa.

---

## 2026-09-02 — v1.3.0-produccion — rama `main`

**Commit:** `572af9c` (merge `develop` → `main`)
**Producción:** `https://miguel-de-cervantes-web.vercel.app` (deployment
`https://miguel-de-cervantes-4k0dmo5uq-cdmlabs.vercel.app`)
**Aprobación:** Usuario, instrucción explícita: "sí, ponlo a producción" (ver ADR-010)

### Estado

Producción refleja las fichas ampliadas de las 6 obras. Verificado visualmente tras el despliegue.

---

## 2026-09-02 — v1.4.0-vida-en-movimiento — rama `design/vida-en-movimiento`

**Commit:** `0090504`
**Preview:** `https://miguel-de-cervantes-uw75l6jje-cdmlabs.vercel.app`

A petición explícita y muy detallada del usuario (ver ADR-011 en `docs/DECISIONS.md`):

### Eliminado

- Nav "Inicio" (redundante con el wordmark) y "El mundo de Cervantes" (sin sustituto ni redistribución de
  contenido) — quitados de `SiteHeader`, `SiteFooter`, Home y `sitemap.ts`.
- Rutas `src/app/cervantes/`, `src/app/linea-de-tiempo/`, `src/app/mundo-de-cervantes/`.

### Añadido

- `src/lib/lifeEras.ts`: agrupa los 12 eventos verificados de `timeline.json` en 6 etapas narrativas
  editoriales (Infancia y formación, Italia y las armas, Cautiverio en Argel, El regreso y los años de
  oficio, La consagración literaria, Los últimos días). Agrupación de diseño, sin hechos nuevos.
- `src/app/vida-en-movimiento/page.tsx` + `src/components/life-journey/{LifeJourney,EraScene,EventRail,
  EventCard}.tsx`: nueva experiencia interactiva que fusiona biografía y timeline — scroll vertical por
  etapas con tono cromático propio, carril horizontal de eventos con scroll-snap nativo, expansión de nivel
  3 vía `<details>`, barra de navegación por etapas con resaltado activo (scrollspy por posición de scroll).
- `next.config.ts`: redirects 301 de `/cervantes` y `/linea-de-tiempo` a `/vida-en-movimiento`.

### Corregido

- Bug de contraste en modo oscuro: los textos de las escenas de etapa usaban tokens de tema
  (`text-foreground`) sobre fondos de degradado fijos, volviéndose invisibles quand el sistema está en modo
  oscuro. Corregido usando colores fijos (`text-ink`/`text-ivory`/`text-burgundy`), igual que ya hace
  `Hero.tsx`.
- Se retiró `backdrop-blur-sm` de las tarjetas de evento: producía un artefacto de renderizado (bloques
  grises opacos ocultando el texto) en la verificación visual — se compensó subiendo la opacidad del fondo.

### Pruebas

- `tsc --noEmit`, `npm run lint`, `npm run build`: limpios (18 rutas, sin `/cervantes` ni `/linea-de-tiempo`
  ni `/mundo-de-cervantes`). `grep` confirma cero referencias obsoletas a las rutas eliminadas.
- Verificación visual completa en navegador: recorrido de las 6 etapas en desktop y en viewport móvil
  (scroll vertical, carril horizontal con botones prev/next, expansión de tarjetas), redirects de
  `/cervantes` y `/linea-de-tiempo` confirmados, `/mundo-de-cervantes` da 404 real, Home sin huecos donde
  estaban los bloques eliminados, nav/footer sin enlaces obsoletos, modo oscuro corregido, sin errores de
  consola de la aplicación.

### Estado

Cambio de IA/UX puro sobre contenido ya verificado — ningún dato histórico nuevo. Adelanta parte de "timeline
avanzado" de Fase 3 a petición del usuario.
