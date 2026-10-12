function setup() {
    // Cria uma tela (canvas) de 400x400 pixels
    const canvas = createCanvas(400, 400);
    // Anexa o canvas ao contêiner com o ID 'canvas-container'
    canvas.parent('canvas-container');
    // Define o modo de ângulo para graus (por padrão é radianos)
    angleMode(DEGREES);
}

function draw() {
    // Define a cor de fundo do canvas
    background(220);
    // Move a origem do sistema de coordenadas para o centro do canvas
    translate(width / 2, height / 2);
    // Rotaciona o sistema de coordenadas com base no número de quadros
    rotate(frameCount * 0.5);
    // Chama a função que desenha o triângulo de Reutersvärd
    drawReutersvardTriangle();
}

function drawReutersvardTriangle() {
    // Calcula a raiz quadrada de 3, usada para as proporções do triângulo
    const rt3 = sqrt(3);
    // Define o tamanho do triângulo
    const ts = 100;
    // Define a largura do triângulo
    const dw = ts;
    // Calcula a altura do triângulo usando a largura e a raiz quadrada de 3
    const dh = 2 / rt3 * dw;
    // Metade da altura do triângulo
    const dh2 = dh / 2;
    // Metade da largura do triângulo
    const dw2 = dw / 2;

    // Desabilita o contorno dos shapes
    noStroke();
    // Define a cor de preenchimento para o primeiro losango
    fill(255, 64, 0);
    // Desenha o primeiro losango na parte superior
    beginShape();
    vertex(0, dh2 / 2);
    vertex(dw / 2, 0);
    vertex(dw, dh2 / 2);
    vertex(dw / 2, dh2);
    endShape(CLOSE);

    // Define a cor de preenchimento para o segundo losango
    fill(0, 255, 64);
    // Desenha o segundo losango na parte esquerda
    beginShape();
    vertex(0, dh2 / 2);
    vertex(dw / 2, dh2);
    vertex(dw / 2, dh);
    vertex(0, dh - dh2 / 2);
    endShape(CLOSE);

    // Define a cor de preenchimento para o terceiro losango
    fill(0, 64, 255);
    // Desenha o terceiro losango na parte direita
    beginShape();
    vertex(dw, dh2 / 2);
    vertex(dw / 2, dh2);
    vertex(dw / 2, dh);
    vertex(dw, dh - dh2 / 2);
    endShape(CLOSE);
}
