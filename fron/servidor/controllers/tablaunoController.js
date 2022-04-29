const Tablauno = require("../models/Tablauno");


exports.crearTablauno = async (req, res) => {
    
    try {
        let tablauno;
        //Creamos el producto
        tablauno = new Tablauno(req.body);

        await tablauno.save();
        res.send(tablauno);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerTablauno = async (req, res) => {

    try {
        
        const tablauno = await Tablauno.find();
        res.json(tablauno)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}
exports.actualizarTablauno = async (req, res) => {

    try {
        const {BAI,na, nb, nc,nd,
            ne,
            nf,
            ng,
            nh,
            ni,
            nj,
            nk,
            nl,
            nm,
            nn,
            no,
            np,
            nq,
            nr,
            ns,
            nt,
            nu,
            nv,
            nw,
            nx,
            ny,
            nz} = req.body;
        let tablauno = await Tablauno.findById(req.params.id);

        if(!tablauno) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})
        }

        tablauno.BAI = BAI;
        tablauno.na = na;
        tablauno.nb = nb;
        tablauno.nc = nc;
        tablauno.nd = nd;
        tablauno.ne = ne;
        tablauno.nf = nf;
        tablauno.ng = ng;
        tablauno.nh = nh;
        tablauno.ni = ni;
        tablauno.nj = nj;
        tablauno.nk = nk;
        tablauno.nl = nl;
        tablauno.nm = nm;
        tablauno.nn = nn;
        tablauno.no = no;
        tablauno.np = np;
        tablauno.nq = nq;
        tablauno.nr = nr;
        tablauno.ns = ns;
        tablauno.nt = nt;
        tablauno.nu = nu;
        tablauno.nv = nv;
        tablauno.nw = nw;
        tablauno.nx = nx;
        tablauno.ny = ny;
        tablauno.nz = nz;
        
        tablauno = await Tablauno.findOneAndUpdate({ _id: req.params.id},tablauno, {new: true});
        res.json(tablauno)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerTablaunos = async (req, res) => {

    try {
        let tablauno = await Tablauno.findById(req.params.id);
        if(!tablauno) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(tablauno)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarTablauno = async (req, res) => {

    try {
        let tablauno = await Tablauno.findById(req.params.id);

        if(!tablauno) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Tablauno.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}