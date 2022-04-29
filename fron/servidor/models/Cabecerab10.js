const mongoose = require('mongoose');

const Cabecerab10Schema = mongoose.Schema({
    ll1: {
        type: String,
        required: true
    },
    ll2: {
        type: String,
        required: true
    },
    ll3: {
        type: String,
        required: true
    },
    ll4: {
        type: String,
        required: true
    },
    ll5: {
        type: String,
        required: true
    },
    ll6: {
        type: String,
        required: true
    },
    ll7: {
        type: String,
        required: true
    },
    ll8: {
        type: String,
        required: true
    },
    ll9: {
        type: String,
        required: true
    },
    ll10: {
        type: String,
        required: true
    },
    ll11: {
        type: String,
        required: true
    },
    ll12: {
        type: String,
        required: true
    },
    ll13: {
        type: String,
        required: true
    },
    ll14: {
        type: String,
        required: true
    },
    ll15: {
        type: String,
        required: true
    },
    ll16: {
        type: String,
        required: true
    },
    ll17: {
        type: String,
        required: true
    },
    ll18: {
        type: String,
        required: true
    },
    ll19: {
        type: String,
        required: true
    },
    ll20: {
        type: String,
        required: true
    },
    ll21: {
        type: String,
        required: true
    },
    ll22: {
        type: String,
        required: true
    },
    ll23: {
        type: String,
        required: true
    },
    ll24: {
        type: String,
        required: true
    },
    ll25: {
        type: String,
        required: true
    },
    ll26: {
        type: String,
        required: true
    },
    
    
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});
module.exports = mongoose.model('Cabecerab10', Cabecerab10Schema);