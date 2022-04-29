const mongoose = require('mongoose');

const Cabecerab09Schema = mongoose.Schema({
    q1: {
        type: String,
        required: true
    },
    q2: {
        type: String,
        required: true
    },
    q3: {
        type: String,
        required: true
    },
    q4: {
        type: String,
        required: true
    },
    q5: {
        type: String,
        required: true
    },
    q6: {
        type: String,
        required: true
    },
    q7: {
        type: String,
        required: true
    },
    q8: {
        type: String,
        required: true
    },
    q9: {
        type: String,
        required: true
    },
    q10: {
        type: String,
        required: true
    },
    q11: {
        type: String,
        required: true
    },
    q12: {
        type: String,
        required: true
    },
    q13: {
        type: String,
        required: true
    },
    q14: {
        type: String,
        required: true
    },
    q15: {
        type: String,
        required: true
    },
    q16: {
        type: String,
        required: true
    },
    q17: {
        type: String,
        required: true
    },
    q18: {
        type: String,
        required: true
    },
    q19: {
        type: String,
        required: true
    },
    q20: {
        type: String,
        required: true
    },
    q21: {
        type: String,
        required: true
    },
    q22: {
        type: String,
        required: true
    },
    q23: {
        type: String,
        required: true
    },
    q24: {
        type: String,
        required: true
    },
    q25: {
        type: String,
        required: true
    },
    q26: {
        type: String,
        required: true
    },
    
    
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});
module.exports = mongoose.model('Cabecerab09', Cabecerab09Schema);