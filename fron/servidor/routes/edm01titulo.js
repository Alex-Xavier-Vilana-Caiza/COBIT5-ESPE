//Rutas para producto
const express = require('express');
const router = express.Router();
const edm01titulocontroller = require('../controllers/edm01titulocontroller');

//API EDM01TITULOCONTROLLER

router.post('/', edm01titulocontroller.crearEdm01titulo);
router.get('/' , edm01titulocontroller.obtenerEdm01titulos);
router.put('/:id' , edm01titulocontroller.actualizarEdm01titulo);
router.get('/:id' , edm01titulocontroller.obtenerEdm01titulo);
router.delete('/:id' , edm01titulocontroller.eliminarEdm01titulo);

module.exports = router;