//Rutas 
const express = require('express');
const router = express.Router();
const apo09casillascontroller = require('../controllers/apo09casillascontroller');

//API 
router.post('/', apo09casillascontroller.crearApo09casilla);
router.get('/' , apo09casillascontroller.obtenerApo09casillas);
router.put('/:id' , apo09casillascontroller.actualizarApo09casilla);
router.get('/:id' , apo09casillascontroller.obtenerApo09casilla);
router.delete('/:id' , apo09casillascontroller.eliminarApo09casilla);

module.exports = router;