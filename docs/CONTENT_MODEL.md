# CONTENT_MODEL.md — Modelo de contenido

Estado: **PROPUESTA DE MODELO** (Fase 0). Sin datos cargados todavía. La carga y verificación de contenido
histórico real empieza en Fase 2, sobre esta estructura.

## Principio

Separación estricta entre **interfaz** (componentes React) y **contenido** (JSON estructurado versionado en
Git, bajo `src/content/`). Ningún dato histórico se escribe directamente dentro de un componente.

## Entidades

### Person
Persona histórica (Cervantes, familiares, contemporáneos relevantes).
```text
id, name, role[], birthDate, deathDate, birthPlace(→Place), deathPlace(→Place),
summary, biographyChapters[](→ bloques narrativos), sourceIds[](→Source)
```

### Work
Obra literaria.
```text
id, title, type (novela | novela corta | teatro | poesía), publicationYear, genre,
description, context, plot, themes[], characters[](→Character), curiosities[],
fragments[], editions[], reception, influence, documents[](→Document),
legalReadingLink, sourceIds[]
```

### Character
Personaje de una obra (foco inicial: universo Quijote).
```text
id, name, work(→Work), description, role, traits[], relationships[](→Character con tipo de relación),
appearances[](capítulos), quotes[](→Quote), interpretations, sourceIds[]
```

### Place
Lugar geográfico relevante.
```text
id, name, coordinates{lat,lng}, period, relationToCervantes, events[](→HistoricalEvent),
mediaAssets[](→MediaAsset), sourceIds[]
```

### HistoricalEvent
Acontecimiento histórico (biográfico o de contexto general de época).
```text
id, title, date/yearRange, description, place(→Place), category (biográfico | contexto),
people[](→Person), mediaAssets[](→MediaAsset), sourceIds[]
```

### TimelineEvent
Entrada de línea de tiempo (referencia a HistoricalEvent + nivel: vida | contexto histórico).
```text
id, event(→HistoricalEvent), level (vida | contexto), year, displayOrder
```

### Source
Fuente documental (ver formato completo en `SOURCES.md`).
```text
id, title, institution, author, url, retrievedDate, type, reliability, usedFor,
pageSection, observations, rights
```

### Document
Documento histórico digitalizado (manuscrito, edición antigua, archivo institucional).
```text
id, title, institution, date, type, url, mediaAssets[](→MediaAsset), sourceIds[]
```

### Topic
Tema divulgativo transversal (ej. "¿Cómo se imprimía un libro en 1605?").
```text
id, title, question, summary, deepDive, relatedWorks[], relatedEvents[], sourceIds[]
```

### Quote
Cita textual verificada (de Cervantes o de sus obras).
```text
id, text, source (obra o carta), work(→Work), character(→Character opcional),
context, sourceIds[]
```

### Curiosity
Entrada de "¿Sabías que...?".
```text
id, question, answer, verified (boolean), sourceIds[], relatedEntities[]
```

### HistoricalContext
Bloque de contexto de época (Siglo de Oro, sociedad, ejército, imprenta, etc.).
```text
id, title, topic, description, relatedWorks[], relatedEvents[], mediaAssets[], sourceIds[]
```

### MediaAsset
Recurso multimedia con derechos verificados (ver `SECURITY.md` §Política de imágenes).
```text
id, title, author, date, institution, originalUrl, license, copyrightStatus,
attributionRequired (boolean), usagePermitted, filePath
```

## Relaciones (ejemplos conceptuales)

```text
Person(Cervantes) --participó_en--> HistoricalEvent(Batalla de Lepanto)
Person(Cervantes) --vivió_en--> Place(Valladolid)
Person(Cervantes) --escribió--> Work(Don Quijote)
Work(Don Quijote) --contiene_personaje--> Character(Sancho Panza)
Character(Don Quijote) --relación(escudero)--> Character(Sancho Panza)
Character(Don Quijote) --relación(amor idealizado)--> Character(Dulcinea)
```

## Trazabilidad obligatoria

Toda entidad con contenido histórico debe incluir `sourceIds: []` apuntando a entradas verificadas en
`SOURCES.md`. Ninguna entidad se publica con datos históricos sin al menos una fuente clasificada como
`FUENTE PRIMARIA`, `FUENTE INSTITUCIONAL` o `FUENTE ACADÉMICA`.

## Formato de almacenamiento (MVP)

JSON por entidad, un archivo por registro o colecciones agrupadas por tipo, bajo `src/content/<tipo>/`.
Alternativa MDX para contenido narrativo largo (capítulos de biografía, artículos divulgativos) cuando
aporte valor editorial sobre JSON plano — decisión a tomar por módulo en Fase 1/2, documentada en
`DECISIONS.md` si se introduce.

## Migración futura

El acceso a contenido debe pasar siempre por una capa de datos (`src/lib/content/*`) que abstraiga el origen
(JSON local hoy, Supabase/PostgreSQL mañana), de forma que una migración futura no requiera reescribir
componentes de interfaz.
