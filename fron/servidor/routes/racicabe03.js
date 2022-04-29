//Rutas para raci01
const express = require('express');
const router = express.Router();
const racicabe03Controller = require('../controllers/racicabe03Controller');

//API POR raci01
router.post('/', racicabe03Controller.crearRacicabe03);
router.get('/' , racicabe03Controller.obtenerRacicabe03s);
router.put('/:id' , racicabe03Controller.actualizarRacicabe03);
router.get('/:id' , racicabe03Controller.obtenerRacicabe03);
router.delete('/:id' , racicabe03Controller.eliminarRacicabe03);

module.exports = router;