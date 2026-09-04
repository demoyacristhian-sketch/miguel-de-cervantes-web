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
| Repositorio GitHub | `main` = producción real (commit `98f64d0`), `develop` al día (`e30ecd0`) |
| Vercel | Producción actualizada y verificada (última vez 2026-09-04, aprobación explícita del usuario); ver ADR-007 a ADR-022 |
| Contenido histórico | **AVANZADO** — timeline (16/16), obras (6/6 con fichas ampliadas y texto "Sobre la obra"), vidas (7/7), curiosidades (6/6), Quijote (32 entradas) y legado (6/6) verificados; ver `docs/CONTENT_STATUS.md` |
| Diseño visual | APROBADO para MVP (tokens Tailwind v4, Playfair Display + Inter, revisado por el usuario) |
| MVP (Home, Bio, Timeline, Obras, Quijote) | **APROBADO** — Fase 1 cerrada, mergeada a `develop` |
| Pregunta a Cervantes (IA/RAG) | BLOQUEADO — requiere aprobación específica de arquitectura y costes (Fase 5) |

## 5. Última implementación

- **Fecha:** 2026-09-04
- **Rama:** `content/curiosidades-en-legado` → mergeada a `develop` y a `main` (producción)
- **Qué se hizo:** ADR-022 — a petición explícita del usuario ("quiero que las curiosidades
  aparezcan en la sección de legado. hazlo directamente en producción"), se eliminó la página
  independiente `/curiosidades` y su contenido (6 preguntas ya verificadas, sin datos nuevos) se
  integró como una sección "¿Sabías que...? / Curiosidades" dentro de `/legado` (ancla
  `#curiosidades`), mismo patrón ya usado para fusionar `/cervantes` y `/linea-de-tiempo` en
  `/vida-en-movimiento` (ADR-011/012/013). Se añadió un redirect permanente `/curiosidades` →
  `/legado#curiosidades` y se actualizaron los enlaces de Home y footer.
- **Pruebas:** `tsc --noEmit`, `npm run lint`, `npm run build` limpios (17 rutas). `curl -sI`
  confirma el redirect 308 tanto en local como en
  `https://miguel-de-cervantes-web.vercel.app/curiosidades`. Verificación en navegador, local y en
  producción: las 6 curiosidades visibles en `/legado`, enlaces actualizados, sin errores de
  consola.
- **Estado:** **En producción** (commit `98f64d0`). Aprobación explícita del usuario, 2026-09-04.
- **Pendientes:** `security.txt` (RFC 9116) diferido hasta tener un dominio propio y un correo de
  contacto real proporcionado por el responsable del sitio; más personajes del Quijote si se desea
  ampliar aún más; contexto histórico general.

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

Fase 1 cerrada. Fase 2 en curso. **Reestructuración de navegación (ADR-011/012/013) — EN
PRODUCCIÓN:** nav principal Biografía, Obras, Don Quijote, Legado, Biblioteca.

**Secciones completas + Home cinematográfica (ADR-014/015/016) — EN PRODUCCIÓN.**

**Ampliación de contenido en tres rondas + textos desarrollados (2026-09-03/04, ADR-017/018/019) —
EN PRODUCCIÓN:** "Una vida en movimiento"/"Una vida, una historia" → **"Biografía"** (16 pasos,
resumen biográfico inicial con familia, cautiverio e hija Isabel de Saavedra); Obras con las 6
fichas completas y una sección "Sobre la obra" de varios párrafos por obra (no solo campos
fragmentados); Quijote ampliado a 10 personajes (sub-filtro Principales/Secundarios), 6 lugares, 7
aventuras, 6 temas, 3 frases, más "Sobre la novela" (reutiliza la descripción de Don Quijote);
Legado con 6 entradas y una introducción narrativa de 4 párrafos; footer con "TFM" en primera
persona ("mis estudios"); 21 fuentes verificadas en total (SRC-010 a SRC-021 nuevas). La segunda
ronda (ADR-018) usó es.wikipedia.org/wiki/Miguel_de_Cervantes **solo como pista** —nunca citada—
por la regla permanente del proyecto; cada dato se verificó contra RAH, BNE, BVMC, Universidad de
Alcalá o UNESCO antes de publicarse.

**Endurecimiento de seguridad HTTP (2026-09-03, ADR-021) — EN PRODUCCIÓN:** 6 cabeceras de
seguridad nativas de Next.js (CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy,
Permissions-Policy, HSTS) + `poweredByHeader: false`. El patrón de CSP con nonce por petición se
probó y se descartó por ser incompatible con la arquitectura 100% estática del sitio (rompe la
hidratación); `script-src` usa `'unsafe-inline'` documentado, mismo criterio que `style-src`.
`security.txt` diferido hasta tener dominio propio y contacto real.

**Curiosidades fusionadas dentro de Legado (2026-09-04, ADR-022) — EN PRODUCCIÓN:** la página
`/curiosidades` se eliminó y su contenido pasó a `/legado#curiosidades`, con redirect permanente
desde la ruta antigua.

**Producción actualizada nueve veces con aprobación explícita del usuario** (commits `d886473`,
`10eacb5`, `572af9c`, `dd99c1a`, `2b0ff57`, `6819f2a`, `7eaab79`, `cc4c9a6` y `98f64d0` en `main`) —
ver ADR-008 a ADR-022.

**Próximo paso lógico:** contexto histórico general, o seguir ampliando el Quijote/la biografía si
el usuario lo pide. Cada nuevo dato histórico debe seguir el mismo protocolo: fuente
primaria/institucional/académica real (Wikipedia solo como pista, nunca como fuente citada; para
imágenes, verificación de dominio público vía API, nunca asumir libre por aparecer en un buscador)
antes de marcar `verificado`. Cualquier nuevo merge a `main` requiere de nuevo una aprobación
explícita.

**Nota de incidente histórico (ver ADR-007):** el primer despliegue de Vercel quedó publicado como
producción por un comportamiento automático de la plataforma, no por una acción deliberada sin permiso —
comunicado de inmediato, aceptado por el usuario por su bajo impacto. Regla derivada ya aplicada: no
ejecutar `vercel deploy` sin `--target=preview` explícito.
