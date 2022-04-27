const express = require('express');
const route = express.Router();
const prestamosController = require('../controller/prestamos.controller');

route.get('/prestamos', prestamosController.getPrestamos);
route.get('/prestamos/:id', prestamosController.getPrestamo);

route.post('/prestamos', prestamosController.setPrestamos);
route.put('/prestamos/:id', prestamosController.updatePrestamos);
route.delete('/prestamos/:id', prestamosController.deletePrestamos);

module.exports = route;
