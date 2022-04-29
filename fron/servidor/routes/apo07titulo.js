//Rutas 
const express = require('express');
const router = express.Router();
const apo07tituloscontroller = require('../controllers/apo07tituloscontroller');

//API 
router.post('/', apo07tituloscontroller.crearApo07titulo);
router.get('/' , apo07tituloscontroller.obtenerApo07titulos);
router.put('/:id' , apo07tituloscontroller.actualizarApo07titulo);
router.get('/:id' , apo07tituloscontroller.obtenerApo07titulo);
router.delete('/:id' , apo07tituloscontroller.eliminarApo07titulo);

module.exports = router;