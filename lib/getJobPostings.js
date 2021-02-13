const getJobLinks = require('./getJobLinks');
const getJobInfo = require('./getJobInfo');
const fs = require('fs');

const getJobPostings = async() => {
  let data = {};
  const links = await getJobLinks();
  const listOfJobs = await Promise.all(links.slice(0, -1).map(link => getJobInfo(link)));
  data.jobs = listOfJobs;
  fs.writeFile ('jobs.json', JSON.stringify(data), function(err) {
    if(err) throw err;
    console.log('complete');
  });
};

getJobPostings();
