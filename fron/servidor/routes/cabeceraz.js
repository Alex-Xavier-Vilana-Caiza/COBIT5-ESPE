const express = require('express');
const router = express.Router();
const cabecerazController = require('../controllers/cabecerazController');

router.post('/', cabecerazController.crearCabeceraz);
router.get('/', cabecerazController.obtenerCabecerasz);
router.put('/:id', cabecerazController.actualizarCabeceraz);
router.get('/:id', cabecerazController.obtenerCabeceraz);
router.delete('/:id', cabecerazController.eliminarCabeceraz);

module.exports = router;