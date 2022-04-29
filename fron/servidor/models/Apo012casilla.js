const mongoose = require('mongoose');

const Apo012casillaSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo012casilla1: {
    type: String,
    required: true
    },
    apo012casilla2: {
        type: String,
        required: true
    },
    apo012casilla3: {
        type: String,
        required: true
    },
    apo012casilla4: {
        type: String,
        required: true
    },
    apo012casilla5: {
        type: String,
        required: true
    },
    apo012casilla6: {
        type: String,
        required: true
    },
    apo012casilla7: {
        type: String,
        required: true
    },
    apo012casilla8: {
        type: String,
        required: true
    },
    apo012casilla9: {
        type: String,
        required: true
    },
    apo012casilla10: {
        type: String,
        required: true
    },
    apo012casilla11: {
        type: String,
        required: true
    },
    apo012casilla12: {
        type: String,
        required: true
    },
    apo012casilla13: {
        type: String,
        required: true
    },
    apo012casilla14: {
        type: String,
        required: true
    },
    apo012casilla15: {
        type: String,
        required: true
    },
    apo012casilla16: {
        type: String,
        required: true
    },
    apo012casilla17: {
        type: String,
        required: true
    },
    apo012casilla18: {
        type: String,
        required: true
    },
    apo012casilla19: {
        type: String,
        required: true
    },
    apo012casilla20: {
        type: String,
        required: true
    },
    apo012casilla21: {
        type: String,
        required: true
    },
    apo012casilla22: {
        type: String,
        required: true
    },
    apo012casilla23: {
        type: String,
        required: true
    },
    apo012casilla24: {
        type: String,
        required: true
    },
    apo012casilla25: {
        type: String,
        required: true
    },
    apo012casilla26: {
        type: String,
        required: true
    },
    apo012casilla27: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo012casilla', Apo012casillaSchema);
