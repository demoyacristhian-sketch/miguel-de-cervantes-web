# DECISIONS.md — Registro de decisiones (ADR)

Las decisiones nunca se sobrescriben. Si una decisión cambia, se crea una nueva entrada que referencia y
sustituye a la anterior, dejando ambas visibles.

---

## ADR-001

- **Fecha:** 2026-09-01
- **Tema:** Versión de TypeScript a usar
- **Contexto:** La última versión publicada en npm es TypeScript 7.0.2, que introduce un compilador nativo en
  Go y elimina `lib/typescript.js` (API programática JS del compilador). Next.js 16.3 solo la soporta vía
  flag experimental `experimental.useTypeScriptCli`. ESLint, editores y parte del ecosistema de plugins aún
  no tienen soporte estable, según la propia documentación de Next.js/Vercel ("build tools, linters ... may
  need to wait for 7.1").
- **Opciones:**
  1. TypeScript 7.0.2 (última versión disponible).
  2. TypeScript 6.0.3 (última versión estable de la serie 6.x, con API completa).
- **Decisión:** Usar **TypeScript 6.0.3**.
- **Razón:** Prioridad de estabilidad y mantenibilidad sobre "usar siempre lo último", consistente con la
  regla de no sobreingeniería del proyecto. TS 7 es demasiado reciente para el ecosistema de tooling
  (ESLint type-aware, extensiones de editor) que este proyecto necesita para desarrollo sostenido.
- **Impacto:** Ninguno negativo conocido; TS 6.0.3 es totalmente compatible con Next.js 16.3.4 y React 19.
- **Aprobado por:** Decisión técnica del desarrollador dentro del criterio "senior" del proyecto; no requiere
  aprobación de negocio. Documentada para trazabilidad y revisión futura.
- **Estado:** VIGENTE. Revisar cuando TypeScript 7.1+ tenga soporte estable confirmado en el ecosistema.

---

## ADR-002

- **Fecha:** 2026-09-01
- **Tema:** Repositorio GitHub — nombre, propietario y visibilidad
- **Contexto:** El prompt maestro exige detenerse y preguntar si el propietario, nombre o permisos del
  repositorio no pueden determinarse sin asumir. La cuenta GitHub autenticada (`demoyacristhian-sketch`) no
  tiene organizaciones disponibles (verificado vía `gh api user/orgs`).
- **Opciones presentadas al usuario:** nombre corto vs. descriptivo; público vs. privado.
- **Decisión:** Repositorio **`demoyacristhian-sketch/miguel-de-cervantes-web`**, **público**.
- **Razón:** Elección explícita del usuario tras pregunta directa (2026-09-01).
- **Impacto:** Al ser público, cualquier contenido subido es visible externamente desde el primer commit —
  refuerza la importancia de no subir nunca secretos ni contenido con derechos no verificados.
- **Aprobado por:** Usuario (respuesta directa a pregunta de clarificación).
- **Estado:** VIGENTE.

---

## ADR-003

- **Fecha:** 2026-09-01
- **Tema:** Estrategia de contenido para el MVP (sin CMS externo)
- **Contexto:** El prompt maestro pide priorizar una arquitectura simple y mantenible para el MVP, evitando
  un CMS complejo sin necesidad real, pero permitiendo migración futura a Supabase/PostgreSQL o CMS headless.
- **Opciones:** (a) CMS headless desde el inicio; (b) JSON/MDX versionado en Git con capa de datos
  abstracta.
- **Decisión:** Opción (b) — JSON estructurado versionado en Git, ver `CONTENT_MODEL.md`.
- **Razón:** Menor complejidad operativa, versionado natural vía Git (coherente con el flujo de aprobación
  humana del proyecto), sin coste ni dependencia externa adicional en el MVP.
- **Impacto:** Requiere disciplina en el diseño de la capa de acceso a contenido (`src/lib/content/*`) para
  no acoplar componentes al formato JSON y facilitar una migración futura.
- **Aprobado por:** Decisión técnica del desarrollador, alineada con instrucción explícita del prompt
  maestro (sección 9, "CMS/Contenido").
- **Estado:** VIGENTE.

---

## ADR-004

- **Fecha:** 2026-09-01
- **Tema:** Diferimiento de "Pregunta a Cervantes" (IA/RAG)
- **Contexto:** El prompt maestro prohíbe explícitamente implementar esta funcionalidad en el MVP y exige
  presentar arquitectura, costes, seguridad, modelo, almacenamiento, estrategia RAG y mitigación de
  alucinaciones antes de construirla, esperando aprobación específica.
- **Decisión:** La funcionalidad queda formalmente en estado **BLOQUEADO** hasta Fase 5, sin ningún trabajo
  preparatorio de infraestructura (sin cuenta OpenAI, sin base vectorial, sin Supabase) hasta esa fase.
- **Razón:** Cumplimiento directo de instrucción explícita del prompt maestro (sección 42) y del roadmap
  oficial (sección 45, Fase 5).
- **Impacto:** Ninguno en el MVP; se documenta aquí para que ninguna sesión futura la implemente por error
  antes de tiempo.
- **Aprobado por:** Regla explícita del prompt maestro; no requiere decisión adicional.
- **Estado:** VIGENTE — BLOQUEADO hasta aprobación específica de Fase 5.

---

## ADR-005

- **Fecha:** 2026-09-01
- **Tema:** ESLint 9.x en lugar de 10.x, verificado empíricamente
- **Contexto:** `docs/ARCHITECTURE.md` (Fase 0) había propuesto ESLint 10.9.1 por ser la versión más reciente
  en npm. Al instalar el scaffold real, `eslint-config-next@16.3.4` con `eslint@10.9.1` produjo un árbol
  `invalid` (`npm ls` → `ELSPROBLEMS`): sus plugins internos (`eslint-plugin-import`,
  `eslint-plugin-jsx-a11y`, `eslint-plugin-react`) tienen como techo `eslint@^9.x` en `peerDependencies`.
- **Decisión:** Fijar `eslint@9.39.5` (última 9.x estable). Árbol de dependencias resuelve limpio (0
  problemas) con esta versión.
- **Razón:** Verificación empírica (instalación real), no solo lectura de changelog. Corrige ADR/documento
  previo con datos reales, conforme al protocolo anti-alucinación del proyecto.
- **Impacto:** Ninguno funcional; ESLint 9 cubre todas las reglas necesarias para el proyecto.
- **Aprobado por:** Decisión técnica, documentada para trazabilidad.
- **Estado:** VIGENTE. Revisar cuando `eslint-config-next` actualice sus plugins internos a soportar ESLint 10.

---

## ADR-006

- **Fecha:** 2026-09-01
- **Tema:** Hero cinematográfico sin vídeo real en Fase 1
- **Contexto:** El prompt maestro exige un vídeo de fondo cinematográfico en el Hero, pero también prohíbe
  usar cualquier recurso audiovisual sin derechos verificados y registrados en
  `public/media/manifest.json`. Ningún vídeo ha sido investigado ni aprobado todavía.
- **Decisión:** Implementar el Hero (`src/components/sections/Hero.tsx`) con un fallback 100% CSS
  (degradados radiales sobre la paleta del proyecto + textura sutil) en lugar de inventar o descargar un
  vídeo de origen dudoso. La copy exacta requerida por el prompt maestro se mantiene íntegra.
- **Razón:** Cumplimiento del principio "ante cualquier duda de derechos: NO PUBLICAR" — preferible una
  versión sin vídeo, honesta y de buen aspecto, a arriesgar derechos de autor.
- **Impacto:** Ninguno negativo — el fallback ya cumple los requisitos de rendimiento/accesibilidad
  (no bloquea LCP, no afecta CLS, respeta `prefers-reduced-motion` al no tener animación).
- **Aprobado por:** Decisión técnica alineada con reglas explícitas del prompt maestro (secciones 13 y 15).
- **Estado:** VIGENTE. Sustituir por `<video>` real solo cuando el usuario apruebe un recurso con licencia
  verificada.

---

## ADR-007

- **Fecha:** 2026-09-01
- **Tema:** Incidente — primer despliegue de Vercel promovido a producción sin querer
- **Contexto:** Al ejecutar `vercel deploy` (sin `--prod`) sobre un proyecto Vercel recién creado, la CLI
  promovió automáticamente ese primer despliegue a producción (comportamiento propio de Vercel: el primer
  deployment de un proyecto nuevo se convierte en producción aunque no se pase `--prod`), quedando publicado
  en el alias de producción `miguel-de-cervantes-web.vercel.app` sin que mediara la aprobación explícita que
  exige la regla human-in-the-loop del proyecto.
- **Impacto evaluado:** bajo — contenido 100% placeholder marcado `pendiente_de_verificacion`, sin dominio
  propio, sin datos reales, sin usuarios. Comunicado de inmediato al usuario, que decidió dejarlo así.
- **Decisión:** (1) Aceptar el estado actual (usuario informado y conforme). (2) A partir de ahora, **no
  usar `vercel deploy` sin flags desde la CLI** para desplegar este proyecto. Los despliegues deben ocurrir
  vía integración Git (push a una rama → Vercel genera Preview automáticamente; push/merge a `main` →
  producción), que es el flujo que ya exige `docs/DEPLOYMENT.md`. Si en algún momento se necesita un deploy
  manual por CLI, usar explícitamente `--target=preview` y nunca ejecutar el comando por defecto en un
  proyecto donde aún no exista un despliegue de producción previo sin verificar antes el comportamiento.
- **Razón:** Evitar que se repita esta clase de error; la integración Git es más segura porque separa
  claramente qué rama produce qué tipo de despliegue.
- **Aprobado por:** Usuario (conforme con dejar el despliegue actual, 2026-09-01).
- **Estado:** VIGENTE.

---

## ADR-008

- **Fecha:** 2026-09-01
- **Tema:** Primera actualización aprobada de producción (MVP + verificación de Fase 2)
- **Contexto:** El usuario, revisando el sitio, preguntó por qué todo seguía apareciendo "sin verificación".
  Se detectó que estaba mirando la URL de producción (`miguel-de-cervantes-web.vercel.app`), congelada desde
  el incidente de ADR-007 en el estado del scaffold anterior a toda investigación de fuentes — mientras que
  todo el trabajo de Fase 2 solo existía en Preview Deployments, nunca en producción, por diseño.
- **Decisión:** Ante la instrucción explícita del usuario — "Actualiza ya la producción con el contenido
  verificado actual" — se mergeó `content/fuentes-timeline-obras-vidas` → `develop` → `main` (commit
  `d886473`) y se dejó que la integración Git de Vercel desplegara automáticamente a producción (rama de
  producción confirmada como `main` vía API de Vercel), en vez de usar `vercel deploy --prod` manual.
