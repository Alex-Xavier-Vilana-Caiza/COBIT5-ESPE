//Rutas 
const express = require('express');
const router = express.Router();
const apo012tituloscontroller = require('../controllers/apo012tituloscontroller');

//API 
router.post('/', apo012tituloscontroller.crearApo012titulo);
router.get('/' , apo012tituloscontroller.obtenerApo012titulos);
router.put('/:id' , apo012tituloscontroller.actualizarApo012titulo);
router.get('/:id' , apo012tituloscontroller.obtenerApo012titulo);
router.delete('/:id' , apo012tituloscontroller.eliminarApo012titulo);

module.exports = router;