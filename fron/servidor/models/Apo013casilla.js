const mongoose = require('mongoose');

const Apo013casillaSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo013casilla1: {
    type: String,
    required: true
    },
    apo013casilla2: {
        type: String,
        required: true
    },
    apo013casilla3: {
        type: String,
        required: true
    },
    apo013casilla4: {
        type: String,
        required: true
    },
    apo013casilla5: {
        type: String,
        required: true
    },
    apo013casilla6: {
        type: String,
        required: true
    },
    apo013casilla7: {
        type: String,
        required: true
    },
    apo013casilla8: {
        type: String,
        required: true
    },
    apo013casilla9: {
        type: String,
        required: true
    },
    apo013casilla10: {
        type: String,
        required: true
    },
    apo013casilla11: {
        type: String,
        required: true
    },
    apo013casilla12: {
        type: String,
        required: true
    },
    apo013casilla13: {
        type: String,
        required: true
    },
    apo013casilla14: {
        type: String,
        required: true
    },
    apo013casilla15: {
        type: String,
        required: true
    },
    apo013casilla16: {
        type: String,
        required: true
    },
    apo013casilla17: {
        type: String,
        required: true
    },
    apo013casilla18: {
        type: String,
        required: true
    },
    apo013casilla19: {
        type: String,
        required: true
    },
    apo013casilla20: {
        type: String,
        required: true
    },
    apo013casilla21: {
        type: String,
        required: true
    },
    apo013casilla22: {
        type: String,
        required: true
    },
    apo013casilla23: {
        type: String,
        required: true
    },
    apo013casilla24: {
        type: String,
        required: true
    },
    apo013casilla25: {
        type: String,
        required: true
    },
    apo013casilla26: {
        type: String,
        required: true
    },
    apo013casilla27: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo013casilla', Apo013casillaSchema);
