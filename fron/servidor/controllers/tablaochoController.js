const Tablaocho = require("../models/Tablaocho");


exports.crearTablaocho = async (req, res) => {
    
    try {
        let tablaocho;
        //Creamos el producto
        tablaocho = new Tablaocho(req.body);

        await tablaocho.save();
        res.send(tablaocho);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerTablaocho = async (req, res) => {

    try {
        
        const tablaocho = await Tablaocho.find();
        res.json(tablaocho)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}
exports.actualizarTablaocho = async (req, res) => {

    try {
        const {BAI08,ca, cb, cc,cd,ce,cf,cg,
            ch,
            ci,
            cj,
            ck,
            cl,
            cm,
            cn,
            co,
            cp,
            cq,
            cr,
            cs,
            ct,
            cu,
            cv,
            cw,
            cx,
            cy,
            cz} = req.body;
        let tablaocho = await Tablaocho.findById(req.params.id);

        if(!tablaocho) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})
        }

        tablaocho.BAI08 = BAI08;
        tablaocho.ca = ca;
        tablaocho.cb = cb;
        tablaocho.cc = cc;
        tablaocho.cd = cd;
        tablaocho.ce = ce;
        tablaocho.cf = cf;
        tablaocho.cg = cg;
        tablaocho.ch = ch;
        tablaocho.ci = ci;
        tablaocho.cj = cj;
        tablaocho.ck = ck;
        tablaocho.cl = cl;
        tablaocho.cm = cm;
        tablaocho.cn = cn;
        tablaocho.co = co;
        tablaocho.cp = cp;
        tablaocho.cq = cq;
        tablaocho.cr = cr;
        tablaocho.cs = cs;
        tablaocho.ct = ct;
        tablaocho.cu = cu;
        tablaocho.cv = cv;
        tablaocho.cw = cw;
        tablaocho.cx = cx;
        tablaocho.cy = cy;
        tablaocho.cz = cz;
        
        tablaocho = await Tablaocho.findOneAndUpdate({ _id: req.params.id},tablaocho, {new: true});
        res.json(tablaocho)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerTablaochos = async (req, res) => {

    try {
        let tablaocho = await Tablaocho.findById(req.params.id);
        if(!tablaocho) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(tablaocho)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarTablaocho = async (req, res) => {

    try {
        let tablaocho = await Tablaocho.findById(req.params.id);

        if(!tablaocho) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Tablaocho.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}