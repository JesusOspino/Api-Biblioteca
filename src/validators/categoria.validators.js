const { check, validationResult } = require('express-validator');

const validateCategoria = [
	check('nombre')
		.exists()
		.custom((value) => {
			if (value === '') {
				throw new Error('Digite el nombre');
			}
			if (value.length < 6) {
				throw new Error('Longitud minima es de 6');
			}
		}),
	check('created').exists().not().isEmpty().isDate(),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		return next();
	},
];

module.exports = { validateCategoria };
