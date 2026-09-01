# DECISIONS.md — Registro de decisiones (ADR)

Las decisiones nunca se sobrescriben. Si una decisión cambia, se crea una nueva entrada que referencia y
sustituye a la anterior, dejando ambas visibles.

---

## ADR-001

- **Fecha:** 2026-09-01
- **Tema:** Versión de TypeScript a usar
- **Contexto:** La última versión publicada en npm es TypeScript 7.0.2, que introduce un compilador nativo en
  Go y elimina `lib/typescript.js` (API programática JS del compilador). Next.js 16.3 solo la soporta vía
  flag experimental `experimental.useTypeScriptCli`. ESLint, editores y parte del ecosistema de plugins aún
  no tienen soporte estable, según la propia documentación de Next.js/Vercel ("build tools, linters ... may
  need to wait for 7.1").
- **Opciones:**
  1. TypeScript 7.0.2 (última versión disponible).
  2. TypeScript 6.0.3 (última versión estable de la serie 6.x, con API completa).
- **Decisión:** Usar **TypeScript 6.0.3**.
- **Razón:** Prioridad de estabilidad y mantenibilidad sobre "usar siempre lo último", consistente con la
  regla de no sobreingeniería del proyecto. TS 7 es demasiado reciente para el ecosistema de tooling
  (ESLint type-aware, extensiones de editor) que este proyecto necesita para desarrollo sostenido.
- **Impacto:** Ninguno negativo conocido; TS 6.0.3 es totalmente compatible con Next.js 16.3.4 y React 19.
- **Aprobado por:** Decisión técnica del desarrollador dentro del criterio "senior" del proyecto; no requiere
  aprobación de negocio. Documentada para trazabilidad y revisión futura.
- **Estado:** VIGENTE. Revisar cuando TypeScript 7.1+ tenga soporte estable confirmado en el ecosistema.

---

## ADR-002

- **Fecha:** 2026-09-01
- **Tema:** Repositorio GitHub — nombre, propietario y visibilidad
- **Contexto:** El prompt maestro exige detenerse y preguntar si el propietario, nombre o permisos del
  repositorio no pueden determinarse sin asumir. La cuenta GitHub autenticada (`demoyacristhian-sketch`) no
  tiene organizaciones disponibles (verificado vía `gh api user/orgs`).
- **Opciones presentadas al usuario:** nombre corto vs. descriptivo; público vs. privado.
- **Decisión:** Repositorio **`demoyacristhian-sketch/miguel-de-cervantes-web`**, **público**.
- **Razón:** Elección explícita del usuario tras pregunta directa (2026-09-01).
- **Impacto:** Al ser público, cualquier contenido subido es visible externamente desde el primer commit —
  refuerza la importancia de no subir nunca secretos ni contenido con derechos no verificados.
- **Aprobado por:** Usuario (respuesta directa a pregunta de clarificación).
- **Estado:** VIGENTE.

---

## ADR-003

- **Fecha:** 2026-09-01
- **Tema:** Estrategia de contenido para el MVP (sin CMS externo)
- **Contexto:** El prompt maestro pide priorizar una arquitectura simple y mantenible para el MVP, evitando
  un CMS complejo sin necesidad real, pero permitiendo migración futura a Supabase/PostgreSQL o CMS headless.
- **Opciones:** (a) CMS headless desde el inicio; (b) JSON/MDX versionado en Git con capa de datos
  abstracta.
- **Decisión:** Opción (b) — JSON estructurado versionado en Git, ver `CONTENT_MODEL.md`.
- **Razón:** Menor complejidad operativa, versionado natural vía Git (coherente con el flujo de aprobación
  humana del proyecto), sin coste ni dependencia externa adicional en el MVP.
- **Impacto:** Requiere disciplina en el diseño de la capa de acceso a contenido (`src/lib/content/*`) para
  no acoplar componentes al formato JSON y facilitar una migración futura.
- **Aprobado por:** Decisión técnica del desarrollador, alineada con instrucción explícita del prompt
  maestro (sección 9, "CMS/Contenido").
- **Estado:** VIGENTE.

---

## ADR-004

- **Fecha:** 2026-09-01
- **Tema:** Diferimiento de "Pregunta a Cervantes" (IA/RAG)
- **Contexto:** El prompt maestro prohíbe explícitamente implementar esta funcionalidad en el MVP y exige
  presentar arquitectura, costes, seguridad, modelo, almacenamiento, estrategia RAG y mitigación de
  alucinaciones antes de construirla, esperando aprobación específica.
- **Decisión:** La funcionalidad queda formalmente en estado **BLOQUEADO** hasta Fase 5, sin ningún trabajo
  preparatorio de infraestructura (sin cuenta OpenAI, sin base vectorial, sin Supabase) hasta esa fase.
- **Razón:** Cumplimiento directo de instrucción explícita del prompt maestro (sección 42) y del roadmap
  oficial (sección 45, Fase 5).
- **Impacto:** Ninguno en el MVP; se documenta aquí para que ninguna sesión futura la implemente por error
  antes de tiempo.
- **Aprobado por:** Regla explícita del prompt maestro; no requiere decisión adicional.
- **Estado:** VIGENTE — BLOQUEADO hasta aprobación específica de Fase 5.
