let rotationX = 0;
let rotationY = 0;
let rotationZ = 0;
let lightX = 0;
let lightY = 0;
let lightZ = 0;

function setup() {
  // Cria um canvas 3D de 600x600 pixels e o anexa ao contêiner no HTML
  const canvas = createCanvas(600, 600, WEBGL);
  canvas.parent('canvas-container');
  
  // Configura sliders para controlar a rotação nos eixos X, Y e Z
  const rotationXSlider = select('#rotationXSlider');
  rotationXSlider.input(() => {
    rotationX = radians(rotationXSlider.value());
    redraw();
  });

  const rotationYSlider = select('#rotationYSlider');
  rotationYSlider.input(() => {
    rotationY = radians(rotationYSlider.value());
    redraw();
  });

  const rotationZSlider = select('#rotationZSlider');
  rotationZSlider.input(() => {
    rotationZ = radians(rotationZSlider.value());
    redraw();
  });

  // Configura sliders para controlar a posição da luz nos eixos X, Y e Z
  const lightXSlider = select('#lightXSlider');
  lightXSlider.input(() => {
    lightX = lightXSlider.value();
    redraw();
  });

  const lightYSlider = select('#lightYSlider');
  lightYSlider.input(() => {
    lightY = lightYSlider.value();
    redraw();
  });

  const lightZSlider = select('#lightZSlider');
  lightZSlider.input(() => {
    lightZ = lightZSlider.value();
    redraw();
  });

  // Botão para redefinir as configurações
  const resetButton = select('#reset');
  resetButton.mousePressed(() => {
    rotationX = 0;
    rotationY = 0;
    rotationZ = 0;
    lightX = 0;
    lightY = 0;
    lightZ = 0;
    rotationXSlider.value(0);
    rotationYSlider.value(0);
    rotationZSlider.value(0);
    lightXSlider.value(0);
    lightYSlider.value(0);
    lightZSlider.value(0);
    redraw();
  });

  noLoop();
}

function draw() {
  background(255);
  
  // Configura a luz direcional
  directionalLight(250, 250, 250, lightX, lightY, lightZ);

  // Define a rotação do objeto 3D
  rotateX(rotationX);
  rotateY(rotationY);
  rotateZ(rotationZ);

  // Desenha o triângulo de Reutersvärd em 3D
  drawReutersvardTriangle3D(150);
}

function drawReutersvardTriangle3D(size) {
  const rt3 = sqrt(3);
  const dw = size;
  const dh = 2 / rt3 * dw;
  const dh2 = dh / 2;
  const dw2 = dw / 2;

  // Desenha o triângulo principal
  beginShape();
  vertex(-dw2, dh2, 0);
  vertex(0, -dh2, 0);
  vertex(dw2, dh2, 0);
  vertex(-dw2, dh2, 0);
  endShape(CLOSE);

  // Desenha a forma complementar à esquerda
  push();
  translate(-dw2, dh2, 0);
  rotateZ(-60);
  beginShape();
  vertex(0, 0, 0);
  vertex(dw, 0, 0);
  vertex(dw2, -dh2, 0);
  vertex(-dw2, -dh2, 0);
  endShape(CLOSE);
  pop();

  // Desenha a forma complementar à direita
  push();
  translate(dw2, dh2, 0);
  rotateZ(60);
  beginShape();
  vertex(0, 0, 0);
  vertex(-dw, 0, 0);
  vertex(-dw2, -dh2, 0);
  vertex(dw2, -dh2, 0);
  endShape(CLOSE);
  pop();
}
