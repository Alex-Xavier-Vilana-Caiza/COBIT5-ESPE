const mongoose = require('mongoose');

const TablaseisSchema = mongoose.Schema({
    BAI06: {
        type: String,
        required: true
    },
    qa: {
        type: String,
        required: true
    },
    qb: {
        type: String,
        required: true
    },
    qc: {
        type: String,
        required: true
    },
    qd: {
        type: String,
        required: true
    },
    qe: {
        type: String,
        required: true
    },
    qf: {
        type: String,
        required: true
    },
    qg: {
        type: String,
        required: true
    },
    qh: {
        type: String,
        required: true
    },
    qi: {
        type: String,
        required: true
    },
    qj: {
        type: String,
        required: true
    },
    qk: {
        type: String,
        required: true
    },
    ql: {
        type: String,
        required: true
    },
    qm: {
        type: String,
        required: true
    },
    qn: {
        type: String,
        required: true
    },
    qo: {
        type: String,
        required: true
    },
    qp: {
        type: String,
        required: true
    },
    qq: {
        type: String,
        required: true
    },
    qr: {
        type: String,
        required: true
    },
    qs: {
        type: String,
        required: true
    },
    qt: {
        type: String,
        required: true
    },
    qu: {
        type: String,
        required: true
    },
    qv: {
        type: String,
        required: true
    },
    qw: {
        type: String,
        required: true
    },
    qx: {
        type: String,
        required: true
    },
    qy: {
        type: String,
        required: true
    },
    qz: {
        type: String,
        required: true
    },
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
});
module.exports = mongoose.model('Tablaseis', TablaseisSchema);