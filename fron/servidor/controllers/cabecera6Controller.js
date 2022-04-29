const Cabecera6 = require("../models/Cabecera6");


exports.crearCabecera6 = async (req, res) => {
    
    try {
        let cabecera6;
        //Creamos el producto
        cabecera6 = new Cabecera6(req.body);

        await cabecera6.save();
        res.send(cabecera6);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerCabeceras6 = async (req, res) => {

    try {
        
        const cabeceras6 = await Cabecera6.find();
        res.json(cabeceras6)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarCabecera6 = async (req, res) => {

    try {
        const { mma, mmb, mmc,mmd,mme,mmf,mmg,
            mmh,
            mmi,
            mmj,
            mmk,
            mml,
            mmm,
            mmn,
            mmo,
            mmp,
            mmq,
            mmr,
            mms,
            mmt,
            mmu,
            mmv,
            mmw,
            mmx,
            mmy,
            mmz} = req.body;
        let cabecera6 = await Cabecera6.findById(req.params.id);

        if(!cabecera6) {
            res.status(404).json({ msg: 'No existe tal cosa o cabecera6'})

        }

        cabecera6.mma = mma;
        cabecera6.mmb = mmb;
        cabecera6.mmc = mmc;
        cabecera6.mmd = mmd;
        cabecera6.mme = mme;
        cabecera6.mmf = mmf;
        cabecera6.mmg = mmg;
        cabecera6.mmh = mmh;
        cabecera6.mmi = mmi;
        cabecera6.mmj = mmj;
        cabecera6.mmk = mmk;
        cabecera6.mml = mml;
        cabecera6.mmm = mmm;
        cabecera6.mmn = mmn;
        cabecera6.mmo = mmo;
        cabecera6.mmp = mmp;
        cabecera6.mmq = mmq;
        cabecera6.mmr = mmr;
        cabecera6.mms = mms;
        cabecera6.mmt = mmt;
        cabecera6.mmu = mmu;
        cabecera6.mmv = mmv;
        cabecera6.mmw = mmw;
        cabecera6.mmx = mmx;
        cabecera6.mmy = mmy;
        cabecera6.mmz = mmz;
        cabecera6 = await Cabecera6.findOneAndUpdate({ _id: req.params.id},cabecera6, {new: true});
        res.json(cabecera6)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerCabecera6 = async (req, res) => {

    try {
        let cabecera6 = await Cabecera6.findById(req.params.id);
        if(!cabecera6) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(cabecera6)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCabecera6 = async (req, res) => {

    try {
        let cabecera6 = await Cabecera6.findById(req.params.id);

        if(!cabecera6) {
            res.status(404).json({ msg: 'No existe tal cosa o cabecera'})

        }
        await Cabecera6.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Cabecera eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}