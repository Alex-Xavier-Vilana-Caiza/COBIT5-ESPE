const mongoose = require('mongoose');

const Apo05casillaSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo05casilla1: {
    type: String,
    required: true
    },
    apo05casilla2: {
        type: String,
        required: true
    },
    apo05casilla3: {
        type: String,
        required: true
    },
    apo05casilla4: {
        type: String,
        required: true
    },
    apo05casilla5: {
        type: String,
        required: true
    },
    apo05casilla6: {
        type: String,
        required: true
    },
    apo05casilla7: {
        type: String,
        required: true
    },
    apo05casilla8: {
        type: String,
        required: true
    },
    apo05casilla9: {
        type: String,
        required: true
    },
    apo05casilla10: {
        type: String,
        required: true
    },
    apo05casilla11: {
        type: String,
        required: true
    },
    apo05casilla12: {
        type: String,
        required: true
    },
    apo05casilla13: {
        type: String,
        required: true
    },
    apo05casilla14: {
        type: String,
        required: true
    },
    apo05casilla15: {
        type: String,
        required: true
    },
    apo05casilla16: {
        type: String,
        required: true
    },
    apo05casilla17: {
        type: String,
        required: true
    },
    apo05casilla18: {
        type: String,
        required: true
    },
    apo05casilla19: {
        type: String,
        required: true
    },
    apo05casilla20: {
        type: String,
        required: true
    },
    apo05casilla21: {
        type: String,
        required: true
    },
    apo05casilla22: {
        type: String,
        required: true
    },
    apo05casilla23: {
        type: String,
        required: true
    },
    apo05casilla24: {
        type: String,
        required: true
    },
    apo05casilla25: {
        type: String,
        required: true
    },
    apo05casilla26: {
        type: String,
        required: true
    },
    apo05casilla27: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo05casilla', Apo05casillaSchema);
