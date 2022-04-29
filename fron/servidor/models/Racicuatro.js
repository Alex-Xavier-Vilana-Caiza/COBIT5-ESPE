const mongoose = require('mongoose');

const RacicuatroSchema = mongoose.Schema({
    d1: {
        type: String,
        required: true
    },
    d2: {
        type: String,
        required: true
    },
    d3: {
        type: String,
        required: true
    },
    d4: {
        type: String,
        required: true
    },
    d5: {
        type: String,
        required: true
    },
    d6: {
        type: String,
        required: true
    },
    d7: {
        type: String,
        required: true
    },
    d8: {
        type: String,
        required: true
    },
    d9: {
        type: String,
        required: true
    },
    d10: {
        type: String,
        required: true
    },
    d11: {
        type: String,
        required: true
    },
    d12: {
        type: String,
        required: true
    },
    d13: {
        type: String,
        required: true
    },
    d14: {
        type: String,
        required: true
    },
    d15: {
        type: String,
        required: true
    },
    d16: {
        type: String,
        required: true
    },
    d17: {
        type: String,
        required: true
    },
    d18: {
        type: String,
        required: true
    },
    d19: {
        type: String,
        required: true
    },
    d20: {
        type: String,
        required: true
    },
    d21: {
        type: String,
        required: true
    },
    d22: {
        type: String,
        required: true
    },
    d23: {
        type: String,
        required: true
    },
    d24: {
        type: String,
        required: true
    },
    d25: {
        type: String,
        required: true
    },
    d26: {
        type: String,
        required: true
    },
    d27: {
        type: String,
        required: true
    },
    
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});
module.exports = mongoose.model('Racicuatro', RacicuatroSchema);