const Body =require("../models/head4")

exports.crearBody = async (req, res ) => {
    
    try {
        let body; 
    
        body = new Body(req.body);

        await body.save();
        res.send(body);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerBodys = async (req, res) => {

    try {
        
        const bodys = await Body.find();
        res.json(bodys)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarBody = async (req, res) => {

    try {
        const { la, lb, lc,ld,le,lf,lg,lh,li,lj,lk,ll,lm,ln,lnn,lo,lp,lq,
            lr,ls,lt,lu,lv,lw,lx,ly} = req.body;
        let body = await Body.findById(req.params.id);

        if(!body) {
            res.status(404).json({ msg: 'No existe '})

        }
 
        body.la = la;
        body.lb = lb;
        body.lc = lc;
        body.ld = ld;
        body.le = le;
        body.lf = lf;
        body.lg = lg;
        body.lh = lh;
        body.li = li;
        body.lj = lj;
        body.lk = lk;
        body.ll = ll;
        body.lm = lm;
        body.ln = ln;
        body.lnn =lnn;
        body.lo = lo;
        body.lp = lp;
        body.lq = lq;
        body.lr = lr;
        body.ls = ls;
        body.lt = lt;
        body.lu = lu;
        body.lv = lv;
        body.lw = lw;
        body.lx = lx;
        body.ly = ly;
       
    
      
        body = await Body.findOneAndUpdate({ _id: req.params.id},
            body, {new: true});
        res.json(body)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}
exports.obtenerBody = async (req, res) => {

    try {
        let body= await Body.findById(req.params.id);
        if(!body) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(body)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}
exports.eliminarBody = async (req, res) => {

    try {
        let body = await Body.findById(req.params.id);

        if(!body) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Body.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}
