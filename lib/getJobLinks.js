
const puppeteer = require('puppeteer');
const url = 'https://www.economicmodeling.com/careers/';
const getJobLinks = async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  
  let elements = await page.$$('a');
  let links = await Promise.all(elements.map(async el => {
    let href = await el.getProperty('href');
    let hrefJson = (href).jsonValue();
    const link = await hrefJson;
    if(link.includes('https://jobs.lever.co/economicmodeling/')) {
      return link;     
    }
  }));
  
  let predicate = (i) => {
    if(i === undefined) {
      return false;
    }  else return true;
  };
    
  const asyncFilter = async(arr, predicate) => Promise.all(arr.map(predicate))
    .then((results) => arr.filter((_v, index) => results[index]));
  let mungedLinks = await asyncFilter(links, predicate);
  let finalLinks = [...new Set(mungedLinks)];
  await browser.close();
  return finalLinks;

};
module.exports = getJobLinks;


