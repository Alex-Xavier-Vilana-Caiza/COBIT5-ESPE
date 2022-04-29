//Rutas para producto
const express = require('express');
const router = express.Router();
const cabecerab05Controller = require('../controllers/cabecerab05Controller');

//API POR PRODUCTO
router.post('/', cabecerab05Controller.crearCabecerab05);
router.get('/' , cabecerab05Controller.obtenerCabecerasb05);
router.put('/:id' , cabecerab05Controller.actualizarCabecerab05);
router.get('/:id' , cabecerab05Controller.obtenerCabecerab05);
router.delete('/:id' , cabecerab05Controller.eliminarCabecerab05);

module.exports = router;