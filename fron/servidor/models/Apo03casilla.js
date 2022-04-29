const mongoose = require('mongoose');

const Apo03casillaSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo03casilla1: {
    type: String,
    required: true
    },
    apo03casilla2: {
        type: String,
        required: true
    },
    apo03casilla3: {
        type: String,
        required: true
    },
    apo03casilla4: {
        type: String,
        required: true
    },
    apo03casilla5: {
        type: String,
        required: true
    },
    apo03casilla6: {
        type: String,
        required: true
    },
    apo03casilla7: {
        type: String,
        required: true
    },
    apo03casilla8: {
        type: String,
        required: true
    },
    apo03casilla9: {
        type: String,
        required: true
    },
    apo03casilla10: {
        type: String,
        required: true
    },
    apo03casilla11: {
        type: String,
        required: true
    },
    apo03casilla12: {
        type: String,
        required: true
    },
    apo03casilla13: {
        type: String,
        required: true
    },
    apo03casilla14: {
        type: String,
        required: true
    },
    apo03casilla15: {
        type: String,
        required: true
    },
    apo03casilla16: {
        type: String,
        required: true
    },
    apo03casilla17: {
        type: String,
        required: true
    },
    apo03casilla18: {
        type: String,
        required: true
    },
    apo03casilla19: {
        type: String,
        required: true
    },
    apo03casilla20: {
        type: String,
        required: true
    },
    apo03casilla21: {
        type: String,
        required: true
    },
    apo03casilla22: {
        type: String,
        required: true
    },
    apo03casilla23: {
        type: String,
        required: true
    },
    apo03casilla24: {
        type: String,
        required: true
    },
    apo03casilla25: {
        type: String,
        required: true
    },
  
    apo03casilla26: {
        type: String,
        required: true
    },
    apo03casilla27: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo03casilla', Apo03casillaSchema);
