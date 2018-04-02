const { unirest, sqllize } = require('../index');
const { getConnectionObject } = sqllize;
const { toJSON } = require('../converters');

const csv = `key, value
welcome, bon bini`;

(async () => {
  console.log('====================================');
  console.log('Start Test');
  console.log('====================================');
  const data = await unirest('https://jsonplaceholder.typicode.com/posts');
  console.info(`Unirest test: Got ${data.length} posts!`);

  console.info('sqllize test: conn object', getConnectionObject('mysql'));

  console.info(await toJSON(csv));
  console.log('====================================');
  console.log('End Test');
  console.log('====================================');
})();
