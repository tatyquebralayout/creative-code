const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    const url = 'http://127.0.0.1:5500';
    const sizes = [
        { name: 'desktop', width: 1366, height: 768 },
        { name: 'tablet', width: 768, height: 1024 },
        { name: 'mobile', width: 375, height: 812 },
    ];

    if (!fs.existsSync('screenshots')) fs.mkdirSync('screenshots');

    const browser = await chromium.launch();
    for (const s of sizes) {
        const context = await browser.newContext({ viewport: { width: s.width, height: s.height } });
        const page = await context.newPage();
        await page.goto(url, { waitUntil: 'networkidle' });
        // small delay to allow p5 render
        await page.waitForTimeout(800);
        const path = `screenshots/reutersv-rd-${s.name}-${s.width}x${s.height}.png`;
        await page.screenshot({ path, fullPage: false });
        console.log('Saved', path);
        await context.close();
    }
    await browser.close();
})();
