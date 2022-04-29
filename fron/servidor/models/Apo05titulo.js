const mongoose = require('mongoose');

const Apo05tituloSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo05titulo1: {
    type: String,
    required: true
    },
    apo05titulo2: {
        type: String,
        required: true
    },
    apo05titulo3: {
        type: String,
        required: true
    },
    apo05titulo4: {
        type: String,
        required: true
    },
    apo05titulo5: {
        type: String,
        required: true
    },
    apo05titulo6: {
        type: String,
        required: true
    },
    apo05titulo7: {
        type: String,
        required: true
    },
    apo05titulo8: {
        type: String,
        required: true
    },
    apo05titulo9: {
        type: String,
        required: true
    },
    apo05titulo10: {
        type: String,
        required: true
    },
    apo05titulo11: {
        type: String,
        required: true
    },
    apo05titulo12: {
        type: String,
        required: true
    },
    apo05titulo13: {
        type: String,
        required: true
    },
    apo05titulo14: {
        type: String,
        required: true
    },
    apo05titulo15: {
        type: String,
        required: true
    },
    apo05titulo16: {
        type: String,
        required: true
    },
    apo05titulo17: {
        type: String,
        required: true
    },
    apo05titulo18: {
        type: String,
        required: true
    },
    apo05titulo19: {
        type: String,
        required: true
    },
    apo05titulo20: {
        type: String,
        required: true
    },
    apo05titulo21: {
        type: String,
        required: true
    },
    apo05titulo22: {
        type: String,
        required: true
    },
    apo05titulo23: {
        type: String,
        required: true
    },
    apo05titulo24: {
        type: String,
        required: true
    },
    apo05titulo25: {
        type: String,
        required: true
    },
    apo05titulo26: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo05titulo', Apo05tituloSchema);
