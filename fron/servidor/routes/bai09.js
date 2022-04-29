//Rutas para producto
const express = require('express');
const router = express.Router();
const bai09Controller = require('../controllers/bai09Controller');

//API POR PRODUCTO
router.post('/', bai09Controller.crearBai09);
router.get('/' , bai09Controller.obtenerBai09s);
router.put('/:id' , bai09Controller.actualizarBai09);
router.get('/:id' , bai09Controller.obtenerBai09);
router.delete('/:id' , bai09Controller.eliminarBai09);

module.exports = router;