const mongoose = require('mongoose');

const TablaunoSchema = mongoose.Schema({
    BAI: {
        type: String,
        required: true
    },
    na: {
        type: String,
        required: true
    },
    nb: {
        type: String,
        required: true
    },
    nc: {
        type: String,
        required: true
    },
    nd: {
        type: String,
        required: true
    },
    ne: {
        type: String,
        required: true
    },
    nf: {
        type: String,
        required: true
    },
    ng: {
        type: String,
        required: true
    },
    nh: {
        type: String,
        required: true
    },
    ni: {
        type: String,
        required: true
    },
     nj: {
        type: String,
        required: true
    },
     nk: {
        type: String,
        required: true
    },
    nl: {
        type: String,
        required: true
    },
    nm: {
        type: String,
        required: true
    },
    nn: {
        type: String,
        required: true
    },
    no: {
        type: String,
        required: true
    },
    np: {
        type: String,
        required: true
    },
    nq: {
        type: String,
        required: true
    },
    nr: {
        type: String,
        required: true
    },
    ns: {
        type: String,
        required: true
    },
    nt: {
        type: String,
        required: true
    },
    nu: {
        type: String,
        required: true
    },
    nv: {
        type: String,
        required: true
    },
    nw: {
        type: String,
        required: true
    },
    nx: {
        type: String,
        required: true
    },
    ny: {
        type: String,
        required: true
    },
    nz: {
        type: String,
        required: true
    },       
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
    },
});
module.exports = mongoose.model('Tablauno', TablaunoSchema);