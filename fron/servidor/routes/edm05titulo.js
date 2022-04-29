//Rutas para producto
const express = require('express');
const router = express.Router();
const edm05titulocontroller = require('../controllers/edm05titulocontroller');

//API EDM05TITULOCONTROLLER

router.post('/', edm05titulocontroller.crearEdm05titulo);
router.get('/' , edm05titulocontroller.obtenerEdm05titulos);
router.put('/:id' , edm05titulocontroller.actualizarEdm05titulo);
router.get('/:id' , edm05titulocontroller.obtenerEdm05titulo);
router.delete('/:id' , edm05titulocontroller.eliminarEdm05titulo);

module.exports = router;