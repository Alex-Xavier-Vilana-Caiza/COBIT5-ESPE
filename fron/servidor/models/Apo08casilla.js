const mongoose = require('mongoose');

const Apo08casillaSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo08casilla1: {
    type: String,
    required: true
    },
    apo08casilla2: {
        type: String,
        required: true
    },
    apo08casilla3: {
        type: String,
        required: true
    },
    apo08casilla4: {
        type: String,
        required: true
    },
    apo08casilla5: {
        type: String,
        required: true
    },
    apo08casilla6: {
        type: String,
        required: true
    },
    apo08casilla7: {
        type: String,
        required: true
    },
    apo08casilla8: {
        type: String,
        required: true
    },
    apo08casilla9: {
        type: String,
        required: true
    },
    apo08casilla10: {
        type: String,
        required: true
    },
    apo08casilla11: {
        type: String,
        required: true
    },
    apo08casilla12: {
        type: String,
        required: true
    },
    apo08casilla13: {
        type: String,
        required: true
    },
    apo08casilla14: {
        type: String,
        required: true
    },
    apo08casilla15: {
        type: String,
        required: true
    },
    apo08casilla16: {
        type: String,
        required: true
    },
    apo08casilla17: {
        type: String,
        required: true
    },
    apo08casilla18: {
        type: String,
        required: true
    },
    apo08casilla19: {
        type: String,
        required: true
    },
    apo08casilla20: {
        type: String,
        required: true
    },
    apo08casilla21: {
        type: String,
        required: true
    },
    apo08casilla22: {
        type: String,
        required: true
    },
    apo08casilla23: {
        type: String,
        required: true
    },
    apo08casilla24: {
        type: String,
        required: true
    },
    apo08casilla25: {
        type: String,
        required: true
    },
    apo08casilla26: {
        type: String,
        required: true
    },
    apo08casilla27: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo08casilla', Apo08casillaSchema);
