const conexion = require('../config/database');

exports.getCategorias = (req, res) => {
	try {
		conexion.query('SELECT * FROM categorias', (err, rows, fields) => {
			if (!err) {
				res.json(rows);
			} else {
				res.json({ status: 'No hay datos' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};

exports.getCategoria = (req, res) => {
	try {
		conexion.query(`SELECT * FROM categorias WHERE id = ${req.params.id}`, (err, rows, fields) => {
			if (!err) {
				res.json(rows[0]);
			} else {
				res.json({ status: 'No existe la categoria' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};

exports.setCategorias = (req, res) => {
	try {
		const { nombre } = req.body;

		let query = `INSERT INTO categorias SET?`;

		const categoriasObj = {
			nombre,
		};

		conexion.query(query, categoriasObj, (err, rows, fields) => {
			if (!err) {
				res.json({ status: 'Guardado con exito' });
			} else {
				res.json({ status: 'Error al Guardar' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};

exports.updateCategorias = (req, res) => {
	try {
		const { id } = req.params;
		const { nombre, modified } = req.body;
		let query = `UPDATE categorias SET nombre = '${nombre}', modified = '${modified}'
							WHERE id = ${id}`;

		conexion.query(query, (err, rows, fields) => {
			if (!err) {
				res.json({ status: 'Actualizado con exito' });
			} else {
				res.json({ status: 'Error al Actualizar' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};

exports.deleteCategoria = (req, res) => {
	try {
		const { id } = req.params;
		let query = `DELETE FROM categorias WHERE id = ${id}`;

		conexion.query(query, (err, rows, fields) => {
			if (!err) {
				res.json({ status: 'Eliminado con exito' });
			} else {
				res.json({ status: 'Error al Eliminar' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};
