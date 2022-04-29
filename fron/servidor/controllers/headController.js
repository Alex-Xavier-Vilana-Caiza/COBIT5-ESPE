const Head =require("../models/head")

exports.crearHead = async (req, res ) => {
    
    try {
        let head;
    
        head = new Head(req.body);

        await head.save();
        res.send(head);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerHeads = async (req, res) => {

    try {
        
        const heads = await Head.find();
        res.json(heads)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarHead = async (req, res) => {

    try {
        const { ha, hb, hc,hd,he,hf,hg,hh,hi,hj,hk,hl,hm,hn,hnn,ho,hp,hq,
            hr,hs,ht,hu,hv,hw,hx,hy} = req.body;
        let head = await Head.findById(req.params.id);

        if(!head) {
            res.status(404).json({ msg: 'No existe '})

        }
 
        head.ha = ha;
        head.hb = hb;
        head.hc = hc;
        head.hd = hd;
        head.he = he;
        head.hf = hf;
        head.hg = hg;
        head.hh = hh;
        head.hi = hi;
        head.hj = hj;
        head.hk = hk;
        head.hl = hl;
        head.hm = hm;
        head.hn = hn;
        head.hnn = hnn;
        head.ho = ho;
        head.hp = hp;
        head.hq = hq;
        head.hr = hr;
        head.hs = hs;
        head.ht = ht;
        head.hu = hu;
        head.hv = hv;
        head.hw = hw;
        head.hx = hx;
        head.hy = hy;
       
    
      
        head = await Head.findOneAndUpdate({ _id: req.params.id},
            head, {new: true});
        res.json(head)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}
exports.obtenerHead = async (req, res) => {

    try {
        let head= await Head.findById(req.params.id);
        if(!head) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(head)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}
exports.eliminarHead = async (req, res) => {

    try {
        let head = await Head.findById(req.params.id);

        if(!head) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Head.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}
