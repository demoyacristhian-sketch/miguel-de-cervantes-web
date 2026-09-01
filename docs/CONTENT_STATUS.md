# CONTENT_STATUS.md — Estado independiente del contenido

Este archivo separa explícitamente el estado del **código/interfaz** del estado del **contenido histórico**.
Que una interfaz esté terminada NO implica que su contenido esté aprobado. Estados usados:

- `DEV_STATUS`: PENDIENTE | EN_DESARROLLO | TERMINADO
- `CONTENT_STATUS`: PENDIENTE | EN_INVESTIGACIÓN | VERIFICADO
- `SOURCE_STATUS`: PENDIENTE | PARCIAL | VERIFICADAS
- `REVIEW_STATUS`: PENDIENTE | EN_REVISIÓN | APROBADO
- `PRODUCTION_STATUS`: PENDIENTE | APROBADO_PARA_PREVIEW | APROBADO_PARA_PRODUCCIÓN

## Estado actual (Fase 0)

Ninguna sección de contenido existe todavía. Tabla vacía a completar desde Fase 1/2:

| Módulo | DEV_STATUS | CONTENT_STATUS | SOURCE_STATUS | REVIEW_STATUS | PRODUCTION_STATUS |
|---|---|---|---|---|---|
| Home | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Biografía de Cervantes | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Línea de tiempo | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Obras (biblioteca) | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Don Quijote (universo) | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| El mundo de Cervantes | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Curiosidades | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Legado | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Biblioteca digital | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |

Ningún módulo puede pasar a `PRODUCTION_STATUS: APROBADO_PARA_PRODUCCIÓN` sin que las cinco columnas estén
en su estado final aprobado y sin autorización explícita del usuario.
