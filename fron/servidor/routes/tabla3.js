//Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/tabla3Controller');

//API POR PRODUCTO
router.post('/', productoController.crearTabla3);
router.get('/' , productoController.obtenerTablas33);
router.put('/:id' , productoController.actualizarTabla3);
router.get('/:id' , productoController.obtenerTabla3);
router.delete('/:id' , productoController.eliminarTabla3);

module.exports = router;