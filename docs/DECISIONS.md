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

---

## ADR-005

- **Fecha:** 2026-09-01
- **Tema:** ESLint 9.x en lugar de 10.x, verificado empíricamente
- **Contexto:** `docs/ARCHITECTURE.md` (Fase 0) había propuesto ESLint 10.9.1 por ser la versión más reciente
  en npm. Al instalar el scaffold real, `eslint-config-next@16.3.4` con `eslint@10.9.1` produjo un árbol
  `invalid` (`npm ls` → `ELSPROBLEMS`): sus plugins internos (`eslint-plugin-import`,
  `eslint-plugin-jsx-a11y`, `eslint-plugin-react`) tienen como techo `eslint@^9.x` en `peerDependencies`.
- **Decisión:** Fijar `eslint@9.39.5` (última 9.x estable). Árbol de dependencias resuelve limpio (0
  problemas) con esta versión.
- **Razón:** Verificación empírica (instalación real), no solo lectura de changelog. Corrige ADR/documento
  previo con datos reales, conforme al protocolo anti-alucinación del proyecto.
- **Impacto:** Ninguno funcional; ESLint 9 cubre todas las reglas necesarias para el proyecto.
- **Aprobado por:** Decisión técnica, documentada para trazabilidad.
- **Estado:** VIGENTE. Revisar cuando `eslint-config-next` actualice sus plugins internos a soportar ESLint 10.

---

## ADR-006

- **Fecha:** 2026-09-01
- **Tema:** Hero cinematográfico sin vídeo real en Fase 1
- **Contexto:** El prompt maestro exige un vídeo de fondo cinematográfico en el Hero, pero también prohíbe
  usar cualquier recurso audiovisual sin derechos verificados y registrados en
  `public/media/manifest.json`. Ningún vídeo ha sido investigado ni aprobado todavía.
- **Decisión:** Implementar el Hero (`src/components/sections/Hero.tsx`) con un fallback 100% CSS
  (degradados radiales sobre la paleta del proyecto + textura sutil) en lugar de inventar o descargar un
  vídeo de origen dudoso. La copy exacta requerida por el prompt maestro se mantiene íntegra.
- **Razón:** Cumplimiento del principio "ante cualquier duda de derechos: NO PUBLICAR" — preferible una
  versión sin vídeo, honesta y de buen aspecto, a arriesgar derechos de autor.
- **Impacto:** Ninguno negativo — el fallback ya cumple los requisitos de rendimiento/accesibilidad
  (no bloquea LCP, no afecta CLS, respeta `prefers-reduced-motion` al no tener animación).
- **Aprobado por:** Decisión técnica alineada con reglas explícitas del prompt maestro (secciones 13 y 15).
- **Estado:** VIGENTE. Sustituir por `<video>` real solo cuando el usuario apruebe un recurso con licencia
  verificada.
