const getJobLinks = require('./getJobLinks');
const getJobInfo = require('./getJobInfo');
const getJobPostings = async() => {
  let listOfJobs = [];
  let links = await getJobLinks();
//   links.forEach(async link => {
//     let jobData = await getJobInfo(link);
//     listOfJobs.push(jobData);
//   });
  console.log(links);
  return links;
};

getJobPostings();
