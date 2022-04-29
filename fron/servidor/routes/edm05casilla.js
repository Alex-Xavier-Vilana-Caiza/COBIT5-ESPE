//Rutas para producto
const express = require('express');
const router = express.Router();
const edm05casillacontroller = require('../controllers/edm05casillacontroller');

//API EDM05CASILLACONTROLLER

router.post('/', edm05casillacontroller.crearEdm05casilla);
router.get('/' , edm05casillacontroller.obtenerEdm05casillas);
router.put('/:id' , edm05casillacontroller.actualizarEdm05casilla);
router.get('/:id' , edm05casillacontroller.obtenerEdm05casilla);
router.delete('/:id' , edm05casillacontroller.eliminarEdm05casilla);

module.exports = router;