//Rutas 
const express = require('express');
const router = express.Router();
const apo08casillascontroller = require('../controllers/apo08casillascontroller');

//API 
router.post('/', apo08casillascontroller.crearApo08casilla);
router.get('/' , apo08casillascontroller.obtenerApo08casillas);
router.put('/:id' , apo08casillascontroller.actualizarApo08casilla);
router.get('/:id' , apo08casillascontroller.obtenerApo08casilla);
router.delete('/:id' , apo08casillascontroller.eliminarApo08casilla);

module.exports = router;