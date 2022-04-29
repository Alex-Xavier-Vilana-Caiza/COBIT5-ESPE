const mongoose = require('mongoose');

const Apo010tituloSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo010titulo1: {
    type: String,
    required: true
    },
    apo010titulo2: {
        type: String,
        required: true
    },
    apo010titulo3: {
        type: String,
        required: true
    },
    apo010titulo4: {
        type: String,
        required: true
    },
    apo010titulo5: {
        type: String,
        required: true
    },
    apo010titulo6: {
        type: String,
        required: true
    },
    apo010titulo7: {
        type: String,
        required: true
    },
    apo010titulo8: {
        type: String,
        required: true
    },
    apo010titulo9: {
        type: String,
        required: true
    },
    apo010titulo10: {
        type: String,
        required: true
    },
    apo010titulo11: {
        type: String,
        required: true
    },
    apo010titulo12: {
        type: String,
        required: true
    },
    apo010titulo13: {
        type: String,
        required: true
    },
    apo010titulo14: {
        type: String,
        required: true
    },
    apo010titulo15: {
        type: String,
        required: true
    },
    apo010titulo16: {
        type: String,
        required: true
    },
    apo010titulo17: {
        type: String,
        required: true
    },
    apo010titulo18: {
        type: String,
        required: true
    },
    apo010titulo19: {
        type: String,
        required: true
    },
    apo010titulo20: {
        type: String,
        required: true
    },
    apo010titulo21: {
        type: String,
        required: true
    },
    apo010titulo22: {
        type: String,
        required: true
    },
    apo010titulo23: {
        type: String,
        required: true
    },
    apo010titulo24: {
        type: String,
        required: true
    },
    apo010titulo25: {
        type: String,
        required: true
    },
    apo010titulo26: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo010titulo', Apo010tituloSchema);
