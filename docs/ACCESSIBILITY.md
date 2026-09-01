# ACCESSIBILITY.md — Accesibilidad

Estado: **PROPUESTA** (Fase 0). Objetivo mínimo: **WCAG 2.2 AA** cuando sea razonablemente aplicable.
Implementación real desde Fase 1 ("accesibilidad base"), auditorías registradas aquí a partir de esa fase.

## Requisitos a implementar

- HTML semántico (landmarks: `header`, `nav`, `main`, `footer`, `section` con encabezados correctos).
- Navegación completa por teclado, incluyendo timeline interactivo, mapa y filtros.
- Foco visible en todos los elementos interactivos.
- Contraste de color conforme a AA (a verificar sobre la paleta final de `DESIGN_SYSTEM.md`).
- `alt` text en toda imagen con contenido informativo; imágenes decorativas marcadas correctamente.
- Labels asociados a todo control de formulario (buscador, filtros).
- ARIA solo cuando el HTML semántico no sea suficiente (nunca como sustituto de semántica correcta).
- Respeto de `prefers-reduced-motion` en todas las animaciones, especialmente el vídeo del Hero y el
  timeline.
- Skip links para saltar navegación repetitiva.
- Contenido comprensible: evitar jerga innecesaria, mantener niveles "Resumen" / "Profundizar" accesibles
  por igual.

## Registro de auditorías

_(vacío — se completará desde Fase 1 con herramientas como axe-core / Lighthouse y revisión manual de
teclado y lector de pantalla)_

| Fecha | Página/módulo | Herramienta | Resultado | Issues abiertos |
|---|---|---|---|---|
| — | — | — | — | — |
