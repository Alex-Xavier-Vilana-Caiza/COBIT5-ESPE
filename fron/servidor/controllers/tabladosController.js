const Tablados = require("../models/Tablados");


exports.crearTablados = async (req, res) => {
    
    try {
        let tablados;
        //Creamos el producto
        tablados = new Tablados(req.body);

        await tablados.save();
        res.send(tablados);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerTablado = async (req, res) => {

    try {
        
        const tablados = await Tablados.find();
        res.json(tablados)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarTablados = async (req, res) => {

    try {
        const {aab,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb } = req.body;
        let tablados = await Tablados.findById(req.params.id);

        if(!tablados) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        tablados.aab = aab;
        tablados.ab = ab;
        tablados.bb = bb;
        tablados.cb = cb;
        tablados.db = db;
        tablados.eb = eb;
        tablados.fb = fb;
        tablados.gb = gb;
        tablados.hb = hb;
        tablados.ib = ib;
        tablados.jb = jb;
        tablados.kb = kb;
        tablados.lb = lb;
        tablados.mb = mb;
        tablados.nb = nb;
        tablados.ob = ob;
        tablados.pb = pb;
        tablados.qb = qb;
        tablados.rb = rb;
        tablados.sb = sb;
        tablados.tb = tb;
        tablados.ub = ub;
        tablados.vb = vb;
        tablados.wb = wb;
        tablados.xb = xb;
        tablados.yb = yb;
        tablados.zb = zb;
        
        tablados = await Tablados.findOneAndUpdate({ _id: req.params.id},tablados, {new: true});
        res.json(tablados)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerTablados = async (req, res) => {

    try {
        let tablados = await Tablados.findById(req.params.id);
        if(!tablados) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(tablados)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarTablados = async (req, res) => {

    try {
        let tablados = await Tablados.findById(req.params.id);

        if(!tablados) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Tablados.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}