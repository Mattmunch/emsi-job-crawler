const getJobLinks = require('./getJobLinks');
const getJobInfo = require('./getJobInfo');

const getJobPostings = async() => {
  const links = await getJobLinks();
  const listOfJobs = await Promise.all(links.slice(0, -1).map(link => getJobInfo(link)));
  console.log(listOfJobs);
  return listOfJobs;
};

getJobPostings();
