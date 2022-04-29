//Rutas para producto
const express = require('express');
const router = express.Router();
const cabecerab03Controller = require('../controllers/cabecerab03Controller');

//API POR PRODUCTO
router.post('/', cabecerab03Controller.crearCabecerab03);
router.get('/' , cabecerab03Controller.obtenerCabecerasb03);
router.put('/:id' , cabecerab03Controller.actualizarCabecerab03);
router.get('/:id' , cabecerab03Controller.obtenerCabecerab03);
router.delete('/:id' , cabecerab03Controller.eliminarCabecerab03);

module.exports = router;