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

### SRC-003

```text
ID: SRC-003
Título: Proyecto Cervantes: búsqueda, localización y estudio osteológico de los restos mortales de Don
  Miguel de Cervantes — Informe ejecutivo de la segunda fase (2015)
Institución: Ayuntamiento de Madrid (Área de Gobierno de las Artes, Deportes y Turismo), con Sociedad de
  Ciencias Aranzadi, Arzobispado de Madrid y Comunidad de Madrid (Dirección General de Patrimonio Histórico)
Autor: Equipo dirigido por Francisco Etxeberria Gabilondo (director del proyecto); informe histórico de
  Francisco José Marín Perellón; informe de excavación de Almudena García Rubio y Francisco Etxeberria
URL: https://www.madrid.es/UnidadesDescentralizadas/UDCMedios/noticias/2015/03Marzo/17Martes/Notasprensa/restoscervantes/ficheros/Informe%20ejecutivo%20segunda%20fase%20Cervantes07.pdf
Fecha de consulta: 2026-09-01
Tipo: FUENTE PRIMARIA (informe oficial de investigación arqueológico-forense encargado por una institución
  pública)
Fiabilidad: Alta — documento técnico original, no una nota de prensa que lo resuma.
Información utilizada: (1) Confirmación documental de que Cervantes murió el 22 de abril de 1616 en la
  calle del León y fue enterrado al día siguiente en la iglesia del convento de San Ildefonso (Trinitarias
  Descalzas), incluyendo la transcripción literal del asiento de defunción de la parroquia de San Sebastián.
  (2) Conclusión oficial sobre el hallazgo de 2015: en la cripta actual se localizó una "reducción" (osario)
  de huesos mezclados —número mínimo de 10 adultos y 5 infantiles— compatible arqueológicamente con el
  traslado de los restos de la iglesia primitiva (donde constaba enterrado Cervantes) a la cripta nueva
  hacia 1730. No fue posible individualizar los restos de Cervantes dentro de ese conjunto ni realizar
  pruebas de ADN. Cita textual de la conclusión oficial: "es posible considerar que entre los fragmentos de
  la reducción localizada en el suelo de la cripta de la actual Iglesia de las Trinitarias se encuentren
  algunos pertenecientes a Miguel de Cervantes."
Página/sección: pp. 4 (asiento de defunción), 29 (sección "Reducción 4.2/32"), 35–38 (conclusiones finales).
Observaciones: El informe es explícitamente cauteloso y NO afirma una identificación individual confirmada
  de los restos de Cervantes — se mantiene esa cautela en el contenido publicado, evitando presentar como
  hecho cerrado lo que la propia fuente primaria presenta como probable pero no individualizado ni
  confirmado por ADN.
Derechos: Documento público difundido por el Ayuntamiento de Madrid; se parafrasea y se cita una frase breve
  de la conclusión oficial con atribución, sin reproducir el informe completo.
```

### SRC-004

```text
ID: SRC-004
Título: Lectura comentada de la portada — «Don Quijote de la Mancha», Primera Parte
Institución: Centro Virtual Cervantes (portal oficial del Instituto Cervantes)
Autor: Instituto Cervantes (equipo editorial del CVC)
URL: https://cvc.cervantes.es/literatura/clasicos/quijote/edicion/parte1/portada/nota_portada.htm
Fecha de consulta: 2026-09-01
Tipo: FUENTE INSTITUCIONAL
Fiabilidad: Alta.
Información utilizada: Detalles del proceso de impresión de la Primera Parte de 1605: la imprenta operaba
  bajo el nombre de Juan de la Cuesta pero pertenecía a María Rodríguez de Rivalde (viuda de Pedro
  Madrigal), siendo Juan de la Cuesta su yerno y regente; Francisco de Robles (librero del Rey) fue el
  editor/financiador, relación que se prolongó hasta la Segunda Parte (1615); el libro se publicó "con
  privilegio real"; la impresión estaba terminada a finales de diciembre de 1604 pese a llevar fecha de 1605
  en portada.
Página/sección: Página completa.
Observaciones: Ninguna.
Derechos: Se parafrasea, sin reproducir el texto completo.
```

