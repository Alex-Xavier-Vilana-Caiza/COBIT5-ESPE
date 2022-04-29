const mongoose = require('mongoose');

const Cabecera1Schema = mongoose.Schema({
    ja: {
        type: String,
        required: true
    },
    jb: {
        type: String,
        required: true
    },
    jc: {
        type: String,
        required: true
    },
    jd: {
        type: String,
        required: true
    },
    je: {
        type: String,
        required: true
    },
    jf: {
        type: String,
        required: true
    },
    jg: {
        type: String,
        required: true
    },
    jh: {
        type: String,
        required: true
    },
    ji: {
        type: String,
        required: true
    },
    jj: {
        type: String,
        required: true
    },
    jk: {
        type: String,
        required: true
    },
    jl: {
        type: String,
        required: true
    },
    jm: {
        type: String,
        required: true
    },
    jn: {
        type: String,
        required: true
    },
    jo: {
        type: String,
        required: true
    },
    jp: {
        type: String,
        required: true
    },
    jq: {
        type: String,
        required: true
    },
    jr: {
        type: String,
        required: true
    },
    js: {
        type: String,
        required: true
    },
    jt: {
        type: String,
        required: true
    },
    ju: {
        type: String,
        required: true
    },
    jv: {
        type: String,
        required: true
    },
    jw: {
        type: String,
        required: true
    },
    jx: {
        type: String,
        required: true
    },
    jy: {
        type: String,
        required: true
    },
    jz: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});
module.exports = mongoose.model('cabecera1', Cabecera1Schema);