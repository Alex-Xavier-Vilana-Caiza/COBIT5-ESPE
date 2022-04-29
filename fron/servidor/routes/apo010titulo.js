//Rutas 
const express = require('express');
const router = express.Router();
const apo010tituloscontroller = require('../controllers/apo010tituloscontroller');

//API 
router.post('/', apo010tituloscontroller.crearApo010titulo);
router.get('/' , apo010tituloscontroller.obtenerApo010titulos);
router.put('/:id' , apo010tituloscontroller.actualizarApo010titulo);
router.get('/:id' , apo010tituloscontroller.obtenerApo010titulo);
router.delete('/:id' , apo010tituloscontroller.eliminarApo010titulo);

module.exports = router;