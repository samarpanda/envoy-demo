const { PORT } = process.env;

const express = require('express');
const app = express();

const logger = require('./util/logger');
const api = require('./entity/api');

app.get('/', function(req, res) {
  res.send(`APP: ${PORT}`);
});

app.get('/bigfootyoda', function(req, res) {
  res.send(`APP: ${PORT}`);
});

const favicon = new Buffer.from(
  'AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREQAAAAAAEAAAEAAAAAEAAAABAAAAEAAAAAAQAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD8HwAA++8AAPf3AADv+wAA7/sAAP//AAD//wAA+98AAP//AAD//wAA//8AAP//AAD//wAA',
  'base64'
);
app.get('/favicon.ico', function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Length', favicon.length);
  res.setHeader('Content-Type', 'image/x-icon');
  res.setHeader('Cache-Control', 'public, max-age=2592000'); // expiers after a month
  res.setHeader('Expires', new Date(Date.now() + 2592000000).toUTCString());
  res.end(favicon);
});

require('./middleware/appMiddleware')(app);
app.use('/api', api);

app.use(function(err, __, res) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
    return;
  }

  logger.error(err.stack);
  res.status(500).send(`Oops server error`);
});

module.exports = app;
