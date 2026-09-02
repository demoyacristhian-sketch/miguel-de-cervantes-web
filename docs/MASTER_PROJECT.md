# MASTER_PROJECT.md — Memoria histórica completa del proyecto

> Este documento es la memoria histórica completa del proyecto, desde su nacimiento hasta su cierre.
> NO sustituye a `CLAUDE.md` (estado operativo actual). Nunca se borra ni se reemplaza perdiendo historial;
> solo se añade contenido nuevo al final de cada sección correspondiente.

---

## Ficha del proyecto

| Campo | Valor |
|---|---|
| Nombre | Miguel de Cervantes — "El universo de Cervantes" |
| Cliente | Proyecto propio (portafolio), sin cliente externo formal |
| Fecha de inicio | 2026-09-01 |
| Estado actual | Fase 0 completada — pendiente de aprobación para Fase 1 |
| Responsable | Cristhian David Demoya Llanos (demoyacristhian@gmail.com) |
| Repositorio | https://github.com/demoyacristhian-sketch/miguel-de-cervantes-web (público) |
| Preview | No existe todavía (se generará en Fase 1) |
| Producción | No existe todavía |
| Stack | Next.js 16.3.4 · React 19.2.8 · TypeScript 6.0.3 · Tailwind CSS 4.3.3 · Vercel |
| Objetivo | Plataforma editorial e histórica rigurosa sobre Cervantes: vida, obra, mundo y legado |

## Visión

Miguel de Cervantes Saavedra es, más de cuatro siglos después, uno de los autores más influyentes de la
literatura universal. La mayoría de los recursos digitales existentes sobre su figura son o bien
enciclopédicos y áridos (estilo Wikipedia) o bien turísticos y superficiales. Este proyecto busca un punto
intermedio: una experiencia digital **editorial, contemporánea y rigurosa** — "Siglo de Oro + editorial
contemporáneo" — que permita a un público amplio (estudiantes, docentes, aficionados, turismo cultural,
investigadores no especializados) descubrir su vida, sus obras (con foco especial en *Don Quijote*), su
época y su legado, con toda la información trazable a fuentes primarias o institucionales.

No se está construyendo "una web sobre Cervantes", sino un universo navegable: **su vida** (conocer al
hombre), **sus obras** (descubrir al escritor), **su mundo** (comprender su época) y **su legado** (entender
por qué seguimos hablando de él).

## Alcance

Incluido en el plan aprobado (roadmap completo, sujeto a aprobación fase por fase):

- Sitio web público (Next.js/Vercel) con Home, biografía interactiva, timeline de vida + contexto histórico,
  biblioteca de obras con fichas detalladas, sección independiente "El universo del Quijote", mapa "Tras los
  pasos de Cervantes", sección "El mundo de Cervantes" (contexto histórico-social), curiosidades, legado,
  biblioteca digital/documental.
- Sistema de contenido estructurado y versionado (JSON) con trazabilidad de fuentes por dato histórico.
- Documentación completa de arquitectura, diseño, fuentes, decisiones, seguridad, SEO, accesibilidad y
  rendimiento.
- Flujo Git/GitHub con ramas, PRs y despliegue controlado vía Vercel (Preview → aprobación → Producción).

## Fuera de alcance (por ahora)

- **"Pregunta a Cervantes" (IA/RAG):** explícitamente diferido a Fase 5, bloqueado hasta aprobación
  específica de arquitectura, coste, seguridad y mitigación de alucinaciones. No forma parte del MVP.
- **Buscador interno avanzado:** solo búsqueda estructurada convencional en fases tempranas; buscador
  completo en fase posterior.
- **CMS externo / base de datos:** el MVP usa contenido JSON versionado en Git; migración a
  Supabase/PostgreSQL o CMS headless queda como opción arquitectónica futura, no implementada ahora.
- **Analytics:** no se instalará ningún sistema de analítica sin presentar antes opciones (Vercel Analytics,
  Plausible, GA4) y sin aprobación explícita, dado su impacto en privacidad/cookies.
