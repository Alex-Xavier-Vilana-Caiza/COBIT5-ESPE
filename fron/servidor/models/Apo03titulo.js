const mongoose = require('mongoose');

const Apo03tituloSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo03titulo1: {
    type: String,
    required: true
    },
    apo03titulo2: {
        type: String,
        required: true
    },
    apo03titulo3: {
        type: String,
        required: true
    },
    apo03titulo4: {
        type: String,
        required: true
    },
    apo03titulo5: {
        type: String,
        required: true
    },
    apo03titulo6: {
        type: String,
        required: true
    },
    apo03titulo7: {
        type: String,
        required: true
    },
    apo03titulo8: {
        type: String,
        required: true
    },
    apo03titulo9: {
        type: String,
        required: true
    },
    apo03titulo10: {
        type: String,
        required: true
    },
    apo03titulo11: {
        type: String,
        required: true
    },
    apo03titulo12: {
        type: String,
        required: true
    },
    apo03titulo13: {
        type: String,
        required: true
    },
    apo03titulo14: {
        type: String,
        required: true
    },
    apo03titulo15: {
        type: String,
        required: true
    },
    apo03titulo16: {
        type: String,
        required: true
    },
    apo03titulo17: {
        type: String,
        required: true
    },
    apo03titulo18: {
        type: String,
        required: true
    },
    apo03titulo19: {
        type: String,
        required: true
    },
    apo03titulo20: {
        type: String,
        required: true
    },
    apo03titulo21: {
        type: String,
        required: true
    },
    apo03titulo22: {
        type: String,
        required: true
    },
    apo03titulo23: {
        type: String,
        required: true
    },
    apo03titulo24: {
        type: String,
        required: true
    },
    apo03titulo25: {
        type: String,
        required: true
    },
    apo03titulo26: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo03titulo', Apo03tituloSchema);
