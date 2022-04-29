const mongoose = require('mongoose');

const CabeceradosSchema = mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    dosa:{
        type: String,
        required: true
    },
    dosb:{
        type: String,
        required: true
    },
    dosc:{
        type: String,
        required: true
    },
    dosd:{
        type: String,
        required: true
    },
    dose:{
        type: String,
        required: true
    },
    dosf:{
        type: String,
        required: true
    },
    dosg:{
        type: String,
        required: true
    },
    dosh:{
        type: String,
        required: true
    },
    dosi:{
        type: String,
        required: true
    },
    dosj:{
        type: String,
        required: true
    },
    dosk:{
        type: String,
        required: true
    },
    dosl:{
        type: String,
        required: true
    },
    dosm:{
        type: String,
        required: true
    },
    dosn:{
        type: String,
        required: true
    },
    doso:{
        type: String,
        required: true
    },
    dosp:{
        type: String,
        required: true
    },
    dosq:{
        type: String,
        required: true
    },
    dosr:{
        type: String,
        required: true
    },
    doss:{
        type: String,
        required: true
    },
    dost:{
        type: String,
        required: true
    },
    dosu:{
        type: String,
        required: true
    },
    dosv:{
        type: String,
        required: true
    },
    dosw:{
        type: String,
        required: true
    },
    dosx:{
        type: String,
        required: true
    },
    dosy:{
        type: String,
        required: true
    },
    dosz:{
        type: String,
        required: true
    }
   
});

module.exports = mongoose.model('Cabecerados', CabeceradosSchema);