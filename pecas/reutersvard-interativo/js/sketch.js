// Define variáveis globais para o ângulo de rotação, tamanho do triângulo e cor das formas
let angle = 0;
let triangleSize = 150;
let shapeColor = '#ff0000';

// Função de configuração inicial do p5.js
function setup() {
  // Cria um canvas de 600x600 pixels e anexa ao contêiner no HTML
  const canvas = createCanvas(600, 600);
  canvas.parent('canvas-container');
  
  // Define o modo de ângulo para graus em vez de radianos
  angleMode(DEGREES);
  
  // Desativa o loop de desenho contínuo para desenhar apenas quando necessário
  noLoop();
  
  // Configura o controle deslizante para o ângulo de rotação
  const angleSlider = select('#angleSlider');
  angleSlider.input(() => {
    angle = angleSlider.value(); // Atualiza a variável de ângulo com o valor do controle deslizante
    redraw(); // Redesenha o canvas com o novo ângulo
  });

  // Configura o controle deslizante para o tamanho do triângulo
  const sizeSlider = select('#sizeSlider');
  sizeSlider.input(() => {
    triangleSize = sizeSlider.value(); // Atualiza a variável de tamanho com o valor do controle deslizante
    redraw(); // Redesenha o canvas com o novo tamanho
  });

  // Configura o seletor de cor para as formas
  const colorPicker = select('#colorPicker');
  colorPicker.input(() => {
    shapeColor = colorPicker.value(); // Atualiza a variável de cor com o valor do seletor de cor
    redraw(); // Redesenha o canvas com a nova cor
  });

  // Configura o botão de redefinir para restaurar os valores iniciais
  const resetButton = select('#reset');
  resetButton.mousePressed(() => {
    // Redefine os valores iniciais
    angle = 0;
    triangleSize = 150;
    shapeColor = '#ff0000';
    // Atualiza os controles de interface com os valores iniciais
    angleSlider.value(angle);
    sizeSlider.value(triangleSize);
    colorPicker.value(shapeColor);
    // Redesenha o canvas com os valores redefinidos
    redraw();
  });
}

// Função de desenho do p5.js
function draw() {
  // Limpa o fundo do canvas com branco
  background(255);
  
  // Translada o ponto de origem para o centro do canvas
  translate(width / 2, height / 2);
  
  // Rotaciona o canvas de acordo com o ângulo definido
  rotate(angle);
  
  // Define a cor de preenchimento das formas
  fill(shapeColor);
  
  // Remove o contorno das formas
  noStroke();
  
  // Desenha o triângulo de Reutersvärd com o tamanho especificado
  drawReutersvardTriangle(triangleSize);
}

// Função para desenhar o triângulo de Reutersvärd
function drawReutersvardTriangle(size) {
  // Calcula os parâmetros geométricos para o triângulo
  const rt3 = sqrt(3); // Raiz quadrada de 3
  const dw = size; // Largura do triângulo
  const dh = 2 / rt3 * dw; // Altura do triângulo
  const dh2 = dh / 2; // Metade da altura
  const dw2 = dw / 2; // Metade da largura

  // Desenha o triângulo principal
  beginShape();
  vertex(-dw2, dh2);
  vertex(0, -dh2);
  vertex(dw2, dh2);
  vertex(-dw2, dh2);
  endShape(CLOSE);

  // Desenha a forma complementar à esquerda
  push();
  translate(-dw2, dh2);
  rotate(-60);
  beginShape();
  vertex(0, 0);
  vertex(dw, 0);
  vertex(dw2, -dh2);
  vertex(-dw2, -dh2);
  endShape(CLOSE);
  pop();

  // Desenha a forma complementar à direita
  push();
  translate(dw2, dh2);
  rotate(60);
  beginShape();
  vertex(0, 0);
  vertex(-dw, 0);
  vertex(-dw2, -dh2);
  vertex(dw2, -dh2);
  endShape(CLOSE);
  pop();
}
