const routes = require('express').Router();
const temples = require('../controllers/temple.js');

routes.get('/', temples.findAll);

module.exports = routes;

// Create a new Temple
// router.post('/', temples.create);

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
