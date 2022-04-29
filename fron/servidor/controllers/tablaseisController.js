const Tablaseis = require("../models/Tablaseis");


exports.crearTablaseis = async (req, res) => {
    
    try {
        let tablaseis;
        //Creamos el producto
        tablaseis = new Tablaseis(req.body);

        await tablaseis.save();
        res.send(tablaseis);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerTablaseis = async (req, res) => {

    try {
        
        const tablaseis = await Tablaseis.find();
        res.json(tablaseis)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}
exports.actualizarTablaseis = async (req, res) => {

    try {
        const {BAI06,qa, qb, qc,qd,qe,qf,qg,
            qh,
            qi,
            qj,
            qk,
            ql,
            qm,
            qn,
            qo,
            qp,
            qq,
            qr,
            qs,
            qt,
            qu,
            qv,
            qw,
            qx,
            qy,
            qz} = req.body;
        let tablaseis = await Tablaseis.findById(req.params.id);

        if(!tablaseis) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})
        }

        tablaseis.BAI06 = BAI06;
        tablaseis.qa = qa;
        tablaseis.qb = qb;
        tablaseis.qc = qc;
        tablaseis.qd = qd;
        tablaseis.qe = qe;
        tablaseis.qf = qf;
        tablaseis.qg = qg;
        tablaseis.qh = qh;
        tablaseis.qi = qi;
        tablaseis.qj = qj;
        tablaseis.qk = qk;
        tablaseis.ql = ql;
        tablaseis.qm = qm;
        tablaseis.qn = qn;
        tablaseis.qo = qo;
        tablaseis.qp = qp;
        tablaseis.qq = qq;
        tablaseis.qr = qr;
        tablaseis.qs = qs;
        tablaseis.qt = qt;
        tablaseis.qu = qu;
        tablaseis.qv = qv;
        tablaseis.qw = qw;
        tablaseis.qx = qx;
        tablaseis.qy = qy;
        tablaseis.qz = qz;
        
        tablaseis = await Tablaseis.findOneAndUpdate({ _id: req.params.id},tablaseis, {new: true});
        res.json(tablaseis)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerTablaseiss = async (req, res) => {

    try {
        let tablaseis = await Tablaseis.findById(req.params.id);
        if(!tablaseis) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(tablaseis)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarTablaseis = async (req, res) => {

    try {
        let tablaseis = await Tablaseis.findById(req.params.id);

        if(!tablaseis) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Tablaseis.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}