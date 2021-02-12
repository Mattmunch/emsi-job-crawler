
const puppeteer = require('puppeteer');
const url = 'https://www.economicmodeling.com/careers/';
(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
    
  let elements = await page.$$('a');
  let links = await Promise.all(elements.map(async el => {
    let href = await el.getProperty('href');
    return (href).jsonValue();
      
  }));
  let jobLinks = await Promise.all(links.filter(async link => {
    if(await link.includes('jobs.lever.co/'));
  }));
  console.log(jobLinks);
  await browser.close();

})();


