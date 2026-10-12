function setup() {
    // Função de configuração inicial
  
    const canvas = createCanvas(600, 600);
    // Cria um canvas de 600x600 pixels
  
    canvas.parent('canvas-container');
    // Define o elemento pai do canvas como a div com o id 'canvas-container'
  
    noLoop();
    // Desenha o conteúdo apenas uma vez, sem repetir o loop draw
  }
  
  function draw() {
    // Função de desenho principal
  
    background(255);
    // Define a cor de fundo do canvas como branco
  
    noStroke();
    // Remove o contorno das formas
  
    fill(0);
    // Define a cor de preenchimento das formas como preto
  
    drawSierpinskiTriangle(width / 2, height, height, 6);
    // Chama a função para desenhar o triângulo de Sierpinski com profundidade 6
  }
  
  /**
   * Função para desenhar o Triângulo de Sierpinski
   * @param {number} x - Coordenada x do vértice inferior do triângulo
   * @param {number} y - Coordenada y do vértice inferior do triângulo
   * @param {number} len - Lado do triângulo
   * @param {number} depth - Profundidade da recursão
   */
  function drawSierpinskiTriangle(x, y, len, depth) {
    if (depth == 0) {
      // Caso base: desenha um triângulo simples se a profundidade for 0
      drawTriangle(x, y, len);
    } else {
      // Caso recursivo: divide o triângulo em três sub-triângulos
      let newLen = len / 2;
      // Comprimento do novo triângulo
  
      drawSierpinskiTriangle(x, y, newLen, depth - 1);
      // Triângulo inferior
  
      drawSierpinskiTriangle(x - newLen / 2, y - newLen * sqrt(3) / 2, newLen, depth - 1);
      // Triângulo superior esquerdo
  
      drawSierpinskiTriangle(x + newLen / 2, y - newLen * sqrt(3) / 2, newLen, depth - 1);
      // Triângulo superior direito
    }
  }
  
  /**
   * Função para desenhar um triângulo equilátero com base no vértice inferior
   * @param {number} x - Coordenada x do vértice inferior do triângulo
   * @param {number} y - Coordenada y do vértice inferior do triângulo
   * @param {number} len - Lado do triângulo
   */
  function drawTriangle(x, y, len) {
    let h = len * sqrt(3) / 2;
    // Calcula a altura do triângulo
  
    beginShape();
    // Inicia uma nova forma
  
    vertex(x, y);
    // Adiciona o vértice inferior
  
    vertex(x - len / 2, y - h);
    // Adiciona o vértice superior esquerdo
  
    vertex(x + len / 2, y - h);
    // Adiciona o vértice superior direito
  
    endShape(CLOSE);
    // Fecha a forma do triângulo
  }
  