//Rutas para producto
const express = require('express');
const router = express.Router();
const bai10Controller = require('../controllers/bai10Controller');

//API POR PRODUCTO
router.post('/', bai10Controller.crearBai10);
router.get('/' , bai10Controller.obtenerBai10s);
router.put('/:id' , bai10Controller.actualizarBai10);
router.get('/:id' , bai10Controller.obtenerBai10);
router.delete('/:id' , bai10Controller.eliminarBai10);

module.exports = router;