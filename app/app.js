const express = require('express');
const routes = require('./routes');
const app = express();
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '/../logs/invest-api.log'),
  { flags: 'a' }
);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  morgan('[:date[clf]] | :req[host] | :url | :method', {
    stream: accessLogStream,
  })
);
app.use(routes);

module.exports = app;
