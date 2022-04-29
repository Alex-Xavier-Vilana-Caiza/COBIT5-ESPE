const express = require('express');
const router = express.Router();
const cabeceradosController = require('../controllers/cabeceradosController');

router.post('/', cabeceradosController.crearCabecerados);
router.get('/', cabeceradosController.obtenerCabecerasdo);
router.put('/:id', cabeceradosController.actualizarCabecerados);
router.get('/:id', cabeceradosController.obtenerCabecerados);
router.delete('/:id', cabeceradosController.eliminarCabecerados);

module.exports = router;