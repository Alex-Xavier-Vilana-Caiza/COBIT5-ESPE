const mongoose = require('mongoose');

const FourSchema =mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
   EDM4: {
    type: String,
    required: true
    },
   da: {
        type: String,
        required: true
    },
   db: {
        type: String,
        required: true
    },
   dc: {
        type: String,
        required: true
    },
   dd: {
        type: String,
        required: true
    },
   de: {
        type: String,
        required: true
    },
   df: {
        type: String,
        required: true
    },
   dg: {
        type: String,
        required: true
    },
   dh: {
        type: String,
        required: true
    },
   di: {
        type: String,
        required: true
    },
   dj: {
        type: String,
        required: true
    },
   dk: {
        type: String,
        required: true
    },
   dl: {
        type: String,
        required: true
    },
   dm: {
        type: String,
        required: true
    },
   dn: {
        type: String,
        required: true
    },
   dnn: {
        type: String,
        required: true
    },
   so: {
        type: String,
        required: true
    },
   dp: {
        type: String,
        required: true
    },
   dq: {
        type: String,
        required: true
    },
   dr: {
        type: String,
        required: true
    },
   ds: {
        type: String,
        required: true
    },
   dt: {
        type: String,
        required: true
    },
   du: {
        type: String,
        required: true
    },
   dv: {
        type: String,
        required: true
    },
   dw: {
        type: String,
        required: true
    },
   dx: {
        type: String,
        required: true
    },
   dy: {
        type: String,
        required: true
    }
});
module.exports =mongoose.model('Four', FourSchema);
