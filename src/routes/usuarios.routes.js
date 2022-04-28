const express = require('express');
const route = express.Router();
const usuariosController = require('../controller/usuarios.controller');

route.get('/usuarios', usuariosController.getUsuarios);
route.get('/usuarios/:id', usuariosController.getUsuario);

route.post('/usuarios', usuariosController.setUsuarios);
route.put('/usuarios/:id', usuariosController.updateUsuarios);
route.delete('/usuarios/:id', usuariosController.deleteUsuarios);

module.exports = route;
