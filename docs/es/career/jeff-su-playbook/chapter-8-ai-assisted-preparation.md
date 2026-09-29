---
title: "Capítulo 8: Preparación con ayuda de la IA"
description: Usa secuencias de prompts basadas en la vacante y comprueba cada afirmación antes de usarla.
---

# Capítulo 8 — Preparación con ayuda de la IA

Un chatbot puede proponer respuestas, preguntas probables, cartas, CV y términos de LinkedIn. El punto de partida es lo que necesita la empresa; el último paso es comprobarlo todo con tu trayectoria real.

![Una oferta de empleo y un currículum alimentan un borrador de IA que una persona coteja con sus datos reales.](/assets/career/jeff-su-playbook/chapter-8/01-ai-draft-verification.webp)

*La IA puede organizar el borrador; verifica cada afirmación con tu experiencia y tus documentos.*

## 8.1 Por qué falla un único prompt centrado en ti

Jeff considera que muchas respuestas de ChatGPT para quienes buscan empleo son inútiles. Una petición popular de carta de presentación sacada de GitHub se centraba solo en «mí, mí, mí» en vez de abrir con un reto de la empresa, y pedía todo de una vez. Él sostiene que varios prompts sucesivos dan mejores resultados, aunque no aporta estudio. El orden común es: **extraer prioridades de una vacante real → combinar con tu CV → revisar y editar**.

En los videos de 2023 y comienzos de 2024 aparecen ChatGPT y Google Bard; en 2024, Gemini, nombre posterior de Bard. Jeff cita sin fuente que el 46 % de candidatos ya usaba estas herramientas en octubre de 2023. Las aplicaciones cambian; el método puede adaptarse.

## 8.2 Técnicas que nombra Jeff

- **Asignación de papel:** «Eres un responsable de contratación con más de 20 años de experiencia».
- **Generación e integración de conocimiento:** pide primero un análisis del puesto y úsalo en el prompt siguiente.
- **Ejemplos en el prompt (*few-shot*):** muestra un modelo antes de pedir una viñeta equivalente.
- **Varios prompts:** divide la tarea en etapas.

También introduce la **estructura de respuesta** en el prompt, aunque no la presenta como quinta técnica. Si pides una respuesta situacional sin indicar RCS, dice que empeora mucho.

## 8.3 Primero, extrae las necesidades de la empresa

Puedes pedir al chatbot, en el idioma de la vacante:

> Eres un responsable de contratación con más de 20 años de experiencia y supervisas esta vacante. Señala las tres responsabilidades más importantes de esta descripción: [pega la descripción].

Para el CV, cambia el papel por «redactor experto de CV con más de 20 años ayudando a candidatos a conseguir puestos en [sector]». Para una carta:

> Según esta descripción, ¿cuál sería el mayor reto diario de quien ocupe el puesto? [pega la descripción].

Jeff prueba el primer prompt con operaciones comerciales en Netflix, un campo en que no tenía experiencia. Obtiene colaboración con ventas medida por ingresos publicitarios, gestión del proceso de ventas y calidad de datos y herramientas, y revisiones de cartera. Pero también dice que las descripciones pueden ser vagas: trata esas prioridades como hipótesis y contrástalas con personas que hacen el trabajo ([capítulo 1](./chapter-1-what-employers-are-really-asking.md)).

## 8.4 Borrador de «háblame de ti»

Después de extraer tres responsabilidades, Jeff propone un segundo prompt con tu CV y la estructura del [capítulo 4](./chapter-4-opening-and-motivation-answers.md):

> A partir de esas tres responsabilidades y de mi CV, redacta una respuesta convincente a «Háblame de ti» con secciones **Presente, Pasado y Futuro**. Presente: mi situación actual relacionada con la vacante, máximo 100 palabras. Pasado: solo una experiencia previa, la más relacionada, máximo 50 palabras. Futuro: conecta mi trayectoria con el nuevo puesto, máximo 100 palabras. CV: [pega tu CV].

