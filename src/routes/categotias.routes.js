const express = require('express');
const route = express.Router();
const categoriaController = require('../controller/categoria.controller');
const { validateCategoria } = require('../validators/categoria.validators');

route.get('/', (req, res) => {
	res.send('Hola Mundo');
});

route.get('/categorias', categoriaController.getCategorias);
route.get('/categorias/:id', categoriaController.getCategoria);

route.post('/categorias', validateCategoria, categoriaController.setCategorias);
route.put('/categorias/:id', categoriaController.updateCategorias);
route.delete('/categorias/:id', categoriaController.deleteCategoria);

module.exports = route;
