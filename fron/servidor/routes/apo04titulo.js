//Rutas 
const express = require('express');
const router = express.Router();
const apo04tituloscontroller = require('../controllers/apo04tituloscontroller');

//API 
router.post('/', apo04tituloscontroller.crearApo04titulo);
router.get('/' , apo04tituloscontroller.obtenerApo04titulos);
router.put('/:id' , apo04tituloscontroller.actualizarApo04titulo);
router.get('/:id' , apo04tituloscontroller.obtenerApo04titulo);
router.delete('/:id' , apo04tituloscontroller.eliminarApo04titulo);

module.exports = router;