- **Razón:** Esta es exactamente el tipo de instrucción inequívoca que la regla de aprobación humana del
  proyecto exige antes de tocar producción. Se prefirió el camino Git (merge a `main`) sobre un deploy manual
  por CLI, seguiendo la regla derivada de ADR-007.
- **Impacto:** La producción ahora refleja fielmente el estado verificado de Fase 1 + primera iteración de
  Fase 2. Verificado visualmente tras el despliegue.
- **Aprobado por:** Usuario, instrucción explícita, 2026-09-01.
- **Estado:** VIGENTE. **No es una autorización permanente**: cualquier futuro merge a `main` requiere una
  nueva aprobación explícita, no se generaliza a partir de esta.

---

## ADR-009

- **Fecha:** 2026-09-01
- **Tema:** Segunda actualización aprobada de producción (optimización de densidad de Home)
- **Contexto:** Tras la sesión de diseño que redujo la densidad de información de Home (ReadMore, badges
  minimalistas, secciones acortadas a 3 elementos + `/curiosidades`), el usuario pidió explícitamente
  "ponlo a producción".
- **Decisión:** Se mergeó `design/optimizacion-densidad-home` → `develop` → `main` (commit `10eacb5`), y
  Vercel desplegó automáticamente a producción (`https://miguel-de-cervantes-8uk8az5sr-cdmlabs.vercel.app`,
  alias `miguel-de-cervantes-web.vercel.app`). Verificado visualmente tras el despliegue.
