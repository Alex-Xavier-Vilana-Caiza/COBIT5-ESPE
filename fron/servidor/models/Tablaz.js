const mongoose = require('mongoose');

const TablazSchema = mongoose.Schema({
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    zaa: {
        type: String,
        required: true
    },
    za: {
        type: String,
        required: true
    },
    zb: {
        type: String,
        required: true
    },
    zc: {
        type: String,
        required: true
    },
    zd: {
        type: String,
        required: true
    },
    ze: {
        type: String,
        required: true
    },
    zf: {
        type: String,
        required: true
    },
    zg: {
        type: String,
        required: true
    },
    zh: {
        type: String,
        required: true
    },
    zi: {
        type: String,
        required: true
    },
    zj: {
        type: String,
        required: true
    },
    zk: {
        type: String,
        required: true
    },
    zl: {
        type: String,
        required: true
    },
    zm: {
        type: String,
        required: true
    },
    zn: {
        type: String,
        required: true
    },
    zo: {
        type: String,
        required: true
    },
    zp: {
        type: String,
        required: true
    },
    zq: {
        type: String,
        required: true
    },
    zr: {
        type: String,
        required: true
    },
    zs: {
        type: String,
        required: true
    },
    zt: {
        type: String,
        required: true
    },
    zu: {
        type: String,
        required: true
    },
    zv: {
        type: String,
        required: true
    },
    zw: {
        type: String,
        required: true
    },
    zx: {
        type: String,
        required: true
    },
    zy: {
        type: String,
        required: true
    },
    zz: {
        type: String,
        required: true
    }

    
});
module.exports = mongoose.model('Tablaz', TablazSchema);