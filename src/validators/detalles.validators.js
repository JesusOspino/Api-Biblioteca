const { check, validationResult, body } = require('express-validator');

const validateDetalles = [
	//check('libros_id').isLength({ min: 3 }).withMessage('Error el campo'),

	check('libros_id').exists().isNumeric().withMessage('No es numerico'),

	check('prestamos_id').exists().isNumeric().withMessage('No es numerico'),

	check('precio').exists().isNumeric().withMessage('No es numerico'),

	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		return next();
	},
];

module.exports = { validateDetalles };
