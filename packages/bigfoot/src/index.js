require('dotenv').config();
const app = require('./app');
const logger = require('./util/logger');
const {PORT} = process.env;

app.listen(PORT);
logger.log(`listening on http://localhost:${PORT}`);
