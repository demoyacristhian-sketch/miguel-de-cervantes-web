# ARCHITECTURE.md — Arquitectura técnica propuesta

Estado: **PROPUESTA** (Fase 0). Se implementará y validará en Fase 1 tras aprobación.

## Stack (versiones verificadas en npm registry, 2026-09-01)

| Paquete | Versión | Fuente de verificación |
|---|---|---|
| `next` | 16.3.4 | `npm view next version` + [nextjs.org/blog](https://nextjs.org/blog) (16.3.x Active LTS) |
| `react` / `react-dom` | 19.2.8 | `npm view react version` |
| `typescript` | **6.0.3** (no 7.0.2) | `npm view typescript version`; ver ADR-001 |
| `tailwindcss` | 4.3.3 | `npm view tailwindcss version` |
| `eslint` | 10.9.1 | `npm view eslint version` |
| `eslint-config-next` | 16.3.4 | `npm view eslint-config-next version` |
| Vercel CLI (entorno local) | 54.4.1 | `vercel --version` |

## Por qué TypeScript 6.0.3 y no 7.0.2

TypeScript 7.0 introduce un compilador nativo en Go y **elimina `lib/typescript.js`**, la API programática en
JavaScript de la que dependen ESLint (reglas type-aware), servicios de lenguaje de editores y buena parte del
ecosistema de plugins. Next.js 16.3 añadió soporte experimental vía `experimental.useTypeScriptCli`, pero el
propio ecosistema advierte que herramientas type-aware "pueden necesitar esperar a 7.1". Para un proyecto de
producción que prioriza estabilidad y mantenibilidad (regla "no sobreingeniería" del proyecto), se elige
TypeScript 6.0.3, la última versión estable de la serie 6.x con API completa y soporte de tooling maduro.
Esta decisión se revisará cuando el ecosistema (ESLint, editores) confirme soporte estable de TS 7.
Registrado como ADR-001 en `/docs/DECISIONS.md`.

## Next.js: App Router, Server Components

- App Router (no Pages Router) — es el modelo recomendado actual por Next.js para proyectos nuevos.
- Server Components por defecto; Client Components solo donde se necesite interactividad (timeline, mapa,
  filtros, formularios).
- Renderizado: Static Generation (SSG/ISR) para contenido editorial que cambia poco (biografía, obras,
  fuentes); dado que el contenido vive en JSON versionado en Git, la mayoría de páginas pueden generarse
  estáticamente en build time.

## Estructura de carpetas propuesta (a crear en Fase 1)

```text
cervantes-web/
  src/
    app/                    # rutas App Router
      (site)/
        page.tsx            # Home
        cervantes/          # Biografía
        linea-de-tiempo/
        obras/[slug]/
        quijote/
        mundo-de-cervantes/
        legado/
        biblioteca/
      layout.tsx
    components/
      ui/                   # componentes de interfaz reutilizables
      sections/             # secciones de página (Hero, Timeline, etc.)
    content/                # JSON estructurado (ver CONTENT_MODEL.md)
      people/
      works/
      characters/
      places/
      events/
      sources/
      documents/
    lib/                    # utilidades, acceso a contenido, helpers SEO
    styles/
  public/
    media/                  # activos multimedia + manifest.json de derechos
  docs/
```

Esta estructura es una propuesta razonable, no definitiva: se ajustará durante Fase 1 según necesidades
reales, documentando cualquier cambio significativo aquí y en `DECISIONS.md`.

## Servicios externos

| Servicio | Uso | Estado |
|---|---|---|
| Vercel | Hosting, Preview Deployments, Producción | Definido, sin proyecto creado todavía |
| GitHub | Control de versiones, CI implícito vía Vercel | Repositorio creado (Fase 0) |
| Mapbox / Leaflet | Mapa "Tras los pasos de Cervantes" (Fase 3) | Por decidir en Fase 3, justificación técnica pendiente |
| OpenAI + pgvector/Supabase | "Pregunta a Cervantes" (Fase 5) | BLOQUEADO — requiere aprobación específica |

## Base de datos / almacenamiento

Ninguna en el MVP. Contenido como JSON estructurado versionado en Git (ver `CONTENT_MODEL.md`). La
arquitectura de contenido se diseña para poder migrar a Supabase/PostgreSQL sin reconstrucción completa
(separación estricta interfaz/contenido, acceso a contenido a través de una capa de datos en `src/lib/`).

## Principios de no sobreingeniería aplicados

- Sin microservicios, sin arquitecturas distribuidas.
- Sin base de datos hasta que exista una necesidad real (búsqueda avanzada, IA/RAG, panel de administración).
- Sin CMS headless en el MVP.
- Librerías adicionales (mapas, animación) solo se incorporan cuando haya justificación técnica clara,
  documentada en `DECISIONS.md` en el momento de introducirlas.
