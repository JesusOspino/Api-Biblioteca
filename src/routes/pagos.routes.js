const express = require('express');
const route = express.Router();
const pagosController = require('../controller/pagos.controller');

route.get('/pagos', pagosController.getPagos);
route.get('/pagos/:id', pagosController.getPago);

route.post('/pagos', pagosController.setPagos);
route.put('/pagos/:id', pagosController.updatePagos);
route.delete('/pagos/:id', pagosController.deletePagos);

module.exports = route;
