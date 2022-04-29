//Rutas para producto
const express = require('express');
const router = express.Router();
const tabladosController = require('../controllers/tabladosController');

//API POR PRODUCTO
router.post('/', tabladosController.crearTablados);
router.get('/' , tabladosController.obtenerTablado);
router.put('/:id' , tabladosController.actualizarTablados);
router.get('/:id' , tabladosController.obtenerTablados);
router.delete('/:id' , tabladosController.eliminarTablados);

module.exports = router;