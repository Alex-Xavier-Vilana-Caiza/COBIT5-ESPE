//Rutas para raci01
const express = require('express');
const router = express.Router();
const raci01Controller = require('../controllers/raci01Controller');

//API POR raci01
router.post('/', raci01Controller.crearRaci01);
router.get('/' , raci01Controller.obtenerRaci01s);
router.put('/:id' , raci01Controller.actualizarRaci01);
router.get('/:id' , raci01Controller.obtenerRaci01);
router.delete('/:id' , raci01Controller.eliminarRaci01);

module.exports = router;