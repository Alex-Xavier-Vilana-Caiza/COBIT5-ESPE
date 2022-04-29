//Rutas 
const express = require('express');
const router = express.Router();
const apo010casillascontroller = require('../controllers/apo010casillascontroller');

//API 
router.post('/', apo010casillascontroller.crearApo010casilla);
router.get('/' , apo010casillascontroller.obtenerApo010casillas);
router.put('/:id' , apo010casillascontroller.actualizarApo010casilla);
router.get('/:id' , apo010casillascontroller.obtenerApo010casilla);
router.delete('/:id' , apo010casillascontroller.eliminarApo010casilla);

module.exports = router;