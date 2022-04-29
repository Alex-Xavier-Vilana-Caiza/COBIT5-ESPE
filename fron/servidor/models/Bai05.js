const mongoose = require('mongoose');

const Bai05Schema = mongoose.Schema({
    b1: {
        type: String,
        required: true
    },
    b2: {
        type: String,
        required: true
    },
    b3: {
        type: String,
        required: true
    },
    b4: {
        type: String,
        required: true
    },
    b5: {
        type: String,
        required: true
    },
    b6: {
        type: String,
        required: true
    },
    b7: {
        type: String,
        required: true
    },
    b8: {
        type: String,
        required: true
    },
    b9: {
        type: String,
        required: true
    },
    b10: {
        type: String,
        required: true
    },
    b11: {
        type: String,
        required: true
    },
    b12: {
        type: String,
        required: true
    },
    b13: {
        type: String,
        required: true
    },
    b14: {
        type: String,
        required: true
    },
    b15: {
        type: String,
        required: true
    },
    b16: {
        type: String,
        required: true
    },
    b17: {
        type: String,
        required: true
    },
    b18: {
        type: String,
        required: true
    },
    b19: {
        type: String,
        required: true
    },
    b20: {
        type: String,
        required: true
    },
    b21: {
        type: String,
        required: true
    },
    b22: {
        type: String,
        required: true
    },
    b23: {
        type: String,
        required: true
    },
    b24: {
        type: String,
        required: true
    },
    b25: {
        type: String,
        required: true
    },
    b26: {
        type: String,
        required: true
    },
    b27: {
        type: String,
        required: true
    },
    
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});
module.exports = mongoose.model('Bai05', Bai05Schema);