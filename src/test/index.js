const { unirest, sqllize } = require('../index');
const { getConnectionObject } = sqllize;
(async () => {
  console.log('====================================');
  console.log('Start Test');
  console.log('====================================');
  const data = await unirest('https://jsonplaceholder.typicode.com/posts');
  console.info(`Unirest test: Got ${data.length} posts!`);

  console.info('sqllize test: conn object', getConnectionObject('mysql'));

  console.log('====================================');
  console.log('End Test');
  console.log('====================================');
})();
