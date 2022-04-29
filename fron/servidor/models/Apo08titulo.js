const mongoose = require('mongoose');

const Apo08tituloSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo08titulo1: {
    type: String,
    required: true
    },
    apo08titulo2: {
        type: String,
        required: true
    },
    apo08titulo3: {
        type: String,
        required: true
    },
    apo08titulo4: {
        type: String,
        required: true
    },
    apo08titulo5: {
        type: String,
        required: true
    },
    apo08titulo6: {
        type: String,
        required: true
    },
    apo08titulo7: {
        type: String,
        required: true
    },
    apo08titulo8: {
        type: String,
        required: true
    },
    apo08titulo9: {
        type: String,
        required: true
    },
    apo08titulo10: {
        type: String,
        required: true
    },
    apo08titulo11: {
        type: String,
        required: true
    },
    apo08titulo12: {
        type: String,
        required: true
    },
    apo08titulo13: {
        type: String,
        required: true
    },
    apo08titulo14: {
        type: String,
        required: true
    },
    apo08titulo15: {
        type: String,
        required: true
    },
    apo08titulo16: {
        type: String,
        required: true
    },
    apo08titulo17: {
        type: String,
        required: true
    },
    apo08titulo18: {
        type: String,
        required: true
    },
    apo08titulo19: {
        type: String,
        required: true
    },
    apo08titulo20: {
        type: String,
        required: true
    },
    apo08titulo21: {
        type: String,
        required: true
    },
    apo08titulo22: {
        type: String,
        required: true
    },
    apo08titulo23: {
        type: String,
        required: true
    },
    apo08titulo24: {
        type: String,
        required: true
    },
    apo08titulo25: {
        type: String,
        required: true
    },
    apo08titulo26: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo08titulo', Apo08tituloSchema);
