//Rutas para producto
const express = require('express');
const router = express.Router();
const tablatresController = require('../controllers/tablatresController');

//API POR PRODUCTO
router.post('/', tablatresController.crearTablatres);
router.get('/' , tablatresController.obtenerTablatres);
router.put('/:id' , tablatresController.actualizarTablatres);
router.get('/:id' , tablatresController.obtenerTablatress);
router.delete('/:id' , tablatresController.eliminarTablatres);

module.exports = router;