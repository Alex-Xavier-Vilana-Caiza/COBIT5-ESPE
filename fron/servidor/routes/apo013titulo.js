//Rutas 
const express = require('express');
const router = express.Router();
const apo013tituloscontroller = require('../controllers/apo013tituloscontroller');

//API 
router.post('/', apo013tituloscontroller.crearApo013titulo);
router.get('/' , apo013tituloscontroller.obtenerApo013titulos);
router.put('/:id' , apo013tituloscontroller.actualizarApo013titulo);
router.get('/:id' , apo013tituloscontroller.obtenerApo013titulo);
router.delete('/:id' , apo013tituloscontroller.eliminarApo013titulo);

module.exports = router;