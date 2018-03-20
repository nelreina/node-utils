const unirest = require('../unirest');
(async () => {
  console.log('====================================');
  console.log('Start Test');
  console.log('====================================');
  const data = await unirest('https://jsonplaceholder.typicode.com/posts');
  console.info(data);
  console.log('====================================');
  console.log('End Test');
  console.log('====================================');
})();
