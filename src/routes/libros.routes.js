const express = require('express');
const route = express.Router();
const librosController = require('../controller/libros.controller');

route.get('/libros', librosController.getLibros);
route.get('/libros/:id', librosController.getLibro);

route.post('/libros', librosController.setLibros);
route.put('/libros/:id', librosController.updateLibros);
route.delete('/libros/:id', librosController.deleteLibros);

module.exports = route;
