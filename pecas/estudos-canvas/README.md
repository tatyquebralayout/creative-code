# Interactive Canvas Animations
This project is a demonstration of various interactive animations using HTML5 Canvas and CSS. It includes simple and advanced parallax effects, as well as an interactive particle system.

## Project Structure
The project is structured as follows:
css/
styles.css
index.html
js/
script.js


## Features

### Simple Parallax Layers
This feature, implemented in the `toggleSimpleLayers` function, allows you to toggle between different layers of a parallax effect. Each layer has a different color and size.

### Advanced Parallax Layers with Animations
This feature, implemented in the `toggleAdvancedLayers` and `changeAdvancedAnimation` functions, allows you to toggle between different layers of a parallax effect with animations. Each layer has a different color, size, and animation type.

### Interactive Particle System
This feature allows you to interact with a particle system. You can change the color of the particles using an HTML color input.

## Usage
Open the `index.html` file in your web browser to view the animations. Use the buttons to interact with the animations.

## Styles
The styles for the project are defined in the `styles.css` file. This includes styles for the canvas elements, buttons, and color input.

---

## Origem · Origin

Esta peça veio do repositório [umataldetatiana/CSSOM-CANVAS-study-animations](https://github.com/umataldetatiana/CSSOM-CANVAS-study-animations), da outra conta de Tatiana Barros. Ajustes pra galeria: o HTML apontava pra `css/` e `js/`, mas os arquivos estavam na raiz, então a página abria sem estilo e sem animação; eles foram pra essas pastas. A animação de pulso, que dava `NaN` sem o tamanho original, foi corrigida, o canvas ficou quadrado em qualquer tela, e as partículas param com "reduzir movimento".

*This piece came from [umataldetatiana/CSSOM-CANVAS-study-animations](https://github.com/umataldetatiana/CSSOM-CANVAS-study-animations), Tatiana Barros's other account. Gallery tweaks: the HTML pointed to `css/` and `js/`, but the files sat at the root, so the page loaded with no style or animation; they now live in those folders. The pulse animation, which hit `NaN` with no original size, was fixed, the canvas stays square on any screen, and the particles stop with "reduce motion".*
