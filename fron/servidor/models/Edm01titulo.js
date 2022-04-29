const mongoose = require('mongoose');

const Edm01tituloSchema = mongoose.Schema({
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    edm01titulo1: {
    type: String,
    required: true
    },
    edm01titulo2: {
        type: String,
        required: true
    },
    edm01titulo3: {
        type: String,
        required: true
    },
    edm01titulo4: {
        type: String,
        required: true
    },
    edm01titulo5: {
        type: String,
        required: true
    },
    edm01titulo6: {
        type: String,
        required: true
    },
    edm01titulo7: {
        type: String,
        required: true
    },
    edm01titulo8: {
        type: String,
        required: true
    },
    edm01titulo9: {
        type: String,
        required: true
    },
    edm01titulo10: {
        type: String,
        required: true
    },
    edm01titulo11: {
        type: String,
        required: true
    },
    edm01titulo12: {
        type: String,
        required: true
    },
    edm01titulo13: {
        type: String,
        required: true
    },
    edm01titulo14: {
        type: String,
        required: true
    },
    edm01titulo15: {
        type: String,
        required: true
    },
    edm01titulo16: {
        type: String,
        required: true
    },
    edm01titulo17: {
        type: String,
        required: true
    },
    edm01titulo18: {
        type: String,
        required: true
    },
    edm01titulo19: {
        type: String,
        required: true
    },
    edm01titulo20: {
        type: String,
        required: true
    },
    edm01titulo21: {
        type: String,
        required: true
    },
    edm01titulo22: {
        type: String,
        required: true
    },
    edm01titulo23: {
        type: String,
        required: true
    },
    edm01titulo24: {
        type: String,
        required: true
    },
    edm01titulo25: {
        type: String,
        required: true
    },
    edm01titulo26: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Edm01titulo', Edm01tituloSchema);