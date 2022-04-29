const Cabecerax = require("../models/cabecerax");

exports.crearCabecerax = async (req, res ) => {
    
    try {
        let cabecerax;
    
        cabecerax = new Cabecerax(req.body);

        await cabecerax.save();
        res.send(cabecerax);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerCabecerasx = async (req, res) => {

    try {
        
        const cabecerasx = await Cabecerax.find();
        res.json(cabecerasx)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarCabecerax = async (req, res) => {

    try {
        const { ua, ub, uc,ud,
            ue,
            uf,
            ug,
            uh,
            ui,
            uj,
            uk,
            ul,
            um,
            un,
            uo,
            up,
            uq,
            ur,
            us,
            ut,
            uu,
            uv,
            uw,
            ux,
            uy,
            uz} = req.body;
        let cabecerax = await Cabecerax.findById(req.params.id);

        if(!cabecerax) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }

        cabecerax.ua = ua;
        cabecerax.ub = ub;
        cabecerax.uc = uc;
        cabecerax.ud = ud;
        cabecerax.ue = ue;
        cabecerax.uf = uf;
        cabecerax.ug = ug;
        cabecerax.uh = uh;
        cabecerax.ui = ui;
        cabecerax.uj = uj;
        cabecerax.uk = uk;
        cabecerax.ul = ul;
        cabecerax.um = um;
        cabecerax.un = un;
        cabecerax.uo = uo;
        cabecerax.up = up;
        cabecerax.uq = uq;
        cabecerax.ur = ur;
        cabecerax.us = us;
        cabecerax.ut = ut;
        cabecerax.uu = uu;
        cabecerax.uv = uv;
        cabecerax.uw = uw;
        cabecerax.ux = ux;
        cabecerax.uy = uy;
        cabecerax.uz = uz;

        cabecerax = await Cabecerax.findOneAndUpdate({ _id: req.params.id},cabecerax, {new: true});
        res.json(cabecerax)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}
exports.obtenerCabecerax = async (req, res) => {

    try {
        let cabecerax = await Cabecerax.findById(req.params.id);
        if(!cabecerax) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(cabecerax)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}
exports.eliminarCabecerax = async (req, res) => {

    try {
        let cabecerax = await Cabecerax.findById(req.params.id);

        if(!cabecerax) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Cabecerax.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}