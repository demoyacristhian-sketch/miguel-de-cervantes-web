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

## Producción

- Ningún cambio de configuración de producción, DNS, variables de entorno de producción, eliminación de
  datos, migraciones destructivas o eliminación de recursos cloud se ejecuta sin aprobación explícita
  equivalente a `APROBADO PARA PRODUCCIÓN` (ver regla en `CLAUDE.md` §7).
