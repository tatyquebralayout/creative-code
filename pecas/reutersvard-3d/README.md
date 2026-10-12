# 🔺 3D Reutersvärd Triangle Illusion

[![GitHub stars](https://img.shields.io/github/stars/tatyquebralayout/3D-of-the-Reutersv-rd-Triangle?style=social)](https://github.com/tatyquebralayout/3D-of-the-Reutersv-rd-Triangle/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/tatyquebralayout/3D-of-the-Reutersv-rd-Triangle?style=social)](https://github.com/tatyquebralayout/3D-of-the-Reutersv-rd-Triangle/network)
[![GitHub issues](https://img.shields.io/github/issues/tatyquebralayout/3D-of-the-Reutersv-rd-Triangle)](https://github.com/tatyquebralayout/3D-of-the-Reutersv-rd-Triangle/issues)
[![GitHub license](https://img.shields.io/github/license/tatyquebralayout/3D-of-the-Reutersv-rd-Triangle)](https://github.com/tatyquebralayout/3D-of-the-Reutersv-rd-Triangle/blob/main/LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://tatyquebralayout.github.io/3D-of-the-Reutersv-rd-Triangle/)

> **An interactive 3D visualization of the impossible Reutersvärd Triangle using p5.js and WebGL**

Experience the mesmerizing world of optical illusions with this interactive 3D implementation of the famous Reutersvärd Triangle (also known as the Penrose Triangle). Rotate, explore, and discover how impossible geometry comes to life through creative coding.

## ✨ **Live Demo**

🎮 **[Try it now!](https://tatyquebralayout.github.io/3D-of-the-Reutersv-rd-Triangle/)** *(GitHub Pages)*

![Demo GIF](https://via.placeholder.com/600x400/000000/FFFFFF?text=3D+Triangle+Demo) <!-- Replace with actual GIF -->

---

## 🎯 **Features**

- **🔄 Real-time 3D Rotation**: Interactive controls for X, Y, and Z axis rotation
- **🎨 Optical Illusion**: Experience the impossible geometry of the Reutersvärd Triangle
- **🖱️ Intuitive Controls**: Easy-to-use sliders and reset functionality
- **📱 Responsive Design**: Works seamlessly across desktop and mobile devices
- **⚡ WebGL Acceleration**: Smooth 60fps performance with hardware acceleration
- **🎭 Mathematical Precision**: Geometrically accurate implementation of the illusion

## 🚀 **Quick Start**

### Option 1: View Online (Recommended)

Just click the **[Live Demo](https://tatyquebralayout.github.io/3D-of-the-Reutersv-rd-Triangle/)** link above!

### Option 2: Run Locally

1. **Clone this repository**:

    ```sh
    git clone https://github.com/tatyquebralayout/3D-of-the-Reutersv-rd-Triangle.git
    ```

2. **Navigate to the project directory**:

    ```sh
    cd 3D-of-the-Reutersv-rd-Triangle
    ```

3. **Open with a local server** (choose one):
   - **VS Code**: Install Live Server extension and right-click `index.html` → "Open with Live Server"
   - **Python**: `python -m http.server 8000`
   - **Node.js**: `npx serve .`

4. **Open in browser**: Navigate to `http://localhost:8000` (or port shown in terminal)

## 🛠️ **Tech Stack**

| Technology | Purpose | Version |
|------------|---------|---------|
| ![p5.js](https://img.shields.io/badge/p5.js-ED225D?style=flat&logo=p5.js&logoColor=white) | Creative coding framework | 1.4.0 |
| ![WebGL](https://img.shields.io/badge/WebGL-990000?style=flat&logo=webgl&logoColor=white) | Hardware-accelerated 3D graphics | Native |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Core programming language | ES6+ |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Structure and markup | 5 |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling and layout | 3 |

## 📐 **How the Illusion Works**

The Reutersvärd Triangle is an **impossible object** - a type of optical illusion that depicts a 3D object that could never actually exist in reality. Here's the science behind it:

### Mathematical Foundation

```javascript
Vertex Calculation: sqrt(3) ratio for perfect equilateral geometry
Rotation Matrix: Real-time 3D transformations using WebGL
Depth Perception: Carefully crafted Z-depth to maintain the illusion
```

### Key Principles

- **Impossible Geometry**: Each corner appears correct locally, but globally inconsistent
- **Perspective Tricks**: Strategic use of depth and rotation to fool the eye
- **Continuous Surface**: Despite being impossible, the shape appears seamless

## 🎮 **Controls**

| Control | Function | Range |
|---------|----------|-------|
| **X Rotation** | Rotate around horizontal axis | 0° - 360° |
| **Y Rotation** | Rotate around vertical axis | 0° - 360° |
| **Z Rotation** | Rotate around depth axis | 0° - 360° |
| **Reset** | Return to default view | - |

## 📁 **Project Structure**

```text
3D-of-the-Reutersv-rd-Triangle/
├── 📄 index.html          # Main HTML structure
├── 📁 css/
│   └── 📄 style.css       # Styling and responsive design
├── 📁 js/
│   └── 📄 sketch.js       # p5.js main application logic
├── 📄 README.md           # This documentation
└── 📄 LICENSE             # MIT License
```

## 🔧 **API Reference**

### Core Functions

#### `setup()`

Initializes the p5.js environment and sets up interactive controls.

#### `draw()`

Main rendering loop that applies transformations and draws the triangle.

#### `drawReutersvardTriangle3D(size)`

Renders the impossible triangle with specified dimensions.

**Parameters:**

- `size` (number): The scale factor for the triangle (default: 150)

### Global Variables

| Variable | Type | Description |
|----------|------|-------------|
| `rotationX` | float | Current X-axis rotation in radians |
| `rotationY` | float | Current Y-axis rotation in radians |
| `rotationZ` | float | Current Z-axis rotation in radians |

## 🎨 **Customization**

Want to modify the triangle? Here are some ideas:

```javascript
// Change triangle size
drawReutersvardTriangle3D(200); // Larger triangle

// Modify colors
fill(255, 0, 0); // Red triangle
stroke(0, 255, 0); // Green outline

// Add animation
rotationY += 0.01; // Auto-rotate on Y axis
```

## 🌟 **Contributing**

We love contributions! Here's how you can help:

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **📝 Commit** your changes: `git commit -m 'Add amazing feature'`
4. **🚀 Push** to the branch: `git push origin feature/amazing-feature`
5. **📬 Open** a Pull Request

### Ideas for Contributions

- 🎵 Add sound effects
- 🌈 Color themes and presets
- 📱 Touch gesture controls
- 💾 Save/load configurations
- 🎬 Animation presets
- 📊 Performance optimizations

## 📜 **License**

This project is licensed under the **MIT License**:

```text
MIT License

Copyright (c) 2025 Taty Quebra Layout

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

See the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Oscar Reutersvärd** - Creator of the impossible triangle concept
- **p5.js Community** - For the amazing creative coding framework
- **Mathematical Artists** - Inspiration from the intersection of math and art

## 👩‍💻 **Author**

### Taty Quebra Layout

- 🌐 Portfolio: [Your Portfolio URL]
- 💼 LinkedIn: [Your LinkedIn]
- 🐦 Twitter: [Your Twitter]
- 📧 Email: [Your Email]

---

⭐ **Found this project interesting?** Give it a star to show your support!

🔗 **Share with others:** Help spread the magic of creative coding and optical illusions!
