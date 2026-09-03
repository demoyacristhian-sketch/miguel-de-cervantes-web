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

---

## 2026-09-02 — v1.5.0-cronologia-continua — rama `design/vida-en-movimiento`

**Commit:** `5309920`
**Preview:** `https://miguel-de-cervantes-enozy98ra-cdmlabs.vercel.app`

A petición del usuario, que señaló que la biografía no se leía como una secuencia clara de nacimiento a
muerte (ver ADR-012 en `docs/DECISIONS.md`), con dos referencias visuales (nownlab.es/soluciones y un
"story" de Google Arts & Culture):

### Añadido

- 7 imágenes nuevas con derechos verificados individualmente vía la API de Wikimedia Commons (no solo por
  aparecer en un buscador): retrato de Cervantes (Hero), mapa de Alcalá de Henares, "The Battle of Lepanto"
  de Veronese, grabado de Jan Luyken sobre cautivos en Argel (1684), portadas de las primeras ediciones de
  La Galatea (1585) y Don Quijote (1605), y foto del convento de las Trinitarias Descalzas. Todas registradas
  en `public/media/manifest.json` y `docs/SOURCES.md` (SRC-007).
- `src/components/life-journey/JourneyStep.tsx`: nuevo componente para cada paso del recorrido, con
  numeración global (`N / 12`) en vez de numeración reiniciada por etapa.
- `src/lib/lifeEras.ts`: cada etapa gana un campo `image` (src, alt, crédito).

### Modificado

- `src/components/life-journey/EraScene.tsx`: layout de dos columnas — pasos verticales numerados
  continuamente + panel de imagen (`position: sticky` en desktop, cabecera no-sticky en móvil).
- `src/components/life-journey/LifeJourney.tsx`: calcula la numeración global 1-12 y la pasa a cada etapa.
- `src/components/sections/Hero.tsx`: fondo pasa de degradado CSS a foto (retrato de Jáuregui) con overlay
  oscuro para legibilidad y crédito visible.

### Eliminado

- `src/components/life-journey/EventCard.tsx` y `EventRail.tsx` (carril horizontal por etapa, reemplazado
  por el recorrido vertical continuo).

### Hallazgo de derechos

- El Museo Casa de Cervantes (cultura.gob.es) exige permiso explícito por email para reproducir imágenes;
  CERES limita el uso a fines privados/no comerciales. Se descartó como fuente y se usó Wikimedia Commons en
  su lugar, con la misma verificación rigurosa que las fuentes de texto — decisión acordada con el usuario.

### Pruebas

- `tsc --noEmit`, `npm run lint`, `npm run build`: limpios (18 rutas). Verificación visual en navegador
  (desktop y móvil, claro y oscuro): numeración continua 01/12→12/12 sin reiniciarse, panel de imagen
  confirmado `sticky` vía `getBoundingClientRect()` (se fija en `top: 112px`), Hero con buen contraste,
  contraste de texto correcto en escenas claras bajo modo oscuro del sistema, sin errores de consola.

### Estado

Sin Preview de producción todavía.

---

## 2026-09-02 — v1.6.0-produccion — rama `main`

**Commit:** `dd99c1a` (merge `develop` → `main`; `develop` en `c8aa2a9`)

### Añadido / Modificado

- Despliegue a producción de todo lo descrito en v1.4.0-vida-en-movimiento y v1.5.0-cronologia-continua
  (ver entradas anteriores): eliminación de "Inicio" y "El mundo de Cervantes" de la navegación, fusión de
  biografía y timeline en `/vida-en-movimiento` con numeración global continua (01/12→12/12), panel de
  imagen `sticky` por etapa, Hero de Home con fotografía real, y 7 imágenes con derechos verificados vía
  Wikimedia Commons.

### Pruebas

- Verificación visual directa en `https://miguel-de-cervantes-web.vercel.app`: Hero fotográfico con crédito
  visible; nav principal de 5 ítems (sin Inicio ni El mundo de Cervantes); `/vida-en-movimiento` con
  numeración continua 01/12→12/12 y las 6 imágenes por etapa; `/cervantes` y `/linea-de-tiempo` responden
  308 hacia `/vida-en-movimiento`; `/mundo-de-cervantes` responde 404 (sin sustituto, como se pidió).

### Estado

**En producción.** Ver ADR-013 en `docs/DECISIONS.md`. Aprobación explícita del usuario: "Sí, ponlo a
producción" (2026-09-02). No es una autorización permanente para futuros despliegues.

