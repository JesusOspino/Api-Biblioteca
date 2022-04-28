const { check, validationResult } = require('express-validator');

const validatePrestamos = [
	check('fecha')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite una fecha')
		.isDate()
		.withMessage('No es una fecha valida'),
	check('devolucion')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite una fecha de devolucion')
		.isDate()
		.withMessage('No es una fecha valida de devolucion'),
	check('entrega')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite una fecha de entrega')
		.isDate()
		.withMessage('No es una fecha valida de entrega'),
	check('usuarios_id').exists().isNumeric().withMessage('No es un numero valido'),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		return next();
	},
];

module.exports = { validatePrestamos };
