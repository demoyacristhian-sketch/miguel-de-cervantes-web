# DESIGN_SYSTEM.md — Sistema de diseño (dirección preliminar)

Estado: **PROPUESTA PRELIMINAR** (Fase 0). Sin componentes implementados. Se materializará y refinará en
Fase 1.

## Dirección de arte

**Siglo de Oro + editorial contemporáneo.** No es una imitación literal de un manuscrito antiguo; es una
interfaz moderna, cultural, premium e inmersiva que evoca literatura, historia e imprenta sin caer en
estética turística ni plantilla genérica.

## Paleta (implementada en Fase 1, `src/app/globals.css`)

| Token | Hex | Uso |
|---|---|---|
| `--palette-ivory` | `#f4efe4` | Fondo claro por defecto |
| `--palette-paper` | `#ece4d3` | Superficies (`--surface`), secciones alternas |
| `--palette-ink` | `#18140f` | Texto en modo claro, fondo en modo oscuro |
| `--palette-umber` | `#392c22` | Base de bordes sutiles (`--border-subtle`) |
| `--palette-burgundy` / `-light` | `#6e1423` / `#9c3b4a` | Acento (`--accent`) — claro/oscuro respectivamente |
| `--palette-gold` | `#ab8a45` | Detalle (`--detail`), uso moderado, no apto para texto de cuerpo (contraste insuficiente en AA) |

Modo claro y oscuro definidos vía `prefers-color-scheme`, con tokens semánticos (`--background`,
`--foreground`, `--surface`, `--accent`, `--detail`) que Tailwind v4 expone como utilidades
(`bg-background`, `text-accent`, etc.) a través de `@theme inline`.

## Tipografía (implementada en Fase 1)

- **Titulares:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (serif editorial,
  vía `next/font/google`, self-hosted en build, licencia SIL Open Font License, soporte completo de
  diacríticos españoles).
- **Interfaz y cuerpo:** [Inter](https://fonts.google.com/specimen/Inter) (sans-serif de alta legibilidad,
  vía `next/font/google`, misma licencia, variable font).
- Ambas cargadas con `display: "swap"` para no bloquear el render ni penalizar el LCP.
- Checklist cumplido: licencia (OFL, uso comercial libre), disponibilidad (Google Fonts, self-hosted por
  Next.js), rendimiento (subset `latin`, swap), soporte de caracteres (acentos/ñ verificados), legibilidad
  (ambas ampliamente usadas en producción editorial), compatibilidad web (soporte universal).

## Iconografía y animación

- Iconos: librería profesional coherente (a elegir en Fase 1, ej. Lucide o similar) — **nunca emojis** como
  iconografía de producto.
- Animación: preferir CSS/animaciones ligeras; librerías adicionales de animación solo con justificación
  técnica documentada. Microinteracciones (reveal, fade, parallax ligero, hover) con moderación, siempre
  respetando `prefers-reduced-motion`, accesibilidad y rendimiento.

## Hero cinematográfico (especificación funcional, sin implementación)

- Vídeo de fondo evocando literatura, historia, manuscritos, tinta, libros, Siglo de Oro, viaje, escritura —
  tono editorial/cultural/premium, nunca turístico ni genérico.
- Requisitos no negociables (a validar antes de publicar cualquier vídeo real):
  - Optimizado, no bloqueante para la carga.
  - Fallback de imagen estática.
  - Estrategia específica para móvil (posible vídeo alternativo comprimido o imagen).
  - Respeto de `prefers-reduced-motion`.
  - Sin impacto negativo en CLS/LCP.
  - Overlay que garantice legibilidad del texto.
  - Licencia de uso del vídeo verificada y registrada en `public/media/manifest.json` antes de publicarse
    (ningún vídeo se usa sin derechos verificados).

**Estado real (Fase 1, actualizado 2026-09-02):** implementado `src/components/sections/Hero.tsx` **sin
vídeo, con imagen fotográfica real** (a petición explícita del usuario, inspirado en la portada de un
"story" de Google Arts & Culture) — el retrato tradicionalmente atribuido a Juan de Jáuregui (h. 1600, Real
Academia de la Historia), dominio público verificado, ver `public/media/manifest.json` y
`docs/SOURCES.md` (SRC-007). Overlay degradado oscuro para legibilidad, `next/image` con `priority` para no
penalizar el LCP, sin animación (respeta `prefers-reduced-motion` de forma trivial). Crédito y advertencia de
autenticidad no confirmada visibles en el propio Hero. Sustituir por `<video>` solo si en el futuro se
aprueba un recurso audiovisual con licencia verificada — no es una prioridad actual.
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
