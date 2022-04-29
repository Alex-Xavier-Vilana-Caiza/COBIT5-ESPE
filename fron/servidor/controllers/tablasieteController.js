const Tablasiete = require("../models/Tablasiete");


exports.crearTablasiete = async (req, res) => {
    
    try {
        let tablasiete;
        //Creamos el producto
        tablasiete = new Tablasiete(req.body);

        await tablasiete.save();
        res.send(tablasiete);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerTablasiete = async (req, res) => {

    try {
        
        const tablasiete = await Tablasiete.find();
        res.json(tablasiete)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}
exports.actualizarTablasiete = async (req, res) => {

    try {
        const {BAI07,oa, ob, oc,od,oe,of,og,
            oh,
            oi,
            oj,
            ok,
            ol,
            om,
            on,
            oo,
            op,
            oq,
            or,
            os,
            ot,
            ou,
            ov,
            ow,
            ox,
            oy,
            oz} = req.body;
        let tablasiete = await Tablasiete.findById(req.params.id);

        if(!tablasiete) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})
        }

        tablasiete.BAI07 = BAI07;
        tablasiete.oa = oa;
        tablasiete.ob = ob;
        tablasiete.oc = oc;
        tablasiete.od = od;
        tablasiete.oe = oe;
        tablasiete.of = of;
        tablasiete.og = og;
        tablasiete.oh = oh;
        tablasiete.oi = oi;
        tablasiete.oj = oj;
        tablasiete.ok = ok;
        tablasiete.ol = ol;
        tablasiete.om = om;
        tablasiete.on = on;
        tablasiete.oo = oo;
        tablasiete.op = op;
        tablasiete.oq = oq;
        tablasiete.or = or;
        tablasiete.os = os;
        tablasiete.ot = ot;
        tablasiete.ou = ou;
        tablasiete.ov = ov;
        tablasiete.ow = ow;
        tablasiete.ox = ox;
        tablasiete.oy = oy;
        tablasiete.oz = oz;
        
        tablasiete = await Tablasiete.findOneAndUpdate({ _id: req.params.id},tablasiete, {new: true});
        res.json(tablasiete)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerTablasietes = async (req, res) => {

    try {
        let tablasiete = await Tablasiete.findById(req.params.id);
        if(!tablasiete) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(tablasiete)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarTablasiete = async (req, res) => {

    try {
        let tablasiete = await Tablasiete.findById(req.params.id);

        if(!tablasiete) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Tablasiete.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}