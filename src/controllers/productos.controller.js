const model = require('../models/productos.model');

const controller = {};

controller.listar = async (req, res) => {
	try {
		const resultados = await model.listar();
		res.json({
			datos: resultados,
		});
	} catch (error) {
		res.json({
			mensaje: 'Hay un error, contacte con el admin',
			error: true,
		});
	}
};
module.exports = controller;
