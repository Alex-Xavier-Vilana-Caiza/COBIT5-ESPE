const mongoose = require('mongoose');

const Tabla3Schema = mongoose.Schema({
    BAI03: {
        type: String,
        required: true
    },
    tbl1: {
        type: String,
        required: true
    },
    tbl2: {
        type: String,
        required: true
    },
    tbl3: {
        type: String,
        required: true
    },
    tbl4: {
        type: String,
        required: true
    },
    tbl5: {
        type: String,
        required: true
    },
    tbl7: {
        type: String,
        required: true
    },
    tbl8: {
        type: String,
        required: true
    },
    tbl9: {
        type: String,
        required: true
    },
    tbl10: {
        type: String,
        required: true
    },
    tbl11: {
        type: String,
        required: true
    },
    tbl12: {
        type: String,
        required: true
    },
    tbl13: {
        type: String,
        required: true
    },
    tbl14: {
        type: String,
        required: true
    },
    tbl15: {
        type: String,
        required: true
    },
    tbl16: {
        type: String,
        required: true
    },
    tbl17: {
        type: String,
        required: true
    },
    tbl18: {
        type: String,
        required: true
    },
    tbl19: {
        type: String,
        required: true
    },
    tbl20: {
        type: String,
        required: true
    },
    tbl21: {
        type: String,
        required: true
    },
    tbl22: {
        type: String,
        required: true
    },
    tbl23: {
        type: String,
        required: true
    },
    tbl24: {
        type: String,
        required: true
    },
    tbl25: {
        type: String,
        required: true
    },
    tbl26: {
        type: String,
        required: true
    },
    tbl27: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});
module.exports = mongoose.model('Tabla3', Tabla3Schema);