---

## 2026-09-02 — v1.7.0-secciones-completas — rama `content/quijote-legado-biblioteca`

### Añadido

- `/quijote`: pestañas interactivas (Personajes, Lugares, Aventuras, Temas, Frases) con contenido
  real investigado en el texto primario del Quijote (CVC, Instituto Cervantes) — 5 personajes, 5
  lugares, 3 aventuras, 3 temas, 2 frases verificadas por duplicado. Reemplaza la lista de 12
  subsecciones vacías.
- `/legado`: 4 tarjetas verificadas (idioma, traducciones, arte, ediciones conmemorativas), fuentes
  RAE/Instituto Cervantes/Museo Casa Natal de Picasso. Reemplaza el placeholder "Próximamente".
- `/biblioteca`: 5 tarjetas-enlace a repositorios institucionales reales + nueva sección pública
  "Fuentes y créditos" que renderiza las 9 fuentes y las 14 imágenes registradas del sitio.
  Reemplaza el placeholder "Próximamente".
- `/obras`: filtro por tipo funcional, tarjetas con portada de primera edición (6/6 obras).
- `/obras/[slug]`: cabecera con portada; 3 campos destacados siempre visibles (Contexto, Argumento,
  Temas) y el resto agrupado en un acordeón "Más detalles".
- Hero de Home rediseñado como layout editorial de dos zonas (texto sobre `bg-ink` sólido, retrato
  contenido en su propio panel) con animación de entrada escalonada y zoom lento en la imagen.
- 7 imágenes nuevas de Wikimedia Commons, verificadas individualmente vía su API antes de usarse:
  4 portadas de primera edición (Novelas ejemplares 1613, Viaje del Parnaso 1614, Ocho comedias
  1615, Persiles 1617), la Segunda Parte del Quijote (1615) y 2 grabados de Gustave Doré (1863).
- `src/content/quijote.json`, `src/content/legado.json`, `src/content/sources.json` y el tipo
  `MediaAsset` (lee `public/media/manifest.json` desde `getMediaManifest()`).
- `src/components/ui/Reveal.tsx` (fade-in-on-view), `QuijoteTabs.tsx`, `WorksFilter.tsx`.
- SRC-008 (texto primario del Quijote en CVC) y SRC-009 (legado) en `docs/SOURCES.md`.

### Modificado

- Footer: se sustituyó el disclaimer genérico por el crédito de TFG del autor del proyecto.

### Pruebas

- `tsc --noEmit`, `npm run lint`, `npm run build`: limpios (18 rutas). Verificación visual: Hero en
  desktop (dos zonas) y móvil (imagen arriba, texto abajo) en claro/oscuro; pestañas de Quijote
  funcionando (Personajes/Lugares/Aventuras/Temas/Frases); acordeones de Obras y Biblioteca
  abriendo correctamente (9 fuentes, 14 imágenes); imágenes nuevas cargando (`complete: true` vía
  JS) tras descartar un artefacto conocido de la herramienta de capturas (ver notas de sesiones
  anteriores). Sin errores de consola.

### Estado

Implementado y verificado en local, **sin desplegar todavía** — pendiente de merge a `develop` y de
aprobación explícita del usuario para producción. Ver ADR-014.

---

## 2026-09-02 — v1.8.0-home-cinematografica — rama `design/home-cinematografica`

### Añadido

- Home rediseñada como historia a pantalla completa (estilo Google Arts & Culture): Hero + 4 paneles
  nuevos ("Una vida, una historia", "Obras", "Don Quijote", "Sigue explorando") con scroll-snap
  nativo de CSS, imagen de fondo real por panel (todas ya verificadas, ninguna nueva) y rail de
  progreso vertical en desktop (`StoryProgressNav`).
- `src/components/home/StorySlide.tsx`, `src/components/home/StoryProgressNav.tsx`.
- `src/components/ui/BackLink.tsx` — botón "← Volver" añadido a Obras, Don Quijote, Legado,
  Biblioteca, Curiosidades y Una vida, una historia.
- Animación `hero-zoom-loop` (zoom lento en loop infinito, antes se ejecutaba una sola vez).

### Modificado

- Hero: de layout de dos paneles a una imagen a pantalla completa con degradado direccional (una
  sola superficie fotográfica, sin panel de color sólido separado).
- "Una vida en movimiento" renombrada a **"Una vida, una historia"** en nav, footer, la página y
  `sources.json`. La ruta `/vida-en-movimiento` no cambia.