### SRC-005

```text
ID: SRC-005
Título: Cervantes y Don Quijote (ensayo introductorio)
Institución: Biblioteca Virtual Miguel de Cervantes (alojado en cervantesvirtual.com)
Autor: Daniel Eisenberg (cervantista, autor de referencia en estudios cervantinos)
URL: https://www.cervantesvirtual.com/obra-visor/cervantes-y-don-quijote-0/html/ffcf21ae-82b1-11df-acc7-002185ce6064_1.html
Fecha de consulta: 2026-09-01
Tipo: FUENTE ACADÉMICA
Fiabilidad: Alta — ensayo de un especialista reconocido, publicado por la Biblioteca Virtual Miguel de
  Cervantes.
Información utilizada: (1) Advertencia metodológica explícita del propio autor: Cervantes "solía cargar las
  tintas describiendo su mala posición económica, para animar al mecenas a una donación más generosa" — se
  usa para matizar cualquier curiosidad sobre sus ingresos. (2) Fuentes de ingreso documentadas: venta de
  "veinte o treinta" comedias representadas en Madrid (mayoría perdidas), venta de La Galatea (1585),
  empleos remunerados como procurador de la Armada y recaudador de impuestos en Granada, y en su última
  década el apoyo económico del Conde de Lemos que le permitió dedicarse por completo a escribir. (3)
  Afirmación explícita: "Contrario a lo que se cree, Cervantes no tuvo dificultad en publicar sus libros
  acabados, aunque no con las recompensas elevadas que quisiera haber percibido." (4) Confirmación de que no
  existe representación gráfica auténtica de Cervantes ("No existe una representación gráfica auténtica"),
  usada para la curiosidad sobre su aspecto físico.
Página/sección: Secciones "¿Quién fue Cervantes?", "¿Qué tipo de hombre fue Cervantes?", "Cervantes, autor
  prolífico" (subsecciones "Las Novelas ejemplares", "La Galatea; el Persiles", "Cervantes poeta",
  "Cervantes dramaturgo") y "Don Quijote" (subsecciones sobre su propósito como ataque a los libros de
  caballerías, estructura de la interpretación, recepción crítica).
Observaciones: Es un ensayo interpretativo extenso, no una base de datos de cifras; no proporciona montos
  exactos de ingresos (reflejado en la respuesta publicada, sin inventar cifras). Reutilizado también como
  fuente principal para las fichas ampliadas de las 6 obras en `src/content/works.json` (contexto, argumento,
  temas, curiosidades, recepción e influencia), dado que es un único ensayo que cubre la producción completa
  de Cervantes con rigor académico.
Derechos: Se parafrasea, sin reproducir extensamente el ensayo.
```

### SRC-006

```text
ID: SRC-006
Título: «Don Quijote de la Mancha». Índice.
Institución: Centro Virtual Cervantes (portal oficial del Instituto Cervantes)
Autor: Instituto Cervantes (equipo editorial del CVC)
URL: https://cvc.cervantes.es/literatura/clasicos/quijote/indice.htm
Fecha de consulta: 2026-09-01
Tipo: FUENTE INSTITUCIONAL
Fiabilidad: Alta.
Información utilizada: Estructura capitular exacta: Primera Parte (1605) con 52 capítulos organizados en
  4 partes internas (I: caps. 1-8, II: caps. 9-14, III: caps. 15-27, IV: caps. 28-52); Segunda Parte (1615)
  con 74 capítulos sin división interna.
Página/sección: Página índice completa.
Observaciones: Ninguna.
Derechos: Se parafrasea, sin reproducir el texto.
```
