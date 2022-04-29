const mongoose = require('mongoose');

const Edm05casillaSchema = mongoose.Schema({
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    edm05casilla1: {
    type: String,
    required: true
    },
    edm05casilla2: {
        type: String,
        required: true
    },
    edm05casilla3: {
        type: String,
        required: true
    },
    edm05casilla4: {
        type: String,
        required: true
    },
    edm05casilla5: {
        type: String,
        required: true
    },
    edm05casilla6: {
        type: String,
        required: true
    },
    edm05casilla7: {
        type: String,
        required: true
    },
    edm05casilla8: {
        type: String,
        required: true
    },
    edm05casilla9: {
        type: String,
        required: true
    },
    edm05casilla10: {
        type: String,
        required: true
    },
    edm05casilla11: {
        type: String,
        required: true
    },
    edm05casilla12: {
        type: String,
        required: true
    },
    edm05casilla13: {
        type: String,
        required: true
    },
    edm05casilla14: {
        type: String,
        required: true
    },
    edm05casilla15: {
        type: String,
        required: true
    },
    edm05casilla16: {
        type: String,
        required: true
    },
    edm05casilla17: {
        type: String,
        required: true
    },
    edm05casilla18: {
        type: String,
        required: true
    },
    edm05casilla19: {
        type: String,
        required: true
    },
    edm05casilla20: {
        type: String,
        required: true
    },
    edm05casilla21: {
        type: String,
        required: true
    },
    edm05casilla22: {
        type: String,
        required: true
    },
    edm05casilla23: {
        type: String,
        required: true
    },
    edm05casilla24: {
        type: String,
        required: true
    },
    edm05casilla25: {
        type: String,
        required: true
    },
    edm05casilla26: {
        type: String,
        required: true
    },
    edm05casilla27: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Edm05casilla', Edm05casillaSchema);


