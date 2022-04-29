const mongoose = require('mongoose');

const HeadSchema = mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    ha:{
        type: String,
        required: true
    },
    hb:{
        type: String,
        required: true
    },
    hc:{
        type: String,
        required: true
    },
    hd:{
        type: String,
        required: true
    },
    he:{
        type: String,
        required: true
    },
    hf:{
        type: String,
        required: true
    },
    hg:{
        type: String,
        required: true
    },
    hh:{
        type: String,
        required: true
    },
    hi:{
        type: String,
        required: true
    },
    hj:{
        type: String,
        required: true
    },
    hk:{
        type: String,
        required: true
    },
    hl:{
        type: String,
        required: true
    },
    hm:{
        type: String,
        required: true
    },
    hn:{
        type: String,
        required: true
    },
    hnn:{
        type: String,
        required: true
    },
    ho:{
        type: String,
        required: true
    },
    hp:{
        type: String,
        required: true
    },
    hq:{
        type: String,
        required: true
    },
    hr:{
        type: String,
        required: true
    },
    hs:{
        type: String,
        required: true
    },
    ht:{
        type: String,
        required: true
    },
    hu:{
        type: String,
        required: true
    },
    hv:{
        type: String,
        required: true
    },
    hw:{
        type: String,
        required: true
    },
    hx:{
        type: String,
        required: true
    },
    hy:{
        type: String,
        required: true
    },
   
});

module.exports = mongoose.model('Head', HeadSchema);