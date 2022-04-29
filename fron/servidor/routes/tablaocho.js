//Rutas para producto
const express = require('express');
const router = express.Router();
const tablaochoController = require('../controllers/tablaochoController');

//API POR PRODUCTO
router.post('/', tablaochoController.crearTablaocho);
router.get('/' , tablaochoController.obtenerTablaocho);
router.put('/:id' , tablaochoController.actualizarTablaocho);
router.get('/:id' , tablaochoController.obtenerTablaochos);
router.delete('/:id' , tablaochoController.eliminarTablaocho);

module.exports = router;