import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });

const errors = [];
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
page.on('pageerror', err => errors.push(err.message));

await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 10000 }).catch(() =>
  page.goto('http://localhost:5174', { waitUntil: 'networkidle0', timeout: 10000 })
);

await page.screenshot({ path: 'screenshot.png', fullPage: true });

const title = await page.title();
const bodyText = await page.$eval('body', el => el.innerText);

console.log('Title:', title);
console.log('Body text:', bodyText.slice(0, 500));
if (errors.length) console.log('Errors:', errors);

await browser.close();
