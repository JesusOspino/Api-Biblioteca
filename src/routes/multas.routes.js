const express = require('express');
const route = express.Router();
const multasController = require('../controller/multas.controller');

route.get('/multas', multasController.getMultas);
route.get('/multas/:id', multasController.getMulta);

route.post('/multas', multasController.setMultas);
route.put('/multas/:id', multasController.updateMultas);
route.delete('/multas/:id', multasController.deleteMultas);

module.exports = route;
