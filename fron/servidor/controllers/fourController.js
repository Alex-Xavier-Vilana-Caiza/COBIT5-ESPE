const Four = require("../models/four");

exports.crearFour = async (req, res) => {
    
    try {
        let four;
        
        four= new Four(req.body);

        await four.save();
        res.send(four);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerFours = async (req, res) => {

    try {
        
        const fours = await Four.find();
        res.json(fours)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarFour = async (req, res) => {

    try {
        const {EDM4,da, db, dc,dd ,de,df,dg,dh,di,dj,dk,dl,dm,
            dn,dnn,so,dp,dq,dr,ds,dt,du,dv,dw,md,dy} = req.body;
        let four= await Four.findById(req.params.id);

        if(!four) {
            res.status(404).json({ msg: 'No existe '})

        }
        four.EDM4 =EDM4;
        four.da = da;
        four.db = db;
        four.dc = dc;
        four.dd = dd;
        four.de = de;
        four.df = df;
        four.dg = dg;
        four.dh = dh;
        four.di = di;
        four.dj = dj;
        four.dk = dk;
        four.dl = dl;
        four.dm = dm;
        four.dn = dn;
        four.dnn =dnn;
        four.so = so;
        four.dp = dp;
        four.dq = dq;
        four.dr = dr;
        four.ds = ds;
        four.dt = dt;
        four.du = du;
        four.dv = dv;
        four.dw = dw;
        four.dx = dx;
        four.dy = dy;
        
        four= await Four.findOneAndUpdate({ _id: req.params.id},four, {new: true});
        res.json(four)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerFour = async (req, res) => {

    try {
        let four = await Four.findById(req.params.id);
        if(!four) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(four)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarFour = async (req, res) => {

    try {
        let four = await Four.findById(req.params.id);

        if(!four) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Four.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 