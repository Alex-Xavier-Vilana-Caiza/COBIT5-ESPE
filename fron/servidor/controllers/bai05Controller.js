const Bai05 = require("../models/Bai05");


exports.crearBai05 = async (req, res) => {
    
    try {
        let bai05;
        //Creamos el producto
        bai05 = new Bai05(req.body);

        await bai05.save();
        res.send(bai05);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerBai05s = async (req, res) => {

    try {
        
        const bai05s = await Bai05.find();
        res.json(bai05s)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarBai05 = async (req, res) => {

    try {
        const { b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27 } = req.body;
        let bai05 = await Bai05.findById(req.params.id);

        if(!bai05) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        bai05.b1 = b1;
        bai05.b2 = b2;
        bai05.b3 = b3;
        bai05.b4 = b4;
        bai05.b5 = b5;
        bai05.b6 = b6;
        bai05.b7 = b7;
        bai05.b8 = b8;
        bai05.b9 = b9;
        bai05.b10 = b10;
        bai05.b11 = b11;
        bai05.b12 = b12;
        bai05.b13 = b13;
        bai05.b14 = b14;
        bai05.b15 = b15;
        bai05.b16 = b16;
        bai05.b17 = b17;
        bai05.b18 = b18;
        bai05.b19 = b19;
        bai05.b20 = b20;
        bai05.b21 = b21;
        bai05.b22 = b22;
        bai05.b23 = b23;
        bai05.b24 = b24;
        bai05.b25 = b25;
        bai05.b26 = b26;
        bai05.b27 = b27;

        bai05 = await Bai05.findOneAndUpdate({ _id: req.params.id},bai05, {new: true});
        res.json(bai05)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerBai05 = async (req, res) => {

    try {
        let bai05 = await Bai05.findById(req.params.id);
        if(!bai05) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(bai05)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarBai05 = async (req, res) => {

    try {
        let bai05 = await Bai05.findById(req.params.id);

        if(!bai05) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Bai05.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Tabla eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}