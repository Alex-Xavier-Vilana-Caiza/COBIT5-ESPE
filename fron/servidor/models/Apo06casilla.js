const mongoose = require('mongoose');

const Apo06casillaSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo06casilla1: {
    type: String,
    required: true
    },
    apo06casilla2: {
        type: String,
        required: true
    },
    apo06casilla3: {
        type: String,
        required: true
    },
    apo06casilla4: {
        type: String,
        required: true
    },
    apo06casilla5: {
        type: String,
        required: true
    },
    apo06casilla6: {
        type: String,
        required: true
    },
    apo06casilla7: {
        type: String,
        required: true
    },
    apo06casilla8: {
        type: String,
        required: true
    },
    apo06casilla9: {
        type: String,
        required: true
    },
    apo06casilla10: {
        type: String,
        required: true
    },
    apo06casilla11: {
        type: String,
        required: true
    },
    apo06casilla12: {
        type: String,
        required: true
    },
    apo06casilla13: {
        type: String,
        required: true
    },
    apo06casilla14: {
        type: String,
        required: true
    },
    apo06casilla15: {
        type: String,
        required: true
    },
    apo06casilla16: {
        type: String,
        required: true
    },
    apo06casilla17: {
        type: String,
        required: true
    },
    apo06casilla18: {
        type: String,
        required: true
    },
    apo06casilla19: {
        type: String,
        required: true
    },
    apo06casilla20: {
        type: String,
        required: true
    },
    apo06casilla21: {
        type: String,
        required: true
    },
    apo06casilla22: {
        type: String,
        required: true
    },
    apo06casilla23: {
        type: String,
        required: true
    },
    apo06casilla24: {
        type: String,
        required: true
    },
    apo06casilla25: {
        type: String,
        required: true
    },
    apo06casilla26: {
        type: String,
        required: true
    },
    apo06casilla27: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo06casilla', Apo06casillaSchema);