- **Razón:** Instrucción explícita e inequívoca del usuario, sin ambigüedad.
- **Impacto:** Solo diseño/UX — sin cambios de contenido ni de fuentes. Producción sigue reflejando
  fielmente el estado verificado del proyecto.
- **Aprobado por:** Usuario, instrucción explícita ("ponlo a producción"), 2026-09-01.
- **Estado:** VIGENTE. Igual que ADR-008, no es una autorización permanente para futuros despliegues.

---

## ADR-010

- **Fecha:** 2026-09-02
- **Tema:** Tercera actualización aprobada de producción (fichas ampliadas de las 6 obras)
- **Contexto:** El usuario preguntó si las fichas ampliadas (contexto, argumento, temas, estructura,
  curiosidades, ediciones, recepción, influencia de las 6 obras) ya estaban en producción. Se verificó que
  no —`main` seguía en el commit de la optimización de densidad (`10eacb5`)— y se informó con transparencia.
- **Decisión:** Ante la instrucción explícita "sí, ponlo a producción", se mergeó
  `content/fichas-ampliadas-obras` → `develop` → `main` (commit `572af9c`), desplegado automáticamente por
  Vercel. Verificado visualmente que `/obras/don-quijote-de-la-mancha` en producción muestra el contenido
  real con badges "Verificado" por campo.
