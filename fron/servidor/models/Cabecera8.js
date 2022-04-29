const mongoose = require('mongoose');

const Cabecera8Schema = mongoose.Schema({
    maa: {
        type: String,
        required: true
    },
    mab: {
        type: String,
        required: true
    },
    mac: {
        type: String,
        required: true
    },
    mad: {
        type: String,
        required: true
    },
    mae: {
        type: String,
        required: true
    },
    maf: {
        type: String,
        required: true
    },
    mag: {
        type: String,
        required: true
    },
    mah: {
        type: String,
        required: true
    },
    mai: {
        type: String,
        required: true
    },
    maj: {
        type: String,
        required: true
    },
    mak: {
        type: String,
        required: true
    },
    mal: {
        type: String,
        required: true
    },
    mam: {
        type: String,
        required: true
    },
    man: {
        type: String,
        required: true
    },
    mao: {
        type: String,
        required: true
    },
    map: {
        type: String,
        required: true
    },
    maq: {
        type: String,
        required: true
    },
    mar: {
        type: String,
        required: true
    },
    mas: {
        type: String,
        required: true
    },
    mat: {
        type: String,
        required: true
    },
    mau: {
        type: String,
        required: true
    },
    mav: {
        type: String,
        required: true
    },
    maw: {
        type: String,
        required: true
    },
    max: {
        type: String,
        required: true
    },
    may: {
        type: String,
        required: true
    },
    maz: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});
module.exports = mongoose.model('cabecera8', Cabecera8Schema);