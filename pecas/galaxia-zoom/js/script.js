// This script is responsible for creating an interactive galaxy simulation in a canvas element.

// The script starts by waiting for the DOM to be fully loaded. 
document.addEventListener('DOMContentLoaded', function() {

    // It then gets a reference to the canvas element and sets its dimensions.
    const canvas = document.getElementById('galaxyCanvas');
    canvas.width = 800;
    canvas.height = 600;

    // A 2D rendering context is obtained from the canvas.
    const ctx = canvas.getContext('2d');

    // An array to hold the stars in the galaxy, an angle variable, and a zoom level are initialized.
    const stars = [];
    let angle = 0;
    let zoomLevel = 1.0;

    // The initGalaxy function initializes the stars in the galaxy.
    function initGalaxy() {
        const numStars = 300;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        for (let i = 0; i < numStars; i++) {
            stars.push({
                angle: Math.random() * 2 * Math.PI,
                distance: Math.random() * 200 + 50,
                size: Math.random() * 1.5 + 0.5
            });
        }
    }

    // The drawGalaxy function draws the stars on the canvas.
    function drawGalaxy() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        stars.forEach(star => {
            const x = centerX + star.distance * Math.cos(star.angle + angle) * zoomLevel;
            const y = centerY + star.distance * Math.sin(star.angle + angle) * zoomLevel;
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(x, y, star.size * zoomLevel, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    // The updateGalaxy function updates the angle and redraws the galaxy.
    // Respects the "reduce motion" system setting: the galaxy stays still.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function updateGalaxy() {
        if (!reduceMotion) angle += 0.01;
        drawGalaxy();
        if (!reduceMotion) requestAnimationFrame(updateGalaxy);
    }

    // An event listener is added to the zoom control to update the zoom level.
    document.getElementById('zoomControl').addEventListener('input', function() {
        zoomLevel = parseFloat(this.value);
        if (reduceMotion) drawGalaxy();
    });

    // The galaxy is initialized and the animation starts.
    initGalaxy();
    updateGalaxy();
});