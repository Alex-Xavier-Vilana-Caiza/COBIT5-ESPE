const Cabecerab05 = require("../models/Cabecerab05");



exports.crearCabecerab05 = async (req, res) => {
5
    try {
        let cabecerab05;
        //Creamos el producto
        cabecerab05 = new Cabecerab05(req.body);

        await cabecerab05.save();
        res.send(cabecerab05);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerCabecerasb05 = async (req, res) => {

    try {
        
        const cabecerasb05 = await Cabecerab05.find();
        res.json(cabecerasb05)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarCabecerab05 = async (req, res) => {

    try {
        const { m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21,m22,m23,m24,m25,m26 } = req.body;
        let cabecerab05 = await Cabecerab05.findById(req.params.id);

        if(!cabecerab05) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }

        
        cabecerab05.m1= m1;
        cabecerab05.m2= m2;
        cabecerab05.m3= m3;
        cabecerab05.m4= m4;
        cabecerab05.m5= m5;
        cabecerab05.m6= m6;
        cabecerab05.m7= m7;
        cabecerab05.m8= m8;
        cabecerab05.m9= m9;
        cabecerab05.m10= m10;
        cabecerab05.m11= m11;
        cabecerab05.m12= m12;
        cabecerab05.m13= m13;
        cabecerab05.m14= m14;
        cabecerab05.m15= m15;
        cabecerab05.m16= m16;
        cabecerab05.m17= m17;
        cabecerab05.m18= m18;
        cabecerab05.m19= m19;
        cabecerab05.m20= m20;
        cabecerab05.m21= m21;
        cabecerab05.m22= m22;
        cabecerab05.m23= m23;
        cabecerab05.m24= m24;
        cabecerab05.m25= m25;
        cabecerab05.m26= m26;
        
        
        cabecerab05 = await Cabecerab05.findOneAndUpdate({ _id: req.params.id},cabecerab05, {new: true});
        res.json(cabecerab05)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerCabecerab05 = async (req, res) => {

    try {
        let cabecerab05 = await Cabecerab05.findById(req.params.id);
        if(!cabecerab05) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(cabecerab05)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCabecerab05 = async (req, res) => {

    try {
        let cabecerab05 = await Cabecerab05.findById(req.params.id);

        if(!cabecerab05) {
            res.status(404).json({ msg: 'No existe tal cosa o cabecera'})

        }
        await Cabecerab05.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Cabecera eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}