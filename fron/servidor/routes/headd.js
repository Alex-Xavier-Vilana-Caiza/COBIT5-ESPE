const express = require('express');
const router = express.Router();
const headController=require('../controllers/headController')


router.post('/', headController.crearHead);
router.get('/', headController.obtenerHeads);
router.put('/:id', headController.actualizarHead);
router.get('/:id', headController.obtenerHead);
router.delete('/:id', headController.eliminarHead);

module.exports = router;  