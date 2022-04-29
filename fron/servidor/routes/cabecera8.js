//Rutas para producto
const express = require('express');
const router = express.Router();
const cabecera8Controller = require('../controllers/cabecera8Controller');

//API POR PRODUCTO
router.post('/', cabecera8Controller.crearCabecera8);
router.get('/' , cabecera8Controller.obtenerCabeceras8);
router.put('/:id' , cabecera8Controller.actualizarCabecera8);
router.get('/:id' , cabecera8Controller.obtenerCabecera8);
router.delete('/:id' , cabecera8Controller.eliminarCabecera8);

module.exports = router;