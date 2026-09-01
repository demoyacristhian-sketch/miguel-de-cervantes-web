# CONTENT_STATUS.md — Estado independiente del contenido

Este archivo separa explícitamente el estado del **código/interfaz** del estado del **contenido histórico**.
Que una interfaz esté terminada NO implica que su contenido esté aprobado. Estados usados:

- `DEV_STATUS`: PENDIENTE | EN_DESARROLLO | TERMINADO
- `CONTENT_STATUS`: PENDIENTE | EN_INVESTIGACIÓN | VERIFICADO
- `SOURCE_STATUS`: PENDIENTE | PARCIAL | VERIFICADAS
- `REVIEW_STATUS`: PENDIENTE | EN_REVISIÓN | APROBADO
- `PRODUCTION_STATUS`: PENDIENTE | APROBADO_PARA_PREVIEW | APROBADO_PARA_PRODUCCIÓN

## Estado actual (Fase 2 en curso, rama `content/fuentes-timeline-obras-vidas`)

| Módulo | DEV_STATUS | CONTENT_STATUS | SOURCE_STATUS | REVIEW_STATUS | PRODUCTION_STATUS |
|---|---|---|---|---|---|
| Home (estructura + secciones) | TERMINADO | PARCIAL (ver abajo) | PARCIAL | PENDIENTE | PENDIENTE |
| Biografía de Cervantes (capítulos, sin prosa) | EN_DESARROLLO | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Línea de tiempo (12 años ancla) | TERMINADO | **VERIFICADO** (12/12 eventos) | **VERIFICADAS** (SRC-001) | PENDIENTE | PENDIENTE |
| Obras (6 fichas mínimas: título/tipo/año) | EN_DESARROLLO | **VERIFICADO** (año y datos bibliográficos básicos, 6/6); fichas ampliadas (argumento, personajes, temas...) PENDIENTES | **VERIFICADAS** (SRC-001) | PENDIENTE | PENDIENTE |
| Don Quijote (universo, estructura de subsecciones) | EN_DESARROLLO | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| El mundo de Cervantes | PENDIENTE (placeholder "próximamente") | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Las vidas de Cervantes (7 perfiles) | TERMINADO | **VERIFICADO** (7/7) | **VERIFICADAS** (SRC-001) | PENDIENTE | PENDIENTE |
| Curiosidades (6 preguntas) | EN_DESARROLLO | **VERIFICADO** (2/6: Shakespeare, manco de Lepanto); 4/6 pendientes | PARCIAL | PENDIENTE | PENDIENTE |
| Legado | PENDIENTE (placeholder "próximamente") | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Biblioteca digital | PENDIENTE (placeholder "próximamente") | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |

**Nota sobre la curiosidad "Shakespeare":** existe una discrepancia real entre SRC-001 (institucional) y
SRC-002 (secundaria verificada) sobre el orden exacto de las muertes — documentada explícitamente en la
respuesta publicada y en `/docs/SOURCES.md`, sin resolverla artificialmente a favor de una sola versión.

Ningún módulo puede pasar a `PRODUCTION_STATUS: APROBADO_PARA_PRODUCCIÓN` sin que las cinco columnas estén
en su estado final aprobado y sin autorización explícita del usuario.
