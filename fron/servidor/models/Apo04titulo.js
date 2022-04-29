const mongoose = require('mongoose');

const Apo04tituloSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo04titulo1: {
    type: String,
    required: true
    },
    apo04titulo2: {
        type: String,
        required: true
    },
    apo04titulo3: {
        type: String,
        required: true
    },
    apo04titulo4: {
        type: String,
        required: true
    },
    apo04titulo5: {
        type: String,
        required: true
    },
    apo04titulo6: {
        type: String,
        required: true
    },
    apo04titulo7: {
        type: String,
        required: true
    },
    apo04titulo8: {
        type: String,
        required: true
    },
    apo04titulo9: {
        type: String,
        required: true
    },
    apo04titulo10: {
        type: String,
        required: true
    },
    apo04titulo11: {
        type: String,
        required: true
    },
    apo04titulo12: {
        type: String,
        required: true
    },
    apo04titulo13: {
        type: String,
        required: true
    },
    apo04titulo14: {
        type: String,
        required: true
    },
    apo04titulo15: {
        type: String,
        required: true
    },
    apo04titulo16: {
        type: String,
        required: true
    },
    apo04titulo17: {
        type: String,
        required: true
    },
    apo04titulo18: {
        type: String,
        required: true
    },
    apo04titulo19: {
        type: String,
        required: true
    },
    apo04titulo20: {
        type: String,
        required: true
    },
    apo04titulo21: {
        type: String,
        required: true
    },
    apo04titulo22: {
        type: String,
        required: true
    },
    apo04titulo23: {
        type: String,
        required: true
    },
    apo04titulo24: {
        type: String,
        required: true
    },
    apo04titulo25: {
        type: String,
        required: true
    },
    apo04titulo26: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo04titulo', Apo04tituloSchema);
