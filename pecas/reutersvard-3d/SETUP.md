# 🛠️ Installation & Setup Guide

## Quick Start (Recommended)

### Option 1: Online Demo

Simply visit: **[https://tatyquebralayout.github.io/3D-of-the-Reutersv-rd-Triangle/](https://tatyquebralayout.github.io/3D-of-the-Reutersv-rd-Triangle/)**

### Option 2: Local Development

1. **Prerequisites**

   ```bash
   # Check if Node.js is installed
   node --version  # Should be 14.0.0 or higher
   npm --version   # Should be 6.0.0 or higher
   ```

2. **Clone the Repository**

   ```bash
   git clone https://github.com/tatyquebralayout/3D-of-the-Reutersv-rd-Triangle.git
   cd 3D-of-the-Reutersv-rd-Triangle
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Start Development Server**

   ```bash
   npm start
   # OR
   npm run dev
   ```

5. **Open in Browser**
   - Navigate to: `http://localhost:3000`
   - The application should load automatically

## Alternative Servers

If you have issues with the default server, try these alternatives:

### Using Python (if installed)

```bash
# Python 3
python -m http.server 8000
# Python 2
python -m SimpleHTTPServer 8000
```

### Using Node.js http-server

```bash
npx http-server -p 8000
```

### Using Live Server (VS Code)

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Troubleshooting

### ❌ WebGL Issues

**Error**: "Failed to initialize 3D environment. WebGL may not be supported."

**Solutions**:

1. **Update Your Browser**: Ensure you're using a modern browser (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)

2. **Enable Hardware Acceleration**:
   - **Chrome**: Settings → Advanced → System → "Use hardware acceleration when available"
   - **Firefox**: about:config → webgl.force-enabled → true
   - **Safari**: Develop → Experimental Features → WebGL 2.0

3. **Check Graphics Drivers**: Update your graphics card drivers

4. **Test WebGL Support**: Visit our test page at `http://localhost:3000/test-webgl.html`

### 🔧 Installation Issues

**Error**: npm install fails

**Solutions**:

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

**Error**: Permission denied

**Solutions**:

```bash
# Use sudo (Linux/Mac)
sudo npm install

# Or fix npm permissions
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### 🌐 Network Issues

If CDN resources fail to load:

1. **Check Internet Connection**
2. **Disable Adblockers** temporarily
3. **Try Different Network** (mobile hotspot)
4. **Use Local p5.js**: Download p5.js and place in project folder

### 📱 Mobile Issues

**Problem**: Poor performance on mobile

**Solutions**:

- The app automatically reduces quality on mobile devices
- Use latest mobile browsers (Chrome Mobile, Safari Mobile)
- Close other apps to free memory

### 🖥️ Browser Compatibility

| Browser | Minimum Version | WebGL Support | Notes |
|---------|----------------|---------------|-------|
| Chrome | 60+ | ✅ Full | Recommended |
| Firefox | 55+ | ✅ Full | Excellent |
| Safari | 12+ | ✅ Good | Mac/iOS only |
| Edge | 79+ | ✅ Full | Chromium-based |
| IE | ❌ | ❌ None | Not supported |

## Performance Tips

1. **Close Unnecessary Browser Tabs**
2. **Enable Hardware Acceleration**
3. **Use Latest Browser Version**
4. **Ensure Good Ventilation** (prevent thermal throttling)

## Development Setup

### For Contributors

1. **Fork the Repository**
2. **Install Development Tools**:

   ```bash
   npm install --include=dev
   ```

3. **Start Development Server**:

   ```bash
   npm run dev
   ```

4. **Code Style**:
   - Use ESLint for JavaScript
   - Follow existing code formatting
   - Add JSDoc comments for functions

### File Structure

```text
3D-of-the-Reutersv-rd-Triangle/
├── index.html              # Main application
├── test-webgl.html         # WebGL compatibility test
├── css/
│   └── style.css          # Styles and responsive design
├── js/
│   └── sketch.js          # Main p5.js application
├── package.json           # Project configuration
├── README.md             # Project documentation
├── CONTRIBUTING.md       # Contribution guidelines
└── LICENSE               # MIT License
```

## Getting Help

1. **Check Browser Console** for error messages
2. **Run WebGL Test**: `http://localhost:3000/test-webgl.html`
3. **Check Issues**: [GitHub Issues](https://github.com/tatyquebralayout/3D-of-the-Reutersv-rd-Triangle/issues)
4. **Create New Issue**: Include browser version, OS, and error messages

## Success Indicators

✅ **Everything Working**:

- 3D triangle appears and rotates smoothly
- Sliders control rotation in real-time
- Auto-rotate button works
- No error messages in console

✅ **Partial Success (2D Mode)**:

- 2D triangle appears with basic rotation
- Message shows "2D Fallback Mode"
- Controls still functional

❌ **Not Working**:

- Blank canvas or error messages
- Controls don't respond
- Page doesn't load

---

**Need more help?** Open an issue on GitHub with:

- Your browser and version
- Operating system
- Complete error messages
- Steps you tried
