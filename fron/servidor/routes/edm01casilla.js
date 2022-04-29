//Rutas para producto
const express = require('express');
const router = express.Router();
const edm01casillacontroller = require('../controllers/edm01casillacontroller');

//API EDM01CASILLACONTROLLER

router.post('/', edm01casillacontroller.crearEdm01casilla);
router.get('/' , edm01casillacontroller.obtenerEdm01casillas);
router.put('/:id' , edm01casillacontroller.actualizarEdm01casilla);
router.get('/:id' , edm01casillacontroller.obtenerEdm01casilla);
router.delete('/:id' , edm01casillacontroller.eliminarEdm01casilla);

module.exports = router;