- **Recursos educativos para profesores/estudiantes:** Fase 6, no antes.

## Roadmap

| Fase | Nombre | Estado |
|---|---|---|
| 0 | Descubrimiento y preparación | **COMPLETADA (2026-09-01)** |
| 1 | MVP (arquitectura, Home, Bio, Timeline, Obras, Quijote) | **COMPLETADA (2026-09-01)** — mergeada a `develop`, revisada por el usuario sobre Preview de Vercel |
| 2 | Contenido (personajes, contexto, curiosidades, vidas de Cervantes) | **EN CURSO (2026-09-01)** |
| 3 | Experiencia (mapas, timeline avanzado, Explora el Quijote) | PENDIENTE |
| 4 | Biblioteca Cervantina (documentos, buscador estructurado) | PENDIENTE |
| 5 | IA — Pregunta a Cervantes (RAG) | BLOQUEADO — requiere aprobación específica |
| 6 | Educación (recursos docentes/estudiantes) | PENDIENTE |
| 7 | Optimización y cierre (auditorías, RC, aprobación final de producción) | PENDIENTE |

## Historial de fases

### Fase 0 — Descubrimiento y Preparación

- **Fecha de inicio:** 2026-09-01
- **Fecha de fin:** 2026-09-01
- **Objetivos:** validar requisitos, crear `CLAUDE.md` y `MASTER_PROJECT.md`, crear documentación base,
  verificar herramientas y versiones oficiales, analizar estrategia de fuentes, definir repositorio,
  arquitectura, sistema de contenido, diseño preliminar, derechos, Git y Vercel.
- **Funcionalidades:** ninguna funcionalidad de producto (solo fundación documental y de repositorio).
- **Decisiones tomadas:** ver ADR-001 a ADR-004 en `/docs/DECISIONS.md`.
- **Incidencias:** ninguna. Se detectó que TypeScript 7.0.2 (última versión npm) carece de API programática
  JS estable; se decidió usar TypeScript 6.0.3 (ADR-001).
- **Pruebas:** N/A (sin código de aplicación).
- **Resultado:** Estructura documental completa creada, repositorio GitHub creado, entorno local verificado.
- **Aprobación:** PENDIENTE — se solicita `APROBADO PARA PRODUCCIÓN` equivalente para iniciar Fase 1 (el
  usuario debe entender que esto autoriza *iniciar el desarrollo del MVP en Preview*, no un despliegue a
  producción real, que requerirá una aprobación adicional al final de Fase 7).

### Fase 1 — MVP (en curso)

- **Fecha de inicio:** 2026-09-01
- **Fecha de fin:** — (en curso)
- **Objetivos:** scaffold real de Next.js, layout, navegación, Home, sistema de diseño, Hero, biografía,
  timeline, obras, Don Quijote, SEO base, accesibilidad base.
- **Funcionalidades:** ver detalle en `/docs/CHANGELOG.md` (entrada `v0.1.0-mvp-scaffold`).
- **Decisiones tomadas:** ADR-005 (ESLint 9.x, corrección empírica de Fase 0), ADR-006 (Hero sin vídeo real).
- **Incidencias:** conflicto de convención entre el `CLAUDE.md` operativo del proyecto y el `CLAUDE.md`
  auto-generado por `next dev`/`next build` (Next.js 16 usa ese nombre de archivo para instrucciones de
  agentes); resuelto creando `AGENTS.md` para absorber ese bloque.
- **Pruebas:** typecheck, lint y build limpios; verificación visual manual en navegador (Home, ficha de
  obra, responsive, modo oscuro).
- **Resultado:** código mergeado a `develop` (commit de merge tras revisión del usuario). Vercel conectado
  (proyecto `miguel-de-cervantes-web`, team CDM Labs). Ver incidente ADR-007 (primer deploy promovido a
  producción por comportamiento propio de Vercel, impacto bajo, aceptado por el usuario).
