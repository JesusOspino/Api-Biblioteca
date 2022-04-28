const { check, validationResult } = require('express-validator');

const validatePagos = [
	check('fecha')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite una fecha')
		.isDate()
		.withMessage('No es una fecha valida'),
	check('valor').exists().isNumeric().withMessage('Dijite un valor valido'),
	check('concepto')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite un concepto')
		.isLength({ min: 6 })
		.withMessage('El concepto es muy corto, min 6 caracteres')
		.isLength({ max: 200 })
		.withMessage('El concepto es muy largo, max 200 caracteres'),
	check('usuarios_id').exists().isNumeric().withMessage('No es un numero valido'),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		return next();
	},
];

module.exports = { validatePagos };
