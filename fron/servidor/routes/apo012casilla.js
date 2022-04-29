//Rutas 
const express = require('express');
const router = express.Router();
const apo012casillascontroller = require('../controllers/apo012casillascontroller');

//API 
router.post('/', apo012casillascontroller.crearApo012casilla);
router.get('/' , apo012casillascontroller.obtenerApo012casillas);
router.put('/:id' , apo012casillascontroller.actualizarApo012casilla);
router.get('/:id' , apo012casillascontroller.obtenerApo012casilla);
router.delete('/:id' , apo012casillascontroller.eliminarApo012casilla);

module.exports = router;