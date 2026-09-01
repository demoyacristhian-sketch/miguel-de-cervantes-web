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
| 0 | Descubrimiento y preparación | **COMPLETADA (2026-09-01)** — pendiente aprobación para Fase 1 |
| 1 | MVP (arquitectura, Home, Bio, Timeline, Obras, Quijote) | PENDIENTE |
| 2 | Contenido (personajes, contexto, curiosidades, vidas de Cervantes) | PENDIENTE |
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

## Arquitectura

_(Se registrará la evolución técnica real a medida que se implemente cada fase. En Fase 0 solo existe la
propuesta — ver `/docs/ARCHITECTURE.md`.)_

## Diseño

_(Se registrará la evolución visual real a medida que se implemente cada fase. En Fase 0 solo existe la
dirección de arte preliminar — ver `/docs/DESIGN_SYSTEM.md`.)_

## Contenido

_(Se registrará la evolución del contenido histórico a medida que se cargue y verifique. En Fase 0 no existe
contenido histórico cargado — solo el modelo de datos, ver `/docs/CONTENT_MODEL.md`.)_

## Despliegues

| Tipo | Fecha | Commit | Responsable | Aprobación |
|---|---|---|---|---|
| _(ninguno todavía)_ | — | — | — | — |

## Cierre

_(Pendiente — se completará al finalizar Fase 7 con fecha, versión final, funcionalidades, documentación,
arquitectura final, recursos, pendientes conocidos y mantenimiento recomendado.)_
