const mongoose = require('mongoose');

const CabeceraxSchema = mongoose.Schema({

    Fechadecreacion: {
        type: Date, 
        default: Date.now()
   },
    ua:{
        type: String,
        required: true
    },
    ub:{
        type: String,
        required: true
    },
    uc:{
        type: String,
        required: true
    },
    ud:{
        type: String,
        required: true
    },
    ue: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: true
    },
    ug: {
        type: String,
        required: true
    },
    uh: {
        type: String,
        required: true
    },
    ui: {
        type: String,
        required: true
    },
    uj: {
        type: String,
        required: true
    },
    uk: {
        type: String,
        required: true
    },
    ul: {
        type: String,
        required: true
    },
    um: {
        type: String,
        required: true
    },
    un: {
        type: String,
        required: true
    },
    uo: {
        type: String,
        required: true
    },
    up: {
        type: String,
        required: true
    },
    uq: {
        type: String,
        required: true
    },
    ur: {
        type: String,
        required: true
    },
    us: {
        type: String,
        required: true
    },
    ut: {
        type: String,
        required: true
    },
    uu: {
        type: String,
        required: true
    },
    uv: {
        type: String,
        required: true
    },
    uw: {
        type: String,
        required: true
    },
    ux: {
        type: String,
        required: true
    },
    uy: {
        type: String,
        required: true
    },
    uz: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Cabecerax', CabeceraxSchema);