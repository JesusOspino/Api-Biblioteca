const express = require('express');
const route = express.Router();
const usuariosController = require('../controller/usuarios.controller');
const { validateUsuarios } = require('../validators/usuarios.validators');

route.get('/usuarios', usuariosController.getUsuarios);
route.get('/usuarios/:id', usuariosController.getUsuario);

route.post('/usuarios', validateUsuarios, usuariosController.setUsuarios);
route.put('/usuarios/:id', validateUsuarios, usuariosController.updateUsuarios);
route.delete('/usuarios/:id', usuariosController.deleteUsuarios);

module.exports = route;
