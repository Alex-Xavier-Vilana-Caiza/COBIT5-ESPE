//Rutas para producto
const express = require('express');
const router = express.Router();
const cabecera3Controller = require('../controllers/cabecera3Controller');

//API POR PRODUCTO
router.post('/', cabecera3Controller.crearCabecera3);
router.get('/' , cabecera3Controller.obtenerCabeceras3);
router.put('/:id' , cabecera3Controller.actualizarCabecera3);
router.get('/:id' , cabecera3Controller.obtenerCabecera3);
router.delete('/:id' , cabecera3Controller.eliminarCabecera3);

module.exports = router;