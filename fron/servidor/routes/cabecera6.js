//Rutas para producto
const express = require('express');
const router = express.Router();
const cabecera6Controller = require('../controllers/cabecera6Controller');

//API POR PRODUCTO
router.post('/', cabecera6Controller.crearCabecera6);
router.get('/' , cabecera6Controller.obtenerCabeceras6);
router.put('/:id' , cabecera6Controller.actualizarCabecera6);
router.get('/:id' , cabecera6Controller.obtenerCabecera6);
router.delete('/:id' , cabecera6Controller.eliminarCabecera6);

module.exports = router;