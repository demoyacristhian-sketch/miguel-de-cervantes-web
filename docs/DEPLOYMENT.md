# DEPLOYMENT.md — Estrategia de despliegue

Estado: **DEFINIDA, SIN EJECUTAR** (Fase 0). Ningún proyecto Vercel ha sido creado todavía; no hay Preview
ni Producción. Se creará el proyecto Vercel en Fase 1, cuando exista código de aplicación real que desplegar.

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
