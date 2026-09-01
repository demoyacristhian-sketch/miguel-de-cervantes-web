# CLAUDE.md — Fuente de verdad operativa del proyecto

> Este archivo es la ÚNICA FUENTE DE VERDAD OPERATIVA del proyecto "Miguel de Cervantes".
> Debe leerse ANTES de cualquier tarea nueva y actualizarse DESPUÉS de cualquier implementación relevante.
> Si una sesión de Claude Code no tiene contexto conversacional, debe reconstruirlo leyendo este archivo
> y el resto de `/docs` antes de preguntar nada al usuario.

---

## 1. Identidad

- **Nombre del proyecto:** Miguel de Cervantes — "El universo de Cervantes"
- **Descripción:** Plataforma web editorial e histórica dedicada a la vida, obra y legado de Miguel de Cervantes Saavedra.
- **Cliente:** Proyecto propio del desarrollador (sin cliente externo formal). Tratado con criterios de proyecto real de producción, no como prototipo.
- **Objetivo:** Ofrecer una experiencia digital rigurosa, accesible y visualmente premium para descubrir la vida, las obras (con foco especial en *Don Quijote*), el contexto histórico y el legado de Cervantes.
- **Público objetivo:** público general, estudiantes, profesores, aficionados a la literatura, investigadores no especializados, turismo cultural.
- **Alcance actual:** Fase 0 (Descubrimiento y Preparación) completada. Ninguna funcionalidad de producto implementada todavía.

## 2. Arquitectura técnica actual

