const getJobLinks = require('./getJobLinks');
const getJobInfo = require('./getJobInfo');

const getJobPostings = async() => {
  let links = await getJobLinks();
  const listOfJobs = await Promise.all(links.map(link => getJobInfo(link)));
  //   const addToList = async() => {
  //     for(let i = 0; i < links.length; i++) {
  //       (async() => {
  //         let currentLink = await links[i];
  //         let jobData = await getJobInfo(currentLink);
  //         listOfJobs.push(jobData);
  //       })();
  //     }
  // let jobInfoToFetch = await links[1];
  // let jobInfo = await getJobInfo(jobInfoToFetch);
  // listOfJobs.push(jobInfo);
  //   };
  //   await addToList();
  //   for(let i = 0; i < links.length; i++) {
  //     (async() => {
  //       let currentLink = await links[i];
  //       let jobData = await getJobInfo(currentLink);
  //       listOfJobs.push(jobData);
  //     })();
  //   }
  //   links.forEach(async link => {
  //     let jobData = await getJobInfo(link);
  //     listOfJobs.push(jobData);
  //   });
  console.log(listOfJobs);
  return listOfJobs;
};

getJobPostings();
