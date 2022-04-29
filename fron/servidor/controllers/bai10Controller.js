const Bai10 = require("../models/Bai10");


exports.crearBai10 = async (req, res) => {
    
    try {
        let bai10;
        //Creamos el producto
        bai10 = new Bai10(req.body);

        await bai10.save();
        res.send(bai10);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerBai10s = async (req, res) => {

    try {
        
        const bai10s = await Bai10.find();
        res.json(bai10s)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarBai10 = async (req, res) => {

    try {
        const { z1,z2,z3,z4,z5,z6,z7,z8,z9,z10,z11,z12,z13,z14,z15,z16,z17,z18,z19,z20,z21,z22,z23,z24,z25,z26,z27 } = req.body;
        let bai10 = await Bai10.findById(req.params.id);

        if(!bai10) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        bai10.z1 = z1;
        bai10.z2 = z2;
        bai10.z3 = z3;
        bai10.z4 = z4;
        bai10.z5 = z5;
        bai10.z6 = z6;
        bai10.z7 = z7;
        bai10.z8 = z8;
        bai10.z9 = z9;
        bai10.z10 = z10;
        bai10.z11 = z11;
        bai10.z12 = z12;
        bai10.z13 = z13;
        bai10.z14 = z14;
        bai10.z15 = z15;
        bai10.z16 = z16;
        bai10.z17 = z17;
        bai10.z18 = z18;
        bai10.z19 = z19;
        bai10.z20 = z20;
        bai10.z21 = z21;
        bai10.z22 = z22;
        bai10.z23 = z23;
        bai10.z24 = z24;
        bai10.z25 = z25;
        bai10.z26 = z26;
        bai10.z27 = z27;

        bai10 = await Bai10.findOneAndUpdate({ _id: req.params.id},bai10, {new: true});
        res.json(bai10)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerBai10 = async (req, res) => {

    try {
        let bai10 = await Bai10.findById(req.params.id);
        if(!bai10) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(bai10)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarBai10 = async (req, res) => {

    try {
        let bai10 = await Bai10.findById(req.params.id);

        if(!bai10) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Bai10.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Tabla eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}