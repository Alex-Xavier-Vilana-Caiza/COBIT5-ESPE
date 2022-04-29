//Rutas para producto
const express = require('express');
const router = express.Router();
const tablaxController = require('../controllers/tablaxController');

//API POR PRODUCTO
router.post('/', tablaxController.crearTablax);
router.get('/' , tablaxController.obtenerTablaxx);
router.put('/:id' , tablaxController.actualizarTablax);
router.get('/:id' , tablaxController.obtenertablax);
router.delete('/:id' , tablaxController.eliminartablax);

module.exports = router;