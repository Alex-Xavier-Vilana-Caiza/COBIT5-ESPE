//Rutas para raci01
const express = require('express');
const router = express.Router();
const racicabe04Controller = require('../controllers/racicabe04Controller');

//API POR raci01
router.post('/', racicabe04Controller.crearRacicabe04);
router.get('/' , racicabe04Controller.obtenerRacicabe04s);
router.put('/:id' , racicabe04Controller.actualizarRacicabe04);
router.get('/:id' , racicabe04Controller.obtenerRacicabe04);
router.delete('/:id' , racicabe04Controller.eliminarRacicabe04);

module.exports = router;