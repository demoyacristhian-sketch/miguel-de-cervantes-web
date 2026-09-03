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

### SRC-007

```text
ID: SRC-007
Título: Registro de imágenes de Wikimedia Commons usadas en el Hero, /vida-en-movimiento, /obras y
  /quijote
Institución: Wikimedia Commons (agregador; instituciones de origen de cada obra registradas individualmente
  en public/media/manifest.json — Real Academia de la Historia, Gallerie dell'Accademia de Venecia, etc.)
Autor: Varios (ver public/media/manifest.json)
URL: Ver cada entrada en public/media/manifest.json
Fecha de consulta: 2026-09-02
Tipo: FUENTE SECUNDARIA VERIFICADA (agregador de dominio público; cada imagen se verificó individualmente
  vía la API de Wikimedia — campo `Copyrighted: false` — antes de usarse, no se asumió libre por aparecer en
  un buscador)
Fiabilidad: Alta para el estado de derechos (verificación por API, plantilla de licencia explícita por
  imagen); las propias obras varían en cercanía documental al hecho representado (ver observaciones en cada
  entrada de manifest.json — p. ej., el grabado de Argel es de 1684, un siglo después del cautiverio de
  Cervantes, y se usa como ilustración de contexto, no como registro directo).
Información utilizada: Contexto visual editorial para el Hero de Home, las 6 etapas de
  /vida-en-movimiento, las portadas de primeras ediciones en /obras (Novelas ejemplares 1613, Viaje
  del Parnaso 1614, Ocho comedias y ocho entremeses 1615, Segunda parte del Quijote 1615, Persiles
  1617) y dos grabados de Gustave Doré (1863) en /quijote (cabecera y aventura de los molinos de
  viento). Ningún dato histórico textual nuevo se basa en esta fuente — es exclusivamente material
  gráfico.
Página/sección: N/A (múltiples archivos).
Observaciones: Se descartó el repositorio del Museo Casa de Cervantes (cultura.gob.es) como fuente de
  imágenes porque su aviso legal exige permiso explícito por email para cualquier reproducción, y CERES
  (catálogo oficial de museos) limita el uso a fines privados/no comerciales — ninguno es de uso libre por
  defecto. Decisión tomada junto con el usuario, ver docs/DECISIONS.md.
Derechos: Cada imagen tiene su propio registro completo de derechos en public/media/manifest.json.
```

### SRC-008

