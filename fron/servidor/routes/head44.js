const express =require('express');
const router = express.Router();
const head4Controller=require('../controllers/head4Controller')


router.post('/', head4Controller.crearBody);
router.get('/', head4Controller.obtenerBodys);
router.put('/:id', head4Controller.actualizarBody);
router.get('/:id', head4Controller.obtenerBody);
router.delete('/:id', head4Controller.eliminarBody);

module.exports = router; 
