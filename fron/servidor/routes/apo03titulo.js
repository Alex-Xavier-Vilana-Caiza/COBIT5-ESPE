//Rutas 
const express = require('express');
const router = express.Router();
const apo03tituloscontroller = require('../controllers/apo03tituloscontroller');

//API 
router.post('/', apo03tituloscontroller.crearApo03titulo);
router.get('/' , apo03tituloscontroller.obtenerApo03titulos);
router.put('/:id' , apo03tituloscontroller.actualizarApo03titulo);
router.get('/:id' , apo03tituloscontroller.obtenerApo03titulo);
router.delete('/:id' , apo03tituloscontroller.eliminarApo03titulo);

module.exports = router;