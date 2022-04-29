const mongoose = require('mongoose');

const Apo011casillaSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo011casilla1: {
    type: String,
    required: true
    },
    apo011casilla2: {
        type: String,
        required: true
    },
    apo011casilla3: {
        type: String,
        required: true
    },
    apo011casilla4: {
        type: String,
        required: true
    },
    apo011casilla5: {
        type: String,
        required: true
    },
    apo011casilla6: {
        type: String,
        required: true
    },
    apo011casilla7: {
        type: String,
        required: true
    },
    apo011casilla8: {
        type: String,
        required: true
    },
    apo011casilla9: {
        type: String,
        required: true
    },
    apo011casilla10: {
        type: String,
        required: true
    },
    apo011casilla11: {
        type: String,
        required: true
    },
    apo011casilla12: {
        type: String,
        required: true
    },
    apo011casilla13: {
        type: String,
        required: true
    },
    apo011casilla14: {
        type: String,
        required: true
    },
    apo011casilla15: {
        type: String,
        required: true
    },
    apo011casilla16: {
        type: String,
        required: true
    },
    apo011casilla17: {
        type: String,
        required: true
    },
    apo011casilla18: {
        type: String,
        required: true
    },
    apo011casilla19: {
        type: String,
        required: true
    },
    apo011casilla20: {
        type: String,
        required: true
    },
    apo011casilla21: {
        type: String,
        required: true
    },
    apo011casilla22: {
        type: String,
        required: true
    },
    apo011casilla23: {
        type: String,
        required: true
    },
    apo011casilla24: {
        type: String,
        required: true
    },
    apo011casilla25: {
        type: String,
        required: true
    },
    apo011casilla26: {
        type: String,
        required: true
    },
    apo011casilla27: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo011casilla', Apo011casillaSchema);
