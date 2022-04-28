const express = require('express');
const route = express.Router();
const prestamosController = require('../controller/prestamos.controller');
const { validatePrestamos } = require('../validators/prestamos.validate');

route.get('/prestamos', prestamosController.getPrestamos);
route.get('/prestamos/:id', prestamosController.getPrestamo);

route.post('/prestamos', validatePrestamos, prestamosController.setPrestamos);
route.put('/prestamos/:id', validatePrestamos, prestamosController.updatePrestamos);
route.delete('/prestamos/:id', prestamosController.deletePrestamos);

module.exports = route;
