//Rutas 
const express = require('express');
const router = express.Router();
const apo011tituloscontroller = require('../controllers/apo011tituloscontroller');

//API 
router.post('/', apo011tituloscontroller.crearApo011titulo);
router.get('/' , apo011tituloscontroller.obtenerApo011titulos);
router.put('/:id' , apo011tituloscontroller.actualizarApo011titulo);
router.get('/:id' , apo011tituloscontroller.obtenerApo011titulo);
router.delete('/:id' , apo011tituloscontroller.eliminarApo011titulo);

module.exports = router;