La guía de principios de 2023 era más flexible: algunas experiencias elegidas y un máximo de 300 palabras. Como el futuro resultó aplicable a cualquier empresa, Jeff pidió una mejora:

> La sección Futuro es demasiado vaga. A partir de la vacante, da un ejemplo concreto de por qué trabajar en [Apple] encajaría con mi experiencia. Incorpora términos de la descripción cuando proceda. Prioriza consejos menos obvios. No inventes información. Vacante: [pega la descripción].

Edita el resultado, que Jeff considera aproximadamente un 80 % terminado. Cambia frases vacías por cifras verificadas, conserva solo el pasado más pertinente y escribe tú mismo el puente entre contribución inmediata y desarrollo futuro. Una respuesta puede expresar: «A corto plazo, mis capacidades me ayudarán a incorporarme con rapidez; a largo plazo, quiero ampliar mis competencias B2B en operaciones comerciales».

## 8.5 Preguntas probables y respuestas

Para evitar listas generales, pregunta por las **diez preguntas conductuales** más habituales para esa descripción, como responsable de contratación con 20 años de experiencia; repite el prompt sustituyendo «conductuales» por «situacionales». En 2023 Jeff pedía diez preguntas sin separar categorías; en 2024 las vincula a CARL y RCS. Su afirmación de que más del 90 % de preguntas no técnicas pertenece a uno de esos grupos carece de fuente.

Para averiguar la intención de una pregunta:

> Prepararé una entrevista para esta vacante. Me preguntarán [pregunta]. Enumera tres motivos principales por los que el entrevistador la haría y tres consejos correspondientes para estructurar la respuesta. Preséntalos en una tabla de dos columnas. Vacante: [pega la descripción].

Verifica esos motivos con quienes conocen el puesto. Para una experiencia pasada:

> A partir de mi CV, responde «Cuéntame una ocasión en que trataste con un compañero difícil». Usa **un** ejemplo real y la estructura CARL: contexto, acción, resultados y aprendizaje. Sé conciso y no superes 260 palabras. CV: [pega tu CV].

La versión de 2023 pedía expresamente métricas en Resultados y partía de la tabla de motivos. Jeff recomienda practicar respuestas orales de dos a tres minutos y guardarlas en un solo Google Doc. Para supuestos, especifica RCS; el video enlaza un prompt pero no lee su texto, así que no se reproduce.

## 8.6 Carta y CV a medida

**Carta.** Tras preguntar cuál es el reto diario, solicita una apertura de hasta 100 palabras que muestre cómo tu experiencia permite afrontarlo; Jeff usa un ejemplo hipotético de gestor de cuentas minoristas que aspira a producto en Apple. Edita esa apertura y pide completar la carta con el CV en **menos de 250 palabras**. Si la IA reescribe tu apertura y la empeora, conserva la tuya. Elige únicamente experiencias relacionadas con el reto. Incluso si el resto falla, una buena apertura muestra que entiendes las dificultades del puesto.

Un prompt posible, siguiendo el ejemplo de Jeff, es: «Trabajo como gestor de cuentas comerciales en el sector minorista y solicito un puesto de producto en Apple. Escribe una apertura de carta de presentación, de máximo 100 palabras, que muestre que entiendo los retos diarios del puesto y he afrontado retos comparables. Incluye ejemplos concretos de mi experiencia y una forma sincera de expresar interés». Después pega la apertura revisada y tu CV para completar la carta.

**CV.** Primero identifica las tres responsabilidades principales. Después pide ajustar tu CV al puesto y añade «No inventes información». A continuación solicita una tabla de dos columnas, **Original** y **Actualizado**, que muestre cada cambio de redacción exacto. Esa comparación permite detectar errores: en una prueba, la IA cambió el cargo real de Jeff, *Senior Management Consultant*, por *Product Manager*. Puedes subrayar habilidades transferibles, pero no alterar cargos.

