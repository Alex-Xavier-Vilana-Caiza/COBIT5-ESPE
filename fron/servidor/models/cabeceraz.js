const mongoose = require('mongoose');

const CabecerazSchema = mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    ka:{
        type: String,
        required: true
    },
    kb:{
        type: String,
        required: true
    },
    kc:{
        type: String,
        required: true
    },
    kd:{
        type: String,
        required: true
    },
    ke: {
        type: String,
        required: true
    },
    kf: {
        type: String,
        required: true
    },
    kg: {
        type: String,
        required: true
    },
    kh: {
        type: String,
        required: true
    },
    ki: {
        type: String,
        required: true
    },
    kj: {
        type: String,
        required: true
    },
    kk: {
        type: String,
        required: true
    },
    kl: {
        type: String,
        required: true
    },
    km: {
        type: String,
        required: true
    },
    kn: {
        type: String,
        required: true
    },
    ko: {
        type: String,
        required: true
    },
    kp: {
        type: String,
        required: true
    },
    kq: {
        type: String,
        required: true
    },
    kr: {
        type: String,
        required: true
    },
    ks: {
        type: String,
        required: true
    },
    kt: {
        type: String,
        required: true
    },
    ku: {
        type: String,
        required: true
    },
    kv: {
        type: String,
        required: true
    },
    kw: {
        type: String,
        required: true
    },
    kx: {
        type: String,
        required: true
    },
    ky: {
        type: String,
        required: true
    },
    kz: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Cabeceraz', CabecerazSchema);