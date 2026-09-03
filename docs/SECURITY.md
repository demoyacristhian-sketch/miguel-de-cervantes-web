# SECURITY.md — Seguridad, privacidad y derechos

Estado: **VIGENTE desde Fase 0** — estas reglas aplican desde el primer commit, no solo desde que exista
código de aplicación.

## Secretos y credenciales

- Nunca subir `.env`, API keys, tokens ni credenciales al repositorio (repositorio **público**, por lo que
  cualquier secreto expuesto es público de inmediato).
- `.env.example` en la raíz, sin valores reales, documentando qué variables existirán cuando se necesiten.
- `.gitignore` debe excluir `.env*` (excepto `.env.example`), `node_modules`, artefactos de build (`.next/`,
  `out/`), y archivos de sistema (`.DS_Store`).
- No mostrar nunca información sensible en el frontend.

## Política de imágenes y multimedia (derechos)

Orden de preferencia para cualquier recurso visual:

1. Dominio público.
2. Instituciones culturales que permitan reutilización explícita.
3. Creative Commons compatible.
4. Recursos creados específicamente para el proyecto.

Antes de incorporar cualquier imagen o vídeo, registrar en `public/media/manifest.json`:

```json
{
  "title": "",
  "author": "",
  "date": "",
  "institution": "",
  "originalUrl": "",
  "license": "",
  "copyrightStatus": "",
  "attributionRequired": false,
  "usagePermitted": ""
}
```

**Nunca** asumir que una imagen es libre por aparecer en un buscador de imágenes. Google Images no es fuente
de licencia. Ante cualquier duda sobre derechos: **no publicar**, documentar la duda y esperar verificación.

## Privacidad

- No publicar información privada, personal innecesaria, documentos privados o imágenes sin autorización.
- Aplicar los mismos criterios de derechos de autor/reproducción a fotografías de obras y a personajes
  históricos.
- Ante cualquier duda de privacidad o derechos: **NO PUBLICAR**.

## Analytics y cookies

- No instalar ningún sistema de analítica por defecto. Antes de instalar cualquiera, presentar opciones
  (Vercel Analytics, Plausible, GA4, alternativa), explicar implicaciones de privacidad/cookies y esperar
  aprobación explícita.
- No introducir banners de cookies por defecto; determinar primero qué servicios los requieren realmente y
  aplicar minimización.

## Superficie de ataque (estado a 2026-09-04)

El sitio es una aplicación 100% estática (contenido en JSON versionado, sin base de datos): no hay
rutas de API (`route.ts`), formularios, cookies, `dangerouslySetInnerHTML` ni scripts de terceros.
Los enlaces externos usan `target="_blank"` siempre junto a `rel="noopener noreferrer"` (evita
"reverse tabnabbing"). `npm audit` no reporta vulnerabilidades conocidas en las dependencias
(revisar de nuevo tras cualquier actualización de paquetes). Esto mantiene la superficie de ataque
real muy reducida por diseño, no solo por configuración.

## Cabeceras de seguridad HTTP

Configuradas en `next.config.ts` (`headers()`), aplicadas a todas las rutas vía la integración Git
de Vercel — sin ningún servicio externo ni de pago:

- **`Content-Security-Policy`**: `default-src 'self'` como base; `frame-ancestors 'none'` y
  `object-src 'none'` cierran vectores de clickjacking y de plugins heredados. `script-src` y
  `style-src` usan `'self' 'unsafe-inline'` en producción (en desarrollo se añade además
  `'unsafe-eval'`, que exige el Fast Refresh de Next.js). Se evaluó el patrón oficial de Next.js de
  nonce por petición con `'strict-dynamic'`
  (https://nextjs.org/docs/app/guides/content-security-policy) para evitar `'unsafe-inline'` en
  `script-src`, pero **se descartó tras probarlo**: ese patrón exige leer el nonce vía `headers()`
  en un Server Component, lo que fuerza renderizado dinámico — incompatible con la arquitectura
  100% estática de este sitio (páginas prerenderizadas en build time). Con páginas estáticas, el
  nonce de cada petición nunca coincide con el de los scripts de hidratación ya fijados en el HTML
  generado una sola vez, y el navegador los bloquea (rompe la app: se confirmó con errores de CSP y
  "Minified React error #412" en pruebas locales). `'unsafe-inline'` es entonces una concesión
  intrínseca a cómo Next.js/React hidratan una app estática (Hero, StorySlide, EraScene y Reveal
  además calculan degradados/transiciones vía la prop `style` de React, cubierto por el mismo
  `'unsafe-inline'` en `style-src`) — no a código propio, y de bajo riesgo real porque el sitio no
  tiene rutas de API, formularios, cookies, `dangerouslySetInnerHTML` ni entrada de usuario
  reflejada en el HTML: no existe vector para que un atacante inyecte su propio script o estilo
  inline.
- **`X-Frame-Options: DENY`**: refuerzo de `frame-ancestors` para navegadores que no soporten CSP.
- **`X-Content-Type-Options: nosniff`**: evita que el navegador reinterprete el tipo MIME de un
  archivo servido.
- **`Referrer-Policy: strict-origin-when-cross-origin`**: no filtra la URL completa al navegar a
  sitios externos (los 5 enlaces de Biblioteca/Legado).
- **`Permissions-Policy`**: desactiva explícitamente cámara, micrófono, geolocalización y el
  seguimiento de cohortes (`interest-cohort`, FLoC) — el sitio no usa ninguna de estas APIs.
- **`Strict-Transport-Security`**: fuerza HTTPS en el navegador durante dos años una vez visitado
  (Vercel ya sirve todo por HTTPS de forma automática y gratuita, con o sin dominio propio).
- **`poweredByHeader: false`**: quita la cabecera `X-Powered-By: Next.js` (menor huella informativa
  para quien intente huella digital de la pila tecnológica).

**Verificación:** tras cada despliegue, `curl -sI <url>` debe mostrar las seis cabeceras anteriores.
Revisar la consola del navegador en busca de errores de CSP tras cualquier cambio que añada un
recurso externo nuevo (fuente, imagen, script) — el CSP actual solo permite `'self'` y `data:`.

**Pendiente si el proyecto obtiene dominio propio:** publicar un `security.txt`
(`/.well-known/security.txt`, RFC 9116) con un contacto de seguridad real — no se ha creado todavía
porque requeriría inventar un correo de contacto, y este proyecto no inventa datos de contacto sin
que el responsable del sitio los proporcione.

## Producción

- Ningún cambio de configuración de producción, DNS, variables de entorno de producción, eliminación de
  datos, migraciones destructivas o eliminación de recursos cloud se ejecuta sin aprobación explícita
  equivalente a `APROBADO PARA PRODUCCIÓN` (ver regla en `CLAUDE.md` §7).