En lugar de pegar solo la vacante y pedir «adapta mi CV», formula ambas órdenes por separado: «A partir de las tres responsabilidades principales, adapta mi CV a [puesto] en [empresa]. No inventes información. CV: [texto]»; después: «Enumera en una tabla de dos columnas, Original y Actualizado, todas las diferencias exactas de redacción entre mi CV y tu propuesta». Revisa también lo que el modelo haya eliminado.

**Viñetas.** Jeff da un ejemplo antes de pedir la reescritura y solicita que el modelo responda «sí» si lo comprende. Luego pide la forma «Logré X, medido por Y, lo que produjo Z», máximo 50 palabras. Su ejemplo hipotético habla de reducir un 10 % la mortalidad hospitalaria al formar a enfermeras, equivalente a 200 vidas al año. En trabajos cuyo efecto parece difícil de medir, pide posibles lugares y formas de añadir métricas; **los números definitivos deben salir de tus propios registros**.

## 8.7 Términos y aptitudes de LinkedIn

Reúne cinco vacantes comparables en un documento y pide a ChatGPT o Gemini:

> Busco puestos de [responsable de marketing]. Analiza estas cinco descripciones y muestra los diez términos más frecuentes, con el número de apariciones de cada uno: [pega las cinco vacantes].

Una variante solicita las diez aptitudes más relevantes para LinkedIn, ordenadas de mayor a menor. Jeff encontró sorpresas como *measurement* y *channel* para marketing de producto y eligió los tres términos más útiles. Comprueba los recuentos con una búsqueda textual: la IA puede contar mal. La extracción se explica en el [capítulo 1](./chapter-1-what-employers-are-really-asking.md) y su ubicación en el [2](./chapter-2-the-linkedin-profile.md).

## 8.8 Diferencias entre los videos

| Tema | Guía de 2023 | Videos posteriores |
|---|---|---|
| «Háblame de ti» | Hasta 300 palabras, varias experiencias elegidas | 100/50/100 palabras, una sola experiencia pasada |
| Preguntas | Diez más frecuentes en general | Conductuales y situacionales separadas |
| Respuestas | Dos o tres minutos al hablar | Máximo 260 palabras en el borrador |
| Exactitud | «No inventes información» | Permite creatividad para **conectar** la trayectoria con el futuro, no para inventar hechos |

## 8.9 Comprobaciones antes de usar un borrador

Jeff incluye «No inventes información» y la tabla de diferencias, y considera las respuestas borradores. Comprueba cada línea: empleadores, cargos, fechas y métricas deben coincidir con tu historial. Si no puedes defender una afirmación ante una repregunta, elimínala. Trata cifras sugeridas como pistas para investigar, no como resultados. No pegues información confidencial y consulta la política de IA de tu empresa. Prueba de nuevo herramientas y límites gratuitos antes de depender de ellos, y quita la prosa genérica para que la respuesta suene a ti.

**Criterio del capítulo:** Cada borrador empieza por una vacante real, incluye una estructura explícita y pasa una revisión línea por línea contra tus datos. Puedes explicar sin leerlo cada afirmación que contiene.

**Fuentes:** videos de Jeff Su [«Land a Job using ChatGPT: The Definitive Guide!»](https://www.youtube.com/watch?v=pmnY5V16GSE) (2023); [«Tell Me About Yourself (The BEST Way to Answer this Interview Question)»](https://www.youtube.com/watch?v=jZJKb-obz1E) (2023); [«You’re Not Unqualified: How to Pass 90% of Your Interviews»](https://www.youtube.com/watch?v=QrmDmQ7ZivM) (2024); [«5 LinkedIn Profile Tips that Get You Hired (backed by data)»](https://www.youtube.com/watch?v=OKF7ZeWNrfg) (2024). Lista completa en [Fuentes](./sources.md).

## Notas relacionadas

- [Capítulo 4: Cómo presentarte y explicar tu motivación](./chapter-4-opening-and-motivation-answers.md)
- [Capítulo 5: Respuestas conductuales y situacionales](./chapter-5-behavioral-and-situational-answers.md)
- [Guía Day Day Up, capítulo 2: Preparación para la entrevista](../day-day-up-playbook/chapter-2-interview-preparation.md)