```text
ID: SRC-008
Título: Edición anotada de «Don Quijote de la Mancha» (Primera y Segunda parte) — texto completo
Institución: Centro Virtual Cervantes (portal oficial del Instituto Cervantes)
Autor: Miguel de Cervantes (texto primario); edición y aparato crítico del CVC
URL: https://cvc.cervantes.es/literatura/clasicos/quijote/edicion/ — capítulos consultados:
  parte1/prologo (cita sobre la cárcel), parte1/cap01 (decisión de armarse caballero, nombre propio
  y de Rocinante), parte1/cap07 (presentación de Sancho Panza), parte1/cap08 (molinos de viento),
  parte1/cap21 (yelmo de Mambrino), parte1/cap22 (liberación de los galeotes), parte1/cap25
  (Dulcinea/Aldonza Lorenzo), parte1/cap29 (Cardenio, Dorotea y la princesa Micomicona),
  parte1/cap47-48 (crítica literaria del canónigo de Toledo), parte2/cap03
  (Sansón Carrasco), parte2/cap09 (cita "con la iglesia hemos dado, Sancho"), parte2/cap23 (cueva de
  Montesinos), parte2/cap26-27 (retablo de Maese Pedro y revelación de Ginés de Pasamonte),
  parte2/cap45 (juicios de Sancho como gobernador de la Ínsula Barataria), parte2/cap58 (cita sobre
  la libertad), más el apéndice "Lugares y tiempos en el «Quijote»"
  (introduccion/apendice/casasayas.htm).
Fecha de consulta: 2026-09-02 y 2026-09-03
Tipo: FUENTE PRIMARIA (texto original de la novela, alojado y anotado por el Instituto Cervantes)
Fiabilidad: Máxima — es el propio texto de Cervantes, no una paráfrasis de tercero.
Información utilizada: Personajes (Don Quijote, Rocinante, Sancho Panza, Dulcinea del
  Toboso/Aldonza Lorenzo, Sansón Carrasco, el cura y el barbero, Cardenio, Dorotea, Maese
  Pedro/Ginés de Pasamonte, Teresa Panza), lugares (El Toboso, Campo de Montiel, Sierra Morena,
  Puerto Lápice, Barcelona, Zaragoza, la Ínsula Barataria), aventuras (molinos de viento, yelmo de
  Mambrino, liberación de los galeotes, el retablo de Maese Pedro, el gobierno de la Ínsula
  Barataria, la cueva de Montesinos) y las frases citadas literalmente en /quijote (apertura de la
  novela; reflexión sobre la libertad, 2ª parte cap. 58; "con la iglesia hemos dado, Sancho", 2ª
  parte cap. 9). El desenlace del duelo con el Caballero de la Blanca Luna (Sansón Carrasco
  disfrazado, derrota en Barcelona, condición de retirarse un año) se corroboró además con un
  artículo académico ("Presencia y sentido de Sansón Carrasco", Scielo Chile,
  scielo.cl/scielo.php?pid=S0718-22952005000200004), la identidad real de Maese Pedro con un
  artículo del Museo Casa Natal de Cervantes
  (museocasanataldecervantes.org, "Ginés de Pasamonte, el galeote escritor"), y la elusión
  deliberada de Zaragoza en la Segunda Parte (para contradecir el Quijote apócrifo de Avellaneda)
  con el artículo académico "La elusión del apócrifo en la segunda parte del Quijote" (revista
  Criticón, Instituto Cervantes, cvc.cervantes.es/literatura/criticon/PDF/127/127_093.pdf).
Página/sección: Ver capítulos listados arriba.
Observaciones: La cita sobre la libertad y la cita "con la iglesia hemos dado, Sancho" se
  confirmaron cruzando la página del capítulo correspondiente en el propio CVC con transcripciones
  independientes coincidentes; la cita del prólogo sobre la cárcel se confirmó directamente en la
  página del CVC. No se publicó ninguna cita sin esa doble verificación, para evitar atribuciones
  erróneas frecuentes en internet (p. ej. "ladran, Sancho, señal que cabalgamos" NO se usó por ser
  una atribución popular sin respaldo textual verificado; tampoco se usó la variante popular "con la
  iglesia hemos topado, amigo Sancho", que altera la cita real).
Derechos: Se parafrasea y se citan frases breves con atribución; no se reproduce el texto completo
  de ningún capítulo.
```

### SRC-009

```text
ID: SRC-009
Título: Legado de Cervantes y el Quijote — idioma, traducciones, arte y ediciones conmemorativas
Institución: Real Academia Española (RAE), Instituto Cervantes, Museo Casa Natal de Picasso
  (Ayuntamiento de Málaga)
Autor: Varias (ver URLs)
URL: (1) dle.rae.es/quijotesco y dle.rae.es/dulcinea — Diccionario de la lengua española; (2)
  cervantes.org — nota de prensa de la exposición "Quijotes por el mundo"; (3)
  museocasanatalpicasso.malaga.eu — ficha oficial "Don Quijote y Sancho" (1955); (4) cobertura
  cruzada sobre las ediciones conmemorativas RAE/ASALE de 2004 y 2015.
Fecha de consulta: 2026-09-02
Tipo: FUENTE INSTITUCIONAL
Fiabilidad: Alta — diccionario oficial, nota de prensa del propio Instituto Cervantes y ficha
  oficial de un museo público.
Información utilizada: (1) "Quijotesco" y "dulcinea" son entradas reales del DLE. (2) El Instituto
  Cervantes reunió 185 ediciones del Quijote en 56 lenguas en la exposición "Quijotes por el
  mundo"; la cifra de "libro más traducido después de la Biblia" se cita ampliamente pero varía
  según la fuente (entre ~140 y ~172 lenguas/variedades según el recuento), por lo que se presenta
  con esa cautela, no como cifra cerrada. (3) Picasso dibujó "Don Quijote y Sancho" el 10 de agosto
  de 1955 para el 350 aniversario de la Primera Parte, publicado en Les Lettres Françaises; la obra
  se conserva hoy en el Museo Casa Natal de Picasso (Málaga). (4) RAE y ASALE publicaron ediciones
  conmemorativas del Quijote en 2004 y 2015 (IV centenario de la muerte de Cervantes).
Página/sección: Páginas indicadas arriba.
Observaciones: La obra de Picasso (1955) está protegida por derechos de autor vigentes (fallecido
  en 1973; en España, dominio público a los 80 años tras su muerte según la ley de propiedad
  intelectual aplicable a autores fallecidos antes de 1987 → 2053, no 2044 como se escribió en el
  plan de esta sesión, corregido aquí) — **no se reproduce la imagen en el sitio**, solo se
  menciona en texto con enlace a la ficha oficial del museo.
Derechos: Se parafrasea, sin reproducir ninguna imagen ni texto extenso de las fuentes.
```

