const express = require('express');
const router = express.Router();
const productoController = require('../controllers/cabeceraController');

router.post('/', productoController.crearCabecera);
router.get('/', productoController.obtenerCabeceras);
router.put('/:id', productoController.actualizarCabecera);
router.get('/:id', productoController.obtenerCabecera);
router.delete('/:id', productoController.eliminarCabecera);

module.exports = router;