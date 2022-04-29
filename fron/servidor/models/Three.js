const mongoose = require('mongoose');

const ThreeSchema = mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
   EDM3: {
    type: String,
    required: true
    },
    pa: {
        type: String,
        required: true
    },
    pb: {
        type: String,
        required: true
    },
    pc: {
        type: String,
        required: true
    },
    pd: {
        type: String,
        required: true
    },
    pe: {
        type: String,
        required: true
    },
    pf: {
        type: String,
        required: true
    },
    pg: {
        type: String,
        required: true
    },
    ph: {
        type: String,
        required: true
    },
    pi: {
        type: String,
        required: true
    },
    pj: {
        type: String,
        required: true
    },
    pk: {
        type: String,
        required: true
    },
    pl: {
        type: String,
        required: true
    },
    pm: {
        type: String,
        required: true
    },
    pn: {
        type: String,
        required: true
    },
    pnn: {
        type: String,
        required: true
    },
    po: {
        type: String,
        required: true
    },
    pp: {
        type: String,
        required: true
    },
    pq: {
        type: String,
        required: true
    },
    pr: {
        type: String,
        required: true
    },
    ps: {
        type: String,
        required: true
    },
    pt: {
        type: String,
        required: true
    },
    pu: {
        type: String,
        required: true
    },
    pv: {
        type: String,
        required: true
    },
    pw: {
        type: String,
        required: true
    },
    px: {
        type: String,
        required: true
    },
    py: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Three', ThreeSchema);
