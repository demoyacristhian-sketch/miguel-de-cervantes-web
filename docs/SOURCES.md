# SOURCES.md — Registro de fuentes históricas

Estado: **VACÍO** (Fase 0). No se ha cargado ningún dato histórico todavía, por lo tanto no hay fuentes
registradas. Este archivo define el sistema; el contenido real se añadirá en Fase 2 en adelante, a medida
que se investigue y verifique cada dato.

## Regla de publicación

**Ningún dato histórico se publica sin al menos una fuente clasificada como `FUENTE PRIMARIA`,
`FUENTE INSTITUCIONAL` o `FUENTE ACADÉMICA`.** Nunca se publica información marcada `SIN VERIFICAR`.

## Clasificación de fuentes

- `FUENTE PRIMARIA` — documento original de la época (manuscrito, edición original, archivo).
- `FUENTE INSTITUCIONAL` — biblioteca, museo, ministerio, academia (BNE, Biblioteca Virtual Miguel de
  Cervantes, Instituto Cervantes, RAE, Ministerio de Cultura, Museo Casa de Cervantes).
- `FUENTE ACADÉMICA` — publicación universitaria o de investigación revisada por pares.
- `FUENTE SECUNDARIA VERIFICADA` — divulgación de calidad contrastada contra una fuente primaria/institucional.

Wikipedia **nunca** se registra como fuente final para un dato histórico relevante; solo puede usarse
internamente como pista para localizar la fuente original, que es la que se registra aquí.

## Formato de entrada

```text
ID:
Título:
Institución:
Autor:
URL:
Fecha de consulta:
Tipo: (FUENTE PRIMARIA | FUENTE INSTITUCIONAL | FUENTE ACADÉMICA | FUENTE SECUNDARIA VERIFICADA)
Fiabilidad:
Información utilizada:
Página/sección:
Observaciones:
Derechos:
```

## Fuentes institucionales de referencia (candidatas, pendientes de uso concreto)

Estas son instituciones de referencia preferente según el prompt maestro del proyecto. Ninguna se ha
consultado todavía para un dato específico; se listan aquí como directorio de partida para la investigación
de Fase 2:

- Biblioteca Nacional de España (BNE)
- Biblioteca Virtual Miguel de Cervantes
- Museo Casa de Cervantes (Valladolid)
- Ministerio de Cultura de España
- Real Academia Española (RAE)
- Instituto Cervantes
- Archivos históricos y universidades (a identificar por tema en Fase 2)

## Registro de fuentes

### SRC-001

```text
ID: SRC-001
Título: Cronología de la vida y obra de Miguel de Cervantes Saavedra
Institución: Biblioteca Virtual Miguel de Cervantes (Universidad de Alicante)
Autor: Florencio Sevilla Arroyo y Begoña Rodríguez Rodríguez
URL: https://www.cervantesvirtual.com/portales/miguel_de_cervantes/autor_cronologia/
Fecha de consulta: 2026-09-01
Tipo: FUENTE INSTITUCIONAL
Fiabilidad: Alta — cronología académica publicada por la Biblioteca Virtual Miguel de Cervantes, institución
  de referencia explícitamente designada como fuente preferente por el proyecto.
Información utilizada: Fechas y hechos biográficos correspondientes a los años 1547, 1569, 1571, 1575,
  1580, 1585, 1605, 1613, 1614, 1615, 1616 y 1617 (nacimiento/bautismo, viaje a Roma, Lepanto, cautiverio en
  Argel, rescate, publicación de La Galatea, publicación y encarcelamiento de 1605, Novelas ejemplares,
  Viaje del Parnaso, Segunda parte del Quijote y Ocho comedias, muerte, publicación póstuma de Persiles).
  También usada para las curiosidades "manco de Lepanto" y "muerte de Cervantes y Shakespeare".
Página/sección: Entradas anuales 1547–1617 de la cronología (recurso paginado por año).
Observaciones: La cronología es una compilación académica; para hechos especialmente controvertidos (fecha
  exacta de nacimiento vs. bautismo, coincidencia real de fechas de muerte con Shakespeare por diferencia de
  calendario juliano/gregoriano) se mantiene la redacción cautelosa de la propia fuente ("se supone que
  debió de nacer...", "una semana después que Shakespeare").
Derechos: Texto de acceso público en el portal educativo/institucional de la Biblioteca Virtual Miguel de
  Cervantes; no se reproduce el texto completo, solo hechos y fechas parafraseados con atribución.
```

### SRC-002

```text
ID: SRC-002
Título: ¿Murieron Shakespeare y Cervantes el mismo día y año? Un matemático explica el lío que existe con
  el calendario
Institución: CNN en Español (cadena de noticias; cruzado con Cope y otras coberturas periodísticas
  independientes y consistentes entre sí sobre el mismo hecho — reforma gregoriana de 1582)
Autor: Redacción CNN en Español
URL: https://cnnespanol.cnn.com/2024/04/23/cervantes-shakespeare-murieron-mismo-dia-libro-orix
Fecha de consulta: 2026-09-01
Tipo: FUENTE SECUNDARIA VERIFICADA
Fiabilidad: Media-alta — no es fuente académica primaria, pero el hecho (reforma del calendario gregoriano
  de 1582, España la adopta e Inglaterra no hasta 1752, diferencia de 10 días) se repite de forma consistente
  en múltiples coberturas periodísticas independientes consultadas en la misma búsqueda (Cope, Fundación
  Hispano Británica, Eterna Cadencia, HablaCultura), lo que permite clasificarla como verificada por
  triangulación de fuentes secundarias.
Información utilizada: Explicación del desfase de calendario (juliano/gregoriano) entre la fecha de muerte
  de Cervantes (España, calendario gregoriano) y la de Shakespeare (Inglaterra, calendario juliano),
  ambas registradas como "23 de abril de 1616" pero separadas por unos 10 días en tiempo real.
Página/sección: Artículo completo.
Observaciones: **Discrepancia detectada y no resuelta entre fuentes:** SRC-001 (institucional) describe la
  muerte de Cervantes como ocurrida "una semana después" que la de Shakespeare. El cálculo de conversión
  calendárica de SRC-002 (y las fuentes periodísticas que cruza) indica lo contrario en términos de
  calendario gregoriano: Cervantes murió unos 10 días ANTES que Shakespeare al convertir la fecha juliana de
  este último a gregoriano. Se mantiene la nota de esta discrepancia visible en el contenido publicado en
  lugar de elegir una sola versión, conforme al protocolo de discrepancias históricas del proyecto.
Derechos: Se parafrasea el hallazgo, sin reproducir el artículo.
```