### SRC-010

```text
ID: SRC-010
Título: Biografía ampliada — matrimonio en Esquivias, cárcel de Sevilla y proceso Ezpeleta en
  Valladolid
Institución: Ayuntamiento de Esquivias; Agencia Tributaria (AEAT); Museo Casa de Cervantes
  (Valladolid) / Ministerio de Cultura, triangulado con cobertura periodística independiente
Autor: Varios (ver URLs)
URL: (1) esquivias.es/turismo/catalina-de-palacios-salazar — matrimonio; (2)
  agenciatributaria.es/AEAT.educacion/Satelite/Educacion/Contenidos_Comunes/Ficheros/CERVANTES.PDF —
  cárcel de Sevilla como recaudador; (3)
  cultura.gob.es/museocasacervantes/cervantes/cervantes-valladolid/procesoezpeleta.html — proceso
  Ezpeleta (contenido no accesible directamente por un error de certificado del servidor del
  Ministerio; triangulado con El Español, MásCyL y Noticias de Gipuzkoa, coincidentes entre sí).
Fecha de consulta: 2026-09-03
Tipo: FUENTE INSTITUCIONAL para (1) y (2); FUENTE SECUNDARIA VERIFICADA para (3) por triangulación
Fiabilidad: Alta. (1) y (2) son páginas oficiales de un ayuntamiento y de la Agencia Tributaria
  española. (3) no se pudo cargar directamente pero su contenido coincide, en fecha y hechos, con
  al menos tres coberturas periodísticas independientes.
Información utilizada: (1) Matrimonio de Cervantes con Catalina de Salazar y Palacios el 12 de
  diciembre de 1584 en Esquivias (él con 37 años, ella con 19); ni la madre de ella ni los padres de
  él asistieron (padre enfermo, madre recién viuda). (2) Encarcelamiento en la Cárcel Real de
  Sevilla entre septiembre de 1597 y abril de 1598, al no poder justificar cuentas como recaudador
  de impuestos tras la desaparición del banquero Simón Freire con los fondos depositados. (3)
  Asesinato de don Gaspar de Ezpeleta la noche del 27 de junio de 1605 frente a la vivienda de
  Cervantes en Valladolid; Cervantes auxilió al herido, declaró como testigo y pasó dos días
  detenido junto a su familia antes de que el caso se archivara sin identificar al agresor.
Página/sección: Páginas indicadas arriba.
Observaciones: La cita literal del prólogo del Quijote que conecta la cárcel de Sevilla con el
  origen de la novela ("bien como quien se engendró en una cárcel...") está registrada en SRC-008,
  no aquí — este registro cubre el contexto biográfico, no el texto literario.
Derechos: Se parafrasea, sin reproducir texto extenso de ninguna fuente.
```

### SRC-011

