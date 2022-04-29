const Tablax = require("../models/Tablax");


exports.crearTablax = async (req, res) => {
    
    try {
        let tablax;
        //Creamos el tablax
        tablax = new Tablax(req.body);

        await tablax.save();
        res.send(tablax);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerTablaxx = async (req, res) => {

    try {
        
        const tablax = await Tablax.find();
        res.json(tablax)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarTablax = async (req, res) => {

    try {
        const { xaa,xa,xb,xc,xd, xe,
            xf,
            xg,
            xh,
            xi,
            xj,
            xk,
            xl,
            xm,
            xn,
            xo,
            xp,
            xq,
            xr,
           xs,
           xt,
           xu,
           xv,
           xw,
           xx,
           xy,
           xz } = req.body;
        let tablax = await Tablax.findById(req.params.id);

        if(!tablax) {
            res.status(404).json({ msg: 'No existe tal cosa o tablaz'})

        }

        tablax.xaa=xaa;
        tablax.xa=xa;
        tablax.xb=xb;
        tablax.xc=xc;
        tablax.xd=xd;
        tablax.xe =xe;
        tablax.xf =xf;
        tablax.xg =xg;
        tablax.xh =xh;
        tablax.xi =xi;
        tablax.xj =xj;
        tablax.xk =xk;
        tablax.xl =xl;
        tablax.xm =xm;
        tablax.xn =xn;
        tablax.xo =xo;
        tablax.xp =xp;
        tablax.xq =xq;
        tablax.xr =xr;
        tablax.xs =xs;
        tablax.xt =xt;
        tablax.xu =xu;
        tablax.xv =xv;
        tablax.xw =xw;
        tablax.xx =xx;
        tablax.xy =xy;
        tablax.xz =xz;
      
        tablax = await Tablax.findOneAndUpdate({ _id: req.params.id},tablax, {new: true});
        res.json(tablax)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenertablax = async (req, res) => {

    try {
        let tablax = await Tablax.findById(req.params.id);
        if(!tablax) {
            res.status(404).json({ msg: 'No existe tal cosa o tablax'})

        }
        res.json(tablax)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminartablax = async (req, res) => {

    try {
        let tablax = await Tablax.findById(req.params.id);

        if(!tablax) {
            res.status(404).json({ msg: 'No existe'})

        }
        await Tablax.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'tablax eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}