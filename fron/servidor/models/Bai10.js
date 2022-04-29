const mongoose = require('mongoose');

const Bai10Schema = mongoose.Schema({
    z1: {
        type: String,
        required: true
    },
    z2: {
        type: String,
        required: true
    },
    z3: {
        type: String,
        required: true
    },
    z4: {
        type: String,
        required: true
    },
    z5: {
        type: String,
        required: true
    },
    z6: {
        type: String,
        required: true
    },
    z7: {
        type: String,
        required: true
    },
    z8: {
        type: String,
        required: true
    },
    z9: {
        type: String,
        required: true
    },
    z10: {
        type: String,
        required: true
    },
    z11: {
        type: String,
        required: true
    },
    z12: {
        type: String,
        required: true
    },
    z13: {
        type: String,
        required: true
    },
    z14: {
        type: String,
        required: true
    },
    z15: {
        type: String,
        required: true
    },
    z16: {
        type: String,
        required: true
    },
    z17: {
        type: String,
        required: true
    },
    z18: {
        type: String,
        required: true
    },
    z19: {
        type: String,
        required: true
    },
    z20: {
        type: String,
        required: true
    },
    z21: {
        type: String,
        required: true
    },
    z22: {
        type: String,
        required: true
    },
    z23: {
        type: String,
        required: true
    },
    z24: {
        type: String,
        required: true
    },
    z25: {
        type: String,
        required: true
    },
    z26: {
        type: String,
        required: true
    },
    z27: {
        type: String,
        required: true
    },
    
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});
module.exports = mongoose.model('Bai10', Bai10Schema);