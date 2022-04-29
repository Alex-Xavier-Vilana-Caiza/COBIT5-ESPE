const Cabecera7 = require("../models/Cabecera7");


exports.crearCabecera7 = async (req, res) => {
    
    try {
        let cabecera7;
        //Creamos el producto
        cabecera7 = new Cabecera7(req.body);

        await cabecera7.save();
        res.send(cabecera7);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerCabeceras7 = async (req, res) => {

    try {
        
        const cabeceras7 = await Cabecera7.find();
        res.json(cabeceras7)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarCabecera7 = async (req, res) => {

    try {
        const { dda, ddb, ddc,ddd,dde,ddf,ddg,
            ddh,
            ddi,
            ddj,
            ddk,
            ddl,
            ddm,
            ddn,
            ddo,
            ddp,
            ddq,
            ddr,
            dds,
            ddt,
            ddu,
            ddv,
            ddw,
            ddx,
            ddy,
            ddz} = req.body;
        let cabecera7 = await Cabecera7.findById(req.params.id);

        if(!cabecera7) {
            res.status(404).json({ msg: 'No existe tal cosa o cabecera7'})

        }

        cabecera7.dda = dda;
        cabecera7.ddb = ddb;
        cabecera7.ddc = ddc;
        cabecera7.ddd = ddd;
        cabecera7.dde = dde;
        cabecera7.ddf = ddf;
        cabecera7.ddg = ddg;
        cabecera7.ddh = ddh;
        cabecera7.ddi = ddi;
        cabecera7.ddj = ddj;
        cabecera7.ddk = ddk;
        cabecera7.ddl = ddl;
        cabecera7.ddm = ddm;
        cabecera7.ddn = ddn;
        cabecera7.ddo = ddo;
        cabecera7.ddp = ddp;
        cabecera7.ddq = ddq;
        cabecera7.ddr = ddr;
        cabecera7.dds = dds;
        cabecera7.ddt = ddt;
        cabecera7.ddu = ddu;
        cabecera7.ddv = ddv;
        cabecera7.ddw = ddw;
        cabecera7.ddx = ddx;
        cabecera7.ddy = ddy;
        cabecera7.ddz = ddz;
        cabecera7 = await Cabecera7.findOneAndUpdate({ _id: req.params.id},cabecera7, {new: true});
        res.json(cabecera7)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerCabecera7 = async (req, res) => {

    try {
        let cabecera7 = await Cabecera7.findById(req.params.id);
        if(!cabecera7) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(cabecera7)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCabecera7 = async (req, res) => {

    try {
        let cabecera7 = await Cabecera7.findById(req.params.id);

        if(!cabecera7) {
            res.status(404).json({ msg: 'No existe tal cosa o cabecera'})

        }
        await Cabecera7.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Cabecera eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}