//Rutas para raci05
const express = require('express');
const router = express.Router();
const raci06Controller = require('../controllers/raci06Controller');

//API POR raci04
router.post('/', raci06Controller.crearRaci06);
router.get('/' , raci06Controller.obtenerRaci06s);
router.put('/:id' , raci06Controller.actualizarRaci06);
router.get('/:id' , raci06Controller.obtenerRaci06);
router.delete('/:id' , raci06Controller.eliminarRaci06);

module.exports = router;