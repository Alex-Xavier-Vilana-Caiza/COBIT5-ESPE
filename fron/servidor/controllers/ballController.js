const Ball = require("../models/ball");

exports.crearBall = async (req, res) => {
    
    try {
        let ball;
        
        ball = new Ball(req.body);

        await ball.save();
        res.send(ball);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerBalls = async (req, res) => {

    try {
        
        const balls = await Ball.find();
        res.json(balls)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarBall = async (req, res) => {

    try {
        const {APO1,ua, ub, uc,ud ,ue,uf,ug,uh,ui,uj,uk,ul,um,
            un,unn,uo,up,uq,ur,us,ut,uu,uv,uw,ux,uy} = req.body;
        let ball = await Ball.findById(req.params.id);

        if(!ball) {
            res.status(404).json({ msg: 'No existe '})

        }
        ball.APO1 =APO1;
        ball.ua = ua;
        ball.ub = ub;
        ball.uc = uc;
        ball.ud = ud;
        ball.ue = ue;
        ball.uf = uf;
        ball.ug = ug;
        ball.uh = uh;
        ball.ui = ui;
        ball.uj = uj;
        ball.uk = uk;
        ball.ul = ul;
        ball.um = um;
        ball.un = un;
        ball.unn =unn;
        ball.uo = uo;
        ball.up = up;
        ball.uq = uq;
        ball.ur = ur;
        ball.us = us;
        ball.ut = ut;
        ball.uu = uu;
        ball.uv = uv;
        ball.uw = uw;
        ball.ux = ux;
        ball.uy = uy;
        
        ball= await Ball.findOneAndUpdate({ _id: req.params.id},
            ball, {new: true});
        res.json(ball)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerBall = async (req, res) => {

    try {
        let ball = await Ball.findById(req.params.id);
        if(!ball) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(ball)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarBall = async (req, res) => {

    try {
        let ball = await Ball.findById(req.params.id);

        if(!ball) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Ball.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 