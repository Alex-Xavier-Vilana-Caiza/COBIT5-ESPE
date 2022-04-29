//Rutas para raci02
const express = require('express');
const router = express.Router();
const raci02Controller = require('../controllers/raci02Controller');

//API POR raci02
router.post('/', raci02Controller.crearRaci02);
router.get('/' , raci02Controller.obtenerRaci02s);
router.put('/:id' , raci02Controller.actualizarRaci02);
router.get('/:id' , raci02Controller.obtenerRaci02);
router.delete('/:id' , raci02Controller.eliminarRaci02);

module.exports = router;