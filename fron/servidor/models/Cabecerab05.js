const mongoose = require('mongoose');

const Cabecerab05Schema = mongoose.Schema({
    m1: {
        type: String,
        required: true
    },
    m2: {
        type: String,
        required: true
    },
    m3: {
        type: String,
        required: true
    },
    m4: {
        type: String,
        required: true
    },
    m5: {
        type: String,
        required: true
    },
    m6: {
        type: String,
        required: true
    },
    m7: {
        type: String,
        required: true
    },
    m8: {
        type: String,
        required: true
    },
    m9: {
        type: String,
        required: true
    },
    m10: {
        type: String,
        required: true
    },
    m11: {
        type: String,
        required: true
    },
    m12: {
        type: String,
        required: true
    },
    m13: {
        type: String,
        required: true
    },
    m14: {
        type: String,
        required: true
    },
    m15: {
        type: String,
        required: true
    },
    m16: {
        type: String,
        required: true
    },
    m17: {
        type: String,
        required: true
    },
    m18: {
        type: String,
        required: true
    },
    m19: {
        type: String,
        required: true
    },
    m20: {
        type: String,
        required: true
    },
    m21: {
        type: String,
        required: true
    },
    m22: {
        type: String,
        required: true
    },
    m23: {
        type: String,
        required: true
    },
    m24: {
        type: String,
        required: true
    },
    m25: {
        type: String,
        required: true
    },
    m26: {
        type: String,
        required: true
    },
    
    
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});
module.exports = mongoose.model('Cabecerab05', Cabecerab05Schema);