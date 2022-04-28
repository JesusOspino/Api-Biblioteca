const express = require('express');
const route = express.Router();
const detallesController = require('../controller/detalles.controller');

route.get('/detalles', detallesController.getDetalles);
route.get('/detalles/:id', detallesController.getDetalle);

route.post('/detalles', detallesController.setDetalles);
route.put('/detalles/:id', detallesController.updateDetalles);
route.delete('/detalles/:id', detallesController.deleteDetalles);

module.exports = route;
