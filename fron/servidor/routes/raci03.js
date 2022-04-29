//Rutas para raci03
const express = require('express');
const router = express.Router();
const raci03Controller = require('../controllers/raci03Controller');

//API POR raci03
router.post('/', raci03Controller.crearRaci03);
router.get('/' , raci03Controller.obtenerRaci03s);
router.put('/:id' , raci03Controller.actualizarRaci03);
router.get('/:id' , raci03Controller.obtenerRaci03);
router.delete('/:id' , raci03Controller.eliminarRaci03);

module.exports = router;