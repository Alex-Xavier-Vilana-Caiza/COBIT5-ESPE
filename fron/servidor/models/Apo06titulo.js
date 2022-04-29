const mongoose = require('mongoose');

const Apo06tituloSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo06titulo1: {
    type: String,
    required: true
    },
    apo06titulo2: {
        type: String,
        required: true
    },
    apo06titulo3: {
        type: String,
        required: true
    },
    apo06titulo4: {
        type: String,
        required: true
    },
    apo06titulo5: {
        type: String,
        required: true
    },
    apo06titulo6: {
        type: String,
        required: true
    },
    apo06titulo7: {
        type: String,
        required: true
    },
    apo06titulo8: {
        type: String,
        required: true
    },
    apo06titulo9: {
        type: String,
        required: true
    },
    apo06titulo10: {
        type: String,
        required: true
    },
    apo06titulo11: {
        type: String,
        required: true
    },
    apo06titulo12: {
        type: String,
        required: true
    },
    apo06titulo13: {
        type: String,
        required: true
    },
    apo06titulo14: {
        type: String,
        required: true
    },
    apo06titulo15: {
        type: String,
        required: true
    },
    apo06titulo16: {
        type: String,
        required: true
    },
    apo06titulo17: {
        type: String,
        required: true
    },
    apo06titulo18: {
        type: String,
        required: true
    },
    apo06titulo19: {
        type: String,
        required: true
    },
    apo06titulo20: {
        type: String,
        required: true
    },
    apo06titulo21: {
        type: String,
        required: true
    },
    apo06titulo22: {
        type: String,
        required: true
    },
    apo06titulo23: {
        type: String,
        required: true
    },
    apo06titulo24: {
        type: String,
        required: true
    },
    apo06titulo25: {
        type: String,
        required: true
    },
    apo06titulo26: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo06titulo', Apo06tituloSchema);
