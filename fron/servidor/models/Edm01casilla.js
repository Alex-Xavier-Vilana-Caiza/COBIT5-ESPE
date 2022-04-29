const mongoose = require('mongoose');

const Edm01casillaSchema = mongoose.Schema({
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    edm01casilla1: {
    type: String,
    required: true
    },
    edm01casilla2: {
        type: String,
        required: true
    },
    edm01casilla3: {
        type: String,
        required: true
    },
    edm01casilla4: {
        type: String,
        required: true
    },
    edm01casilla5: {
        type: String,
        required: true
    },
    edm01casilla6: {
        type: String,
        required: true
    },
    edm01casilla7: {
        type: String,
        required: true
    },
    edm01casilla8: {
        type: String,
        required: true
    },
    edm01casilla9: {
        type: String,
        required: true
    },
    edm01casilla10: {
        type: String,
        required: true
    },
    edm01casilla11: {
        type: String,
        required: true
    },
    edm01casilla12: {
        type: String,
        required: true
    },
    edm01casilla13: {
        type: String,
        required: true
    },
    edm01casilla14: {
        type: String,
        required: true
    },
    edm01casilla15: {
        type: String,
        required: true
    },
    edm01casilla16: {
        type: String,
        required: true
    },
    edm01casilla17: {
        type: String,
        required: true
    },
    edm01casilla18: {
        type: String,
        required: true
    },
    edm01casilla19: {
        type: String,
        required: true
    },
    edm01casilla20: {
        type: String,
        required: true
    },
    edm01casilla21: {
        type: String,
        required: true
    },
    edm01casilla22: {
        type: String,
        required: true
    },
    edm01casilla23: {
        type: String,
        required: true
    },
    edm01casilla24: {
        type: String,
        required: true
    },
    edm01casilla25: {
        type: String,
        required: true
    },
    edm01casilla26: {
        type: String,
        required: true
    },
    edm01casilla27: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Edm01casilla', Edm01casillaSchema);


