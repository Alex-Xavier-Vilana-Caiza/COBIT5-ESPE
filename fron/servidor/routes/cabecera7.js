//Rutas para producto
const express = require('express');
const router = express.Router();
const cabecera7Controller = require('../controllers/cabecera7Controller');

//API POR PRODUCTO
router.post('/', cabecera7Controller.crearCabecera7);
router.get('/' , cabecera7Controller.obtenerCabeceras7);
router.put('/:id' , cabecera7Controller.actualizarCabecera7);
router.get('/:id' , cabecera7Controller.obtenerCabecera7);
router.delete('/:id' , cabecera7Controller.eliminarCabecera7);

module.exports = router;