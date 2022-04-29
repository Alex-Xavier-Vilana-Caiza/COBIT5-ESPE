//Rutas para raci01
const express = require('express');
const router = express.Router();
const racicabe06Controller = require('../controllers/racicabe06Controller');

//API POR raci01
router.post('/', racicabe06Controller.crearRacicabe06);
router.get('/' , racicabe06Controller.obtenerRacicabe06s);
router.put('/:id' , racicabe06Controller.actualizarRacicabe06);
router.get('/:id' , racicabe06Controller.obtenerRacicabe06);
router.delete('/:id' , racicabe06Controller.eliminarRacicabe06);

module.exports = router;