# DESIGN_SYSTEM.md — Sistema de diseño (dirección preliminar)

Estado: **PROPUESTA PRELIMINAR** (Fase 0). Sin componentes implementados. Se materializará y refinará en
Fase 1.

## Dirección de arte

**Siglo de Oro + editorial contemporáneo.** No es una imitación literal de un manuscrito antiguo; es una
interfaz moderna, cultural, premium e inmersiva que evoca literatura, historia e imprenta sin caer en
estética turística ni plantilla genérica.

## Paleta (conceptual, pendiente de tokens exactos en Fase 1)

| Rol | Color | Uso |
|---|---|---|
| Fondo claro | Marfil / papel | Fondos principales, lectura larga |
| Texto / fondo oscuro | Negro / marrón profundo | Texto principal, secciones de contraste |
| Acento cálido | Burdeos | CTAs, acentos narrativos |
| Acento de detalle | Dorado (uso moderado) | Detalles, no como color dominante |

Los valores hexadecimales exactos, contraste WCAG y modo oscuro se definirán y documentarán en Fase 1 junto
con los tokens de Tailwind.

## Tipografía

- **Titulares:** serif editorial, literaria, con carácter histórico — candidata a evaluar en Fase 1
  (verificando licencia, soporte de caracteres españoles/acentos, rendimiento web y disponibilidad, p. ej.
  vía Google Fonts o self-hosted).
- **Interfaz y cuerpo:** sans-serif de alta legibilidad para textos largos y UI.
- Ninguna tipografía se selecciona solo por estética: debe pasar por checklist de licencia, disponibilidad,
  rendimiento, soporte de caracteres, legibilidad y compatibilidad web antes de adoptarse (Fase 1).

## Iconografía y animación

- Iconos: librería profesional coherente (a elegir en Fase 1, ej. Lucide o similar) — **nunca emojis** como
  iconografía de producto.
- Animación: preferir CSS/animaciones ligeras; librerías adicionales de animación solo con justificación
  técnica documentada. Microinteracciones (reveal, fade, parallax ligero, hover) con moderación, siempre
  respetando `prefers-reduced-motion`, accesibilidad y rendimiento.

## Hero cinematográfico (especificación funcional, sin implementación)

- Vídeo de fondo evocando literatura, historia, manuscritos, tinta, libros, Siglo de Oro, viaje, escritura —
  tono editorial/cultural/premium, nunca turístico ni genérico.
- Requisitos no negociables (a validar en Fase 1 antes de publicar cualquier Preview):
  - Optimizado, no bloqueante para la carga.
  - Fallback de imagen estática.
  - Estrategia específica para móvil (posible vídeo alternativo comprimido o imagen).
  - Respeto de `prefers-reduced-motion`.
  - Sin impacto negativo en CLS/LCP.
  - Overlay que garantice legibilidad del texto.
  - Licencia de uso del vídeo verificada y registrada en `public/media/manifest.json` antes de publicarse
    (ningún vídeo se usa sin derechos verificados).
- Copy de referencia (narrativa a conservar, composición visual puede evolucionar):

  > MIGUEL DE CERVANTES
  > El hombre detrás del Quijote
  > 1547 — 1616
  > Soldado. Cautivo. Recaudador. Dramaturgo. Poeta. Novelista.
  > [Explorar su vida] [Descubrir sus obras]

## Responsive

Diseño mobile-first coherente (no "desktop reducido"): sistema de breakpoints y composición pensados desde
móvil hacia pantallas grandes, a definir en Fase 1.

## Criterio de diseño (no negociable)

La web NO debe parecer plantilla genérica, proyecto escolar, Wikipedia, blog convencional ni web
institucional anticuada. Debe sentirse cultural, editorial, premium, moderna, inmersiva y rigurosa.
