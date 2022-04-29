const mongoose = require('mongoose');

const Cabecera3Schema = mongoose.Schema({
    zza: {
        type: String,
        required: true
    },
    zzb: {
        type: String,
        required: true
    },
    zzc: {
        type: String,
        required: true
    },
    zzd: {
        type: String,
        required: true
    },
    zze: {
        type: String,
        required: true
    },
    zzf: {
        type: String,
        required: true
    },
    zzg: {
        type: String,
        required: true
    },
    zzh: {
        type: String,
        required: true
    },
    zzi: {
        type: String,
        required: true
    },
    zzj: {
        type: String,
        required: true
    },
    zzk: {
        type: String,
        required: true
    },
    zzl: {
        type: String,
        required: true
    },
    zzm: {
        type: String,
        required: true
    },
    zzn: {
        type: String,
        required: true
    },
    zzo: {
        type: String,
        required: true
    },
    zzp: {
        type: String,
        required: true
    },
    zzq: {
        type: String,
        required: true
    },
    zzr: {
        type: String,
        required: true
    },
    zzs: {
        type: String,
        required: true
    },
    zzt: {
        type: String,
        required: true
    },
    zzu: {
        type: String,
        required: true
    },
    zzv: {
        type: String,
        required: true
    },
    zzw: {
        type: String,
        required: true
    },
    zzx: {
        type: String,
        required: true
    },
    zzy: {
        type: String,
        required: true
    },
    zzz: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});
module.exports = mongoose.model('cabecera3', Cabecera3Schema);