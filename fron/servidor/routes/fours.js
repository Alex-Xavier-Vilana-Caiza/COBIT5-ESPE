//Rutas 
const express = require('express');
const router = express.Router();
const fourController = require('../controllers/fourController');

//API 
router.post('/', fourController.crearFour);
router.get('/' , fourController.obtenerFours);
router.put('/:id' , fourController.actualizarFour);
router.get('/:id' , fourController.obtenerFour);
router.delete('/:id' ,fourController.eliminarFour);

module.exports = router;