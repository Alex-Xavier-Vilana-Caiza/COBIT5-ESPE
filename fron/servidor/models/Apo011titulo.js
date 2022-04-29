const mongoose = require('mongoose');

const Apo011tituloSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo011titulo1: {
    type: String,
    required: true
    },
    apo011titulo2: {
        type: String,
        required: true
    },
    apo011titulo3: {
        type: String,
        required: true
    },
    apo011titulo4: {
        type: String,
        required: true
    },
    apo011titulo5: {
        type: String,
        required: true
    },
    apo011titulo6: {
        type: String,
        required: true
    },
    apo011titulo7: {
        type: String,
        required: true
    },
    apo011titulo8: {
        type: String,
        required: true
    },
    apo011titulo9: {
        type: String,
        required: true
    },
    apo011titulo10: {
        type: String,
        required: true
    },
    apo011titulo11: {
        type: String,
        required: true
    },
    apo011titulo12: {
        type: String,
        required: true
    },
    apo011titulo13: {
        type: String,
        required: true
    },
    apo011titulo14: {
        type: String,
        required: true
    },
    apo011titulo15: {
        type: String,
        required: true
    },
    apo011titulo16: {
        type: String,
        required: true
    },
    apo011titulo17: {
        type: String,
        required: true
    },
    apo011titulo18: {
        type: String,
        required: true
    },
    apo011titulo19: {
        type: String,
        required: true
    },
    apo011titulo20: {
        type: String,
        required: true
    },
    apo011titulo21: {
        type: String,
        required: true
    },
    apo011titulo22: {
        type: String,
        required: true
    },
    apo011titulo23: {
        type: String,
        required: true
    },
    apo011titulo24: {
        type: String,
        required: true
    },
    apo011titulo25: {
        type: String,
        required: true
    },
    apo011titulo26: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo011titulo', Apo011tituloSchema);
