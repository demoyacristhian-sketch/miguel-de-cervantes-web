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

---

## ADR-014

- **Fecha:** 2026-09-02
- **Tema:** Desarrollo completo de Obras, Don Quijote, Legado y Biblioteca + rediseño de Hero y
  footer — aceleración explícita de las Fases 3, 4 y 6
- **Contexto:** El usuario pidió explícitamente completar en la misma sesión ("hoy") las cuatro
  secciones que quedaban como placeholder o texto denso: `/quijote` (12 subsecciones vacías),
  `/legado` y `/biblioteca` (pantallas "Próximamente"), y `/obras` (funcional pero sin imágenes ni
  filtro real). Pidió diseño interactivo (tarjetas, imágenes, animación) sin extenderse demasiado.
  Además pidió rediseñar el Hero de Home (el nombre no se leía bien, el texto quedaba sobre el
  rostro) y sustituir el texto final del footer por un crédito de TFG.
- **Decisión:**
  - **Contenido nuevo, siempre con fuente real:** Don Quijote (5 personajes, 5 lugares, 3
    aventuras, 3 temas, 2 frases) se investigó directamente en el texto primario de la novela
    alojado por el Centro Virtual Cervantes (Instituto Cervantes), capítulo por capítulo —
    registrado como SRC-008. Las dos frases citadas se verificaron por duplicado (CVC +
    transcripción independiente) antes de publicarse, precisamente para evitar atribuciones
    populares incorrectas (se descartó explícitamente "ladran, Sancho, señal que cabalgamos" por no
    tener respaldo textual). Legado (idioma, traducciones, arte, ediciones conmemorativas) se
    investigó en RAE, Instituto Cervantes y el Museo Casa Natal de Picasso — registrado como
    SRC-009.
  - **Picasso, sin reproducir la imagen:** el dibujo "Don Quijote y Sancho" (1955) se menciona en
    texto con enlace a la ficha oficial del museo, pero **no se reproduce** en el sitio — Picasso
    falleció en 1973 y, para autores fallecidos antes de 1987, la ley española aplica 80 años
    post-mortem (dominio público en 2053), muy lejos de cumplirse.
  - **7 imágenes nuevas de Wikimedia Commons**, cada una verificada individualmente vía su API
    antes de descargarse (mismo proceso que ADR-012): 4 portadas de primera edición para completar
    las 6 obras (Novelas ejemplares 1613, Viaje del Parnaso 1614, Ocho comedias 1615, Persiles
    1617), la portada de la Segunda Parte del Quijote (1615, como imagen secundaria en la ficha de
    Don Quijote) y 2 grabados de Gustave Doré (1863, dominio público) para la cabecera de `/quijote`
    y la tarjeta de los molinos de viento.
  - **Hero rediseñado como layout editorial de dos zonas** (texto siempre sobre `bg-ink` sólido,
    retrato contenido en su propio panel) en vez de texto superpuesto a pantalla completa —
    resuelve directamente la queja de legibilidad del nombre y el texto sobre el rostro, sin
    cambiar tipografía ni paleta. Incluye una animación de entrada escalonada y un zoom lento
    (Ken Burns) en el retrato, ambos ya cubiertos por la regla `prefers-reduced-motion` existente.
  - **Obras rediseñada:** filtro por tipo ahora funcional, tarjetas con portada e imagen, y la
    ficha de cada obra reduce sus 10 campos a 3 destacados (Contexto, Argumento, Temas) siempre
    visibles + un acordeón "Más detalles" para el resto — mismo patrón `<details>` que `ReadMore`.
  - **Biblioteca** incluye una sección pública "Fuentes y créditos" (`/biblioteca#fuentes-y-creditos`)
    que renderiza directamente las 9 fuentes registradas y las 14 imágenes del manifest — nada
    oculto, todo trazable desde la propia web, no solo desde el repositorio.
  - **Footer:** se sustituyó el disclaimer genérico por "Proyecto de TFG desarrollado e
    implementado por Luis Vidal — Trabajo de Fin de Grado realizado en el marco de sus estudios de
    posgrado en UNIR (Universidad Internacional de La Rioja)", a petición explícita del usuario
    (texto base proporcionado por él, ampliado de forma profesional).
  - **Aceleración de roadmap:** esto adelanta partes de la Fase 3 ("Explora el Quijote"), Fase 4
    ("Biblioteca") y Fase 6 ("Legado") por instrucción explícita del usuario, no por decisión
    unilateral — documentado aquí conforme a la regla del prompt maestro que permite aceleración
    explícita si se documenta como tal.
- **Razón:** Instrucción explícita, detallada y aprobada mediante plan (EnterPlanMode/ExitPlanMode)
  antes de implementar.
- **Impacto:** Ningún dato inventado; todo el contenido histórico/literario nuevo tiene fuente
  primaria o institucional real. Cambia significativamente la superficie del sitio (4 secciones
  completas + Hero + footer).
- **Aprobado por:** Usuario, plan aprobado explícitamente, 2026-09-02.
- **Estado:** VIGENTE. Igual que siempre, el despliegue a producción de este trabajo requiere una
  aprobación explícita **aparte** de la aprobación del plan — no está incluida en esta ADR.

---

## ADR-015

- **Fecha:** 2026-09-02
- **Tema:** Home como historia cinematográfica (estilo Google Arts & Culture), Hero de superficie
  única, rebautizo "Una vida en movimiento" → "Una vida, una historia", y botón "volver atrás"
