/**
 * 3D Reutersvärd Triangle - Original Restored
 * Simple implementation with core geometry preserved
 */

// Global variables
let rotationX = 0, rotationY = 0, rotationZ = 0;
let targetRotationX = 0, targetRotationY = 0, targetRotationZ = 0;

function setup() {
    console.log('Initializing 3D Triangle...');
    let canvas = createCanvas(800, 600, WEBGL);
    canvas.parent('canvas-container');
    setupSliders();
    setupControls();
}

function draw() {
    background(20);
    rotationX = lerp(rotationX, targetRotationX, 0.08);
    rotationY = lerp(rotationY, targetRotationY, 0.08);
    rotationZ = lerp(rotationZ, targetRotationZ, 0.08);

    rotateX(rotationX);
    rotateY(rotationY);
    rotateZ(rotationZ);

    drawReutersvardTriangle3D(150);
}

function drawReutersvardTriangle3D(size) {
    stroke(255, 220, 180);
    strokeWeight(2);
    fill(70, 90, 120, 80);

    drawCube(-size * 0.5, size * 0.25, 0, size * 0.5);
    drawCube(size * 0.5, size * 0.25, 0, size * 0.5);
    drawCube(0, -size * 0.5, 0, size * 0.5);
}

function drawCube(x, y, z, cubSize) {
    push();
    translate(x, y, z);
    stroke(255, 240, 200);
    strokeWeight(2);
    fill(60, 80, 110, 100);
    box(cubSize);
    pop();
}

function setupSliders() {
    const xSlider = document.getElementById('rotationXSlider');
    if (xSlider) {
        xSlider.addEventListener('input', () => {
            targetRotationX = radians(xSlider.value);
        });
    }

    const ySlider = document.getElementById('rotationYSlider');
    if (ySlider) {
        ySlider.addEventListener('input', () => {
            targetRotationY = radians(ySlider.value);
        });
    }

    const zSlider = document.getElementById('rotationZSlider');
    if (zSlider) {
        zSlider.addEventListener('input', () => {
            targetRotationZ = radians(zSlider.value);
        });
    }
}

function setupControls() {
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            targetRotationX = 0;
            targetRotationY = 0;
            targetRotationZ = 0;
            document.getElementById('rotationXSlider').value = 0;
            document.getElementById('rotationYSlider').value = 0;
            document.getElementById('rotationZSlider').value = 0;
        });
    }
}

function mouseMoved() {
    if (mouseIsPressed) {
        targetRotationY += (mouseX - pmouseX) * 0.01;
        targetRotationX -= (mouseY - pmouseY) * 0.01;
    }
}

window.setup = setup;
window.draw = draw;
window.mouseMoved = mouseMoved;

console.log('Reutersvärd Triangle loaded successfully');
