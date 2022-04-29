//Rutas para producto
const express = require('express');
const router = express.Router();
const tablazController = require('../controllers/tablazController');

//API POR PRODUCTO
router.post('/', tablazController.crearTablaz);
router.get('/' , tablazController.obtenerTablazz);
router.put('/:id' , tablazController.actualizarTablaz);
router.get('/:id' , tablazController.obtenertablaz);
router.delete('/:id' , tablazController.eliminartablaz);

module.exports = router;