const Tablatres = require("../models/Tablatres");


exports.crearTablatres = async (req, res) => {
    
    try {
        let tablatres;
        //Creamos el producto
        tablatres = new Tablatres(req.body);

        await tablatres.save();
        res.send(tablatres);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerTablatres = async (req, res) => {

    try {
        
        const tablatres = await Tablatres.find();
        res.json(tablatres)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}
exports.actualizarTablatres = async (req, res) => {

    try {
        const {BAI02,la, lb, lc,ld,le,lf,lg,
            lh,
            li,
            lj,
            lk,
            ll,
            lm,
            ln,
            lo,
            lp,
            lq,
            lr,
            ls,
            lt,
            lu,
            lv,
            lw,
            lx,
            ly,
            lz} = req.body;
        let tablatres = await Tablatres.findById(req.params.id);

        if(!tablatres) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})
        }

        tablatres.BAI02 = BAI02;
        tablatres.la = la;
        tablatres.lb = lb;
        tablatres.lc = lc;
        tablatres.ld = ld;
        tablatres.le = le;
        tablatres.lf = lf;
        tablatres.lg = lg;
        tablatres.lh = lh;
        tablatres.li = li;
        tablatres.lj = lj;
        tablatres.lk = lk;
        tablatres.ll = ll;
        tablatres.lm = lm;
        tablatres.ln = ln;
        tablatres.lo = lo;
        tablatres.lp = lp;
        tablatres.lq = lq;
        tablatres.lr = lr;
        tablatres.ls = ls;
        tablatres.lt = lt;
        tablatres.lu = lu;
        tablatres.lv = lv;
        tablatres.lw = lw;
        tablatres.lx = lx;
        tablatres.ly = ly;
        tablatres.lz = lz;
        
        tablatres = await Tablatres.findOneAndUpdate({ _id: req.params.id},tablatres, {new: true});
        res.json(tablatres)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerTablatress = async (req, res) => {

    try {
        let tablatres = await Tablatres.findById(req.params.id);
        if(!tablatres) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(tablatres)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarTablatres = async (req, res) => {

    try {
        let tablatres = await Tablatres.findById(req.params.id);

        if(!tablatres) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Tablatres.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}