# PERFORMANCE.md — Rendimiento

Estado: **PROPUESTA** (Fase 0). Medición real desde Fase 1.

## Prioridades

- Core Web Vitals (LCP, CLS, INP) como métrica de referencia en cada Preview relevante.
- El vídeo de fondo del Hero recibe análisis de rendimiento específico y dedicado (ver también
  `DESIGN_SYSTEM.md` §Hero cinematográfico): compresión, formato, estrategia móvil, fallback, impacto en
  LCP/CLS, `prefers-reduced-motion`.
- Imágenes: optimización nativa de Next.js (`next/image`) cuando resulte apropiado, formatos modernos,
  tamaños responsive, lazy loading por defecto, `priority` únicamente en recursos realmente críticos
  (ej. imagen del Hero si no hay vídeo).
- Fuentes: self-host o carga optimizada (`next/font`), evitando bloqueo de render.
- JS: code splitting por ruta (nativo de Next.js App Router), Server Components por defecto para reducir JS
  enviado al cliente.
- Caching y generación estática (SSG/ISR) para contenido editorial que cambia poco.

## Registro de mediciones

_(vacío — se completará desde el primer Preview de Fase 1 con Lighthouse/Web Vitals)_

| Fecha | Página | LCP | CLS | INP | Notas |
|---|---|---|---|---|---|
| — | — | — | — | — | — |
