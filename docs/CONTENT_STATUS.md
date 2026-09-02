# CONTENT_STATUS.md — Estado independiente del contenido

Este archivo separa explícitamente el estado del **código/interfaz** del estado del **contenido histórico**.
Que una interfaz esté terminada NO implica que su contenido esté aprobado. Estados usados:

- `DEV_STATUS`: PENDIENTE | EN_DESARROLLO | TERMINADO
- `CONTENT_STATUS`: PENDIENTE | EN_INVESTIGACIÓN | VERIFICADO
- `SOURCE_STATUS`: PENDIENTE | PARCIAL | VERIFICADAS
- `REVIEW_STATUS`: PENDIENTE | EN_REVISIÓN | APROBADO
- `PRODUCTION_STATUS`: PENDIENTE | APROBADO_PARA_PREVIEW | APROBADO_PARA_PRODUCCIÓN

## Estado actual (Fase 2 en curso, rama `design/vida-en-movimiento`)

| Módulo | DEV_STATUS | CONTENT_STATUS | SOURCE_STATUS | REVIEW_STATUS | PRODUCTION_STATUS |
|---|---|---|---|---|---|
| Home (estructura + secciones) | TERMINADO | PARCIAL (ver abajo) | PARCIAL | PENDIENTE | PENDIENTE |
| Una vida en movimiento (fusión de biografía + timeline, experiencia interactiva) | TERMINADO | **VERIFICADO** (12/12 eventos, numeración global continua 01-12, agrupados en 6 etapas narrativas con imagen real por etapa) | **VERIFICADAS** (SRC-001 texto; SRC-007 imágenes) | PENDIENTE | PENDIENTE |
| Obras (6 fichas ampliadas) | TERMINADO | **VERIFICADO** — datos bibliográficos 6/6; ficha ampliada con al menos contexto+argumento en 4/6 (Quijote con las 10 secciones completas); Personajes de obra (no de Fase 3) pendiente en las 6 | **VERIFICADAS** (SRC-001, SRC-004, SRC-005, SRC-006) | PENDIENTE | PENDIENTE |
| Don Quijote (universo, estructura de subsecciones) | EN_DESARROLLO | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Las vidas de Cervantes (7 perfiles) | TERMINADO | **VERIFICADO** (7/7) | **VERIFICADAS** (SRC-001) | PENDIENTE | PENDIENTE |
| Curiosidades (6 preguntas) | TERMINADO | **VERIFICADO** (6/6) | **VERIFICADAS** (SRC-001, SRC-002, SRC-003, SRC-004, SRC-005) | PENDIENTE | PENDIENTE |
| Legado | PENDIENTE (placeholder "próximamente") | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Biblioteca digital | PENDIENTE (placeholder "próximamente") | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |

**Nota:** "Biografía de Cervantes" (capítulos sin prosa) y "Línea de tiempo" se fusionaron en "Una vida en
movimiento" a petición explícita del usuario (2026-09-02, ver ADR-011). "El mundo de Cervantes" se eliminó
por completo de la estructura del sitio, también a petición explícita — no se sustituyó por ningún otro
contenido ni sección.

**Nota sobre la curiosidad "Shakespeare":** existe una discrepancia real entre SRC-001 (institucional) y
SRC-002 (secundaria verificada) sobre el orden exacto de las muertes — documentada explícitamente en la
respuesta publicada y en `/docs/SOURCES.md`, sin resolverla artificialmente a favor de una sola versión.

Ningún módulo puede pasar a `PRODUCTION_STATUS: APROBADO_PARA_PRODUCCIÓN` sin que las cinco columnas estén
en su estado final aprobado y sin autorización explícita del usuario.
