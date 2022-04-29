//Rutas para producto
const express = require('express');
const router = express.Router();
const tablaseisController = require('../controllers/tablaseisController');

//API POR PRODUCTO
router.post('/', tablaseisController.crearTablaseis);
router.get('/' , tablaseisController.obtenerTablaseis);
router.put('/:id' , tablaseisController.actualizarTablaseis);
router.get('/:id' , tablaseisController.obtenerTablaseiss);
router.delete('/:id' , tablaseisController.eliminarTablaseis);

module.exports = router;