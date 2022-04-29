//Rutas 
const express = require('express');
const router = express.Router();
const apo05casillascontroller = require('../controllers/apo05casillascontroller');

//API 
router.post('/', apo05casillascontroller.crearApo05casilla);
router.get('/' , apo05casillascontroller.obtenerApo05casillas);
router.put('/:id' , apo05casillascontroller.actualizarApo05casilla);
router.get('/:id' , apo05casillascontroller.obtenerApo05casilla);
router.delete('/:id' , apo05casillascontroller.eliminarApo05casilla);

module.exports = router;