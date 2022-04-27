const express = require('express');

// Creamos el Servidor
const app = express();

app.use(express.json());

app.use(require('./routes/categotias.routes'));
app.use(require('./routes/editoriales.routes'));

// Le asignamos el puerto al servidor
app.listen(8000, () => {
	console.log('Server corriendo en el puerto 8000');
});