- **Razón:** Instrucción explícita e inequívoca del usuario.
- **Impacto:** Contenido nuevo verificado (fichas de obra); ningún dato inventado, ningún campo relleno
  artificialmente.
- **Aprobado por:** Usuario, instrucción explícita, 2026-09-02.
- **Estado:** VIGENTE. Como en ADR-008/009, no es una autorización permanente para futuros despliegues.

---

## ADR-011

- **Fecha:** 2026-09-02
- **Tema:** Reestructuración de navegación — eliminación de "Inicio" y "El mundo de Cervantes", fusión de
  "Miguel de Cervantes" + "Línea de tiempo" en "Una vida en movimiento"
- **Contexto:** El usuario pidió, con instrucciones muy detalladas: (1) eliminar "Inicio" (redundante con el
  logo/wordmark) y "El mundo de Cervantes" de la navegación sin sustituirlos por nada; (2) fusionar
  `/cervantes` (biografía por capítulos, sin prosa) y `/linea-de-tiempo` (12 eventos verificados) en una
  única sección "Una vida en movimiento"; (3) que esa sección fuera una experiencia interactiva de nivel
  editorial (jerarquía de 3 niveles de información, movimiento con propósito), no una página de scroll con
  bloques de texto.
- **Decisión:**
  - Nueva ruta `/vida-en-movimiento`, con redirects 301 desde `/cervantes` y `/linea-de-tiempo` en
    `next.config.ts` (ambas rutas estuvieron brevemente en producción).
  - Los 12 eventos ya verificados (SRC-001) se agrupan en 6 "etapas" narrativas editoriales (agrupación de
    diseño, no nuevos hechos históricos): Infancia y formación, Italia y las armas, Cautiverio en Argel, El
    regreso y los años de oficio, La consagración literaria, Los últimos días.
  - Interacción: scroll vertical macro a través de 6 escenas de etapa (cada una con tono cromático propio,
    construido con la paleta ya existente) + un carril horizontal de tarjetas por etapa (scroll-snap nativo,
    funciona igual en trackpad y táctil) + expansión de nivel 3 vía `<details>` nativo (mismo patrón que
    `ReadMore.tsx`) + barra de navegación por etapas con resaltado activo (scrollspy por posición de scroll,
    sin `IntersectionObserver` por un caso límite detectado con la última sección).
  - Se descartó el scroll horizontal de página completa (todas las etapas como "slides" con scroll-jacking)
    por su fragilidad entre dispositivos de entrada y su peor accesibilidad por teclado.
  - "El mundo de Cervantes" se elimina sin sustituto: ruta, enlaces de nav/footer/Home y entradas de
    `sitemap.ts` borrados por completo, sin redirigir ni redistribuir su contenido (nunca tuvo contenido
    real, solo un placeholder "próximamente").
  - No se escribió biografía narrativa nueva: las descripciones de los 12 eventos ya verificados, más un
    párrafo de apertura editorial (marco narrativo, no un hecho nuevo), constituyen la "biografía concisa"
    pedida. Escribir prosa nueva de los 15 capítulos que existían en `/cervantes` habría requerido una
    investigación de fuentes aparte, fuera del alcance de este cambio de IA/UX.
