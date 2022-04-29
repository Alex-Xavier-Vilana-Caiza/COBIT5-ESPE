//Rutas para producto
const express = require('express');
const router = express.Router();
const secondController = require('../controllers/secondController');

//API POR PRODUCTO
router.post('/', secondController.crearSecond);
router.get('/' , secondController.obtenerSeconds);
router.put('/:id' , secondController.actualizarSecond);
router.get('/:id' , secondController.obtenerSecond);
router.delete('/:id' , secondController.eliminarSecond);

module.exports = router;