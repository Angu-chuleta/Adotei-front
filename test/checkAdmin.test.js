const qawolf = require("qawolf");

let browser;
let context;

beforeAll(async () => {
  browser = await qawolf.launch();
  context = await browser.newContext();
  await qawolf.register(context);
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("checkAdmin", async () => {
  const page = await context.newPage();
  await page.goto("https://adotei.vercel.app/", { waitUntil: "domcontentloaded" });
  await page.click('[placeholder="Login"]');
  await page.fill('[placeholder="Login"]', "teste");
  await page.press('[placeholder="Login"]', "Tab");
  await page.fill('[placeholder="Senha"]', "123");
  await page.click(".btn");
  await page.click("#menuitem");
  await qawolf.scroll(page, "html", { x: 0, y: 1276.800048828125 });
});