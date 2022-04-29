const mongoose = require('mongoose');

const Raci06Schema = mongoose.Schema({

    dss: { type: String,require: true},
    dss1: { type: String,require: true},
    dss2: { type: String, require: true },
    dss3: { type: String, require: true },
    dss4: { type: String, require: true },
    dss5: { type: String, require: true },
    dss6: { type: String, require: true },
    dss7: { type: String, require: true },
    dss8: { type: String, require: true },
    dss9: { type: String, require: true },
    dss10: { type: String, require: true },
    dss11: { type: String, require: true },
    dss12: { type: String, require: true },
    dss13: { type: String, require: true },
    dss14: { type: String, require: true },
    dss15: { type: String, require: true },
    dss16: { type: String, require: true },
    dss17: { type: String, require: true },
    dss18: { type: String, require: true },
    dss19: { type: String, require: true },
    dss20: { type: String, require: true },
    dss21: { type: String, require: true },
    dss22: { type: String, require: true },
    dss23: { type: String, require: true },
    dss24: { type: String, require: true },
    dss25: { type: String, require: true },
    dss26: { type: String, require: true },

    Fechadecreacion: {type: Date,default: Date.now()}
});
module.exports = mongoose.model('Raci06', Raci06Schema);