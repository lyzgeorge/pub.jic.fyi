---
title: "Capítulo 9: Destacar en el trabajo con ingenio"
description: Crea recursos reutilizables que resuelvan problemas compartidos, con pruebas y límites claros.
---

# Capítulo 9 — Destacar en el trabajo con ingenio

Usa herramientas gratuitas y materiales reutilizables para hacer un trabajo útil y visible más allá de tus funciones, y comprueba antes las pruebas, las licencias y las políticas de la empresa.

## 9.1 Ingenio y visibilidad

Jeff sostiene que encontrar soluciones sencillas y económicas a problemas compartidos aumenta la probabilidad de que te vean como alguien capaz y con iniciativa. Los ejemplos son **anécdotas personales**, no pruebas de que una herramienta produzca ascensos: una combinación de capacidades de consultoría, un jefe que le apoyaba y videos de incorporación fue una de las razones de su promoción relativamente rápida. Hizo los videos para ahorrar tiempo, sin plantearse la promoción como objetivo.

La serie *Think Outside the Box* se publicó entre septiembre de 2021 y enero de 2022. Diseño de presentaciones fue el primer episodio, Canva el segundo y guías de incorporación el tercero; los videos de correo masivo y participación en presentaciones se presentan solo como «otro episodio». Funciones, rutas y planes gratuitos corresponden a 2021–2022.

![Una profesional crea una guía reutilizable que varios compañeros pueden consultar por su cuenta.](/assets/career/jeff-su-playbook/chapter-9/01-one-to-many-resource.webp)

*Un recurso reutilizable ayuda a más personas que una sola conversación.*

## 9.2 De una persona a muchas

El patrón es crear una vez algo útil para varias personas. «Ayudar a una o dos personas está bien; ayudar a cien es estupendo», dice Jeff.

| Trabajo repetido de uno en uno | Recurso para muchas personas |
|---|---|
| Envío genérico con copia oculta o correos escritos uno por uno | Mensajes masivos personalizados desde una hoja de cálculo |
| Reenviar individualmente una invitación | Cartel que cualquiera puede compartir |
| Responder las mismas dudas de nuevas incorporaciones | Guías para cada grupo de 20–30 personas |
| Diseñar cada presentación o gráfico desde cero | Empezar con plantillas |

La escala es su respuesta a «también ayudo a compañeros y no me ascienden»; ayudar de forma reutilizable amplía el alcance. El correo masivo le dio cierto reconocimiento y un cartel para un evento sin presupuesto llamó la atención porque nadie había pensado en hacerlo.

## 9.3 El ciclo de una presentación

### Diseño: mejora la presentación sin empezar de cero

Jeff dice que llevaba cinco años sin crear una presentación desde una página en blanco. Muestra Google Slides, pero las herramientas sirven también para PowerPoint.

| Fase | Herramientas | Condición |
|---|---|---|
| Plantilla | Slide Carnival, categoría «Simple», o Slidesgo | Atribuye Slide Carnival; Slidesgo permitía diez descargas gratuitas al mes. |
| Paleta | Color Hunt o un generador desde un código hexadecimal | Respeta la marca en presentaciones externas; hay más margen creativo en las internas. |
| Fotos de fondo a página completa, oscurecidas para leer texto | Unsplash, Pexels, Pixabay | Revisa licencias. |
| Iconos | Flaticon; Noun Project para estilo formal | Algunos son de pago; los gratuitos de Flaticon requieren atribución. |
| Tipografías | Typewolf | No todas están disponibles en tu herramienta. |

Jeff resume que estos recursos suelen ser seguros en presentaciones si no se intenta ganar dinero con los recursos gratuitos, pero pide comprobar sus condiciones concretas.

### Participación: atraer, mantener y cerrar

Unas diapositivas buenas no garantizan atención. Jeff compara su estructura con *Harry Potter*: captar interés al principio, mantenerlo y terminar con ganas de saber más.

| Momento | Herramienta | Uso | Propósito |
|---|---|---|---|
| Inicio | Mentimeter | Encuesta ligera sobre ánimo, nube de palabras o cuestionario con clasificación mediante QR | Romper el hielo y detectar conocimientos previos |
| Durante | Slido | QR de preguntas, incluso en cada diapositiva; preguntas anónimas y votos | Quien teme parecer poco informado puede participar; no se olvidan dudas ni interrumpen |
| Cierre | Kahoot | Avisar desde el inicio de un quiz final con premio para tres personas y hacer unas cinco preguntas | Comprobar la atención con una competición justa |

Jeff afirma sin fuente que la atención media en presentaciones no supera diez minutos. Por ello revisa Slido o hace una encuesta cada siete u ocho; toma el intervalo como regla personal, no como hallazgo establecido. El plan gratuito de Mentimeter le parecía limitado pero suficiente para muchos usos; Kahoot exigía registrarse como estudiante o docente y admitía 20 jugadores. Ensaya antes un Kahoot en solitario.

## 9.4 Correo masivo personalizado con combinación de correspondencia

La combinación inserta los valores de cada fila de una hoja de cálculo en un correo, alternativa más personal y eficiente a la copia oculta. En gestión de cuentas, Jeff escribía a más de 200 clientes por trimestre, incluyendo su sector e ID de cliente. En confirmaciones de un evento, una fórmula de la hoja podía crear un identificador de registro para cada destinatario.

