//Rutas para raci01
const express = require('express');
const router = express.Router();
const racicabe01Controller = require('../controllers/racicabe01Controller');

//API POR raci01
router.post('/', racicabe01Controller.crearRacicabe01);
router.get('/' , racicabe01Controller.obtenerRacicabe01s);
router.put('/:id' , racicabe01Controller.actualizarRacicabe01);
router.get('/:id' , racicabe01Controller.obtenerRacicabe01);
router.delete('/:id' , racicabe01Controller.eliminarRacicabe01);

module.exports = router;