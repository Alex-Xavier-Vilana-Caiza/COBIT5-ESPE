const Cabecerab09 = require("../models/Cabecerab09");



exports.crearCabecerab09 = async (req, res) => {
5
    try {
        let cabecerab09;
        //Creamos el producto
        cabecerab09 = new Cabecerab09(req.body);

        await cabecerab09.save();
        res.send(cabecerab09);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerCabecerasb09 = async (req, res) => {

    try {
        
        const cabecerasb09 = await Cabecerab09.find();
        res.json(cabecerasb09)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarCabecerab09 = async (req, res) => {

    try {
        const { q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26 } = req.body;
        let cabecerab09 = await Cabecerab09.findById(req.params.id);

        if(!cabecerab09) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }

        
        cabecerab09.q1= q1;
        cabecerab09.q2= q2;
        cabecerab09.q3= q3;
        cabecerab09.q4= q4;
        cabecerab09.q5= q5;
        cabecerab09.q6= q6;
        cabecerab09.q7= q7;
        cabecerab09.q8= q8;
        cabecerab09.q9= q9;
        cabecerab09.q10= q10;
        cabecerab09.q11= q11;
        cabecerab09.q12= q12;
        cabecerab09.q13= q13;
        cabecerab09.q14= q14;
        cabecerab09.q15= q15;
        cabecerab09.q16= q16;
        cabecerab09.q17= q17;
        cabecerab09.q18= q18;
        cabecerab09.q19= q19;
        cabecerab09.q20= q20;
        cabecerab09.q21= q21;
        cabecerab09.q22= q22;
        cabecerab09.q23= q23;
        cabecerab09.q24= q24;
        cabecerab09.q25= q25;
        cabecerab09.q26= q26;
        
        
        cabecerab09 = await Cabecerab09.findOneAndUpdate({ _id: req.params.id},cabecerab09, {new: true});
        res.json(cabecerab09)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerCabecerab09 = async (req, res) => {

    try {
        let cabecerab09 = await Cabecerab09.findById(req.params.id);
        if(!cabecerab09) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(cabecerab09)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCabecerab09 = async (req, res) => {

    try {
        let cabecerab09 = await Cabecerab09 .findById(req.params.id);

        if(!cabecerab09) {
            res.status(404).json({ msg: 'No existe tal cosa o cabecera'})

        }
        await Cabecerab09.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Cabecera eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}