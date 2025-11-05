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
    const browser = await puppeteer.launch({headless: false, })
    const page = await browser.newPage();
    const results = [];

    for (const url of urls) {
    try {
      console.log(`Acessando: ${url}`);
      await page.goto(url, { waitUntil: "load" });

      const products = await page.$$eval("div.product-item", (items) => {
        return items.map(item => {
          const nameEl = item.querySelector("a.product-item__name");
          const priceEl = item.querySelector("div.product-item__new-price");
          const imgEl = item.querySelector("img.image-thumbnail");
          const linkEl = item.querySelector("a.product-item__name");

          return {
            img: imgEl ? imgEl.src : null,
            name: nameEl ? nameEl.title.trim() : null,
            price: priceEl ? priceEl.innerText.trim() : "SEM ESTOQUE",
            link: linkEl ? linkEl.href : null,
          };
        });
      });

      for (const p of products) {
        results.push(
          {
            url,
            ...p,
            timeStamp: new Date().toLocaleString(),
        });
      }
    } catch (err) {
      console.error(`Erro ao processar ${url}:`, err.message);
    }
  }

  await browser.close();

  fs.writeFileSync("products.json", JSON.stringify(results, null, 2));
  console.log("Todos os produtos salvos em product-price.json com sucesso!");
})();
