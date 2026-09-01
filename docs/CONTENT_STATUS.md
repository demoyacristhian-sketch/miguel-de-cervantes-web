# CONTENT_STATUS.md — Estado independiente del contenido

Este archivo separa explícitamente el estado del **código/interfaz** del estado del **contenido histórico**.
Que una interfaz esté terminada NO implica que su contenido esté aprobado. Estados usados:

- `DEV_STATUS`: PENDIENTE | EN_DESARROLLO | TERMINADO
- `CONTENT_STATUS`: PENDIENTE | EN_INVESTIGACIÓN | VERIFICADO
- `SOURCE_STATUS`: PENDIENTE | PARCIAL | VERIFICADAS
- `REVIEW_STATUS`: PENDIENTE | EN_REVISIÓN | APROBADO
- `PRODUCTION_STATUS`: PENDIENTE | APROBADO_PARA_PREVIEW | APROBADO_PARA_PRODUCCIÓN

## Estado actual (Fase 1 en curso, rama `feature/mvp-scaffold`)

| Módulo | DEV_STATUS | CONTENT_STATUS | SOURCE_STATUS | REVIEW_STATUS | PRODUCTION_STATUS |
|---|---|---|---|---|---|
| Home (estructura + secciones) | TERMINADO | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Biografía de Cervantes (capítulos, sin prosa) | EN_DESARROLLO | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Línea de tiempo (años ancla, sin eventos) | EN_DESARROLLO | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Obras (biblioteca, 6 fichas mínimas) | EN_DESARROLLO | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Don Quijote (universo, estructura de subsecciones) | EN_DESARROLLO | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| El mundo de Cervantes | PENDIENTE (placeholder "próximamente") | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Curiosidades (preguntas sin responder) | EN_DESARROLLO | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Legado | PENDIENTE (placeholder "próximamente") | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |
| Biblioteca digital | PENDIENTE (placeholder "próximamente") | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |

Ningún módulo tiene contenido histórico real todavía: todos los registros de `src/content/*.json` están
marcados `status: "pendiente_de_verificacion"` y se muestran con badge visible en la interfaz.

Ningún módulo puede pasar a `PRODUCTION_STATUS: APROBADO_PARA_PRODUCCIÓN` sin que las cinco columnas estén
en su estado final aprobado y sin autorización explícita del usuario.
