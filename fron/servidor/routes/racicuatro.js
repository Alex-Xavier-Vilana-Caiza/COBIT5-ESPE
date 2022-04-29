//Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/racicuatroController');

//API POR PRODUCTO
router.post('/', productoController.crearRacicuatro);
router.get('/' , productoController.obtenerRacicuatros);
router.put('/:id' , productoController.actualizarRacicuatro);
router.get('/:id' , productoController.obtenerRacicuatro);
router.delete('/:id' , productoController.eliminarRacicuatro);

module.exports = router;