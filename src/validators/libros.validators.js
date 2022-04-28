const { check, validationResult } = require('express-validator');

const validateLibros = [
	check('titulo')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite un titulo')
		.isLength({ min: 6 })
		.withMessage('El titulo es muy corto, min 6 caracteres'),
	check('descripcion')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite una descripcion')
		.isLength({ min: 6 })
		.withMessage('La descripcion es muy corta, min 6 caracteres')
		.isLength({ max: 200 })
		.withMessage('La descripcion es muy larga, max 200 caracteres'),
	check('precio').exists().isNumeric().withMessage('Dijite un precio valido'),
	check('ejemplares').exists().isNumeric().withMessage('Dijite un numero de ejemplares'),
	check('autor')
		.exists()
		.not()
		.isEmpty()
		.withMessage('Digite un autor')
		.isLength({ min: 6 })
		.withMessage('El autor es muy corto, min 6 caracteres'),
	check('editoriales_id').exists().isNumeric().withMessage('No es un numero valido'),
	check('categorias_id').exists().isNumeric().withMessage('No es un numero valido'),

	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		return next();
	},
];

module.exports = { validateLibros };
