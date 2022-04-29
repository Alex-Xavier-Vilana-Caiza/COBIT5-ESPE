const mongoose = require('mongoose');

const Apo07casillaSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo07casilla1: {
    type: String,
    required: true
    },
    apo07casilla2: {
        type: String,
        required: true
    },
    apo07casilla3: {
        type: String,
        required: true
    },
    apo07casilla4: {
        type: String,
        required: true
    },
    apo07casilla5: {
        type: String,
        required: true
    },
    apo07casilla6: {
        type: String,
        required: true
    },
    apo07casilla7: {
        type: String,
        required: true
    },
    apo07casilla8: {
        type: String,
        required: true
    },
    apo07casilla9: {
        type: String,
        required: true
    },
    apo07casilla10: {
        type: String,
        required: true
    },
    apo07casilla11: {
        type: String,
        required: true
    },
    apo07casilla12: {
        type: String,
        required: true
    },
    apo07casilla13: {
        type: String,
        required: true
    },
    apo07casilla14: {
        type: String,
        required: true
    },
    apo07casilla15: {
        type: String,
        required: true
    },
    apo07casilla16: {
        type: String,
        required: true
    },
    apo07casilla17: {
        type: String,
        required: true
    },
    apo07casilla18: {
        type: String,
        required: true
    },
    apo07casilla19: {
        type: String,
        required: true
    },
    apo07casilla20: {
        type: String,
        required: true
    },
    apo07casilla21: {
        type: String,
        required: true
    },
    apo07casilla22: {
        type: String,
        required: true
    },
    apo07casilla23: {
        type: String,
        required: true
    },
    apo07casilla24: {
        type: String,
        required: true
    },
    apo07casilla25: {
        type: String,
        required: true
    },
    apo07casilla26: {
        type: String,
        required: true
    },
    apo07casilla27: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo07casilla', Apo07casillaSchema);
