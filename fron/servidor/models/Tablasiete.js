const mongoose = require('mongoose');

const TablasieteSchema = mongoose.Schema({
    BAI07: {
        type: String,
        required: true
    },
    oa: {
        type: String,
        required: true
    },
    ob: {
        type: String,
        required: true
    },
    oc: {
        type: String,
        required: true
    },
    od: {
        type: String,
        required: true
    },
    oe: {
        type: String,
        required: true
    },
    of: {
        type: String,
        required: true
    },
    og: {
        type: String,
        required: true
    },
    oh: {
        type: String,
        required: true
    },
    oi: {
        type: String,
        required: true
    },
    oj: {
        type: String,
        required: true
    },
    ok: {
        type: String,
        required: true
    },
    ol: {
        type: String,
        required: true
    },
    om: {
        type: String,
        required: true
    },
    on: {
        type: String,
        required: true
    },
    oo: {
        type: String,
        required: true
    },
    op: {
        type: String,
        required: true
    },
    oq: {
        type: String,
        required: true
    },
    or: {
        type: String,
        required: true
    },
    os: {
        type: String,
        required: true
    },
    ot: {
        type: String,
        required: true
    },
    ou: {
        type: String,
        required: true
    },
    ov: {
        type: String,
        required: true
    },
    ow: {
        type: String,
        required: true
    },
    ox: {
        type: String,
        required: true
    },
    oy: {
        type: String,
        required: true
    },
    oz: {
        type: String,
        required: true
    },
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
});
module.exports = mongoose.model('Tablasiete', TablasieteSchema);