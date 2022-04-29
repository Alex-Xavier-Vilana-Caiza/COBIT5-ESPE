const mongoose = require('mongoose');

const Secondchema = mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
   EDM: {
    type: String,
    required: true
    },
    ma: {
        type: String,
        required: true
    },
    mb: {
        type: String,
        required: true
    },
    mc: {
        type: String,
        required: true
    },
    md: {
        type: String,
        required: true
    },
    me: {
        type: String,
        required: true
    },
    mf: {
        type: String,
        required: true
    },
    mg: {
        type: String,
        required: true
    },
    mh: {
        type: String,
        required: true
    },
    mi: {
        type: String,
        required: true
    },
    mj: {
        type: String,
        required: true
    },
    mk: {
        type: String,
        required: true
    },
    ml: {
        type: String,
        required: true
    },
    mm: {
        type: String,
        required: true
    },
    mn: {
        type: String,
        required: true
    },
    mnn: {
        type: String,
        required: true
    },
    mo: {
        type: String,
        required: true
    },
    mp: {
        type: String,
        required: true
    },
    mq: {
        type: String,
        required: true
    },
    mr: {
        type: String,
        required: true
    },
    ms: {
        type: String,
        required: true
    },
    mt: {
        type: String,
        required: true
    },
    mu: {
        type: String,
        required: true
    },
    mv: {
        type: String,
        required: true
    },
    mw: {
        type: String,
        required: true
    },
    mx: {
        type: String,
        required: true
    },
    my: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Second', Secondchema);
