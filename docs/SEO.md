# SEO.md — Estrategia SEO

Estado: **PROPUESTA** (Fase 0). Implementación real desde Fase 1 ("SEO base").

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