### Eliminado

- `Introduction.tsx`, `LivesOfCervantes.tsx`, `TimelinePreview.tsx`, `FeaturedWorks.tsx`,
  `QuijoteTeaser.tsx`, `CuriositiesTeaser.tsx`, `PendingSection.tsx`, `ComingSoonPage.tsx` — su
  contenido se reorganizó dentro de los nuevos paneles de Home; sin otro uso en el sitio.

### Pruebas

- `tsc --noEmit`, `npm run lint`, `npm run build`: limpios (18 rutas). Verificación visual y por
  DOM/`getComputedStyle` (desktop, móvil, claro/oscuro): Hero de superficie única confirmado, zoom
  en loop confirmado (`animationPlayState: running`), los 5 paneles renderizan con su imagen,
  degradado y contenido correctos, rail de progreso activo por scroll, botón "Volver" presente y
  funcional (usa historial real o `fallbackHref`), rebautizo confirmado en el H2 del panel
  ("Una vida, una historia") vía `getComputedStyle`/DOM. La herramienta de capturas mostró
  intermitentemente fotogramas en blanco/negro en posiciones de scroll específicas combinadas con
  viewport emulado — descartado como artefacto de la herramienta (no del código) tras verificar en
  una pestaña nueva y por inspección directa del DOM en cada caso.

### Estado

Implementado y verificado en local, **sin desplegar todavía** — pendiente de merge a `develop` y de
aprobación explícita del usuario para producción. Ver ADR-015.

---

## 2026-09-02 — v1.9.0-produccion — rama `main`

**Commit:** `2b0ff57` (merge `develop` → `main`)

### Añadido / Modificado

- Despliegue a producción de todo lo descrito en v1.7.0-secciones-completas y
  v1.8.0-home-cinematografica (ver entradas anteriores): Obras/Don Quijote/Legado/Biblioteca
  completos, Home rediseñada como historia a pantalla completa, Hero de superficie única con zoom
  en loop, rebautizo "Una vida en movimiento" → "Una vida, una historia", botón "← Volver".
- Corrección: URLs largas sin espacios (p. ej. el informe del Ayuntamiento de Madrid, SRC-003) ya
  no desbordan las tarjetas de "Fuentes y créditos" en `/biblioteca` (`word-break: break-all`).

### Pruebas

- Verificación visual y por `getBoundingClientRect()` directa en
  `https://miguel-de-cervantes-web.vercel.app`: Home cinematográfica con los 5 paneles correctos;
  `/biblioteca` con los 9 enlaces de "Fuentes documentales" confirmados sin desbordar sus tarjetas.

### Estado

**En producción.** Ver ADR-016 en `docs/DECISIONS.md`. Aprobación explícita del usuario: "sí, ponlo
a producción" (2026-09-02). No es una autorización permanente para futuros despliegues.

---

## 2026-09-02 — v1.9.1-fixes — rama `fix/movil-scroll-menu-curiosidades`

### Corregido

- (Ya en producción, `28e4d9a`, sin entrada previa) `/biblioteca`: el acordeón "Fuentes
  documentales" ya no se despliega automáticamente al cargar la página — queda cerrado como
  "Imágenes", hasta que el usuario lo abre.
- Scroll de Home en móvil: `min-h-screen` → `min-h-dvh` en `Hero.tsx` y `StorySlide.tsx`. `100vh`
  no descontaba la barra de direcciones del navegador móvil, así que cada panel medía más que el
  área realmente visible y el scroll-snap nunca encajaba con lo que se veía en pantalla. El
  scroll-snap por paneles se mantiene igual en todos los tamaños — no se quitó ni se simplificó en
  móvil, solo se corrigió la unidad de altura.
- Hero: el encuadre del retrato en móvil (antes `object-position: right 25%`, pensado solo para
  escritorio) recortaba el rostro casi por completo. Ahora usa un encuadre específico para móvil
  (`object-[35%_15%]`) que mantiene la cara centrada; escritorio conserva el encuadre original.
- Menú móvil: `SiteHeader.tsx` usaba `<details>` nativo, que solo se cierra si se vuelve a tocar el
  propio botón. Nuevo `src/components/layout/MobileNav.tsx` (cliente) cierra el menú al tocar fuera
  o al elegir cualquier enlace.
- Curiosidades: las 6 preguntas mostraban su respuesta completa siempre, obligando a mucho scroll
  en móvil y escritorio. Ahora son un acordeón (`<details>` por pregunta, indicador "+" en dorado
  que rota al abrir, entrada con fade vía `@starting-style`) — mismo patrón ya usado en Biblioteca
  y Obras. Ningún dato se pierde, solo queda a un toque de distancia.

