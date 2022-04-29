//Rutas 
const express = require('express');
const router = express.Router();
const apo04casillascontroller = require('../controllers/apo04casillascontroller');

//API 
router.post('/', apo04casillascontroller.crearApo04casilla);
router.get('/' , apo04casillascontroller.obtenerApo04casillas);
router.put('/:id' , apo04casillascontroller.actualizarApo04casilla);
router.get('/:id' , apo04casillascontroller.obtenerApo04casilla);
router.delete('/:id' , apo04casillascontroller.eliminarApo04casilla);

module.exports = router;