```text
ID: SRC-011
Título: La Galatea — personajes principales
Institución: Junta de Castilla y León (portal educativo educa.jcyl.es)
Autor: Junta de Castilla y León (recurso educativo institucional)
URL: educa.jcyl.es/educacyl/cm/gallery/Recursos%20Infinity/aplicaciones/16_primaria_cervantes/la-galatea-personajes.html
Fecha de consulta: 2026-09-03
Tipo: FUENTE INSTITUCIONAL (nombres); FUENTE SECUNDARIA VERIFICADA (descripciones breves,
  trianguladas entre varias reseñas literarias independientes y coincidentes)
Fiabilidad: Alta para los nombres (fuente institucional educativa regional); media-alta para las
  descripciones (no hay una única fuente académica accesible con descripciones extensas, se
  triangularon varias reseñas coincidentes entre sí).
Información utilizada: Personajes principales de La Galatea (1585): Elicio y Erastro, pastores
  enamorados de Galatea; Florisa, amiga de Galatea; y otros personajes secundarios de la trama
  pastoril (Damón, Tirsi, Timbrio, Silerio).
Página/sección: Página completa.
Observaciones: Es un recurso educativo de nivel escolar, no un estudio académico — coherente con el
  uso que se le da (una ficha breve de personajes, no un análisis crítico).
Derechos: Se parafrasea, sin reproducir el texto de la página.
```

### SRC-012

```text
ID: SRC-012
Título: Las novelas ejemplares en el sistema narrativo de Cervantes
Institución: Biblioteca Virtual Miguel de Cervantes
Autor: Ver documento (descarga académica alojada en cervantesvirtual.com)
URL: cervantesvirtual.com/descargaPdf/las-novelas-ejemplares-en-el-sistema-narrativo-de-cervantes-971261/
Fecha de consulta: 2026-09-03
Tipo: FUENTE ACADÉMICA
Fiabilidad: Alta — estudio académico alojado por la Biblioteca Virtual Miguel de Cervantes.
Información utilizada: Temas de las Novelas ejemplares (1613): la reinterpretación cervantina del
  género picaresco (nunca narrado en primera persona, a diferencia del canon del género), la
  división entre novelas "realistas" e "idealistas" según el peso de la observación frente a la
  imaginación, y la ejemplaridad como reflexión moral no siempre explícita en forma de moraleja.
Página/sección: Documento completo.
Observaciones: Ninguna.
Derechos: Se parafrasea, sin reproducir el texto del estudio.
```

### SRC-013

```text
ID: SRC-013
Título: Estudios académicos sobre el Viaje del Parnaso
Institución: Centro Virtual Cervantes (Instituto Cervantes) — Congresos y Coloquios Cervantinos
Autor: Carlos M. Gutiérrez, Elias L. Rivers, Jordi Gracia García, Giuseppe E. Sansone
URL: cvc.cervantes.es/literatura/cervantistas/congresos/cg_IV/cg_IV_89.pdf;
  cvc.cervantes.es/literatura/cervantistas/coloquios/cl_II/cl_II_67.pdf;
  cvc.cervantes.es/literatura/cervantistas/coloquios/cl_I/cl_I_31.pdf;
  cvc.cervantes.es/literatura/cervantistas/congresos/cg_II/cg_II_06.pdf
Fecha de consulta: 2026-09-03
Tipo: FUENTE ACADÉMICA
Fiabilidad: Alta — cuatro artículos de congresos y coloquios cervantinos organizados por el
  Instituto Cervantes, autoría identificada.
Información utilizada: Estructura del Viaje del Parnaso (1614): poema en tercetos encadenados con
  un apéndice en prosa, "La Adjunta al Parnaso". Temas: recuento satírico-burlesco de los poetas
  españoles contemporáneos reunidos en un barco imaginario rumbo al Parnaso, interpretado también
  como una autodefensa y reivindicación de la propia obra poética de Cervantes.
Página/sección: Documentos completos.
Observaciones: Ninguna.
Derechos: Se parafrasea, sin reproducir el texto de los artículos.
```

### SRC-014