### Pruebas

- `tsc --noEmit`, `npm run lint`, `npm run build` limpios. Verificación por JavaScript/DOM en
  viewport móvil (375×812) y escritorio (1440×900): altura del Hero igual a `window.innerHeight`
  en ambos, `object-position` correcto por breakpoint, menú confirmado cerrando al tocar fuera y al
  elegir un enlace (`aria-expanded` verificado antes/después), acordeón de Curiosidades abriendo y
  con el icono rotando (`getComputedStyle(...).rotate === "45deg"` — Tailwind v4 usa la propiedad
  CSS `rotate` en vez de `transform` para estas utilidades), sin regresión en escritorio
  (scroll-snap y encuadre del Hero idénticos a antes).

### Estado

**En producción** (commit `6819f2a` en `main`). Aprobación explícita del usuario: "sí, ponlo a
producción" (2026-09-02). Verificado en producción vía navegador: `min-h-dvh` correcto en móvil
(altura del Hero = `innerHeight`), encuadre `35% 15%` aplicado, acordeón de Curiosidades cerrado
por defecto.

---

## 2026-09-03 — v2.0.0-ampliacion-contenido — rama `content/ampliacion-obras-quijote-biografia`

### Añadido

- Obras: campos nuevos en 5/6 fichas ampliadas — La Galatea (personajes, influencia), Novelas
  ejemplares (temas), Viaje del Parnaso (estructura, temas), Ocho comedias y ocho entremeses
  (argumento, influencia), Persiles (estructura, recepción). Fuentes nuevas SRC-011 a SRC-015.
- Quijote: 5 personajes nuevos (el cura y el barbero, Cardenio, Dorotea, Maese Pedro/Ginés de
  Pasamonte, Teresa Panza) con sub-filtro Principales/Secundarios; 2 lugares (Zaragoza, Ínsula
  Barataria); 4 aventuras (galeotes, retablo de Maese Pedro, gobierno de la Ínsula Barataria, cueva
  de Montesinos); 2 temas (amor idealizado, sátira social); 1 frase nueva verificada por duplicado
  ("Con la iglesia hemos dado, Sancho"). Párrafo de síntesis de la novela al inicio de la página.
- Biografía (antes "Una vida, una historia"): 2 eventos nuevos (matrimonio en Esquivias 1584,
  cárcel de Sevilla 1597 con la cita verificada del prólogo del Quijote), ampliación del evento de
  1605 con el proceso Ezpeleta completo, y un párrafo de resumen biográfico al inicio de la página.
  El recorrido pasa de 12 a 14 pasos.
- SRC-010 a SRC-015 en `docs/SOURCES.md` y su espejo público en `src/content/sources.json`.

### Modificado

- "Una vida, una historia" renombrada a "Biografía" en nav, footer, la página y el panel de Home.
- Footer: "TFG"/"Trabajo de Fin de Grado" → "TFM"/"Trabajo de Fin de Máster".
- SRC-008 ampliada con los nuevos capítulos y citas del Quijote consultados.

### Pruebas

- `tsc --noEmit`, `npm run lint`, `npm run build` limpios. Verificación por DOM/`get_page_text`:
  Biografía con 14/14 pasos y resumen inicial visible; Quijote con 10/6/7/5/3 tarjetas por
  categoría, filtro Principales (5) confirmado, las 3 frases visibles con el texto exacto
  verificado; Obras con los campos nuevos visibles en el acordeón "Más detalles"; Biblioteca con 15
  fuentes documentales; footer con "TFM". Corregido en el proceso: el sub-filtro de personajes
  filtraba por error también las demás pestañas (Lugares/Aventuras/Temas/Frases mostraban 0
  resultados) hasta acotar el filtro a `active === "personaje"`.

### Estado

Implementado y verificado en local, **sin desplegar todavía** — pendiente de merge a `develop` y de
aprobación explícita del usuario para producción. Ver ADR-017.

---

## 2026-09-04 — v2.1.0-ampliacion-wikipedia-como-pista — rama `content/ampliacion-obras-quijote-biografia`

### Añadido

- Biografía: familia completa de Cervantes (padre cirujano, seis hermanos nombrados); los cuatro
  intentos de fuga documentados durante el cautiverio en Argel; nacimiento de su hija Isabel de
  Saavedra (1584, fuente: Real Academia de la Historia); encarcelamiento en Castro del Río (1592,
  distinto del ya registrado de Sevilla 1597). De 14 a 16 pasos; resumen inicial ampliado.
