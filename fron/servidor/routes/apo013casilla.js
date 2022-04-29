//Rutas 
const express = require('express');
const router = express.Router();
const apo013casillascontroller = require('../controllers/apo013casillascontroller');

//API 
router.post('/', apo013casillascontroller.crearApo013casilla);
router.get('/' , apo013casillascontroller.obtenerApo013casillas);
router.put('/:id' , apo013casillascontroller.actualizarApo013casilla);
router.get('/:id' , apo013casillascontroller.obtenerApo013casilla);
router.delete('/:id' , apo013casillascontroller.eliminarApo013casilla);

module.exports = router;