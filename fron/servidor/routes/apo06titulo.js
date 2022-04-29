//Rutas 
const express = require('express');
const router = express.Router();
const apo06tituloscontroller = require('../controllers/apo06tituloscontroller');

//API 
router.post('/', apo06tituloscontroller.crearApo06titulo);
router.get('/' , apo06tituloscontroller.obtenerApo06titulos);
router.put('/:id' , apo06tituloscontroller.actualizarApo06titulo);
router.get('/:id' , apo06tituloscontroller.obtenerApo06titulo);
router.delete('/:id' , apo06tituloscontroller.eliminarApo06titulo);

module.exports = router;