// This event listener waits for the HTML document to be completely loaded and parsed
document.addEventListener('DOMContentLoaded', function() {
    // Get the canvas elements from the HTML document
    const simpleParallaxCanvas = document.getElementById('simpleParallaxCanvas');
    const advancedParallaxCanvas = document.getElementById('advancedParallaxCanvas');

    // Set the dimensions of the canvas
    const canvasWidth = 600;
    const canvasHeight = 600;

    // Initialize the canvas with the respective drawing functions
    initializeCanvas(simpleParallaxCanvas, drawSimpleParallaxLayer);
    initializeCanvas(advancedParallaxCanvas, drawAdvancedParallaxLayer);

    // This function sets the dimensions of the canvas and draws the initial layer
    function initializeCanvas(canvas, drawLayerFunction) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        const context = canvas.getContext('2d');
        drawLayerFunction(context);
    }

    // This function draws a simple parallax layer on the canvas
    function drawSimpleParallaxLayer(context) {
        // Define the layers with their respective colors and sizes
        const layers = [
            { color: 'rgba(255, 99, 71, 0.8)', size: canvasWidth },
            { color: 'rgba(75, 192, 192, 0.8)', size: canvasWidth / 2 },
            { color: 'rgba(153, 102, 255, 0.8)', size: canvasWidth / 6 }
        ];

        // Initialize the layer index
        let layerIndex = 0;

        // This function draws a layer on the canvas
        function drawLayer() {
            // Clear the canvas
            context.clearRect(0, 0, canvasWidth, canvasHeight);
            // Get the current layer
            const layer = layers[layerIndex];
            // Set the fill color
            context.fillStyle = layer.color;
            // Calculate the position of the layer
            const x = (canvasWidth - layer.size) / 2;
            const y = (canvasHeight - layer.size) / 2;
            // Draw the layer
            context.fillRect(x, y, layer.size, layer.size);
        }

        // Draw the initial layer
        drawLayer();

        // This function allows to toggle between the layers
        window.toggleSimpleLayers = function() {
            layerIndex = (layerIndex + 1) % layers.length;
            drawLayer();
        };
    }

    // This function draws an advanced parallax layer with animations
    function drawAdvancedParallaxLayer(context) {
        // Define the layers with their respective sizes, colors, and animation types
        const layers = [
            { size: canvasWidth, originalSize: canvasWidth, color: 'rgba(255, 99, 71, 0.8)', animationType: 0 },
            { size: canvasWidth / 2, originalSize: canvasWidth / 2, color: 'rgba(75, 192, 192, 0.8)', animationType: 0 },
            { size: canvasWidth / 6, originalSize: canvasWidth / 6, color: 'rgba(153, 102, 255, 0.8)', animationType: 0 }
        ];

        // Initialize the current layer
        let currentLayer = 0;

        // This function draws a layer on the canvas and animates it
        function drawLayer() {
            // Clear the canvas
            context.clearRect(0, 0, canvasWidth, canvasHeight);
            // Get the current layer
            const layer = layers[currentLayer];
            // Set the fill color
            context.fillStyle = layer.color;
            // Calculate the position of the layer
            const x = (canvasWidth - layer.size) / 2;
            const y = (canvasHeight - layer.size) / 2;
            // Draw the layer
            context.fillRect(x, y, layer.size, layer.size);
            // Animate the layer
            animateLayer(layer);
        }

        // This function animates a layer
        function animateLayer(layer) {
            if (layer.animationType === 0) {
                // Rotation animation
                context.translate(canvasWidth / 2, canvasHeight / 2);
                context.rotate(Math.PI / 180);
                context.translate(-canvasWidth / 2, -canvasHeight / 2);
            } else {
                // Pulse animation
                if (layer.sizeChangeDirection === undefined) {
                    layer.sizeChangeDirection = 1;
                }
                layer.size += layer.sizeChangeDirection;
                if (layer.size > layer.originalSize + 20 || layer.size < layer.originalSize - 20) {
                    layer.sizeChangeDirection *= -1;
                }
            }
        }

        // This function allows to change the animation type of the current layer
        window.changeAdvancedAnimation = function() {
            const layer = layers[currentLayer];
            layer.animationType = (layer.animationType + 1) % 2;
            drawLayer();
        };

        // This function allows to toggle between the layers
        window.toggleAdvancedLayers = function() {
            currentLayer = (currentLayer + 1) % layers.length;
            drawLayer();
        };

        // Draw the initial layer
        drawLayer();
    }
});

// This event listener waits for the HTML document to be completely loaded and parsed
document.addEventListener('DOMContentLoaded', function() {
    // Get the canvas element from the HTML document
    const canvas = document.getElementById('particleCanvas');
    canvas.width = 600;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    let particles = [];
    // Respects the "reduce motion" system setting: the rain starts paused (assets/pausa.js),
    // with the particles spread over the canvas, and the pause button can start it.
    const reduceMotion = window.Pausa.reduzirMovimento.matches;

    // This class defines a particle
    class Particle {
        constructor(color) {
            this.x = Math.random() * canvas.width;
            this.y = reduceMotion ? Math.random() * canvas.height : 0; // Particles start at the top of the canvas
            this.size = Math.random() * 5 + 1; // Size between 1 and 6
            this.speed = Math.random() * 2 + 1; // Falling speed
            this.color = color;
        }

        // This method updates the position of the particle
        update() {
            this.y += this.speed; // Move the particle down
            if (this.y > canvas.height) {
                this.y = 0; // Restart at the top of the canvas
                this.x = Math.random() * canvas.width; // Random x position
            }
        }

        // This method draws the particle on the canvas
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // This function initializes the particles
    function initParticles(numParticles, color) {
        particles = [];
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle(color));
        }
    }

    // This function draws the particles (moving them first when move is true)
    function drawParticles(move) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            if (move) particle.update();
            particle.draw();
        });
    }

    // This function animates the particles, one frame at a time (loop + pause button: assets/pausa.js)
    function animate() {
        drawParticles(true);
    }

    // Initialize with white particles
    initParticles(100, '#FFFFFF');
    const pausa = window.Pausa.laco(animate);

    // This function allows to change the color of the particles
    window.changeParticleColor = function() {
        const color = document.getElementById('particleColor').value;
        particles.forEach(particle => particle.color = color);
        if (pausa.pausado) drawParticles(false);
    };
});
