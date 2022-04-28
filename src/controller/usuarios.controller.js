const conexion = require('../config/database');

exports.getUsuarios = (req, res) => {
	try {
		conexion.query('SELECT * FROM usuarios', (err, rows, fields) => {
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

exports.getUsuario = (req, res) => {
	try {
		conexion.query(`SELECT * FROM usuarios WHERE id = ${req.params.id}`, (err, rows, fields) => {
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

exports.setUsuarios = (req, res) => {
	try {
		const { documento, nombres, apellidos, direccion, telefono, correo } = req.body;
		let query = `INSERT INTO usuarios SET?`;

		const usuariosObj = {
			documento,
			nombres,
			apellidos,
			direccion,
			telefono,
			correo,
		};

		conexion.query(query, usuariosObj, (err, rows, fields) => {
			if (!err) {
				res.json({ status: 'Guardado con exito' });
			} else {
				res.json({ status: 'Error al Guardar' });
				console.log(err);
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).send('Hubo un error');
	}
};

exports.updateUsuarios = (req, res) => {
	try {
		const { id } = req.params;
		const { documento, nombres, apellidos, direccion, telefono, correo, modified } = req.body;
		let query = `UPDATE usuarios SET documento = '${documento}', nombres = '${nombres}', apellidos = '${apellidos}',
                            direccion = '${direccion}', telefono = '${telefono}', correo = '${correo}', modified = '${modified}'
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

exports.deleteUsuarios = (req, res) => {
	try {
		const { id } = req.params;
		let query = `DELETE FROM usuarios WHERE id = ${id}`;

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
