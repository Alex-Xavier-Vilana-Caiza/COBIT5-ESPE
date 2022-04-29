//Rutas 
const express = require('express');
const router = express.Router();
const apo05tituloscontroller = require('../controllers/apo05tituloscontroller');

//API 
router.post('/', apo05tituloscontroller.crearApo05titulo);
router.get('/' , apo05tituloscontroller.obtenerApo05titulos);
router.put('/:id' , apo05tituloscontroller.actualizarApo05titulo);
router.get('/:id' , apo05tituloscontroller.obtenerApo05titulo);
router.delete('/:id' , apo05tituloscontroller.eliminarApo05titulo);

module.exports = router;