const conexion = require('../database/db');

const model = {};

model.listar = async (req, res) => {
	try {
		const sql = `SELECT pr.nombre_producto, descripcion, precio, categoria FROM productos AS pr
        INNER JOIN categorias AS ca
        ON pr.id_categoria = ca.id`;
		const resultados = await conexion.query(sql);
		return resultados;
	} catch (error) {
		console.log(error);
	}
};

module.exports = model;
