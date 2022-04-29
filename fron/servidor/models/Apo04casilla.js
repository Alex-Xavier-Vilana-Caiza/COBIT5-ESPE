const mongoose = require('mongoose');

const Apo04casillaSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo04casilla1: {
    type: String,
    required: true
    },
    apo04casilla2: {
        type: String,
        required: true
    },
    apo04casilla3: {
        type: String,
        required: true
    },
    apo04casilla4: {
        type: String,
        required: true
    },
    apo04casilla5: {
        type: String,
        required: true
    },
    apo04casilla6: {
        type: String,
        required: true
    },
    apo04casilla7: {
        type: String,
        required: true
    },
    apo04casilla8: {
        type: String,
        required: true
    },
    apo04casilla9: {
        type: String,
        required: true
    },
    apo04casilla10: {
        type: String,
        required: true
    },
    apo04casilla11: {
        type: String,
        required: true
    },
    apo04casilla12: {
        type: String,
        required: true
    },
    apo04casilla13: {
        type: String,
        required: true
    },
    apo04casilla14: {
        type: String,
        required: true
    },
    apo04casilla15: {
        type: String,
        required: true
    },
    apo04casilla16: {
        type: String,
        required: true
    },
    apo04casilla17: {
        type: String,
        required: true
    },
    apo04casilla18: {
        type: String,
        required: true
    },
    apo04casilla19: {
        type: String,
        required: true
    },
    apo04casilla20: {
        type: String,
        required: true
    },
    apo04casilla21: {
        type: String,
        required: true
    },
    apo04casilla22: {
        type: String,
        required: true
    },
    apo04casilla23: {
        type: String,
        required: true
    },
    apo04casilla24: {
        type: String,
        required: true
    },
    apo04casilla25: {
        type: String,
        required: true
    },
    apo04casilla26: {
        type: String,
        required: true
    },
    apo04casilla27: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo04casilla', Apo04casillaSchema);
