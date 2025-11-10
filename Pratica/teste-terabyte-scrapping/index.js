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
    const browser = await puppeteer.launch({
      headless: false, 
    });

    const page = await browser.newPage();
    const results = [];

    

    

    for (const url of urls) {
      
      try {
        console.log(`Acessando: ${url}`);
        await page.goto(url, { waitUntil: "load" });

        const buttonSelector = "#pdmore"
        const spanSelector = "#bannerPop"

        async function clickVerMais() {
          let tentativas = 0;
          while (tentativas < 20) { // limite de segurança para evitar loop infinito
            const botaoExiste = await page.$(buttonSelector);
            if (!botaoExiste) {
              console.log("Nenhum botão 'Ver mais' encontrado. Continuando...");
              break;
            }

            const popup = await page.$(spanSelector);
            if (popup) {
              console.log("Escondendo pop-up...");
              // Usa page.evaluate para rodar código no contexto do navegador
              await page.evaluate(el => {
                el.style.display = "none";
                el.className = "modal fade";
              }, popup); // Passa o 'popup' encontrado como argumento para 'el'
            }

            console.log(`Clicando no botão 'Ver mais' (tentativa ${tentativas + 1})...`);
            await botaoExiste.click();
            await new Promise(resolve => setTimeout(resolve, 2000));
  
            // Rola a página até o fim para forçar o carregamento dinâmico
            await page.evaluate(() => {
              window.scrollBy(0, window.innerHeight);
            });
  
            tentativas++;
          }
        }
  
        // Clica no botão "Ver mais" até carregar tudo
        await clickVerMais();
  
        // Espera garantir que todos os produtos carregaram
        await page.waitForSelector("a.product-item__name");

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

  const fontes = results.filter(result => (result.link && result.url.includes("fontes")))
  
  fs.writeFileSync("products.json", JSON.stringify(results, null, 2));
  fs.writeFileSync("fontes.json", JSON.stringify(fontes, null, 2));
  console.log("Todos os produtos salvos em product-price.json com sucesso!");
})();
