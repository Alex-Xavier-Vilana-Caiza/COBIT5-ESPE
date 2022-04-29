const mongoose = require('mongoose');

const Apo09tituloSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo09titulo1: {
    type: String,
    required: true
    },
    apo09titulo2: {
        type: String,
        required: true
    },
    apo09titulo3: {
        type: String,
        required: true
    },
    apo09titulo4: {
        type: String,
        required: true
    },
    apo09titulo5: {
        type: String,
        required: true
    },
    apo09titulo6: {
        type: String,
        required: true
    },
    apo09titulo7: {
        type: String,
        required: true
    },
    apo09titulo8: {
        type: String,
        required: true
    },
    apo09titulo9: {
        type: String,
        required: true
    },
    apo09titulo10: {
        type: String,
        required: true
    },
    apo09titulo11: {
        type: String,
        required: true
    },
    apo09titulo12: {
        type: String,
        required: true
    },
    apo09titulo13: {
        type: String,
        required: true
    },
    apo09titulo14: {
        type: String,
        required: true
    },
    apo09titulo15: {
        type: String,
        required: true
    },
    apo09titulo16: {
        type: String,
        required: true
    },
    apo09titulo17: {
        type: String,
        required: true
    },
    apo09titulo18: {
        type: String,
        required: true
    },
    apo09titulo19: {
        type: String,
        required: true
    },
    apo09titulo20: {
        type: String,
        required: true
    },
    apo09titulo21: {
        type: String,
        required: true
    },
    apo09titulo22: {
        type: String,
        required: true
    },
    apo09titulo23: {
        type: String,
        required: true
    },
    apo09titulo24: {
        type: String,
        required: true
    },
    apo09titulo25: {
        type: String,
        required: true
    },
    apo09titulo26: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo09titulo', Apo09tituloSchema);