- **Razón:** Instrucción explícita y muy detallada del usuario; esta decisión también adelanta parte de la
  Fase 3 del roadmap ("timeline avanzado") a petición suya.
- **Impacto:** Reduce la navegación principal de 8 a 5 elementos. Ningún dato histórico nuevo se introduce;
  el contenido verificado existente se reorganiza y presenta de forma interactiva.
- **Aprobado por:** Usuario, mediante plan presentado y aprobado antes de implementar (EnterPlanMode/
  ExitPlanMode), 2026-09-02.
- **Estado:** VIGENTE.

---

## ADR-012

- **Fecha:** 2026-09-02
- **Tema:** Coherencia cronológica en "Una vida en movimiento" + Hero fotográfico + fuente de imágenes
- **Contexto:** El usuario revisó `/vida-en-movimiento` (ADR-011) y señaló que, pese a tener datos
  verificados, no se leía como una secuencia clara de nacimiento a muerte — las 6 etapas, cada una con su
  propio carril horizontal y numeración interna, rompían la sensación de una sola vida continua. Pidió
  aplicar el patrón de pasos numerados continuos de nownlab.es/soluciones, y un Hero fotográfico inspirado
  en un "story" de Google Arts & Culture, con imágenes del Museo Casa de Cervantes.
- **Hallazgo de derechos:** el Museo Casa de Cervantes exige permiso explícito por email para reproducir sus
  imágenes; CERES (catálogo oficial de museos) limita el uso a fines privados/no comerciales salvo
  autorización expresa. Ninguno es de uso libre por defecto. Comunicado al usuario, que aprobó usar en su
  lugar Wikimedia Commons, verificando el estado de dominio público de cada imagen vía la API de Wikimedia
  (campo `Copyrighted: false`) antes de descargarla — mismo rigor que con las fuentes de texto.
