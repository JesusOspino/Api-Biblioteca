const { check, validationResult } = require('express-validator');

const validateMultas = [
	check('fecha')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite una fecha')
		.isDate()
		.withMessage('No es una fecha valida'),
	check('observacion')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite una observacion')
		.isLength({ min: 6 })
		.withMessage('La observacion es muy corta, min 6 caracteres')
		.isLength({ max: 200 })
		.withMessage('La observacion es muy larga, max 200 caracteres'),
	check('valor').exists().isNumeric().withMessage('Dijite un valor valido'),
	check('usuarios_id').exists().isNumeric().withMessage('No es un numero valido'),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		return next();
	},
];

module.exports = { validateMultas };
