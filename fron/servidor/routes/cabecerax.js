const express = require('express');
const router = express.Router();
const cabeceraxController = require('../controllers/cabeceraxController');

router.post('/', cabeceraxController.crearCabecerax);
router.get('/', cabeceraxController.obtenerCabecerasx);
router.put('/:id', cabeceraxController.actualizarCabecerax);
router.get('/:id', cabeceraxController.obtenerCabecerax);
router.delete('/:id', cabeceraxController.eliminarCabecerax);

module.exports = router;



