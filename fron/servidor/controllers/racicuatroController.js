const Racicuatro = require("../models/Racicuatro");


exports.crearRacicuatro = async (req, res) => {
    
    try {
        let racicuatro;
        //Creamos el producto
        racicuatro = new Racicuatro(req.body);

        await racicuatro.save();
        res.send(racicuatro);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerRacicuatros = async (req, res) => {

    try {
        
        const racicuatros = await Racicuatro.find();
        res.json(racicuatros)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarRacicuatro = async (req, res) => {

    try {
        const { d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18,d19,d20,d21,d22,d23,d24,d25,d26,d27 } = req.body;
        let racicuatro = await Racicuatro.findById(req.params.id);

        if(!racicuatro) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        racicuatro.d1 = d1;
        racicuatro.d2 = d2;
        racicuatro.d3 = d3;
        racicuatro.d4 = d4;
        racicuatro.d5 = d5;
        racicuatro.d6 = d6;
        racicuatro.d7 = d7;
        racicuatro.d8 = d8;
        racicuatro.d9 = d9;
        racicuatro.d10 = d10;
        racicuatro.d11 = d11;
        racicuatro.d12 = d12;
        racicuatro.d13 = d13;
        racicuatro.d14 = d14;
        racicuatro.d15 = d15;
        racicuatro.d16 = d16;
        racicuatro.d17 = d17;
        racicuatro.d18 = d18;
        racicuatro.d19 = d19;
        racicuatro.d20 = d20;
        racicuatro.d21 = d21;
        racicuatro.d22 = d22;
        racicuatro.d23 = d23;
        racicuatro.d24 = d24;
        racicuatro.d25 = d25;
        racicuatro.d26 = d26;
        racicuatro.d27 = d27;

        racicuatro = await Racicuatro.findOneAndUpdate({ _id: req.params.id},racicuatro, {new: true});
        res.json(racicuatro)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerRacicuatro = async (req, res) => {

    try {
        let racicuatro = await Racicuatro.findById(req.params.id);
        if(!racicuatro) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(racicuatro)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarRacicuatro = async (req, res) => {

    try {
        let racicuatro = await Racicuatro.findById(req.params.id);

        if(!racicuatro) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Racicuatro.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Tabla eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}