//Rutas para producto
const express = require('express');
const router = express.Router();
const tablasieteController = require('../controllers/tablasieteController');

//API POR PRODUCTO
router.post('/', tablasieteController.crearTablasiete);
router.get('/' , tablasieteController.obtenerTablasiete);
router.put('/:id' , tablasieteController.actualizarTablasiete);
router.get('/:id' , tablasieteController.obtenerTablasietes);
router.delete('/:id' , tablasieteController.eliminarTablasiete);

module.exports = router;