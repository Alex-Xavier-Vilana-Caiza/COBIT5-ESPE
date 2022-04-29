//Rutas para producto
const express = require('express');
const router = express.Router();
const cabecerab09Controller = require('../controllers/cabecerab09Controller');

//API POR PRODUCTO
router.post('/', cabecerab09Controller.crearCabecerab09);
router.get('/' , cabecerab09Controller.obtenerCabecerasb09);
router.put('/:id' , cabecerab09Controller.actualizarCabecerab09);
router.get('/:id' , cabecerab09Controller.obtenerCabecerab09);
router.delete('/:id' , cabecerab09Controller.eliminarCabecerab09);

module.exports = router;