- **Contexto:** El usuario revisó el Hero de dos paneles (ADR-014) y pidió, en el mismo mensaje: (1)
  que el fondo del Hero sea una sola superficie del mismo tono que la imagen, no un panel de color
  sólido separado, y que la imagen tenga movimiento real (el zoom lento anterior se ejecutaba una
  vez y se quedaba quieto); (2) renombrar "Una vida en movimiento" a "Una vida, una historia"; (3)
  que toda la Home adopte el estilo de la misma referencia de Google Arts & Culture que ya había
  compartido antes (paneles a pantalla completa, imagen de fondo, scroll cinematográfico), usando
  la información e imágenes que la web ya tiene; (4) un botón "volver atrás" donde haga falta.
- **Decisión:**
  - El Hero pasa de un layout de dos paneles a una **imagen a pantalla completa** con un degradado
    direccional (oscuro hacia el texto, transparente hacia el rostro) — una sola superficie
    fotográfica, sin costura dura. El zoom lento pasa de una animación de un solo disparo
    (`forwards`, se paraba a los 20s) a un **loop infinito** (`hero-zoom-loop`, ~18s,
    `ease-in-out infinite`), reutilizado en el resto de paneles de Home para consistencia visual.
  - La Home sustituye su antigua sucesión de secciones de tarjetas (`Introduction`,
    `LivesOfCervantes`, `TimelinePreview`, `FeaturedWorks`, `QuijoteTeaser`, `CuriositiesTeaser`,
    2× `PendingSection` — todos eliminados, sin otro uso en el sitio) por una **secuencia de 5
    paneles a pantalla completa** (Hero + 4 nuevos) enlazada con **scroll-snap nativo de CSS**
    (`scroll-snap-type: y proximity`, sin librerías de scroll-jacking): "Una vida, una historia"
    (con los 7 roles de "un solo hombre, siete vidas" como chips), "Obras" (con una tira de las 6
    portadas), "Don Quijote", y un panel de cierre "Sigue explorando" que agrupa Curiosidades,
    Legado y Biblioteca. Después de la secuencia, `CtaSection` y el footer siguen en flujo normal,
    igual que una "story" de Google Arts & Culture termina en contenido normal.
  - **Cero imágenes nuevas**: los 4 paneles reutilizan material ya verificado en
    `public/media/manifest.json` (Lepanto de Veronese, portada del Quijote 1605, grabado de
    molinos de viento de Doré, foto de las Trinitarias) — instrucción explícita del usuario de usar
    lo que la web ya tiene.
  - Rail de progreso vertical (`StoryProgressNav`) solo en desktop, con el mismo patrón de
    scrollspy por posición ya probado en `LifeJourney.tsx`.
  - "Una vida en movimiento" se renombra a **"Una vida, una historia"** en nav, footer, la propia
    página y la etiqueta de `sources.json`. La ruta `/vida-en-movimiento` no cambia (sin redirects
    nuevos necesarios). Las ADR/CHANGELOG anteriores que usan el nombre antiguo no se reescriben
    (registro histórico).
  - Nuevo `BackLink` (botón "← Volver", usa el historial del navegador con `fallbackHref` si no hay
    historial) añadido a todas las páginas que no son Home: Obras (índice y ficha), Don Quijote,
    Legado, Biblioteca, Curiosidades y Una vida, una historia.
- **Razón:** Instrucción explícita y detallada del usuario, con la misma referencia visual
  compartida previamente; plan presentado y aprobado antes de implementar (EnterPlanMode/
  ExitPlanMode).
- **Impacto:** Cambio grande de presentación/UX en Home; ningún dato histórico nuevo (todo el
  contenido de los paneles ya estaba verificado en secciones existentes, solo se reorganiza).
- **Aprobado por:** Usuario, plan aprobado explícitamente, 2026-09-02.
- **Estado:** VIGENTE. No incluye autorización de despliegue a producción — se pide aparte.

---

## ADR-016

- **Fecha:** 2026-09-02
- **Tema:** Quinta actualización aprobada de producción (secciones completas de ADR-014 + Home
  cinematográfica de ADR-015)
- **Contexto:** Tras verificar en Preview el trabajo de ADR-014 (Obras/Don Quijote/Legado/Biblioteca
  completos) y ADR-015 (Home rediseñada como historia a pantalla completa, Hero de superficie única,
  rebautizo, botón volver), más una corrección menor (URLs largas desbordando las tarjetas de
  "Fuentes y créditos" en `/biblioteca`, señalada por el usuario con una captura de pantalla), el
  usuario dio la instrucción explícita "sí, ponlo a producción".
- **Decisión:** Se mergeó `develop` → `main` (commit `2b0ff57`), desplegado automáticamente por la
  integración Git de Vercel (`https://miguel-de-cervantes-iq26eowxf-cdmlabs.vercel.app`, alias
  `miguel-de-cervantes-web.vercel.app`).
- **Verificación post-despliegue:** confirmado en producción vía navegador — Home cinematográfica
  con los 5 paneles y sus imágenes/textos correctos; `/biblioteca` con los 9 enlaces de "Fuentes
  documentales" verificados por `getBoundingClientRect()` sin desbordar sus tarjetas.
- **Razón:** Instrucción explícita e inequívoca del usuario.
- **Impacto:** Ningún dato histórico nuevo respecto a ADR-014/ADR-015; cambio de presentación y
  contenido ya verificado en Preview, ahora reflejado en producción.
- **Aprobado por:** Usuario, instrucción explícita ("sí, ponlo a producción"), 2026-09-02.
- **Estado:** VIGENTE. Como en despliegues anteriores, no es una autorización permanente para
  futuros despliegues.
