# DEPLOYMENT.md — Estrategia de despliegue

Estado: **EN USO** (Fase 1). Proyecto Vercel creado y conectado al repositorio de GitHub.

## Estado real del proyecto Vercel

- **Proyecto:** `miguel-de-cervantes-web`, bajo el team de Vercel **CDM Labs** (único scope disponible en la
  cuenta autenticada; no existe un scope "personal" separado).
- **Integración Git:** conectada a `demoyacristhian-sketch/miguel-de-cervantes-web`. Rama de producción por
  defecto: `main` (rama por defecto del repositorio).
- **URLs:**
  - Alias de producción: `https://miguel-de-cervantes-web.vercel.app`
  - Panel del proyecto: `https://vercel.com/cdmlabs/miguel-de-cervantes-web`
- **Incidente registrado (ADR-007):** el primer despliegue (vía `vercel deploy` desde la CLI, sin `--prod`)
  fue promovido automáticamente a producción por Vercel — comportamiento propio de la plataforma en el
  primer deployment de un proyecto nuevo. Contenido 100% placeholder, impacto evaluado como bajo, aceptado
  por el usuario. **Regla derivada: no volver a ejecutar `vercel deploy` manual sin flags explícitos** —
  los despliegues deben salir de la integración Git (push de rama), o en su defecto usar siempre
  `--target=preview` de forma explícita.
- **Primer Preview real (rama `feature/mvp-scaffold`):**
  `https://miguel-de-cervantes-50a0pg9z7-cdmlabs.vercel.app` — desplegado con `vercel deploy
  --target=preview` (`target: null` confirmado, no tocó el alias de producción). Protegido por Vercel
  Authentication por defecto (requiere sesión de Vercel del equipo CDM Labs para verse) — comportamiento
  estándar de Preview Deployments en un team, no configurado manualmente.
- **Rama de producción confirmada:** `main` (verificado vía API de Vercel, campo `link.productionBranch`).
  Desde el 2026-09-01, cualquier push a `main` dispara automáticamente un despliegue de producción — por
  eso ningún push a `main` debe hacerse sin la aprobación explícita correspondiente.
- **Actualización de producción aprobada (2026-09-01):** el despliegue de producción accidental (ADR-007)
  había quedado congelado mostrando contenido sin verificar (todo el timeline/obras/vidas/curiosidades en
  estado "pendiente de verificación"). El usuario lo notó al revisar `miguel-de-cervantes-web.vercel.app` y,
  tras explicárselo, aprobó explícitamente actualizarlo ("Actualiza ya la producción con el contenido
  verificado actual"). Se mergeó `content/fuentes-timeline-obras-vidas` → `develop` → `main` (commit
  `d886473`) y Vercel desplegó automáticamente vía integración Git (deployment
  `https://miguel-de-cervantes-61ziii0ok-cdmlabs.vercel.app`, alias `miguel-de-cervantes-web.vercel.app`).
  Verificado visualmente que la producción ya muestra los badges "Verificado" correctos.

## Flujo

```text
feature/* (o content/*, design/*, fix/*)
      ↓
push a GitHub
      ↓
Vercel Preview Deployment (automático vía integración GitHub)
      ↓
QA (lint, typecheck, build, responsive, accesibilidad básica, enlaces)
      ↓
revisión del usuario sobre el Preview
      ↓
aprobación explícita del usuario
      ↓
merge a main (vía PR, nunca push directo)
      ↓
Vercel Production (automático al mergear a main)
```

`main` representa producción. Ningún desarrollo ordinario se realiza directamente sobre `main`. Ningún
merge a `main` ni deployment de producción se ejecuta sin aprobación explícita del usuario (ver `CLAUDE.md`
§7 y §1 del prompt maestro).

## Formato de entrega de cada Preview

Cada vez que se entregue un Preview relevante, se informará con este formato:

```text
IMPLEMENTACIÓN:
RAMA:
COMMIT:
PREVIEW:
CAMBIOS:
PRUEBAS:
RIESGOS:
PENDIENTES:
PRODUCCIÓN AFECTADA: NO
```

## Integración GitHub ↔ Vercel

Pendiente de configurar en Fase 1: conectar el repositorio `demoyacristhian-sketch/miguel-de-cervantes-web`
a un nuevo proyecto Vercel, configurando Preview Deployments automáticos por rama/PR y Production
Deployment solo desde `main`. Evitar despliegues manuales a producción cuando el pipeline Git pueda usarse.

## Variables de entorno

Ninguna variable de entorno de producción existe todavía. Cuando se necesiten (ej. claves de mapas en Fase
3, IA en Fase 5), se documentarán en `.env.example` (sin valores reales) y se configurarán en Vercel
manualmente, nunca en el repositorio.
