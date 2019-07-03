const pupeteer = require('puppeteer');
const pageURL = 'http://localhost:3050/'


let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
  });
  afterAll(() => {
    browser.close();
  });

  describe('hello', () => {
    test*('initial title is correct', () => {
        
    })
  })