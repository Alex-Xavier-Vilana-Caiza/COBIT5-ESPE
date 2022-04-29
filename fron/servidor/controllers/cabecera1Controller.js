const Cabecera1 = require("../models/Cabecera1");


exports.crearCabecera1 = async (req, res) => {
    
    try {
        let cabecera1;
        //Creamos el producto
        cabecera1 = new Cabecera1(req.body);

        await cabecera1.save();
        res.send(cabecera1);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerCabeceras1 = async (req, res) => {

    try {
        
        const cabeceras1 = await Cabecera1.find();
        res.json(cabeceras1)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarCabecera1 = async (req, res) => {

    try {
        const { ja, jb, jc,jd,je,jf,jg,
            jh,
            ji,
            jj,
            jk,
            jl,
            jm,
            jn,
            jo,
            jp,
            jq,
            jr,
            js,
            jt,
            ju,
            jv,
            jw,
            jx,
            jy,
            jz} = req.body;
        let cabecera1 = await Cabecera1.findById(req.params.id);

        if(!cabecera1) {
            res.status(404).json({ msg: 'No existe tal cosa o cabecera1'})

        }

        cabecera1.ja = ja;
        cabecera1.jb = jb;
        cabecera1.jc = jc;
        cabecera1.jd = jd;
        cabecera1.je = je;
        cabecera1.jf = jf;
        cabecera1.jg = jg;
        cabecera1.jh = jh;
        cabecera1.ji = ji;
        cabecera1.jj = jj;
        cabecera1.jk = jk;
        cabecera1.jl = jl;
        cabecera1.jm = jm;
        cabecera1.jn = jn;
        cabecera1.jo = jo;
        cabecera1.jp = jp;
        cabecera1.jq = jq;
        cabecera1.jr = jr;
        cabecera1.js = js;
        cabecera1.jt = jt;
        cabecera1.ju = ju;
        cabecera1.jv = jv;
        cabecera1.jw = jw;
        cabecera1.jx = jx;
        cabecera1.jy = jy;
        cabecera1.jz = jz;
        cabecera1 = await Cabecera1.findOneAndUpdate({ _id: req.params.id},cabecera1, {new: true});
        res.json(cabecera1)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerCabecera1 = async (req, res) => {

    try {
        let cabecera1 = await Cabecera1.findById(req.params.id);
        if(!cabecera1) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(cabecera1)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCabecera1 = async (req, res) => {

    try {
        let cabecera1 = await Cabecera1.findById(req.params.id);

        if(!cabecera1) {
            res.status(404).json({ msg: 'No existe tal cosa o cabecera'})

        }
        await Cabecera1.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Cabecera eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}