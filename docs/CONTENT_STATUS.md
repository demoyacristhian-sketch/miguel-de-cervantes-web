# CONTENT_STATUS.md — Estado independiente del contenido

Este archivo separa explícitamente el estado del **código/interfaz** del estado del **contenido histórico**.
Que una interfaz esté terminada NO implica que su contenido esté aprobado. Estados usados:

- `DEV_STATUS`: PENDIENTE | EN_DESARROLLO | TERMINADO
- `CONTENT_STATUS`: PENDIENTE | EN_INVESTIGACIÓN | VERIFICADO
- `SOURCE_STATUS`: PENDIENTE | PARCIAL | VERIFICADAS
- `REVIEW_STATUS`: PENDIENTE | EN_REVISIÓN | APROBADO
- `PRODUCTION_STATUS`: PENDIENTE | APROBADO_PARA_PREVIEW | APROBADO_PARA_PRODUCCIÓN

## Estado actual (Fase 2/3/4/6 aceleradas por instrucción explícita, rama `content/quijote-legado-biblioteca`)

| Módulo | DEV_STATUS | CONTENT_STATUS | SOURCE_STATUS | REVIEW_STATUS | PRODUCTION_STATUS |
|---|---|---|---|---|---|
| Home (historia a pantalla completa: Hero + 4 paneles, scroll-snap) | TERMINADO | PARCIAL (ver abajo) | PARCIAL | PENDIENTE | PENDIENTE |
| Biografía (fusión de biografía + timeline + resumen inicial, experiencia interactiva) | TERMINADO | **VERIFICADO** (14/14 eventos, numeración global continua 01-14, 6 etapas narrativas con imagen real por etapa, resumen biográfico inicial) | **VERIFICADAS** (SRC-001, SRC-008, SRC-010 texto; SRC-007 imágenes) | PENDIENTE | PENDIENTE |
| Obras (6 fichas ampliadas, rediseño en tarjetas con portada + filtro) | TERMINADO | **VERIFICADO** — datos bibliográficos 6/6, 6/6 con portada de primera edición; campos de ficha ampliada: Don Quijote 9/10, Ocho comedias y Novelas ejemplares 7/10, Persiles y La Galatea 6/10, Viaje del Parnaso 5/10 | **VERIFICADAS** (SRC-001, SRC-004, SRC-005, SRC-006, SRC-007, SRC-011 a SRC-015) | PENDIENTE | PENDIENTE |
| Don Quijote (personajes, lugares, aventuras, temas, frases — pestañas interactivas + resumen inicial) | TERMINADO | **VERIFICADO** (10 personajes con sub-filtro Principales/Secundarios, 6 lugares, 7 aventuras, 5 temas, 3 frases — texto primario CVC) | **VERIFICADAS** (SRC-008, SRC-005) | PENDIENTE | PENDIENTE |
| Las vidas de Cervantes (7 perfiles) | TERMINADO | **VERIFICADO** (7/7) | **VERIFICADAS** (SRC-001) | PENDIENTE | PENDIENTE |
| Curiosidades (6 preguntas) | TERMINADO | **VERIFICADO** (6/6) | **VERIFICADAS** (SRC-001, SRC-002, SRC-003, SRC-004, SRC-005) | PENDIENTE | PENDIENTE |
| Legado (idioma, traducciones, arte, ediciones conmemorativas) | TERMINADO | **VERIFICADO** (4/4) | **VERIFICADAS** (SRC-009) | PENDIENTE | PENDIENTE |
| Biblioteca digital (5 recursos institucionales + Fuentes y créditos público) | TERMINADO | **VERIFICADO** — 9 fuentes y 14 imágenes registradas públicamente | **VERIFICADAS** (todas las SRC-00X) | PENDIENTE | PENDIENTE |

**Nota:** "Biografía de Cervantes" (capítulos sin prosa) y "Línea de tiempo" se fusionaron en "Una vida en
movimiento" a petición explícita del usuario (2026-09-02, ver ADR-011). "El mundo de Cervantes" se eliminó
por completo de la estructura del sitio, también a petición explícita — no se sustituyó por ningún otro
contenido ni sección.

**Nota sobre la aceleración de fases (2026-09-02, ADR-014):** el usuario pidió explícitamente
desarrollar Obras, Don Quijote, Legado y Biblioteca "hoy, en esta sesión", adelantando partes de las
Fases 3, 4 y 6 del roadmap. Se documenta como aceleración aprobada, no como salto de fase silencioso.
La imagen de Picasso (1955) mencionada en Legado no se reproduce en el sitio por tener derechos de
autor vigentes; solo se enlaza a la ficha oficial del museo.

**Nota sobre la ampliación de contenido (2026-09-03, ADR-017):** a petición explícita del usuario
("actualmente es muy superficial" / "debe estar muy bien desarrollada, es su obra maestra"), se
completaron los campos vacíos de la ficha de 5 obras, se amplió sustancialmente el Quijote
(personajes, lugares, aventuras y temas nuevos, todos verificados contra el texto primario) y se
añadieron 2 eventos biográficos nuevos + un resumen inicial en Biografía y en Quijote. "Una vida,
una historia" se renombró a "Biografía". 6 fuentes nuevas (SRC-010 a SRC-015).

**Nota sobre la curiosidad "Shakespeare":** existe una discrepancia real entre SRC-001 (institucional) y
SRC-002 (secundaria verificada) sobre el orden exacto de las muertes — documentada explícitamente en la
respuesta publicada y en `/docs/SOURCES.md`, sin resolverla artificialmente a favor de una sola versión.

Ningún módulo puede pasar a `PRODUCTION_STATUS: APROBADO_PARA_PRODUCCIÓN` sin que las cinco columnas estén
en su estado final aprobado y sin autorización explícita del usuario.
