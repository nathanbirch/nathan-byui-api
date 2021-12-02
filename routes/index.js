const routes = require('express').Router();
const temple = require('./temple');

routes.use('/temples', temple);

module.exports = routes;
