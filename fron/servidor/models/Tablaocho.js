const mongoose = require('mongoose');

const TablaochoSchema = mongoose.Schema({
    BAI08: {
        type: String,
        required: true
    },
    ca: {
        type: String,
        required: true
    },
    cb: {
        type: String,
        required: true
    },
    cc: {
        type: String,
        required: true
    },
    cd: {
        type: String,
        required: true
    },
    ce: {
        type: String,
        required: true
    },
    cf: {
        type: String,
        required: true
    },
    cg: {
        type: String,
        required: true
    },
    ch: {
        type: String,
        required: true
    },
    ci: {
        type: String,
        required: true
    },
    cj: {
        type: String,
        required: true
    },
    ck: {
        type: String,
        required: true
    },
    cl: {
        type: String,
        required: true
    },
    cm: {
        type: String,
        required: true
    },
    cn: {
        type: String,
        required: true
    },
    co: {
        type: String,
        required: true
    },
    cp: {
        type: String,
        required: true
    },
    cq: {
        type: String,
        required: true
    },
    cr: {
        type: String,
        required: true
    },
    cs: {
        type: String,
        required: true
    },
    ct: {
        type: String,
        required: true
    },
    cu: {
        type: String,
        required: true
    },
    cv: {
        type: String,
        required: true
    },
    cw: {
        type: String,
        required: true
    },
    cx: {
        type: String,
        required: true
    },
    cy: {
        type: String,
        required: true
    },
    cz: {
        type: String,
        required: true
    },
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
});
module.exports = mongoose.model('Tablaocho', TablaochoSchema);