> Ver detalle completo y justificación en [`/docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

| Capa | Elección propuesta | Versión verificada (npm, 2026-09-01) |
|---|---|---|
| Framework | Next.js (App Router) | 16.3.4 |
| Librería UI | React | 19.2.8 |
| Lenguaje | TypeScript | **6.0.3** (NO 7.0.2 — ver ADR-001) |
| Estilos | Tailwind CSS | 4.3.3 |
| Linter | ESLint + eslint-config-next | **9.39.5** (no 10.x, ver `ARCHITECTURE.md`) / 16.3.4 |
| Despliegue | Vercel | CLI 54.4.1 (proyecto Vercel aún no creado) |
| Contenido | JSON estructurado versionado en Git (ver `/docs/CONTENT_MODEL.md`) | — |
| Base de datos | Ninguna en MVP (posible migración futura a Supabase/PostgreSQL) | — |

Estado: scaffold de Next.js creado en Fase 1 (`create-next-app` + ajustes manuales). `npm run lint`,
`tsc --noEmit` y `npm run build` pasan limpios; las 19 rutas se generan estáticamente. Sin proyecto Vercel
todavía (pendiente de aprobación explícita para la integración GitHub↔Vercel, ver §8).

## 3. Arquitectura del contenido

Entidades definidas (modelo, no datos): `Person`, `Work`, `Character`, `Place`, `HistoricalEvent`, `TimelineEvent`, `Source`, `Document`, `Topic`, `Quote`, `Curiosity`, `HistoricalContext`, `MediaAsset`.
Detalle y relaciones en [`/docs/CONTENT_MODEL.md`](docs/CONTENT_MODEL.md). Subconjunto implementado en Fase 1
(`src/types/content.ts`, `src/content/*.json`, `src/lib/content.ts`): `Work`, `TimelineEvent`, `LifeProfile`,
`Curiosity`. **Ningún dato histórico está verificado todavía** — todo registro incluye
`status: "pendiente_de_verificacion"` y se renderiza con un badge visible; la verificación contra fuentes
empieza en Fase 2.

## 4. Estado del desarrollo

| Área | Estado |
|---|---|
| Fundación / documentación | **APROBADO** (Fase 0 ejecutada 2026-09-01) |
| Arquitectura técnica | **EN DESARROLLO** (scaffold real creado y validado: lint + typecheck + build limpios) |
| Repositorio GitHub | PRODUCCIÓN (rama `main` sin tocar), `develop` al día con el MVP, `feature/mvp-scaffold` mergeada |
| Vercel | Conectado (proyecto `miguel-de-cervantes-web`, team CDM Labs); ver ADR-007 |
| Contenido histórico | **EN ANÁLISIS** (Fase 2 iniciada) — estructura lista, cero datos verificados todavía |
| Diseño visual | APROBADO para MVP (tokens Tailwind v4, Playfair Display + Inter, revisado por el usuario) |
| MVP (Home, Bio, Timeline, Obras, Quijote) | **APROBADO** — Fase 1 cerrada, mergeada a `develop` |
| Pregunta a Cervantes (IA/RAG) | BLOQUEADO — requiere aprobación específica de arquitectura y costes (Fase 5) |

## 5. Última implementación

- **Fecha:** 2026-09-01
- **Rama:** `develop` (merge de `feature/mvp-scaffold`, commit `d4ddf1c`)
- **Commit:** `4c7554d` (implementación) — ver `d4ddf1c` para el merge a `develop`
- **Qué se hizo:** Scaffold real de Next.js 16.3.4 (App Router, `src/`) con TypeScript 6.0.3, Tailwind CSS
  4.3.3, ESLint 9.39.5. Sistema de diseño implementado (paleta, tipografía Playfair Display/Inter, modo
  oscuro). Layout raíz con skip link, header/nav responsive, footer institucional. Home completo (Hero sin
  vídeo — fallback CSS, Introducción, Las vidas de Cervantes, Timeline preview, Obras destacadas, teaser del
  Quijote, secciones pendientes de Lugares/Contexto/Legado/Biblioteca, Curiosidades, CTA). Páginas
  `/cervantes`, `/linea-de-tiempo`, `/obras`, `/obras/[slug]`, `/quijote`, `/mundo-de-cervantes`, `/legado`,
  `/biblioteca`. SEO base (`sitemap.ts`, `robots.ts`, metadata por página). Todo el contenido histórico está
  marcado `pendiente_de_verificacion` con badge visible — cero datos inventados.
- **Archivos afectados:** ~30 archivos nuevos bajo `src/`, `package.json`, `tsconfig.json`,
  `eslint.config.mjs`, `next.config.ts`, `postcss.config.mjs`, `AGENTS.md` (nuevo — evita que `next dev`
  escriba en este `CLAUDE.md`, ver nota en ese archivo), `.gitignore`, `.env.example`, y actualizaciones en
  `docs/ARCHITECTURE.md`, `docs/DESIGN_SYSTEM.md`.
- **Pruebas:** `tsc --noEmit` limpio, `npm run lint` limpio (0 errores), `npm run build` exitoso (19 rutas,
  todas estáticas o SSG), verificación visual en navegador (Home completo, ficha de obra dinámica, modo
  claro/oscuro, sin errores de consola).
- **Estado:** Fase 1 **CERRADA** — revisada por el usuario sobre el Preview de Vercel, mergeada a `develop`.
  `main`/producción sin tocar (salvo el incidente ADR-007, de bajo impacto y aceptado). Fase 2 (Contenido)
  iniciada por instrucción explícita del usuario ("Mergea a develop y empieza Fase 2").
- **Pendientes:** investigación de fuentes reales para el timeline (12 años ancla), las 6 obras, los 7
  perfiles de "vidas de Cervantes" y las curiosidades — ver `docs/SOURCES.md` (vacío) y
  `docs/CONTENT_STATUS.md`.

## 6. Decisiones vigentes

Ver registro completo en [`/docs/DECISIONS.md`](docs/DECISIONS.md). Resumen de las más relevantes:

- **ADR-001:** Usar TypeScript **6.0.3** en lugar de la versión más reciente 7.0.2. Motivo: TS 7 elimina la API programática JS del compilador (`lib/typescript.js`); ESLint, editores y parte del ecosistema aún no la soportan de forma estable (Next.js solo la soporta vía flag experimental `experimental.useTypeScriptCli` desde 16.3). Se revisará en una fase posterior cuando el ecosistema madure.
- **ADR-002:** Repositorio GitHub público `demoyacristhian-sketch/miguel-de-cervantes-web`. Sin organización (la cuenta no tiene organizaciones disponibles).
- **ADR-003:** Sin CMS externo en el MVP. Contenido como JSON estructurado versionado en Git, con arquitectura migrable a Supabase/PostgreSQL sin reescritura completa.
- **ADR-004:** "Pregunta a Cervantes" (IA/RAG) explícitamente diferido a Fase 5, bloqueado hasta aprobación específica de arquitectura, costes y mitigación de alucinaciones.

## 7. Reglas permanentes

Estas reglas provienen del prompt maestro del proyecto y son de cumplimiento obligatorio durante toda la vida del proyecto:

1. **Human-in-the-loop:** ningún merge a `main`, deployment de producción, cambio de configuración/DNS/variables de entorno de producción, ni eliminación de datos/recursos se ejecuta sin una instrucción inequívoca del usuario equivalente a `APROBADO PARA PRODUCCIÓN`. Frases ambiguas ("perfecto", "continúa", "me gusta") NO cuentan como aprobación.
2. **Anti-alucinación:** nunca inventar datos históricos, fechas, citas, fuentes, derechos de imagen o decisiones de negocio. Todo lo no verificable se marca `PENDIENTE DE VERIFICACIÓN` y no se publica.
3. **Fuentes:** priorizar fuentes primarias/institucionales (BNE, Biblioteca Virtual Miguel de Cervantes, Instituto Cervantes, RAE, universidades). Wikipedia solo como pista inicial, nunca como fuente final para historia relevante.
4. **Trazabilidad:** cada dato histórico significativo debe tener `sourceIds` verificables en `/docs/SOURCES.md`.
5. **Imágenes:** nunca usar una imagen sin registrar título, autor, licencia y derechos en `/public/media/manifest.json`. Ante duda, no publicar.
6. **Refresh de contexto obligatorio:** antes de cualquier tarea nueva, releer este archivo + `/docs/MASTER_PROJECT.md` + `/docs/DECISIONS.md` + `/docs/SOURCES.md` + `/docs/CONTENT_STATUS.md` + estado de Git, antes de programar.
7. **No sobreingeniería:** priorizar claridad y mantenibilidad sobre arquitecturas distribuidas, librerías o abstracciones innecesarias.
8. **Roadmap estricto:** no adelantar fases del roadmap oficial (`/docs/MASTER_PROJECT.md` §Roadmap) sin aprobación.
9. **Seguridad:** nunca subir `.env`, secretos ni API keys al repositorio. Mantener `.env.example` sin valores reales.
10. **Fin de sesión:** actualizar `CLAUDE.md`, `CHANGELOG.md`, `CONTENT_STATUS.md`, `SOURCES.md` y `DECISIONS.md` (cuando proceda) antes de cerrar cualquier sesión de trabajo.
11. **Despliegues Vercel vía CLI:** nunca ejecutar `vercel deploy` sin `--target=preview` explícito (ver ADR-007 — el primer deployment de un proyecto nuevo se promueve automáticamente a producción incluso sin `--prod`). Preferir siempre que el despliegue salga de la integración Git (push de rama).

## 8. Próximo paso

Fase 1 cerrada y mergeada a `develop`. **Único próximo paso lógico:** ejecutar la investigación documental
de Fase 2 — para cada año del timeline y cada obra en `src/content/*.json`, buscar y registrar en
`/docs/SOURCES.md` una fuente `FUENTE PRIMARIA`/`FUENTE INSTITUCIONAL`/`FUENTE ACADÉMICA` real (BNE,
Biblioteca Virtual Miguel de Cervantes, Instituto Cervantes, RAE, Museo Casa de Cervantes, universidades),
y solo entonces actualizar el `status` de cada registro de `pendiente_de_verificacion` a `verificado` con su
`sourceIds` correspondiente. Ninguna fecha o hecho biográfico se publica como definitivo sin esa
verificación. No toca `main`/producción.

**Nota de incidente (ver ADR-007 en `docs/DECISIONS.md`):** el primer despliegue de Vercel quedó publicado
como producción por un comportamiento automático de la plataforma (primer deployment de un proyecto nuevo),
no por una acción deliberada sin permiso. Fue comunicado de inmediato y el usuario aceptó dejarlo así por su
bajo impacto. Regla derivada ya aplicada: no ejecutar `vercel deploy` sin `--target=preview` explícito de
aquí en adelante.
