const express = require('express');
const route = express.Router();
const pagosController = require('../controller/pagos.controller');
const { validatePagos } = require('../validators/pagos.validate');
//const validatePagos = require('../validators/pagos.validate');

route.get('/pagos', pagosController.getPagos);
route.get('/pagos/:id', pagosController.getPago);

route.post('/pagos', validatePagos, pagosController.setPagos);
route.put('/pagos/:id', pagosController.updatePagos);
route.delete('/pagos/:id', pagosController.deletePagos);

module.exports = route;