- **Decisión:**
  - Los 12 eventos verificados pasan a numerarse de forma **continua y global (01/12 → 12/12)**, sin
    reiniciarse por etapa — arreglo directo de la queja de falta de cronología. El carril horizontal de
    tarjetas por etapa (`EventRail`/`EventCard`) se elimina; dentro de cada etapa los eventos se listan
    verticalmente como pasos de un único recorrido (`JourneyStep`, nuevo componente).
  - Cada etapa gana un panel de imagen real (`position: sticky` en desktop, cabecera no-sticky en móvil —
    adaptación específica, no solo una reducción de tamaño), verificado con `getBoundingClientRect()` que
    efectivamente se fija en `top: 112px` mientras el usuario recorre los pasos de esa etapa.
  - El Hero de Home cambia de degradado CSS a foto: el retrato tradicionalmente atribuido a Juan de Jáuregui
    (h. 1600, Real Academia de la Historia), con crédito y advertencia de autenticidad no confirmada
    visibles — coherente con lo que el sitio ya dice en `/curiosidades` sobre su aspecto físico.
  - 7 imágenes en total, todas verificadas individualmente vía API de Wikimedia (no solo por aparecer en un
    buscador) y registradas en `public/media/manifest.json` y `docs/SOURCES.md` (SRC-007). Ninguna imagen
    respalda un dato histórico textual nuevo — son ilustración de contexto editorial.
  - Corregido en el proceso: un bug real de contraste en modo oscuro heredado del diseño anterior seguía sin
    aparecer aquí (ya corregido en ADR-011), verificado de nuevo tras el cambio de layout.
- **Razón:** Instrucción explícita y detallada del usuario, con dos referencias visuales concretas; plan
  presentado y aprobado antes de implementar (incluida una pregunta de clarificación sobre si el "efecto de
  scroll" debía ser un carrusel de diapositivas de pantalla completa o combinarse con el patrón de pasos de
  NOWN — el usuario eligió la combinación).
- **Impacto:** Ningún dato histórico nuevo. Cambio de presentación/UX + 7 imágenes nuevas con derechos
  verificados. El Museo Casa de Cervantes queda descartado como fuente de imágenes hasta que exista permiso
  explícito del Ministerio de Cultura.
- **Aprobado por:** Usuario, plan aprobado explícitamente (EnterPlanMode/ExitPlanMode), 2026-09-02.
- **Estado:** VIGENTE.

---

## ADR-013

- **Fecha:** 2026-09-02
- **Tema:** Cuarta actualización aprobada de producción (reestructuración de navegación + cronología continua
  de ADR-011 y ADR-012)
- **Contexto:** Tras implementar y verificar en Preview el trabajo descrito en ADR-011 (eliminación de
  "Inicio"/"El mundo de Cervantes", fusión biografía+timeline en `/vida-en-movimiento`) y ADR-012
  (numeración global continua 01/12→12/12, panel de imagen sticky por etapa, Hero fotográfico, 7 imágenes de
  Wikimedia Commons con derechos verificados), el usuario dio la instrucción explícita "Sí, ponlo a
  producción".
- **Decisión:** Se mergeó `design/vida-en-movimiento` → `develop` (commit `c8aa2a9`) → `main` (commit
  `dd99c1a`), desplegado automáticamente por la integración Git de Vercel
  (`https://miguel-de-cervantes-pv0pcozdy-cdmlabs.vercel.app`, alias `miguel-de-cervantes-web.vercel.app`).
- **Verificación post-despliegue:** confirmado en producción vía navegador — Hero con foto real y crédito
  visible; nav principal reducida a 5 ítems (Una vida en movimiento, Obras, Don Quijote, Legado, Biblioteca);
  `/vida-en-movimiento` con numeración continua 01/12→12/12 y las 6 imágenes por etapa; redirects 308 desde
  `/cervantes` y `/linea-de-tiempo` hacia `/vida-en-movimiento`; `/mundo-de-cervantes` devuelve 404 (sin
  sustituto, como se pidió).
- **Razón:** Instrucción explícita e inequívoca del usuario.
- **Impacto:** Ningún dato histórico nuevo respecto a ADR-011/ADR-012; cambio de navegación y presentación ya
  verificado en Preview, ahora reflejado en producción.
- **Aprobado por:** Usuario, instrucción explícita ("Sí, ponlo a producción"), 2026-09-02.
- **Estado:** VIGENTE. Como en ADR-008/009/010, no es una autorización permanente para futuros despliegues.
