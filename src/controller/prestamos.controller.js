const conexion = require('../config/database');

exports.getPrestamos = (req, res) => {
	try {
		conexion.query('SELECT * FROM prestamos', (err, rows, fields) => {
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

exports.getPrestamo = (req, res) => {
	try {
		conexion.query(`SELECT * FROM prestamos WHERE id = ${req.params.id}`, (err, rows, fields) => {
			if (!err) {
				res.json(rows[0]);
			} else {
				res.json({ status: 'No existe el libro' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};

exports.setPrestamos = (req, res) => {
	try {
		const { fecha, devolucion, entrega, created, usuarios_id } = req.body;
		let query = `INSERT INTO prestamos SET?`;

		const prestamoObj = {
			fecha,
			devolucion,
			entrega,
			created,
			usuarios_id,
		};

		conexion.query(query, prestamoObj, (err, rows, fields) => {
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

exports.updatePrestamos = (req, res) => {
	try {
		const { id } = req.params;
		const { fecha, devolucion, entrega, modified, usuarios_id } = req.body;
		let query = `UPDATE prestamos SET fecha = '${fecha}', devolucion = '${devolucion}', entrega = '${entrega}', 
                        modified = '${modified}', usuarios_id = '${usuarios_id}'
						WHERE id = ${id}`;

		conexion.query(query, (err, rows, fields) => {
			if (!err) {
				res.json({ status: 'Actualizado con exito' });
			} else {
				res.json({ status: 'Error al Actualizar' });
				console.log(err);
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};

exports.deletePrestamos = (req, res) => {
	try {
		const { id } = req.params;
		let query = `DELETE FROM prestamos WHERE id = ${id}`;

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