```text
ID: SRC-014
Título: Ocho comedias y ocho entremeses — prólogo, contenidos e influencia
Institución: Centro Virtual Cervantes (Instituto Cervantes, revista Criticón) y Universidad de
  Alcalá
Autor: Ver artículo (Criticón, 108, 2010); edición digital de la Universidad de Alcalá
URL: cvc.cervantes.es/literatura/criticon/PDF/108/108_133.pdf ("El prólogo a las Ocho comedias de
  Cervantes"); cervantes.uah.es/teatro/ochocome/ochocopre.htm
Fecha de consulta: 2026-09-03
Tipo: FUENTE ACADÉMICA
Fiabilidad: Alta — revista académica del Instituto Cervantes y edición digital universitaria.
Información utilizada: Las ocho comedias que componen la colección de 1615 (El gallardo español, La
  casa de los celos, Los baños de Argel, El rufián dichoso, La gran sultana doña Catalina de Oviedo,
  El laberinto de amor, La entretenida y Pedro de Urdemalas, esta última considerada la más
  original); los entremeses incluidos (entre ellos El retablo de las maravillas); la influencia de
  Lope de Rueda en los entremeses cervantinos, con mayor elaboración de tramas y personajes.
Página/sección: Documentos completos.
Observaciones: Ninguna.
Derechos: Se parafrasea, sin reproducir el texto de los artículos.
```

### SRC-015

```text
ID: SRC-015
Título: Los trabajos de Persiles y Sigismunda — edición crítica de referencia
Institución: Real Academia Española / Espasa Calpe
Autor: Laura Fernández, Ignacio García Aguilar, Isabel Lozano Renieblas y Carlos Romero Muñoz
  (edición crítica, anotación y estudio)
URL: Edición crítica RAE/Espasa Calpe, Madrid-Barcelona, 2018, ISBN 978-84-670-5160-5 (referencia
  bibliográfica; reseña académica consultada en academia.edu como vía de acceso)
Fecha de consulta: 2026-09-03
Tipo: FUENTE ACADÉMICA
Fiabilidad: Alta — edición crítica de referencia publicada por la RAE, la autoridad académica de
  mayor peso disponible para esta obra.
Información utilizada: Estructura del Persiles en cuatro libros, con una discontinuidad formal
  documentada entre los libros I-II y el libro III; recepción crítica de la obra, que cayó en
  desprestigio tras el Siglo de Oro y fue objeto de una recuperación académica notable durante el
  siglo XX.
Página/sección: Reseña de la edición crítica.
Observaciones: Se prioriza esta edición crítica institucional sobre artículos de acceso abierto de
  estatus editorial incierto encontrados durante la misma búsqueda.
Derechos: Se parafrasea, sin reproducir el texto de la edición ni de su reseña.
```

### Nota metodológica sobre el uso de Wikipedia en esta ampliación (2026-09-04)

