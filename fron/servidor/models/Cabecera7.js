const mongoose = require('mongoose');

const Cabecera7Schema = mongoose.Schema({
    dda: {
        type: String,
        required: true
    },
    ddb: {
        type: String,
        required: true
    },
    ddc: {
        type: String,
        required: true
    },
    ddd: {
        type: String,
        required: true
    },
    dde: {
        type: String,
        required: true
    },
    ddf: {
        type: String,
        required: true
    },
    ddg: {
        type: String,
        required: true
    },
    ddh: {
        type: String,
        required: true
    },
    ddi: {
        type: String,
        required: true
    },
    ddj: {
        type: String,
        required: true
    },
    ddk: {
        type: String,
        required: true
    },
    ddl: {
        type: String,
        required: true
    },
    ddm: {
        type: String,
        required: true
    },
    ddn: {
        type: String,
        required: true
    },
    ddo: {
        type: String,
        required: true
    },
    ddp: {
        type: String,
        required: true
    },
    ddq: {
        type: String,
        required: true
    },
    ddr: {
        type: String,
        required: true
    },
    dds: {
        type: String,
        required: true
    },
    ddt: {
        type: String,
        required: true
    },
    ddu: {
        type: String,
        required: true
    },
    ddv: {
        type: String,
        required: true
    },
    ddw: {
        type: String,
        required: true
    },
    ddx: {
        type: String,
        required: true
    },
    ddy: {
        type: String,
        required: true
    },
    ddz: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});
module.exports = mongoose.model('cabecera7', Cabecera7Schema);