- **Aprobación:** APROBADA para cerrar Fase 1 y avanzar a Fase 2 (revisión directa del usuario sobre el
  Preview, 2026-09-01). No constituye aprobación de producción — `main` sigue sin tocarse.

### Fase 2 — Contenido (en curso)

- **Fecha de inicio:** 2026-09-01
- **Fecha de fin:** — (en curso)
- **Objetivos:** investigar y verificar contra fuentes primarias/institucionales los datos placeholder
  cargados en Fase 1 (años del timeline, obras, vidas de Cervantes, curiosidades); poblar
  `/docs/SOURCES.md`; añadir personajes y contexto histórico.
- **Aprobación de inicio:** usuario, 2026-09-01 ("Mergea a develop y empieza Fase 2").

## Arquitectura

- **2026-09-01 (Fase 1):** implementado el scaffold propuesto en Fase 0 sin cambios estructurales mayores.
  Corrección real: ESLint fijado en 9.39.5 en lugar de 10.9.1 (ver ADR-005). Capa de contenido
  (`src/lib/content.ts` + `src/content/*.json` + `src/types/content.ts`) implementada como se diseñó en
  `/docs/CONTENT_MODEL.md`, con subconjunto de 4 entidades (`Work`, `TimelineEvent`, `LifeProfile`,
  `Curiosity`) — el resto se añade en fases posteriores según se necesiten.

## Diseño

- **2026-09-01 (Fase 1):** paleta y tipografía finalizadas e implementadas (ver `/docs/DESIGN_SYSTEM.md`):
  Playfair Display (titulares) + Inter (cuerpo), paleta marfil/ink/burdeos/dorado con soporte de modo oscuro
  vía `prefers-color-scheme`. Hero cinematográfico implementado sin vídeo real (fallback CSS, ver ADR-006).
- **2026-09-02 (Fase 2, ADR-011):** rediseño conceptual de la biografía/timeline como "Una vida en
  movimiento" — experiencia interactiva con 6 escenas narrativas de tono cromático propio, carril horizontal
  de eventos y navegación por etapas. Navegación principal reducida de 8 a 5 elementos (se elimina "Inicio"
  y "El mundo de Cervantes", sin sustituto).

## Contenido

- **2026-09-01 (Fase 1):** estructura de contenido poblada con datos de placeholder explícitamente marcados
  `pendiente_de_verificacion` (6 obras, 12 años de timeline, 7 perfiles biográficos, 6 curiosidades). Ningún
  dato histórico se ha verificado ni se presenta como hecho — la verificación real empieza en Fase 2.

## Despliegues

| Tipo | Fecha | Commit | Responsable | Aprobación |
|---|---|---|---|---|
| Producción (accidental) | 2026-09-01 | `4c7554d` (vía `vercel deploy` sin flags) | Claude (incidente, ver ADR-007) | No solicitada — comunicado y aceptado por el usuario a posteriori por bajo impacto |
| Producción (Fase 1 + verificación Fase 2) | 2026-09-01 | `d886473` (merge `develop` → `main`) | Claude, a petición del usuario | **APROBADA** — instrucción explícita del usuario: "Actualiza ya la producción con el contenido verificado actual" (2026-09-01), tras detectar que la producción existente mostraba contenido desactualizado |
| Producción (optimización de densidad de Home) | 2026-09-01 | `10eacb5` (merge `develop` → `main`) | Claude, a petición del usuario | **APROBADA** — instrucción explícita: "ponlo a producción" (2026-09-01), ver ADR-009 |
| Producción (fichas ampliadas de 6 obras) | 2026-09-02 | `572af9c` (merge `develop` → `main`) | Claude, a petición del usuario | **APROBADA** — instrucción explícita: "sí, ponlo a producción" (2026-09-02), ver ADR-010 |

## Cierre

_(Pendiente — se completará al finalizar Fase 7 con fecha, versión final, funcionalidades, documentación,
arquitectura final, recursos, pendientes conocidos y mantenimiento recomendado.)_
