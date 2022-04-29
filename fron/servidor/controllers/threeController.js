const Three = require("../models/Three");

exports.crearThree = async (req, res) => {
    
    try {
        let three;
        
        three = new Three(req.body);

        await three.save();
        res.send(three);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerThrees = async (req, res) => {

    try {
        
        const Threes = await Three.find();
        res.json(Threes)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarThree = async (req, res) => {

    try {
        const {EDM3,pa, pb, pc,pd ,pe,pf,pg,ph,pi
            ,pj,pk,pl,pm,pn,pnn,po,pp,pq,pr,ps,pt,
            pu,pv,pw,px,py} = req.body;
        let three = await Three.findById(req.params.id);

        if(!three) {
            res.status(404).json({ msg: 'No existe '})

        }
        three.EDM3 = EDM3;
        three.pa = pa;
        three.pb = pb;
        three.pc = pc;
        three.pd = pd;
        three.pe = pe;
        three.pf = pf;
        three.pg = pg;
        three.ph = ph;
        three.pi = pi;
        three.pj = pj;
        three.pk = pk;
        three.pl = pl;
        three.pm = pm;
        three.pn = pn;
        three.pnn = pnn;
        three.po = po;
        three.pp = pp;
        three.pq = pq;
        three.pr = pr;
        three.ps = ps;
        three.pt = pt;
        three.pu = pu;
        three.pv = pv;
        three.pw = pw;
        three.px = px;
        three.py = py;
        
       three= await Three.findOneAndUpdate({ _id: req.params.id},three, {new: true});
        res.json(three)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerThree= async (req, res) => {

    try {
        let three = await Three.findById(req.params.id);
        if(!three) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(three)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarThree= async (req, res) => {

    try {
        let three = await Three.findById(req.params.id);

        if(!three) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Three.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 