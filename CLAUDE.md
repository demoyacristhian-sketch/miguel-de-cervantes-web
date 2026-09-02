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
| Repositorio GitHub | `main` = producción real (commit `2b0ff57`), `develop` al día (`6adbd40`) |
| Vercel | Producción actualizada y verificada (última vez 2026-09-02, aprobación explícita del usuario); ver ADR-007 a ADR-016 |
| Contenido histórico | **AVANZADO** — timeline (12/12), obras (6/6), vidas (7/7), curiosidades (6/6), Quijote (18/18) y legado (4/4) verificados; ver `docs/CONTENT_STATUS.md` |
| Diseño visual | APROBADO para MVP (tokens Tailwind v4, Playfair Display + Inter, revisado por el usuario) |
| MVP (Home, Bio, Timeline, Obras, Quijote) | **APROBADO** — Fase 1 cerrada, mergeada a `develop` |
| Pregunta a Cervantes (IA/RAG) | BLOQUEADO — requiere aprobación específica de arquitectura y costes (Fase 5) |

## 5. Última implementación

- **Fecha:** 2026-09-02
- **Rama:** `design/home-cinematografica` (creada desde `develop`, sin mergear todavía; incluye
  también el trabajo de `content/quijote-legado-biblioteca` ya mergeado en `develop`)
- **Qué se hizo:** Ver ADR-015 en `docs/DECISIONS.md` y la entrada `v1.8.0-home-cinematografica` en
  `docs/CHANGELOG.md` para el detalle completo. En resumen: Home rediseñada como historia a pantalla
  completa al estilo Google Arts & Culture (Hero + 4 paneles nuevos, scroll-snap nativo, rail de
  progreso), reutilizando únicamente imágenes ya verificadas; Hero de superficie única (imagen a
  pantalla completa con degradado, sin panel de color sólido) con zoom en loop infinito; "Una vida
  en movimiento" renombrada a "Una vida, una historia" (misma ruta); botón "← Volver" en todas las
  páginas que no son Home. 8 componentes de sección antiguos eliminados (contenido migrado a los
  paneles). Instrucción explícita del usuario, plan aprobado antes de implementar.
- **Pruebas:** `tsc --noEmit`, `npm run lint`, `npm run build` limpios (18 rutas). Verificación
  visual y por `getComputedStyle`/DOM en navegador local: Hero y paneles en desktop/móvil y
  claro/oscuro, animación en loop confirmada, botón "Volver" funcional, rebautizo confirmado.
- **Estado:** Implementado y verificado en local, **sin desplegar todavía**. Requiere aprobación
  explícita del usuario para mergear a `develop`/`main`.
- **Pendientes:** fichas de personajes del Quijote más allá de los 5 actuales, contexto histórico
  general, y profundizar la biografía narrativa dentro de `/vida-en-movimiento` si se desea.

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

Fase 1 cerrada. Fase 2 en curso. **Reestructuración de navegación y biografía (ADR-011/012/013) — EN
PRODUCCIÓN:** nav principal Una vida, una historia, Obras, Don Quijote, Legado, Biblioteca.

**Secciones completas + Home cinematográfica (2026-09-02, ADR-014/015/016) — EN PRODUCCIÓN:**
`/quijote` (5 personajes, 5 lugares, 3 aventuras, 3 temas, 2 frases, sourced en el texto primario
del Quijote vía CVC), `/legado` (4 tarjetas), `/biblioteca` (5 recursos institucionales + "Fuentes y
créditos" con 9 fuentes y 14 imágenes), `/obras` con filtro y portadas; Home rediseñada como
historia a pantalla completa (Hero de superficie única + 4 paneles, scroll-snap nativo,
reutilizando solo imágenes ya verificadas); "Una vida en movimiento" renombrada a "Una vida, una
historia"; botón "← Volver" en todas las páginas que no son Home; footer con crédito de TFG. Esto
acelera partes de las Fases 3, 4 y 6 por instrucción explícita del usuario.

**Producción actualizada cinco veces con aprobación explícita del usuario** (commits `d886473`,
`10eacb5`, `572af9c`, `dd99c1a` y `2b0ff57` en `main`) — ver ADR-008 a ADR-016.

**Próximo paso lógico:** más personajes del Quijote más allá de los 5 actuales, contexto histórico
general, o biografía narrativa más profunda dentro de `/vida-en-movimiento`. Cada nuevo dato
histórico debe seguir el mismo protocolo: fuente primaria/institucional/académica real (y para
imágenes, verificación de dominio público vía API, nunca asumir libre por aparecer en un buscador)
antes de
marcar `verificado`. Cualquier nuevo merge a `main` requiere de nuevo una aprobación explícita.

**Nota de incidente histórico (ver ADR-007):** el primer despliegue de Vercel quedó publicado como
producción por un comportamiento automático de la plataforma, no por una acción deliberada sin permiso —
comunicado de inmediato, aceptado por el usuario por su bajo impacto. Regla derivada ya aplicada: no
ejecutar `vercel deploy` sin `--target=preview` explícito.
