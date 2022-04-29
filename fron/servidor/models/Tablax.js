const mongoose = require('mongoose');

const TablaxSchema = mongoose.Schema({
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    xaa: {
    type: String,
    required: true
    },
    xa: {
        type: String,
        required: true
    },
    xb: {
        type: String,
        required: true
    },
    xc: {
        type: String,
        required: true
    },
    xd: {
        type: String,
        required: true
    },
    xe: {
        type: String,
        required: true
    },
    xf: {
        type: String,
        required: true
    },
    xg: {
        type: String,
        required: true
    },
    xh: {
        type: String,
        required: true
    },
    xi: {
        type: String,
        required: true
    },
    xj: {
        type: String,
        required: true
    },
    xk: {
        type: String,
        required: true
    },
    xl: {
        type: String,
        required: true
    },
    xm: {
        type: String,
        required: true
    },
    xn: {
        type: String,
        required: true
    },
    xo: {
        type: String,
        required: true
    },
    xp: {
        type: String,
        required: true
    },
    xq: {
        type: String,
        required: true
    },
    xr: {
        type: String,
        required: true
    },
    xs: {
        type: String,
        required: true
    },
    xt: {
        type: String,
        required: true
    },
    xu: {
        type: String,
        required: true
    },
    xv: {
        type: String,
        required: true
    },
    xw: {
        type: String,
        required: true
    },
    xx: {
        type: String,
        required: true
    },
    xy: {
        type: String,
        required: true
    },
    xz: {
        type: String,
        required: true
    }

    
});
module.exports = mongoose.model('Tablax', TablaxSchema);