const { check, validationResult } = require('express-validator');

const validateUsuarios = [
	check('documento')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite un documento')
		.isLength({ min: 2 })
		.withMessage('El documento es muy corto, min 2 caracteres'),
	check('nombres')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite un nombre')
		.isLength({ min: 6 })
		.withMessage('El nombre es muy corto, min 6 caracteres'),
	check('apellidos')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite un apellido')
		.isLength({ min: 6 })
		.withMessage('El apellido es muy corto, min 6 caracteres'),
	check('direccion').exists().not().isEmpty().withMessage('Digite una direccion'),
	check('telefono')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite un telefono')
		.isLength({ min: 7 })
		.withMessage('El telefono es muy corto, min 7 caracteres'),
	check('correo')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite un correo')
		.isEmail()
		.withMessage('digite un correo valido'),

	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		return next();
	},
];

module.exports = { validateUsuarios };
