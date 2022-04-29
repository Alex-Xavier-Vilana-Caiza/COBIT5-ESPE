//Rutas 
const express = require('express');
const router = express.Router();
const apo09tituloscontroller = require('../controllers/apo09tituloscontroller');

//API 
router.post('/', apo09tituloscontroller.crearApo09titulo);
router.get('/' , apo09tituloscontroller.obtenerApo09titulos);
router.put('/:id' , apo09tituloscontroller.actualizarApo09titulo);
router.get('/:id' , apo09tituloscontroller.obtenerApo09titulo);
router.delete('/:id' , apo09tituloscontroller.eliminarApo09titulo);

module.exports = router;