- Obras: La Galatea gana el dato de su estructura en seis libros (fuente: catálogo de la Biblioteca
  Nacional de España).
- Quijote: nuevo tema "Una crítica literaria dentro de la novela" (el canónigo de Toledo censura
  los libros de caballerías y las comedias de su época, capítulos XLVII-XLVIII).
- Legado: 2 entradas nuevas — el Premio Cervantes (Universidad de Alcalá) y el Día Internacional
  del Libro (UNESCO). De 4 a 6 entradas.
- SRC-016 a SRC-021 en `docs/SOURCES.md` y su espejo público; SRC-008 ampliada.

### Nota metodológica

El usuario pidió usar es.wikipedia.org/wiki/Miguel_de_Cervantes como fuente y citarla. Por la regla
permanente del proyecto (Wikipedia solo como pista, nunca como fuente final), el artículo se usó
exclusivamente para identificar qué añadir y qué historiadores/archivos lo respaldan — cada dato se
verificó de forma independiente antes de publicarse. Wikipedia no aparece citada en ningún dato
publicado. Ver ADR-018.

### Pruebas

- `tsc --noEmit`, `npm run lint`, `npm run build` limpios. Verificación por DOM: Biografía con
  16/16 pasos y los eventos nuevos en orden cronológico correcto dentro de su etapa; Quijote con 6
  temas; Legado con 6 entradas; Biblioteca con 21 fuentes documentales; La Galatea con el campo
  "Estructura" visible en el acordeón.

### Estado

Implementado y verificado en local, **sin desplegar todavía** — pendiente de merge a `develop` y de
aprobación explícita del usuario para producción. Ver ADR-018.

---

## 2026-09-04 — v2.2.0-textos-desarrollados — rama `develop`

### Añadido

- `works.json`: campo nuevo `description` (varios párrafos, 200-450 palabras según la obra) en las
  6 obras, sintetizando en prosa los datos ya verificados de cada ficha — sin ningún hecho nuevo.
- `/obras/[slug]`: sección "Sobre la obra" con el texto desarrollado, antes de los campos destacados
  y del acordeón (renombrado "Ficha completa"), que pasan a ser referencia estructurada.
- `/quijote`: la descripción de Don Quijote se reutiliza como "Sobre la novela", sustituyendo el
  párrafo de síntesis corto anterior.
- `/legado`: introducción narrativa de cuatro párrafos antes de las 6 tarjetas existentes.

### Nota metodológica

El usuario insistió en que el problema no era la cantidad de datos sino el formato — "no 4 tarjetas
con información aislada". No se investigó ni se citó ninguna fuente nueva: es una reorganización
editorial de contenido ya verificado en ADR-014/017/018. Ver ADR-019.

### Pruebas

- `tsc --noEmit`, `npm run lint`, `npm run build` limpios. Verificación por DOM/`get_page_text`: las
  6 obras muestran "Sobre la obra" con el texto completo; `/quijote` muestra "Sobre la novela";
  `/legado` muestra la introducción de 4 párrafos antes de las tarjetas. Contraste verificado en
  modo oscuro y móvil.

### Estado

Implementado y verificado en local, **sin desplegar todavía** — pendiente de aprobación explícita
del usuario para producción. Ver ADR-019.

---

## 2026-09-04 — v2.3.0-produccion — rama `main`

**Commit:** `7eaab79` (merge `develop` → `main`)

### Añadido / Modificado

- Despliegue a producción de todo lo descrito en v2.0.0, v2.1.0 y v2.2.0 (ver entradas anteriores):
  ampliación de Obras/Quijote/Biografía/Legado, rebautizo a "Biografía", textos "Sobre la
  obra"/"Sobre la novela", introducción narrativa de Legado, footer con "TFM".
- Footer: "sus estudios" → "mis estudios" (voz en primera persona).

### Pruebas

- Verificación visual y por DOM directa en `https://miguel-de-cervantes-web.vercel.app`: "Sobre la
  obra" visible en `/obras/don-quijote-de-la-mancha`; footer con "mis estudios" confirmado.

### Estado

**En producción.** Ver ADR-020 en `docs/DECISIONS.md`. Aprobación explícita del usuario: "sí, ponlo
a producción" (2026-09-04). No es una autorización permanente para futuros despliegues.
