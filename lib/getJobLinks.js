
const puppeteer = require('puppeteer');
const url = 'https://www.economicmodeling.com/careers/';
export const getJobLinks = async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
    
  let elements = await page.$$('a');
  let links = await Promise.all(elements.map(async el => {
    let href = await el.getProperty('href');
    let hrefJson = (href).jsonValue();
    let hrefStr = JSON.stringify(await hrefJson);
    if(hrefStr.includes('https://jobs.lever.co/economicmodeling/')) {
      return hrefStr;     
    }
  }));
  await browser.close();
  return links;

};


