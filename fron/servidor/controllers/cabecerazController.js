const Cabeceraz = require("../models/cabeceraz");

exports.crearCabeceraz = async (req, res ) => {
    
    try {
        let cabeceraz;
    
        cabeceraz = new Cabeceraz(req.body);

        await cabeceraz.save();
        res.send(cabeceraz);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerCabecerasz = async (req, res) => {

    try {
        
        const cabecerasz = await Cabeceraz.find();
        res.json(cabecerasz)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarCabeceraz = async (req, res) => {

    try {
        const { ka, kb, kc,kd,
            ke,
            kf,
            kg,
            kh,
            ki,
            kj,
            kk,
            kl,
            km,
            kn,
            ko,
            kp,
            kq,
            kr,
            ks,
            kt,
            ku,
            kv,
            kw,
            kx,
            ky,
            kz} = req.body;
        let cabeceraz = await Cabeceraz.findById(req.params.id);

        if(!cabeceraz) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }

        cabeceraz.ka = ka;
        cabeceraz.kb = kb;
        cabeceraz.kc = kc;
        cabeceraz.kd = kd;
        cabeceraz.ke = ke;
        cabeceraz.kf = kf;
        cabeceraz.kg = kg;
        cabeceraz.kh = kh;
        cabeceraz.ki = ki;
        cabeceraz.kj = kj;
        cabeceraz.kk = kk;
        cabeceraz.kl = kl;
        cabeceraz.km = km;
        cabeceraz.kn = kn;
        cabeceraz.ko = ko;
        cabeceraz.kp = kp;
        cabeceraz.kq = kq;
        cabeceraz.kr = kr;
        cabeceraz.ks = ks;
        cabeceraz.kt = kt;
        cabeceraz.ku = ku;
        cabeceraz.kv = kv;
        cabeceraz.kw = kw;
        cabeceraz.kx = kx;
        cabeceraz.ky = ky;
        cabeceraz.kz = kz;

        cabeceraz = await Cabeceraz.findOneAndUpdate({ _id: req.params.id},cabeceraz, {new: true});
        res.json(cabeceraz)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}
exports.obtenerCabeceraz = async (req, res) => {

    try {
        let cabeceraz = await Cabeceraz.findById(req.params.id);
        if(!cabeceraz) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(cabeceraz)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}
exports.eliminarCabeceraz = async (req, res) => {

    try {
        let cabeceraz = await Cabeceraz.findById(req.params.id);

        if(!cabeceraz) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Cabeceraz.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}