//Rutas 
const express = require('express');
const router = express.Router();
const apo06casillascontroller = require('../controllers/apo06casillascontroller');

//API 
router.post('/', apo06casillascontroller.crearApo06casilla);
router.get('/' , apo06casillascontroller.obtenerApo06casillas);
router.put('/:id' , apo06casillascontroller.actualizarApo06casilla);
router.get('/:id' , apo06casillascontroller.obtenerApo06casilla);
router.delete('/:id' , apo06casillascontroller.eliminarApo06casilla);

module.exports = router;