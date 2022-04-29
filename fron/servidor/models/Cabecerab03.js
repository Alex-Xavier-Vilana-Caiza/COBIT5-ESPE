const mongoose = require('mongoose');

const Cabecerab03Schema = mongoose.Schema({
    cab1: {
        type: String,
        required: true
    },
    cab2: {
        type: String,
        required: true
    },
    cab3: {
        type: String,
        required: true
    },
    cab4: {
        type: String,
        required: true
    },
    cab5: {
        type: String,
        required: true
    },
    cab6: {
        type: String,
        required: true
    },
    cab7: {
        type: String,
        required: true
    },
    cab8: {
        type: String,
        required: true
    },
    cab9: {
        type: String,
        required: true
    },
    cab10: {
        type: String,
        required: true
    },
    cab11: {
        type: String,
        required: true
    },
    cab12: {
        type: String,
        required: true
    },
    cab13: {
        type: String,
        required: true
    },
    cab14: {
        type: String,
        required: true
    },
    cab15: {
        type: String,
        required: true
    },
    cab16: {
        type: String,
        required: true
    },
    cab17: {
        type: String,
        required: true
    },
    cab18: {
        type: String,
        required: true
    },
    cab19: {
        type: String,
        required: true
    },
    cab20: {
        type: String,
        required: true
    },
    cab21: {
        type: String,
        required: true
    },
    cab22: {
        type: String,
        required: true
    },
    cab23: {
        type: String,
        required: true
    },
    cab24: {
        type: String,
        required: true
    },
    cab25: {
        type: String,
        required: true
    },
    cab26: {
        type: String,
        required: true
    },
    
    
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});
module.exports = mongoose.model('Cabecerab03', Cabecerab03Schema);