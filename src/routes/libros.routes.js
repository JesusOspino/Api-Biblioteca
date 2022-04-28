const express = require('express');
const route = express.Router();
const librosController = require('../controller/libros.controller');
const { validateLibros } = require('../validators/libros.validators');

route.get('/libros', librosController.getLibros);
route.get('/libros/:id', librosController.getLibro);

route.post('/libros', validateLibros, librosController.setLibros);
route.put('/libros/:id', validateLibros, librosController.updateLibros);
route.delete('/libros/:id', librosController.deleteLibros);

module.exports = route;
