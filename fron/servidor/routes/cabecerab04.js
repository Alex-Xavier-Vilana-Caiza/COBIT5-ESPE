//Rutas para producto
const express = require('express');
const router = express.Router();
const cabecerab04Controller = require('../controllers/cabecerab04Controller');

//API POR PRODUCTO
router.post('/', cabecerab04Controller.crearCabecerab04);
router.get('/' , cabecerab04Controller.obtenerCabecerasb04);
router.put('/:id' , cabecerab04Controller.actualizarCabecerab04);
router.get('/:id' , cabecerab04Controller.obtenerCabecerab04);
router.delete('/:id' , cabecerab04Controller.eliminarCabecerab04);

module.exports = router;