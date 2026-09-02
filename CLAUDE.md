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
| Repositorio GitHub | `main` = producción real (commit `dd99c1a`), `develop` al día (`c8aa2a9`) |
| Vercel | Producción actualizada y verificada (última vez 2026-09-02, aprobación explícita del usuario); ver ADR-007 a ADR-013 |
| Contenido histórico | **EN ANÁLISIS** (Fase 2 iniciada) — estructura lista, cero datos verificados todavía |
| Diseño visual | APROBADO para MVP (tokens Tailwind v4, Playfair Display + Inter, revisado por el usuario) |
| MVP (Home, Bio, Timeline, Obras, Quijote) | **APROBADO** — Fase 1 cerrada, mergeada a `develop` |
| Pregunta a Cervantes (IA/RAG) | BLOQUEADO — requiere aprobación específica de arquitectura y costes (Fase 5) |

## 5. Última implementación

- **Fecha:** 2026-09-02
- **Rama:** `design/vida-en-movimiento`, mergeada a `develop` (`c8aa2a9`) y a `main` (`dd99c1a`) — **ya en
  producción**
- **Qué se hizo:** Ver ADR-011, ADR-012 y ADR-013 en `docs/DECISIONS.md` y las entradas correspondientes en
  `docs/CHANGELOG.md` para el detalle completo. En resumen: eliminación de "Inicio" y "El mundo de
  Cervantes" de la navegación; fusión de la biografía y el timeline en `/vida-en-movimiento`, un recorrido
  vertical con numeración global continua (01/12→12/12) e imagen real (dominio público, Wikimedia Commons)
  por etapa en panel `sticky`; Hero de Home con fotografía real (retrato atribuido a Jáuregui) en vez de
  degradado CSS. 7 imágenes nuevas con derechos verificados vía API de Wikimedia, registradas en
  `public/media/manifest.json` y `docs/SOURCES.md` (SRC-007).
- **Pruebas:** `tsc --noEmit`, `npm run lint`, `npm run build` limpios (18 rutas). Verificación visual en
  navegador: desktop y móvil, modo claro/oscuro, numeración continua confirmada, `position: sticky` del
  panel de imagen confirmado vía `getBoundingClientRect()`, sin errores de consola. Verificación adicional
  en **producción** tras el despliegue: Hero fotográfico visible, nav de 5 ítems, numeración 01/12→12/12,
  redirects 308 desde `/cervantes` y `/linea-de-tiempo`, `/mundo-de-cervantes` en 404 sin sustituto.
- **Estado:** Implementado, verificado y **desplegado a producción** (ADR-013, aprobación explícita del
  usuario "Sí, ponlo a producción", 2026-09-02).
- **Pendientes:** fichas de personajes del Quijote, contexto histórico general, y profundizar la biografía
  narrativa dentro de `/vida-en-movimiento` si se desea más allá de los 12 eventos actuales.

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

Fase 1 cerrada. Fase 2 en curso: timeline (12/12), obras (6/6 con ficha ampliada) y "vidas de Cervantes"
(7/7) verificadas; las 6 curiosidades verificadas. Home optimizada (Resumen/Profundizar, badges
minimalistas, secciones acortadas). **Reestructuración de navegación y biografía (2026-09-02, ADR-011,
ADR-012 y ADR-013) — YA EN PRODUCCIÓN:** se eliminó "Inicio" y "El mundo de Cervantes" (sin sustituto);
"Miguel de Cervantes" + "Línea de tiempo" se fusionaron en `/vida-en-movimiento`, un recorrido vertical con
numeración global continua (01/12→12/12, arregla la falta de cronología señalada por el usuario) y una
imagen real (dominio público) por etapa en un panel `sticky`. El Hero de Home pasa de degradado CSS a
fotografía real (retrato tradicionalmente atribuido a Jáuregui). Nav principal: Una vida en movimiento,
Obras, Don Quijote, Legado, Biblioteca.

**Producción actualizada cuatro veces con aprobación explícita del usuario** (commits `d886473`, `10eacb5`,
`572af9c` y `dd99c1a` en `main`) — ver ADR-008 a ADR-013.

**Próximo paso lógico:** personajes principales del Quijote (Don Quijote, Sancho Panza, Dulcinea, Rocinante,
Sansón Carrasco — sección 30 del prompt maestro), contexto histórico general, o biografía narrativa más
profunda dentro de `/vida-en-movimiento`. Cada nuevo dato histórico debe seguir el mismo protocolo: fuente
primaria/institucional/académica real (y para imágenes, verificación de dominio público vía API, nunca
asumir libre por aparecer en un buscador) antes de marcar `verificado`. Cualquier nuevo merge a `main`
requiere de nuevo una aprobación explícita.

**Nota de incidente histórico (ver ADR-007):** el primer despliegue de Vercel quedó publicado como
producción por un comportamiento automático de la plataforma, no por una acción deliberada sin permiso —
comunicado de inmediato, aceptado por el usuario por su bajo impacto. Regla derivada ya aplicada: no
ejecutar `vercel deploy` sin `--target=preview` explícito.
