const { check, validationResult } = require('express-validator');

const validateEditoriales = [
	check('nombre')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite un nombre')
		.isLength({ min: 6 })
		.withMessage('El nombre es muy corto, min 6 caracteres'),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		return next();
	},
];

module.exports = { validateEditoriales };
