//Rutas para producto
const express = require('express');
const router = express.Router();
const bai05Controller = require('../controllers/bai05Controller');

//API POR PRODUCTO
router.post('/', bai05Controller.crearBai05);
router.get('/' , bai05Controller.obtenerBai05s);
router.put('/:id' , bai05Controller.actualizarBai05);
router.get('/:id' , bai05Controller.obtenerBai05);
router.delete('/:id' , bai05Controller.eliminarBai05);

module.exports = router;