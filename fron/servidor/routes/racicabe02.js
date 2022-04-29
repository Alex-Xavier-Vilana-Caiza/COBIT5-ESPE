//Rutas para raci01
const express = require('express');
const router = express.Router();
const racicabe02Controller = require('../controllers/racicabe02Controller');

//API POR raci01
router.post('/', racicabe02Controller.crearRacicabe02);
router.get('/' , racicabe02Controller.obtenerRacicabe02s);
router.put('/:id' , racicabe02Controller.actualizarRacicabe02);
router.get('/:id' , racicabe02Controller.obtenerRacicabe02);
router.delete('/:id' , racicabe02Controller.eliminarRacicabe02);

module.exports = router;