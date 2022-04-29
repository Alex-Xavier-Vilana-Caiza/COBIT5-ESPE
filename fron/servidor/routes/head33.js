const express = require('express');
const router = express.Router();
const head3Controller=require('../controllers/head3Controller')


router.post('/', head3Controller.crearArm);
router.get('/', head3Controller.obtenerArms);
router.put('/:id', head3Controller.actualizarArm);
router.get('/:id', head3Controller.obtenerArm);
router.delete('/:id', head3Controller.eliminarArm);

module.exports = router;  