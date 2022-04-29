//Rutas para producto
const express = require('express');
const router = express.Router();
const cabecerab10Controller = require('../controllers/cabecerab10Controller');

//API POR PRODUCTO
router.post('/', cabecerab10Controller.crearCabecerab10);
router.get('/' , cabecerab10Controller.obtenerCabecerasb10);
router.put('/:id' , cabecerab10Controller.actualizarCabecerab10);
router.get('/:id' , cabecerab10Controller.obtenerCabecerab10);
router.delete('/:id' , cabecerab10Controller.eliminarCabecerab10);

module.exports = router;