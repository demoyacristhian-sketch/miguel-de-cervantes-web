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
| Linter | ESLint + eslint-config-next | 10.9.1 / 16.3.4 |
| Despliegue | Vercel | CLI 54.4.1 (proyecto Vercel aún no creado) |
| Contenido | JSON estructurado versionado en Git (ver `/docs/CONTENT_MODEL.md`) | — |
| Base de datos | Ninguna en MVP (posible migración futura a Supabase/PostgreSQL) | — |

Estado: **NINGÚN CÓDIGO DE APLICACIÓN EXISTE TODAVÍA.** El scaffold de Next.js se creará en Fase 1, tras aprobación explícita.

## 3. Arquitectura del contenido

Entidades definidas (modelo, no datos): `Person`, `Work`, `Character`, `Place`, `HistoricalEvent`, `TimelineEvent`, `Source`, `Document`, `Topic`, `Quote`, `Curiosity`, `HistoricalContext`, `MediaAsset`.
Detalle y relaciones en [`/docs/CONTENT_MODEL.md`](docs/CONTENT_MODEL.md). **Ningún dato histórico ha sido cargado todavía** — la carga de contenido verificado empieza en Fase 2.

## 4. Estado del desarrollo

| Área | Estado |
|---|---|
| Fundación / documentación | **APROBADO** (Fase 0 ejecutada 2026-09-01) |
| Arquitectura técnica | EN ANÁLISIS (propuesta documentada, pendiente de validarse al construir Fase 1) |
| Repositorio GitHub | PRODUCCIÓN (creado, vacío de código de app) |
| Contenido histórico | PENDIENTE (no iniciado) |
| Diseño visual | PENDIENTE (dirección de arte definida en `/docs/DESIGN_SYSTEM.md`, sin componentes) |
| MVP (Home, Bio, Timeline, Obras, Quijote) | PENDIENTE — Fase 1 |
| Pregunta a Cervantes (IA/RAG) | BLOQUEADO — requiere aprobación específica de arquitectura y costes (Fase 5) |

## 5. Última implementación

- **Fecha:** 2026-09-01
- **Rama:** `main`
- **Commit:** `b458800`
- **Qué se hizo:** Ejecución completa de FASE 0 — auditoría de entorno, verificación de versiones oficiales, creación de estructura documental (`/docs`), definición de arquitectura propuesta, modelo de contenido, política de fuentes/derechos, sistema de diseño preliminar, arquitectura de información, estrategias Git/GitHub y Vercel, roadmap.
- **Archivos afectados:** `CLAUDE.md`, `docs/*.md`, `.gitignore`, `.env.example`, `README.md`.
- **Pruebas:** N/A (no hay código ejecutable todavía).
- **Estado:** Fase 0 completada, pendiente de aprobación explícita para iniciar Fase 1.
- **Pendientes:** Aprobación del usuario para iniciar Fase 1 (MVP).

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

## 8. Próximo paso

**Único próximo paso lógico:** esperar aprobación explícita del usuario para iniciar **FASE 1 — MVP** (arquitectura real, layout, navegación, Home, sistema de diseño, Hero, Biografía, Timeline, Obras, Don Quijote, responsive, SEO base, accesibilidad base). No se debe avanzar a Fase 1 sin dicha aprobación.
