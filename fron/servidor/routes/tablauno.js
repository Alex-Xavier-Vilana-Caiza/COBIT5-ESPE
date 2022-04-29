//Rutas para producto
const express = require('express');
const router = express.Router();
const tablaunoController = require('../controllers/tablaunoController');

//API POR PRODUCTO
router.post('/', tablaunoController.crearTablauno);
router.get('/' , tablaunoController.obtenerTablauno);
router.put('/:id' , tablaunoController.actualizarTablauno);
router.get('/:id' , tablaunoController.obtenerTablaunos);
router.delete('/:id' , tablaunoController.eliminarTablauno);

module.exports = router;