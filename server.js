const app = require('./app');
const { PORT, BASE_URI } = require('./const');

const port = PORT;
console.log(port, () =>
  log.info(`App is running on port ${port}...${BASE_URI}`)
);
