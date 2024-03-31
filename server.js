const app = require('./app');
const { PORT, BASE_URI } = require('./const');
const Logger = require('./logger.js');
const log = new Logger('app.js');

const port = PORT;
app.listen(port, () =>
  log.info(`App is running on port ${port}...${BASE_URI}`)
);
