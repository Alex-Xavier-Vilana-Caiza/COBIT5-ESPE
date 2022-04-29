//Rutas para producto
const express = require('express');
const router = express.Router();
const cabecera1Controller = require('../controllers/cabecera1Controller');

//API POR PRODUCTO
router.post('/', cabecera1Controller.crearCabecera1);
router.get('/' , cabecera1Controller.obtenerCabeceras1);
router.put('/:id' , cabecera1Controller.actualizarCabecera1);
router.get('/:id' , cabecera1Controller.obtenerCabecera1);
router.delete('/:id' , cabecera1Controller.eliminarCabecera1);

module.exports = router;