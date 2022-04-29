const Second = require("../models/Second");

exports.crearSecond = async (req, res) => {
    
    try {
        let second;
        
        second = new Second(req.body);

        await second.save();
        res.send(second);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerSeconds = async (req, res) => {

    try {
        
        const seconds = await Second.find();
        res.json(seconds)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarSecond = async (req, res) => {

    try {
        const {EDM,ma, mb, mc,md ,me,mf,mg,mh,mi,mj,mk,ml,mm,mn,mnn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my} = req.body;
        let second = await Second.findById(req.params.id);

        if(!second) {
            res.status(404).json({ msg: 'No existe '})

        }
        second.EDM = EDM;
        second.ma = ma;
        second.mb = mb;
        second.mc = mc;
        second.md = md;
        second.me = me;
        second.mf = mf;
        second.mg = mg;
        second.mh = mh;
        second.mi = mi;
        second.mj = mj;
        second.mk = mk;
        second.ml = ml;
        second.mm = mm;
        second.mn = mn;
        second.mnn = mnn;
        second.mo = mo;
        second.mp = mp;
        second.mq = mq;
        second.mr = mr;
        second.ms = ms;
        second.mt = mt;
        second.mu = mu;
        second.mv = mv;
        second.mw = mw;
        second.mx = mx;
        second.my = my;
        
        second= await Second.findOneAndUpdate({ _id: req.params.id},second, {new: true});
        res.json(second)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerSecond = async (req, res) => {

    try {
        let second = await Second.findById(req.params.id);
        if(!second) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(second)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarSecond = async (req, res) => {

    try {
        let second = await Second.findById(req.params.id);

        if(!second) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Second.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 