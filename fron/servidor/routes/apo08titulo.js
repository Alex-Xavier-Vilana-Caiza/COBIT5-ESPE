//Rutas 
const express = require('express');
const router = express.Router();
const apo08tituloscontroller = require('../controllers/apo08tituloscontroller');

//API 
router.post('/', apo08tituloscontroller.crearApo08titulo);
router.get('/' , apo08tituloscontroller.obtenerApo08titulos);
router.put('/:id' , apo08tituloscontroller.actualizarApo08titulo);
router.get('/:id' , apo08tituloscontroller.obtenerApo08titulo);
router.delete('/:id' , apo08tituloscontroller.eliminarApo08titulo);

module.exports = router;