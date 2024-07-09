const https = require('https');
const globalAgent = require('global-agent');
globalAgent.bootstrap();

https.get('https://jsonplaceholder.typicode.com/posts', (resp) => {
  let data = '';
  resp.on('data', (d) => {
    data += d;
  });
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });
  resp.on('error', (err) => {
    console.error(err);
  });
});