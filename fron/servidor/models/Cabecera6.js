const mongoose = require('mongoose');

const Cabecera6Schema = mongoose.Schema({
    mma: {
        type: String,
        required: true
    },
    mmb: {
        type: String,
        required: true
    },
    mmc: {
        type: String,
        required: true
    },
    mmd: {
        type: String,
        required: true
    },
    mme: {
        type: String,
        required: true
    },
    mmf: {
        type: String,
        required: true
    },
    mmg: {
        type: String,
        required: true
    },
    mmh: {
        type: String,
        required: true
    },
    mmi: {
        type: String,
        required: true
    },
    mmj: {
        type: String,
        required: true
    },
    mmk: {
        type: String,
        required: true
    },
    mml: {
        type: String,
        required: true
    },
    mmm: {
        type: String,
        required: true
    },
    mmn: {
        type: String,
        required: true
    },
    mmo: {
        type: String,
        required: true
    },
    mmp: {
        type: String,
        required: true
    },
    mmq: {
        type: String,
        required: true
    },
    mmr: {
        type: String,
        required: true
    },
    mms: {
        type: String,
        required: true
    },
    mmt: {
        type: String,
        required: true
    },
    mmu: {
        type: String,
        required: true
    },
    mmv: {
        type: String,
        required: true
    },
    mmw: {
        type: String,
        required: true
    },
    mmx: {
        type: String,
        required: true
    },
    mmy: {
        type: String,
        required: true
    },
    mmz: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});
module.exports = mongoose.model('cabecera6', Cabecera6Schema);