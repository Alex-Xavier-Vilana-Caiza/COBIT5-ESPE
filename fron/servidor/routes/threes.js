//Rutas para producto
const express = require('express');
const router = express.Router();
const threeController = require('../controllers/threeController');

//API POR PRODUCTO
router.post('/', threeController.crearThree);
router.get('/' , threeController.obtenerThrees);
router.put('/:id' , threeController.actualizarThree);
router.get('/:id' , threeController.obtenerThree);
router.delete('/:id' , threeController.eliminarThree);

module.exports = router; 