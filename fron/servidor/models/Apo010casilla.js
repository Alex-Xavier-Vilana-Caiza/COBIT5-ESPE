const mongoose = require('mongoose');

const Apo010casillaSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo010casilla1: {
    type: String,
    required: true
    },
    apo010casilla2: {
        type: String,
        required: true
    },
    apo010casilla3: {
        type: String,
        required: true
    },
    apo010casilla4: {
        type: String,
        required: true
    },
    apo010casilla5: {
        type: String,
        required: true
    },
    apo010casilla6: {
        type: String,
        required: true
    },
    apo010casilla7: {
        type: String,
        required: true
    },
    apo010casilla8: {
        type: String,
        required: true
    },
    apo010casilla9: {
        type: String,
        required: true
    },
    apo010casilla10: {
        type: String,
        required: true
    },
    apo010casilla11: {
        type: String,
        required: true
    },
    apo010casilla12: {
        type: String,
        required: true
    },
    apo010casilla13: {
        type: String,
        required: true
    },
    apo010casilla14: {
        type: String,
        required: true
    },
    apo010casilla15: {
        type: String,
        required: true
    },
    apo010casilla16: {
        type: String,
        required: true
    },
    apo010casilla17: {
        type: String,
        required: true
    },
    apo010casilla18: {
        type: String,
        required: true
    },
    apo010casilla19: {
        type: String,
        required: true
    },
    apo010casilla20: {
        type: String,
        required: true
    },
    apo010casilla21: {
        type: String,
        required: true
    },
    apo010casilla22: {
        type: String,
        required: true
    },
    apo010casilla23: {
        type: String,
        required: true
    },
    apo010casilla24: {
        type: String,
        required: true
    },
    apo010casilla25: {
        type: String,
        required: true
    },
    apo010casilla26: {
        type: String,
        required: true
    },
    apo010casilla27: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo010casilla', Apo010casillaSchema);
