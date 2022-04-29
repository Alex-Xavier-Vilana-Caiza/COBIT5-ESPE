const mongoose = require('mongoose');

const Apo013tituloSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo013titulo1: {
    type: String,
    required: true
    },
    apo013titulo2: {
        type: String,
        required: true
    },
    apo013titulo3: {
        type: String,
        required: true
    },
    apo013titulo4: {
        type: String,
        required: true
    },
    apo013titulo5: {
        type: String,
        required: true
    },
    apo013titulo6: {
        type: String,
        required: true
    },
    apo013titulo7: {
        type: String,
        required: true
    },
    apo013titulo8: {
        type: String,
        required: true
    },
    apo013titulo9: {
        type: String,
        required: true
    },
    apo013titulo10: {
        type: String,
        required: true
    },
    apo013titulo11: {
        type: String,
        required: true
    },
    apo013titulo12: {
        type: String,
        required: true
    },
    apo013titulo13: {
        type: String,
        required: true
    },
    apo013titulo14: {
        type: String,
        required: true
    },
    apo013titulo15: {
        type: String,
        required: true
    },
    apo013titulo16: {
        type: String,
        required: true
    },
    apo013titulo17: {
        type: String,
        required: true
    },
    apo013titulo18: {
        type: String,
        required: true
    },
    apo013titulo19: {
        type: String,
        required: true
    },
    apo013titulo20: {
        type: String,
        required: true
    },
    apo013titulo21: {
        type: String,
        required: true
    },
    apo013titulo22: {
        type: String,
        required: true
    },
    apo013titulo23: {
        type: String,
        required: true
    },
    apo013titulo24: {
        type: String,
        required: true
    },
    apo013titulo25: {
        type: String,
        required: true
    },
    apo013titulo26: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo013titulo', Apo013tituloSchema);
