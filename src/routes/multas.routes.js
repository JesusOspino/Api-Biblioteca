const express = require('express');
const route = express.Router();
const multasController = require('../controller/multas.controller');
const { validateMultas } = require('../validators/multas.validators');

route.get('/multas', multasController.getMultas);
route.get('/multas/:id', multasController.getMulta);

route.post('/multas', validateMultas, multasController.setMultas);
route.put('/multas/:id', validateMultas, multasController.updateMultas);
route.delete('/multas/:id', multasController.deleteMultas);

module.exports = route;
