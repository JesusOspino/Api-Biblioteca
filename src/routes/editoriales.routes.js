const express = require('express');
const route = express.Router();
const editorialesController = require('../controller/editoriales.controller');
const { validateEditoriales } = require('../validators/editoriales.validators');

route.get('/editoriales', editorialesController.getEditoriales);
route.get('/editoriales/:id', editorialesController.getEditorial);

route.post('/editoriales', validateEditoriales, editorialesController.setEditoriales);
route.put('/editoriales/:id', validateEditoriales, editorialesController.updateEditoriales);
route.delete('/editoriales/:id', editorialesController.deleteEditoriales);

module.exports = route;
