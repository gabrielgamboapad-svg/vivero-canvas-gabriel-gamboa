/* ===== Ejercicios 3.1.1 a 3.1.5 ===== */

// 3.1.2. Preparando JavaScript para dibujar
const miCanvas = document.getElementById("miCanvas");
const contexto = miCanvas.getContext("2d");

// 3.1.3. Dibujando figuras geométricas
// Dibujar un rectángulo
contexto.fillStyle = "green";
contexto.fillRect(50, 50, 120, 70);

// Dibujar un círculo
contexto.beginPath();
contexto.arc(250, 85, 35, 0, Math.PI * 2);
contexto.fillStyle = "orange";
contexto.fill();

// Dibujar una línea
contexto.beginPath();
contexto.moveTo(350, 50);
contexto.lineTo(450, 120);
contexto.strokeStyle = "brown";
contexto.lineWidth = 4;
contexto.stroke();

// 3.1.4. Incorporando texto
contexto.fillStyle = "darkgreen";
contexto.font = "24px Arial";
contexto.fillText("Vivero Gabriel Gamboa", 50, 200);


/* ===== Práctica principal: una planta en crecimiento ===== */

// 1. Obtener el Canvas y preparar el contexto
const canvas = document.getElementById("canvasPlanta");
const ctx = canvas.getContext("2d");

// 2. Funciones de apoyo
function dibujarTallo(x1, y1, x2, y2, grosor) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = "green";
  ctx.lineWidth = grosor;
  ctx.stroke();
}

function dibujarHoja(x, y, rotacion, color) {
  ctx.beginPath();
  ctx.ellipse(x, y, 25, 12, rotacion, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// 3. Función para dibujar la planta
function dibujarPlanta(tiempo) {
  // Limpiar el dibujo anterior
  ctx.clearRect(0, 0, 600, 300);

  // Dibujar el sol
  const radioSol = 35 + Math.sin(tiempo / 500) * 5;
  ctx.beginPath();
  ctx.arc(500, 60, radioSol, 0, Math.PI * 2);
  ctx.fillStyle = "orange";
  ctx.fill();

  // Dibujar la maceta
  ctx.fillStyle = "#b86b3c";
  ctx.fillRect(240, 210, 120, 60);

  // Vaivén suave de la planta
  const vaiven = Math.sin(tiempo / 700) * 4;
  const florX = 300 + vaiven;
  const florY = 72;

  // Dibujar el tallo
  dibujarTallo(300, 215, florX, florY + 30, 7);

  // Dibujar el borde de la maceta
  ctx.fillStyle = "#8b4513";
  ctx.fillRect(230, 205, 140, 12);

  // Dibujar las cuatro hojas pegadas al tallo
  // posicionX indica dónde pasa el tallo a esa altura
  const posicionX = (y) => 300 + (florX - 300) * ((215 - y) / (215 - (florY + 30)));

  dibujarHoja(posicionX(190) - 20, 190, -0.5, "#4caf50");
  dibujarHoja(posicionX(170) + 20, 170, 0.5, "#2e8b57");
  dibujarHoja(posicionX(150) - 20, 150, -0.5, "#66bb6a");
  dibujarHoja(posicionX(130) + 20, 130, 0.5, "#388e3c");

  // Dibujar los rayos del girasol
  ctx.strokeStyle = "#e8a200";
  ctx.lineWidth = 5;
  for (let i = 0; i < 16; i++) {
    const angulo = (Math.PI * 2 / 16) * i;
    ctx.beginPath();
    ctx.moveTo(florX + Math.cos(angulo) * 28, florY + Math.sin(angulo) * 28);
    ctx.lineTo(florX + Math.cos(angulo) * 50, florY + Math.sin(angulo) * 50);
    ctx.stroke();
  }

  // Dibujar el girasol: una bola amarilla
  ctx.beginPath();
  ctx.arc(florX, florY, 32, 0, Math.PI * 2);
  ctx.fillStyle = "#f6c300";
  ctx.fill();

  // Dibujar el texto
  ctx.fillStyle = "#245c2a";
  ctx.font = "22px Arial";
  ctx.fillText("Vivero Gabriel Gamboa", 30, 45);
  ctx.font = "16px Arial";
  ctx.fillText("Girasoles que crecen con el sol", 30, 75);

  // Solicitar el siguiente cuadro de animación
  requestAnimationFrame(dibujarPlanta);
}

// 4. Iniciar la animación
requestAnimationFrame(dibujarPlanta);
