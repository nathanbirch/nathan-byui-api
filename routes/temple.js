module.exports = (app) => {
  const temples = require('../controllers/temple.js');

  var router = require('express').Router();

  // Create a new Temple
  // router.post('/', temples.create);

  // Retrieve all Temples
  router.get('/', temples.findAll);

  // Retrieve all published Temples
  // router.get('/published', temples.findAllPublished);

  // Retrieve a single Temple with id
  // router.get('/:id', temples.findOne);

  // Update a Temple with id
  // router.put('/:id', temples.update);

  // Delete a Temple with id
  // router.delete('/:id', temples.delete);

  // Create a new Temple
  // router.delete('/', temples.deleteAll);

  app.use('/temples', router);
};
