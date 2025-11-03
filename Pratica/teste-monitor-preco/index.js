const puppeteer = require("puppeteer");
const fs = require("fs")

const config = require("./config.json");
const { timeStamp } = require("console");
const urls = config.urls

if (!Array.isArray(urls) || urls.length === 0) {
  console.error("Erro: você precisa fornecer um array de URLs no config.json!");
  process.exit(1);
}

(async ()=> {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage();
    const results = [];

    for (const url of urls) {
    try {
      console.log(`Acessando: ${url}`);
      await page.goto(url, { waitUntil: "load" });

      const nameSelector = "h1.tit-prod";
      const priceSelector = "#valVista";

      await page.waitForSelector(nameSelector);
      await page.waitForSelector(priceSelector);

      const name = await page.$eval(nameSelector, (el) => el.innerText.trim());
      const price = await page.$eval(priceSelector, (el) => el.innerText.trim());

      const productData = {
        url,
        name,
        price,
        timeStamp: new Date().toISOString()
      };

      console.log("Produto capturado:", productData.name);
      results.push(productData);
    } catch (err) {
      console.error(`Erro ao processar ${url}:`, err.message);
    }
  }

  await browser.close();

  fs.writeFileSync("product-price.json", JSON.stringify(results, null, 2));
  console.log("Todos os produtos salvos em product-price.json com sucesso!");
})();
