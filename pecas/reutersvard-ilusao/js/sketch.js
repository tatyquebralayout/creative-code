function setup() {
  const canvas = createCanvas(400, 400);
  // Cria um canvas de 400x400 pixels

  canvas.parent('canvas-container');
  // Define o elemento pai do canvas como a div com o id 'canvas-container'

  noLoop();
  // Desenha o conteúdo apenas uma vez, sem repetir o loop draw
}

function draw() {
  background(255);
  // Define a cor de fundo do canvas como branco

  drawReutersvardTriangle(width / 2, height / 2, 200);
  // Chama a função para desenhar a ilusão no centro do canvas
}

function drawReutersvardTriangle(x, y, size) {
  // Função que desenha a ilusão do triângulo de Reutersvärd

  let rt3 = sqrt(3);
  // Calcula a raiz quadrada de 3

  let ts = size * 0.55;
  // Define o tamanho do triângulo baseado no parâmetro size

  let dw = size * 0.315;
  // Calcula a largura do triângulo

  let dh = 2 / rt3 * dw;
  // Calcula a altura do triângulo

  let dh2 = dh / 2;
  let dw2 = dw / 2;
  // Calcula a metade da altura e da largura do triângulo

  // Define as cores para os losangos e o fundo
  let col1 = color(255, 64, 0);
  let col2 = color(0, 255, 64);
  let col3 = color(0, 64, 255);
  let bgColor = color(255, 240, 160);
  let strokeColor = color(0);

  noStroke();
  fill(bgColor);
  rect(x - dw2, y - dh2, dw, dh);
  // Desenha o fundo do retângulo

  function drawRhombus(vertices, fillColor) {
    // Função para desenhar losangos

    fill(fillColor);
    beginShape();
    for (let v of vertices) {
      vertex(v[0], v[1]);
      // Adiciona cada vértice à forma
    }
    endShape(CLOSE);
    // Fecha a forma do losango
  }

  // Desenha os três losangos do triângulo de Reutersvärd
  drawRhombus([[x - dw2, y], [x, y - dh2], [x + dw2, y], [x, y + dh2]], col1);
  drawRhombus([[x - dw2, y], [x, y + dh2], [x, y + dh], [x - dw2, y + dh2]], col2);
  drawRhombus([[x + dw2, y], [x, y + dh2], [x, y + dh], [x + dw2, y + dh2]], col3);
}
