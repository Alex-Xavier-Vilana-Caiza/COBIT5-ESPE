const Tablaz = require("../models/Tablaz");


exports.crearTablaz = async (req, res) => {
    
    try {
        let tablaz;
        //Creamos el tablaz
        tablaz = new Tablaz(req.body);

        await tablaz.save();
        res.send(tablaz);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerTablazz = async (req, res) => {

    try {
        
        const tablaz = await Tablaz.find();
        res.json(tablaz)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarTablaz = async (req, res) => {

    try {
        const { zaa,za,zb,zc,zd, ze,
            zf,
            zg,
            zh,
            zi,
            zj,
            zk,
            zl,
            zm,
            zn,
            zo,
            zp,
            zq,
            zr,
            zs,
            zt,
            zu,
            zv,
            zw,
            zx,
            zy,
            zz } = req.body;
        let tablaz = await Tablaz.findById(req.params.id);

        if(!tablaz) {
            res.status(404).json({ msg: 'No existe tal cosa o tablaz'})

        }

        tablaz.zaa= zaa;
        tablaz.za= za;
        tablaz.zb= zb;
        tablaz.zc= zc;
        tablaz.zd= zd;
        tablaz.ze = ze;
        tablaz.zf = zf;
        tablaz.zg = zg;
        tablaz.zh = zh;
        tablaz.zi = zi;
        tablaz.zj = zj;
        tablaz.zk = zk;
        tablaz.zl = zl;
        tablaz.zm = zm;
        tablaz.zn = zn;
        tablaz.zo = zo;
        tablaz.zp = zp;
        tablaz.zq = zq;
        tablaz.zr = zr;
        tablaz.zs = zs;
        tablaz.zt = zt;
        tablaz.zu = zu;
        tablaz.zv = zv;
        tablaz.zw = zw;
        tablaz.zx = zx;
        tablaz.zy = zy;
        tablaz.zz = zz;
      
        tablaz = await Tablaz.findOneAndUpdate({ _id: req.params.id},tablaz, {new: true});
        res.json(tablaz)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenertablaz = async (req, res) => {

    try {
        let tablaz = await Tablaz.findById(req.params.id);
        if(!tablaz) {
            res.status(404).json({ msg: 'No existe tal cosa o tablaz'})

        }
        res.json(tablaz)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminartablaz = async (req, res) => {

    try {
        let tablaz = await Tablaz.findById(req.params.id);

        if(!tablaz) {
            res.status(404).json({ msg: 'No existe'})

        }
        await Tablaz.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'tablaz eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}