//Rutas para raci01
const express = require('express');
const router = express.Router();
const racicabe05Controller = require('../controllers/racicabe05Controller');

//API POR raci01
router.post('/', racicabe05Controller.crearRacicabe05);
router.get('/' , racicabe05Controller.obtenerRacicabe05s);
router.put('/:id' , racicabe05Controller.actualizarRacicabe05);
router.get('/:id' , racicabe05Controller.obtenerRacicabe05);
router.delete('/:id' , racicabe05Controller.eliminarRacicabe05);

module.exports = router;