//Rutas 
const express = require('express');
const router = express.Router();
const apo07casillascontroller = require('../controllers/apo07casillascontroller');

//API 
router.post('/', apo07casillascontroller.crearApo07casilla);
router.get('/' , apo07casillascontroller.obtenerApo07casillas);
router.put('/:id' , apo07casillascontroller.actualizarApo07casilla);
router.get('/:id' , apo07casillascontroller.obtenerApo07casilla);
router.delete('/:id' , apo07casillascontroller.eliminarApo07casilla);

module.exports = router;