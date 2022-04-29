const mongoose = require('mongoose');

const TabladosSchema = mongoose.Schema({
    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
   aab: {
    type: String,
    required: true
},
    ab: {
        type: String,
        required: true
    },
    bb: {
        type: String,
        required: true
    },
    cb: {
        type: String,
        required: true
    },
    db: {
        type: String,
        required: true
    },
    eb: {
        type: String,
        required: true
    },
    fb: {
        type: String,
        required: true
    },
    gb: {
        type: String,
        required: true
    },
    hb: {
        type: String,
        required: true
    },
    ib: {
        type: String,
        required: true
    },
    jb: {
        type: String,
        required: true
    },
    kb: {
        type: String,
        required: true
    },
    lb: {
        type: String,
        required: true
    },
    mb: {
        type: String,
        required: true
    },
    nb: {
        type: String,
        required: true
    },
    ob: {
        type: String,
        required: true
    },
    pb: {
        type: String,
        required: true
    },
    qb: {
        type: String,
        required: true
    },
    rb: {
        type: String,
        required: true
    },
    sb: {
        type: String,
        required: true
    },
    tb: {
        type: String,
        required: true
    },
    ub: {
        type: String,
        required: true
    },
    vb: {
        type: String,
        required: true
    },
    wb: {
        type: String,
        required: true
    },
    xb: {
        type: String,
        required: true
    },
    yb: {
        type: String,
        required: true
    },
    zb: {
        type: String,
        required: true
    }
   
   
});
module.exports = mongoose.model('Tablados', TabladosSchema);