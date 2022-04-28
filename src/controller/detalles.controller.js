const conexion = require('../config/database');

exports.getDetalles = (req, res) => {
	try {
		conexion.query('SELECT * FROM detalles', (err, rows, fields) => {
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

exports.getDetalle = (req, res) => {
	try {
		conexion.query(`SELECT * FROM detalles WHERE id = ${req.params.id}`, (err, rows, fields) => {
			if (!err) {
				res.json(rows[0]);
			} else {
				res.json({ status: 'No existe el detalle' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};

exports.setDetalles = (req, res) => {
	try {
		const { libros_id, prestamos_id, precio } = req.body;
		let query = `INSERT INTO detalles SET?`;

		const detallesObj = {
			libros_id,
			prestamos_id,
			precio,
		};

		conexion.query(query, detallesObj, (err, rows, fields) => {
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

exports.updateDetalles = (req, res) => {
	try {
		const { id } = req.params;
		const { libros_id, prestamos_id, precio, modified } = req.body;
		let query = `UPDATE detalles SET libros_id = '${libros_id}', prestamos_id = '${prestamos_id}',
                             precio = '${precio}', modified = '${modified}'
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

exports.deleteDetalles = (req, res) => {
	try {
		const { id } = req.params;
		let query = `DELETE FROM detalles WHERE id = ${id}`;

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
