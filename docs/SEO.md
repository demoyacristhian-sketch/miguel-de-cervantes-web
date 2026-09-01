# SEO.md — Estrategia SEO

Estado: **PARCIALMENTE IMPLEMENTADO** (Fase 1). Ver progreso en la tabla al final.

## Elementos a implementar desde arquitectura (Fase 1)

- Metadata por página (`generateMetadata` de Next.js App Router): title, description, canonical.
- `sitemap.xml` y `robots.txt` generados desde Next.js.
- Open Graph y Twitter/X Cards por página relevante (Home, obras, biografía, timeline).
- JSON-LD (schema.org) donde aplique realmente — nunca schema incorrecto solo para intentar mejorar SEO:
  - `Person` — ficha de Cervantes.
  - `Book` / `CreativeWork` — fichas de obra.
  - `Article` — contenido divulgativo/curiosidades.
  - `BreadcrumbList` — navegación de fichas profundas (obra, personaje, lugar).
  - `WebSite` — nivel raíz.
- Breadcrumbs visibles + estructurados en secciones profundas (Obras > ficha, Quijote > personaje, etc.).
- URLs semánticas en español, consistentes con la arquitectura de información (`/obras/don-quijote`,
  `/quijote/personajes/sancho-panza`, etc.).
- Estructura de encabezados H1–H6 coherente por página (un único H1 por página).
- Enlazado interno entre entidades relacionadas (obra ↔ personaje ↔ lugar ↔ evento) aprovechando el modelo
  de contenido de `CONTENT_MODEL.md`.

## Validaciones (Fase 7)

Auditoría SEO completa (metadatos, sitemap, structured data, enlaces rotos) antes del Release Candidate,
registrada en este mismo archivo.

## Progreso (Fase 1)

| Elemento | Estado |
|---|---|
| Metadata por página (`generateMetadata`/`export const metadata`) | Implementado en todas las páginas |
| `sitemap.xml` (`src/app/sitemap.ts`) | Implementado (rutas estáticas + obras) |
| `robots.txt` (`src/app/robots.ts`) | Implementado |
| Open Graph / Twitter Cards | Pendiente — sin imagen OG todavía (requiere recurso con derechos verificados) |
| JSON-LD (`Person`, `Book`, `Article`, `BreadcrumbList`, `WebSite`) | Pendiente — se añade junto con contenido verificado en Fase 2 |
| Breadcrumbs | Pendiente |
| URLs semánticas en español | Implementado (`/obras/don-quijote-de-la-mancha`, etc.) |
| Estructura H1–H6 | Un único H1 por página, verificado manualmente |
| Enlazado interno | Implementado a nivel de navegación y teasers de Home |
