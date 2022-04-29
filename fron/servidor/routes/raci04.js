//Rutas para raci03
const express = require('express');
const router = express.Router();
const raci04Controller = require('../controllers/raci04Controller');

//API POR raci04
router.post('/', raci04Controller.crearRaci04);
router.get('/' , raci04Controller.obtenerRaci04s);
router.put('/:id' , raci04Controller.actualizarRaci04);
router.get('/:id' , raci04Controller.obtenerRaci04);
router.delete('/:id' , raci04Controller.eliminarRaci04);

module.exports = router;