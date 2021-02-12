const puppeteer = require('puppeteer');

const url = 'https://jobs.lever.co/economicmodeling/b18b606e-bc98-443b-ab72-852cedd71776';
const id = url.substring(url.lastIndexOf('/') + 1, url.length);
const getJobInfo = async(url) => {
  let job = {
    id: `${id}`,
    url: `${url}`,
    job_title: '',
    description: '',
    location: '',
    demand: '',
    company:'EMSI'
  };
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
    
  const [descEl] = await page.$x('/html/body/div[2]/div/div[2]/div[1]/div/span');
  const descTxt = await descEl.getProperty('textContent');
  job.description = await descTxt.jsonValue();
  
  const [titleEl] = await page.$x('/html/body/div[2]/div/div[1]/div/div[1]/h2');
  const titleTxt = await titleEl.getProperty('textContent');
  job.job_title = await titleTxt.jsonValue();
  
  const [locEl] = await page.$x('/html/body/div[2]/div/div[1]/div/div[1]/div/div[1]');
  const locTxt = await locEl.getProperty('textContent');
  job.location = await locTxt.jsonValue();
  
  const [demandEl] = await page.$x('/html/body/div[2]/div/div[1]/div/div[1]/div/div[3]');
  const demandTxt = await demandEl.getProperty('textContent');
  job.demand = await demandTxt.jsonValue();
    
  await browser.close();
  return job;

};

module.exports = getJobInfo;
