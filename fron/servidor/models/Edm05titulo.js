const mongoose = require('mongoose');

const Edm05tituloSchema = mongoose.Schema({
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    edm05titulo1: {
    type: String,
    required: true
    },
    edm05titulo2: {
        type: String,
        required: true
    },
    edm05titulo3: {
        type: String,
        required: true
    },
    edm05titulo4: {
        type: String,
        required: true
    },
    edm05titulo5: {
        type: String,
        required: true
    },
    edm05titulo6: {
        type: String,
        required: true
    },
    edm05titulo7: {
        type: String,
        required: true
    },
    edm05titulo8: {
        type: String,
        required: true
    },
    edm05titulo9: {
        type: String,
        required: true
    },
    edm05titulo10: {
        type: String,
        required: true
    },
    edm05titulo11: {
        type: String,
        required: true
    },
    edm05titulo12: {
        type: String,
        required: true
    },
    edm05titulo13: {
        type: String,
        required: true
    },
    edm05titulo14: {
        type: String,
        required: true
    },
    edm05titulo15: {
        type: String,
        required: true
    },
    edm05titulo16: {
        type: String,
        required: true
    },
    edm05titulo17: {
        type: String,
        required: true
    },
    edm05titulo18: {
        type: String,
        required: true
    },
    edm05titulo19: {
        type: String,
        required: true
    },
    edm05titulo20: {
        type: String,
        required: true
    },
    edm05titulo21: {
        type: String,
        required: true
    },
    edm05titulo22: {
        type: String,
        required: true
    },
    edm05titulo23: {
        type: String,
        required: true
    },
    edm05titulo24: {
        type: String,
        required: true
    },
    edm05titulo25: {
        type: String,
        required: true
    },
    edm05titulo26: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Edm05titulo', Edm05tituloSchema);