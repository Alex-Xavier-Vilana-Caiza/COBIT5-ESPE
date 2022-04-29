//Rutas 
const express = require('express');
const router = express.Router();
const apo011casillascontroller = require('../controllers/apo011casillascontroller');

//API 
router.post('/', apo011casillascontroller.crearApo011casilla);
router.get('/' , apo011casillascontroller.obtenerApo011casillas);
router.put('/:id' , apo011casillascontroller.actualizarApo011casilla);
router.get('/:id' , apo011casillascontroller.obtenerApo011casilla);
router.delete('/:id' , apo011casillascontroller.eliminarApo011casilla);

module.exports = router;