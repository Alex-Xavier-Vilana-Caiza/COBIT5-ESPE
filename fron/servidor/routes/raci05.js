//Rutas para raci05
const express = require('express');
const router = express.Router();
const raci05Controller = require('../controllers/raci05Controller');

//API POR raci04
router.post('/', raci05Controller.crearRaci05);
router.get('/' , raci05Controller.obtenerRaci05s);
router.put('/:id' , raci05Controller.actualizarRaci05);
router.get('/:id' , raci05Controller.obtenerRaci05);
router.delete('/:id' , raci05Controller.eliminarRaci05);

module.exports = router;