const mongoose = require('mongoose');

const TablatresSchema = mongoose.Schema({
    BAI02: {
        type: String,
        required: true
    },
    la: {
        type: String,
        required: true
    },
    lb: {
        type: String,
        required: true
    },
    lc: {
        type: String,
        required: true
    },
    ld: {
        type: String,
        required: true
    },
    le: {
        type: String,
        required: true
    },
    lf: {
        type: String,
        required: true
    },
    lg: {
        type: String,
        required: true
    },
    lh: {
        type: String,
        required: true
    },
    li: {
        type: String,
        required: true
    },
    lj: {
        type: String,
        required: true
    },
    lk: {
        type: String,
        required: true
    },
    ll: {
        type: String,
        required: true
    },
    lm: {
        type: String,
        required: true
    },
    ln: {
        type: String,
        required: true
    },
    lo: {
        type: String,
        required: true
    },
    lp: {
        type: String,
        required: true
    },
    lq: {
        type: String,
        required: true
    },
    lr: {
        type: String,
        required: true
    },
    ls: {
        type: String,
        required: true
    },
    lt: {
        type: String,
        required: true
    },
    lu: {
        type: String,
        required: true
    },
    lv: {
        type: String,
        required: true
    },
    lw: {
        type: String,
        required: true
    },
    lx: {
        type: String,
        required: true
    },
    ly: {
        type: String,
        required: true
    },
    lz: {
        type: String,
        required: true
    },
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
});
module.exports = mongoose.model('Tablatres', TablatresSchema);