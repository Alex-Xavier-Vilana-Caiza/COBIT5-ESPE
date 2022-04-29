//Rutas 
const express = require('express');
const router = express.Router();
const apo03casillascontroller = require('../controllers/apo03casillascontroller');

//API 
router.post('/', apo03casillascontroller.crearApo03casilla);
router.get('/' , apo03casillascontroller.obtenerApo03casillas);
router.put('/:id' , apo03casillascontroller.actualizarApo03casilla);
router.get('/:id' , apo03casillascontroller.obtenerApo03casilla);
router.delete('/:id' , apo03casillascontroller.eliminarApo03casilla);

module.exports = router;