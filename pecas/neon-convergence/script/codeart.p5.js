let maxRects = 50; // Maximum number of rectangles
let rects = []; // Array to store rectangles

/**
 * p5.js setup function.
 * Initializes the canvas and rectangles.
 */
function setup() {
    createCanvas(windowWidth, windowHeight); // Creates a canvas with the window's width and height
    rectMode(CENTER); // Sets rectangle mode to center
    noStroke(); // Disables stroke for rectangles

    // Initial creation of rectangles
    for (let i = 0; i < maxRects; i++) {
        rects.push({
            x: random(width), // Random x position
            y: random(height), // Random y position
            w: random(10, 100), // Random width
            h: random(10, 100), // Random height
            angle: random(TWO_PI), // Random rotation angle
            color: getRandomCyberpunkColor() // Random cyberpunk color
        });
    }
}

/**
 * p5.js draw function.
 * Updates the canvas every frame.
 */
function draw() {
    background(30); // Dark background for dramatic effect
    let angleStep = map(mouseX, 0, width, 0, TWO_PI); // Maps mouseX position to an angle

    // Iterate over all rectangles
    for (let i = 0; i < rects.length; i++) {
        let rectObj = rects[i];

        // Move rectangles towards the mouse when close
        if (dist(mouseX, mouseY, rectObj.x, rectObj.y) < 150) {
            rectObj.x = lerp(rectObj.x, mouseX, 0.05); // Interpolates x position towards the mouse
            rectObj.y = lerp(rectObj.y, mouseY, 0.05); // Interpolates y position towards the mouse
        }

        fill(rectObj.color[0], rectObj.color[1], rectObj.color[2], 150); // Sets rectangle color with transparency

        push(); // Saves the current transformation state
        translate(rectObj.x, rectObj.y); // Translates to the rectangle's position
        rotate(rectObj.angle + angleStep); // Rotates the rectangle based on angle and mouseX position
        rect(0, 0, rectObj.w, rectObj.h); // Draws the rectangle
        pop(); // Restores the previous transformation state
    }
}

/**
 * Returns a random cyberpunk color.
 * @returns {Array} Array containing RGB values.
 */
function getRandomCyberpunkColor() {
    const colors = [
        [255, 20, 147], // Neon pink
        [0, 255, 255], // Electric blue
        [138, 43, 226], // Blue violet
        [50, 205, 50] // Neon green
    ];
    return random(colors); // Returns a random color from the array
}

/**
 * Function called when the window is resized.
 * Adjusts the canvas size to match the new window size.
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Resizes the canvas
}