Google publicaba en Google Workspace for Developers un script gratuito de *Mail Merge* creado por Martin Hawksey. Sustituía cada <code v-pre>{{Encabezado de columna}}</code> de un borrador de Gmail por el valor de esa columna en Google Sheets.

1. Copia la hoja de ejemplo y usa una fila por destinatario. Puedes cambiar columnas **excepto `Recipient` y `Email Sent`**, que necesita el script.
2. Redacta en Gmail con <code v-pre>{{Recipient}}</code> en Para y marcadores <code v-pre>{{Encabezado}}</code> en asunto y cuerpo.
3. Ejecuta **Mail Merge → Send Emails** e introduce el asunto exacto del borrador. Google advertía que no había verificado la aplicación. Jeff prosiguió porque el script figuraba en la web para desarrolladores de Google; es su criterio, así que consulta antes la política de tu organización.
4. **Envíate una prueba primero.** Comprueba que `Email Sent` muestre fecha y hora; borra esa celda si vas a repetir el envío.

Errores frecuentes: una sola llave en vez de dos y un encabezado escrito de forma distinta al de la hoja. El video no menciona los límites de envío de Gmail.

## 9.5 Canva para materiales de trabajo

La versión gratuita permite producir gráficos sin ser diseñador. Los usos para foto y portada de LinkedIn están en el [capítulo 2](./chapter-2-the-linkedin-profile.md).

| Uso | Cómo | Precaución |
|---|---|---|
| PDF editable | Importa un informe largo, edita unas páginas, añade análisis y marca, exporta a diapositivas | Atribuye el material original. |
| Maqueta | Sitúa una captura dentro de un marco de dispositivo | Ayuda a explicar una idea visual. |
| Cartel de evento | Personaliza plantilla y QR a un formulario | Cada invitado puede compartirlo. |
| CV o carta | Redacta en Google Docs, usa plantilla sencilla **sin foto** y exporta PDF | La alineación en Word o Docs puede ser difícil. |
| Tamaños especiales | Especifica dimensiones, por ejemplo para portada de Notion | Averigua primero el tamaño requerido. |

El PDF editable resolvía un problema que Jeff tuvo como consultor novel; el cartel fue su principal caso de reconocimiento en ese episodio.

## 9.6 Guías de incorporación: mentoría reutilizable

Unos seis meses después de incorporarse a ventas, Jeff grabó pantalla y voz para responder las preguntas más repetidas de las nuevas personas. Compartía los videos con grupos de 20–30 e incluía observaciones propias y errores que convenía evitar, como complemento de la formación oficial. QuickTime, OBS y Zoom eran grabadores gratuitos.

Jeff da tres razones para que esto aumente la visibilidad. **Primero**, alguien que acaba de aprender un trabajo recuerda mejor las dificultades iniciales que un experto alejado del día a día; atribuye a C. S. Lewis una idea sobre aprender de quien va un paso por delante, atribución aquí no verificada. Los sistemas de compañeros suelen emparejar a nuevas personas con quienes llevan 6–12 meses. **Segundo**, los mandos valoran que alguien enseñe detalles operativos que ellos ya no dominan, y son quienes evalúan el desempeño. **Tercero**, un recurso práctico circula de boca en boca cuando los recién llegados conocen a muchos compañeros; Jeff cita *Contagious*, de Jonah Berger.

Los videos tenían límites: un error obligaba a repetir la grabación si no sabías editar; para instrucciones de botones concretos, un texto se consulta al propio ritmo; y los productos cambiaban tanto que el material envejecía aproximadamente cada seis meses. Una guía escrita y breve se actualiza mejor. El resto del video promociona una herramienta patrocinada y se omite.

## 9.7 Comprobaciones antes de compartir

Prueba el correo contigo y ensaya el cuestionario. Atribuye plantillas, iconos e informes y revisa las licencias. Cumple las reglas de marca en materiales externos y las políticas de TI al autorizar scripts. Comprueba los límites actuales de los planes gratuitos.

**Criterio del capítulo:** El recurso resuelve un problema de otras personas, puede llegar a muchas de una vez y se ha probado, atribuido y comprobado frente a las políticas de la empresa antes de circular.

**Fuentes:** videos de Jeff Su [«4 FREE Tools to Improve Your Next Presentation!»](https://www.youtube.com/watch?v=5c9SapE_YNU) (2021); [«7 Creative Ways to use Canva!»](https://www.youtube.com/watch?v=w0Bf4u-u9AQ) (2021); [«Stand Out in the Workplace by Doing THIS!»](https://www.youtube.com/watch?v=7-xgf536_oc) (2021); [«Send Personalized BULK Emails in Gmail (for FREE)!»](https://www.youtube.com/watch?v=LJV-Uuj3RwU) (2021); [«3 FREE Tools to Create ENGAGING Presentations!»](https://www.youtube.com/watch?v=Fq1Yb4kepLo) (2022). Lista completa en [Fuentes](./sources.md).

## Notas relacionadas

- [Capítulo 3: Contactos y acercamiento en LinkedIn](./chapter-3-networking-and-outreach-on-linkedin.md)
- [Guía Day Day Up, capítulo 8: Influencia, conflicto y promoción](../day-day-up-playbook/chapter-8-influence-conflict-promotion.md)
