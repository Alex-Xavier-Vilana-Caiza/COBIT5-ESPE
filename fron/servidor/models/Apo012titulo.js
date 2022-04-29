const mongoose = require('mongoose');

const Apo012tituloSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo012titulo1: {
    type: String,
    required: true
    },
    apo012titulo2: {
        type: String,
        required: true
    },
    apo012titulo3: {
        type: String,
        required: true
    },
    apo012titulo4: {
        type: String,
        required: true
    },
    apo012titulo5: {
        type: String,
        required: true
    },
    apo012titulo6: {
        type: String,
        required: true
    },
    apo012titulo7: {
        type: String,
        required: true
    },
    apo012titulo8: {
        type: String,
        required: true
    },
    apo012titulo9: {
        type: String,
        required: true
    },
    apo012titulo10: {
        type: String,
        required: true
    },
    apo012titulo11: {
        type: String,
        required: true
    },
    apo012titulo12: {
        type: String,
        required: true
    },
    apo012titulo13: {
        type: String,
        required: true
    },
    apo012titulo14: {
        type: String,
        required: true
    },
    apo012titulo15: {
        type: String,
        required: true
    },
    apo012titulo16: {
        type: String,
        required: true
    },
    apo012titulo17: {
        type: String,
        required: true
    },
    apo012titulo18: {
        type: String,
        required: true
    },
    apo012titulo19: {
        type: String,
        required: true
    },
    apo012titulo20: {
        type: String,
        required: true
    },
    apo012titulo21: {
        type: String,
        required: true
    },
    apo012titulo22: {
        type: String,
        required: true
    },
    apo012titulo23: {
        type: String,
        required: true
    },
    apo012titulo24: {
        type: String,
        required: true
    },
    apo012titulo25: {
        type: String,
        required: true
    },
    apo012titulo26: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo012titulo', Apo012tituloSchema);
