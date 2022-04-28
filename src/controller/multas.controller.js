const conexion = require('../config/database');

exports.getMultas = (req, res) => {
	try {
		conexion.query('SELECT * FROM multas', (err, rows, fields) => {
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

exports.getMulta = (req, res) => {
	try {
		conexion.query(`SELECT * FROM multas WHERE id = ${req.params.id}`, (err, rows, fields) => {
			if (!err) {
				res.json(rows[0]);
			} else {
				res.json({ status: 'No existe la multa' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};

exports.setMultas = (req, res) => {
	try {
		const { fecha, observacion, valor, usuarios_id } = req.body;
		let query = `INSERT INTO multas SET?`;

		const multasObj = {
			fecha,
			observacion,
			valor,
			usuarios_id,
		};

		conexion.query(query, multasObj, (err, rows, fields) => {
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

exports.updateMultas = (req, res) => {
	try {
		const { id } = req.params;
		const { fecha, observacion, valor, usuarios_id, modified } = req.body;
		let query = `UPDATE multas SET fecha = '${fecha}', observacion = '${observacion}', valor = '${valor}',
                            usuarios_id = '${usuarios_id}', modified = '${modified}'
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

exports.deleteMultas = (req, res) => {
	try {
		const { id } = req.params;
		let query = `DELETE FROM multas WHERE id = ${id}`;

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
