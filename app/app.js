const express = require('express');
const routes = require('./routes');
const app = express();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

module.exports = app;