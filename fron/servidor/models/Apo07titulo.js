const mongoose = require('mongoose');

const Apo07tituloSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    apo07titulo1: {
    type: String,
    required: true
    },
    apo07titulo2: {
        type: String,
        required: true
    },
    apo07titulo3: {
        type: String,
        required: true
    },
    apo07titulo4: {
        type: String,
        required: true
    },
    apo07titulo5: {
        type: String,
        required: true
    },
    apo07titulo6: {
        type: String,
        required: true
    },
    apo07titulo7: {
        type: String,
        required: true
    },
    apo07titulo8: {
        type: String,
        required: true
    },
    apo07titulo9: {
        type: String,
        required: true
    },
    apo07titulo10: {
        type: String,
        required: true
    },
    apo07titulo11: {
        type: String,
        required: true
    },
    apo07titulo12: {
        type: String,
        required: true
    },
    apo07titulo13: {
        type: String,
        required: true
    },
    apo07titulo14: {
        type: String,
        required: true
    },
    apo07titulo15: {
        type: String,
        required: true
    },
    apo07titulo16: {
        type: String,
        required: true
    },
    apo07titulo17: {
        type: String,
        required: true
    },
    apo07titulo18: {
        type: String,
        required: true
    },
    apo07titulo19: {
        type: String,
        required: true
    },
    apo07titulo20: {
        type: String,
        required: true
    },
    apo07titulo21: {
        type: String,
        required: true
    },
    apo07titulo22: {
        type: String,
        required: true
    },
    apo07titulo23: {
        type: String,
        required: true
    },
    apo07titulo24: {
        type: String,
        required: true
    },
    apo07titulo25: {
        type: String,
        required: true
    },
    apo07titulo26: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Apo07titulo', Apo07tituloSchema);
