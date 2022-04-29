const Arm =require("../models/head3")

exports.crearArm = async (req, res ) => {
    
    try {
        let arm; 
    
        arm = new Arm(req.body);

        await arm.save();
        res.send(arm);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerArms = async (req, res) => {

    try {
        
        const arms = await Arm.find();
        res.json(arms)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarArm = async (req, res) => {

    try {
        const { xa, xb, xc,xd,xe,xf,xg,xh,xi,xj,xk,xl,xm,xn
            ,xnn,xo,xp,xq,
            xr,xs,xt,xu,xv,xw,xx,xy} = req.body;
        let arm = await Arm.findById(req.params.id);

        if(!arm) {
            res.status(404).json({ msg: 'No existe '})

        }
 
       arm.xa = xa;
       arm.xb = xb;
       arm.xc = xc;
       arm.xd = xd;
       arm.xe = xe;
       arm.xf = xf;
       arm.xg = xg;
       arm.xh = xh;
       arm.xi = xi;
       arm.xj = xj;
       arm.xk = xk;
       arm.xl = xl;
       arm.xm = xm;
       arm.xn = xn;
       arm.xnn = xnn;
       arm.xo = xo;
       arm.xp = xp;
       arm.xq = xq;
       arm.xr = xr;
       arm.xs = xs;
       arm.xt = xt;
       arm.xu = xu;
       arm.xv = xv;
       arm.xw = xw;
       arm.xx = xx;
       arm.xy = xy;
       
    
      
        arm = await Arm.findOneAndUpdate({ _id: req.params.id},
            arm, {new: true});
        res.json(arm)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}
exports.obtenerArm= async (req, res) => {

    try {
        let arm= await Arm.findById(req.params.id);
        if(!arm) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(arm)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}
exports.eliminarArm = async (req, res) => {

    try {
        let arm = await Arm.findById(req.params.id);

        if(!arm) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Arm.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}
