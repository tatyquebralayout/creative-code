# Galáxia Zoom

This project is a simple interactive galaxy simulation using HTML, CSS, and JavaScript. The simulation is displayed on a canvas element, and the user can control the zoom level of the galaxy.

## Project Structure

```
css/
	styles.css
index.html
js/
	script.js
```

## How it Works

The simulation starts by initializing a set of stars in the galaxy. Each star has an angle, distance from the center, and size. The stars are then drawn on the canvas, and the galaxy is updated by changing the angle and redrawing the stars.

The user can control the zoom level of the galaxy using a range input element. The zoom level affects the distance of the stars from the center of the galaxy and their size.

## Code Overview

- [`index.html`](command:_github.copilot.openSymbolInFile?%5B%22index.html%22%2C%22index.html%22%5D "index.html"): This is the main HTML file. It includes a canvas element for the galaxy simulation and a range input element for the zoom control. It also links to the CSS stylesheet and the JavaScript file.

- [`css/styles.css`](command:_github.copilot.openSymbolInFile?%5B%22css%2Fstyles.css%22%2C%22css%2Fstyles.css%22%5D "css/styles.css"): This file contains the styles for the canvas and range input elements.

- [`js/script.js`](command:_github.copilot.openSymbolInFile?%5B%22js%2Fscript.js%22%2C%22js%2Fscript.js%22%5D "js/script.js"): This file contains the JavaScript code for the galaxy simulation. It includes functions to initialize the galaxy, draw the stars, and update the galaxy. It also includes an event listener for the zoom control.

## Running the Project

To run the project, simply open the [``index.html``](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Ff%3A%2FGalaxy_cssom%2Findex.html%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "f:\Galaxy_cssom\index.html") file in a web browser.

---

## Origem · Origin

Esta peça veio do repositório [umataldetatiana/CSSOM_Canvas_GalaxyZoom](https://github.com/umataldetatiana/CSSOM_Canvas_GalaxyZoom), da outra conta de Tatiana Barros. Ajustes pra galeria: o canvas se adapta a telas pequenas, a página ganhou fundo escuro, e a rotação para pra quem ativou "reduzir movimento" no sistema.

*This piece came from [umataldetatiana/CSSOM_Canvas_GalaxyZoom](https://github.com/umataldetatiana/CSSOM_Canvas_GalaxyZoom), Tatiana Barros's other account. Gallery tweaks: the canvas fits small screens, the page got a dark background, and the rotation stops for anyone who turned on "reduce motion".*
