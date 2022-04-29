const mongoose = require('mongoose');

const Apo09casillaSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo09casilla1: {
    type: String,
    required: true
    },
    apo09casilla2: {
        type: String,
        required: true
    },
    apo09casilla3: {
        type: String,
        required: true
    },
    apo09casilla4: {
        type: String,
        required: true
    },
    apo09casilla5: {
        type: String,
        required: true
    },
    apo09casilla6: {
        type: String,
        required: true
    },
    apo09casilla7: {
        type: String,
        required: true
    },
    apo09casilla8: {
        type: String,
        required: true
    },
    apo09casilla9: {
        type: String,
        required: true
    },
    apo09casilla10: {
        type: String,
        required: true
    },
    apo09casilla11: {
        type: String,
        required: true
    },
    apo09casilla12: {
        type: String,
        required: true
    },
    apo09casilla13: {
        type: String,
        required: true
    },
    apo09casilla14: {
        type: String,
        required: true
    },
    apo09casilla15: {
        type: String,
        required: true
    },
    apo09casilla16: {
        type: String,
        required: true
    },
    apo09casilla17: {
        type: String,
        required: true
    },
    apo09casilla18: {
        type: String,
        required: true
    },
    apo09casilla19: {
        type: String,
        required: true
    },
    apo09casilla20: {
        type: String,
        required: true
    },
    apo09casilla21: {
        type: String,
        required: true
    },
    apo09casilla22: {
        type: String,
        required: true
    },
    apo09casilla23: {
        type: String,
        required: true
    },
    apo09casilla24: {
        type: String,
        required: true
    },
    apo09casilla25: {
        type: String,
        required: true
    },
    apo09casilla26: {
        type: String,
        required: true
    },
    apo09casilla27: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo09casilla', Apo09casillaSchema);