El usuario pidió expresamente usar es.wikipedia.org/wiki/Miguel_de_Cervantes como fuente y citarla.
Por la regla permanente del proyecto (§7.3 de `CLAUDE.md`: "Wikipedia solo como pista inicial, nunca
como fuente final"), el artículo se usó **exclusivamente como pista** para identificar qué hechos
añadir y qué historiadores/archivos los respaldan — nunca se cita a Wikipedia como fuente en el
contenido publicado. Cada dato nuevo se verificó de forma independiente contra una fuente primaria,
institucional o académica real antes de publicarse (ver SRC-016 a SRC-021).

### SRC-016

```text
ID: SRC-016
Título: Isabel de Saavedra (hija de Cervantes)
Institución: Real Academia de la Historia (Diccionario Biográfico Electrónico); Biblioteca Virtual
  Miguel de Cervantes (artículo académico de Emilio Maganto Pavón)
Autor: Real Academia de la Historia; Emilio Maganto Pavón
URL: https://dbe.rah.es/biografias/71050/isabel-de-saavedra;
  cervantesvirtual.com/obra/-un-punto-oscuro-en-la-vida-de-cervantes-su-amante-ana-de-villafranca-y-la-hija-de-ambos-isabel-de-saavedra-nuevos-documentos-cervantinos-que-desvelan-la-vida-de-isabel-durante-1052914/
Fecha de consulta: 2026-09-04
Tipo: FUENTE INSTITUCIONAL (RAH) y FUENTE ACADÉMICA (artículo alojado en BVMC)
Fiabilidad: Alta — diccionario biográfico oficial de la Real Academia de la Historia.
Información utilizada: Isabel nació en Madrid hacia 1584, hija de la relación de Cervantes con Ana
  Franca (o Villafranca) de Rojas, casada con el tabernero Alonso Rodríguez. No fue reconocida por
  Cervantes hasta después de 1599 (muerte de sus padres Ana Franca y Alonso Rodríguez); antes vivió
  al cuidado de Magdalena, hermana de Cervantes. Se casó dos veces (Diego Sanz del Águila y Luis de
  Molina) y en un testamento de 1631 se refiere a sí misma como hija de Miguel de Cervantes y de Ana
  de Rojas, "ambos difuntos".
Página/sección: Biografía completa (RAH); artículo completo (Maganto Pavón).
Observaciones: Es un episodio biográfico real y documentado, no un hecho de novela — se presenta
  con la misma naturalidad y rigor que el resto de la biografía, sin dramatizar ni omitir.
Derechos: Se parafrasea, sin reproducir el texto de ninguna de las dos fuentes.
```

### SRC-017

```text
ID: SRC-017
Título: Los cuatro intentos de fuga de Cervantes durante el cautiverio en Argel
Institución: Ninguna fuente única institucional accesible directamente; triangulado entre varias
  coberturas de divulgación histórica independientes y coincidentes entre sí
Autor: Varios (ver URLs)
URL: guerrillero.cu/los-intentos-de-fuga-de-cervantes-antes-de-su-cautiverio-en-argel/;
  calvarielperiodicdelcordebenidorm.com/2024/06/09/los-intentos-de-fuga-de-miguel-de-cervantes-de-su-cautiverio-en-argel/;
  lacasadelrecreador.com/es/blog/143-cervantes-en-argel-1575-1580-historia-de-un-cautiverio-singular
Fecha de consulta: 2026-09-04
Tipo: FUENTE SECUNDARIA VERIFICADA (triangulación de varias fuentes independientes coincidentes;
  mismo criterio que SRC-002)
Fiabilidad: Media-alta — los hechos concretos (número de intentos, nombres de los delatores,
  castigos) coinciden en todas las fuentes consultadas, que a su vez remiten a las biografías
  académicas de referencia sobre Cervantes (Astrana Marín, Canavaggio).
Información utilizada: Cervantes protagonizó cuatro intentos de fuga documentados durante su
  cautiverio en Argel (1575-1580). En el segundo, una galera española enviada a rescatarlo fue
  capturada y el plan fue descubierto por la traición de un cautivo apodado "el Dorador"; Cervantes
  asumió toda la responsabilidad ante Azán Bajá, que lo encadenó cinco meses en su "baño". En el
  cuarto, financiado por un mercader valenciano para fletar una fragata con sesenta cautivos, el
  plan fue delatado por el ex dominico Juan Blanco de Paz, recompensado con un escudo y un tarro de
  manteca.
Página/sección: Artículos completos.
Observaciones: No se pudo acceder directamente a una biografía académica primaria (Astrana Marín,
  Canavaggio) para esta ampliación puntual; se documenta la limitación explícitamente, siguiendo el
  protocolo del proyecto de nunca presentar como verificado algo no confirmado con el rigor habitual.
Derechos: Se parafrasea, sin reproducir el texto de ninguna fuente.
```

### SRC-018

```text
ID: SRC-018
Título: Encarcelamiento en Castro del Río (1592)
Institución: Biblioteca Virtual Miguel de Cervantes (Red de Ciudades Cervantinas; biografía oficial)
Autor: Biblioteca Virtual Miguel de Cervantes
URL: cervantesvirtual.com/portales/red_ciudades_cervantinas/castro_del_rio/;
  cervantesvirtual.com/portales/miguel_de_cervantes/autor_biografia_2/
Fecha de consulta: 2026-09-04
Tipo: FUENTE INSTITUCIONAL
Fiabilidad: Alta.
Información utilizada: El 21 de septiembre de 1592, como comisario real de abastos, Cervantes fue
  encarcelado en Castro del Río acusado de haber vendido parte del trigo requisado que debía ir a la
  Armada. Salió pronto de la cárcel tras el pago de una fianza por Pedro de Isunza. El requisamiento
  de grano eclesiástico en Écija le había valido antes una excomunión del vicario general de Sevilla.
Página/sección: Páginas indicadas.
Observaciones: Este encarcelamiento es distinto y anterior al de la Cárcel Real de Sevilla (1597,
  SRC-010), ya registrado; ambos están documentados de forma independiente.
Derechos: Se parafrasea, sin reproducir el texto de las páginas.
```

### SRC-019

```text
ID: SRC-019
Título: Premio de Literatura en Lengua Castellana Miguel de Cervantes
Institución: Universidad de Alcalá
Autor: Universidad de Alcalá (páginas oficiales)
URL: uah.es/es/conoce-la-uah/la-universidad/actos-academicos-e-institucionales/premios-cervantes/
Fecha de consulta: 2026-09-04
Tipo: FUENTE INSTITUCIONAL
Fiabilidad: Alta — página oficial de la propia universidad que acoge el acto.
Información utilizada: El Premio Cervantes, creado en 1976, es considerado el galardón más
  importante de las letras en español. Se entrega cada 23 de abril (Día del Libro y aniversario de
  la muerte de Cervantes) en el Paraninfo de la Universidad de Alcalá, en una ceremonia presidida
  por los Reyes de España.
Página/sección: Página oficial completa.
Observaciones: Ninguna.
Derechos: Se parafrasea, sin reproducir el texto de la página.
```

### SRC-020

```text
ID: SRC-020
Título: Día Internacional del Libro y del Derecho de Autor
Institución: UNESCO; Ministerio de Cultura de España
Autor: UNESCO (Conferencia General, 1995)
URL: cultura.gob.es/cultura/areas/libro/mc/dia-libro/presentacion/2022/dia-libro-derecho-autor.html
Fecha de consulta: 2026-09-04
Tipo: FUENTE INSTITUCIONAL
Fiabilidad: Alta — el hecho (proclamación por la Conferencia General de la UNESCO en 1995) se repite
  de forma consistente en múltiples coberturas periodísticas y en la propia página del Ministerio de
  Cultura de España.
Información utilizada: La UNESCO proclamó el 23 de abril Día Internacional del Libro y del Derecho
  de Autor en 1995, fecha elegida por coincidir con la muerte, en 1616, de Cervantes, Shakespeare y
  el Inca Garcilaso de la Vega — con la salvedad, ya documentada en la curiosidad correspondiente
  del sitio, de que las fechas reales difieren por el desfase entre calendarios.
Página/sección: Página completa.
Observaciones: Ninguna.
Derechos: Se parafrasea, sin reproducir el texto de la página.
```

### SRC-021

```text
ID: SRC-021
Título: La Galatea — estructura en seis libros (edición original)
Institución: Biblioteca Nacional de España; Centro Virtual Cervantes (Instituto Cervantes)
Autor: Miguel de Cervantes (texto primario, catalogado por la BNE); Melchora Romanos (estudio
  académico, congreso cervantista)
URL: cervantes.bne.es/es/colecciones/impresos-antiguos/primera-parte-galatea-dividida-seis-libros;
  cvc.cervantes.es/literatura/cervantistas/congresos/cg_II/cg_II_15.pdf
Fecha de consulta: 2026-09-04
Tipo: FUENTE PRIMARIA (catálogo BNE de la edición original) y FUENTE ACADÉMICA (estudio de
  estructura narrativa)
Fiabilidad: Máxima para el dato de estructura — es el propio título de la edición original,
  catalogada por la Biblioteca Nacional de España: "Primera parte de La Galatea, dividida en seis
  libros" (1585).
Información utilizada: La Galatea se organiza en seis libros; el libro VI incluye el "Canto de
  Calíope", en el que Cervantes elogia a poetas contemporáneos (entre ellos Lope de Vega y Góngora).
  Cervantes anunció varias veces una segunda parte que nunca llegó a escribir.
Página/sección: Ficha de catálogo (BNE); artículo completo (CVC).
Observaciones: Ninguna.
Derechos: Se parafrasea, sin reproducir el texto de ninguna fuente.
```
