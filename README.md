# Vivero - Actividad 3.1. Integrando elementos dinámicos y gráficos

Proyecto de la Actividad 3.1 (Módulo IV, Unidad 3, Semana 11): uso del elemento
`canvas` de HTML con JavaScript para dibujar figuras, incorporar texto y crear
una animación sencilla.

**Alumno:** Gabriel Gamboa

## Contenido

| Archivo | Descripción |
|---|---|
| `index.html` | Página con los dos canvas: el de los ejercicios y el de la práctica principal. |
| `styles.css` | Estilos de la página y fondo degradado de los canvas. |
| `script.js` | Todo el dibujo y la animación con JavaScript. |
| `Actividad-3.1-Canvas-Gabriel-Gamboa.docx` | Documento con las capturas del código, las instrucciones y el resultado. |

## Qué se dibuja

- **Ejercicios 3.1.2 a 3.1.4:** un rectángulo, un círculo, una línea y texto.
- **Práctica principal:** un girasol en una maceta, con sol, tallo y cuatro hojas.

## Cómo se anima

La función `dibujarPlanta()` se vuelve a ejecutar en cada cuadro gracias a
`requestAnimationFrame(dibujarPlanta)`. En cada vuelta `clearRect()` borra el
dibujo anterior y `Math.sin(tiempo / 500)` hace que el sol cambie de tamaño y
que la planta se mezca suavemente.

## Cómo verlo

Abre `index.html` en el navegador, o levanta un servidor local:

```bash
python -m http.server 5500
```
