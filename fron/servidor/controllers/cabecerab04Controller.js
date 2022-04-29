const Cabecerab04 = require("../models/Cabecerab04");



exports.crearCabecerab04 = async (req, res) => {
    
    try {
        let cabecerab04;
        //Creamos el producto
        cabecerab04 = new Cabecerab04(req.body);

        await cabecerab04.save();
        res.send(cabecerab04);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerCabecerasb04 = async (req, res) => {

    try {
        
        const cabecerasb04 = await Cabecerab04.find();
        res.json(cabecerasb04)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarCabecerab04 = async (req, res) => {

    try {
        const { n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20,n21,n22,n23,n24,n25,n26 } = req.body;
        let cabecerab04 = await Cabecerab04.findById(req.params.id);

        if(!cabecerab04) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }

        
        cabecerab04.n1= n1;
        cabecerab04.n2= n2;
        cabecerab04.n3= n3;
        cabecerab04.n4= n4;
        cabecerab04.n5= n5;
        cabecerab04.n6= n6;
        cabecerab04.n7= n7;
        cabecerab04.n8= n8;
        cabecerab04.n9= n9;
        cabecerab04.n10= n10;
        cabecerab04.n11= n11;
        cabecerab04.n12= n12;
        cabecerab04.n13= n13;
        cabecerab04.n14= n14;
        cabecerab04.n15= n15;
        cabecerab04.n16= n16;
        cabecerab04.n17= n17;
        cabecerab04.n18= n18;
        cabecerab04.n19= n19;
        cabecerab04.n20= n20;
        cabecerab04.n21= n21;
        cabecerab04.n22= n22;
        cabecerab04.n23= n23;
        cabecerab04.n24= n24;
        cabecerab04.n25= n25;
        cabecerab04.n26= n26;
        
        
        cabecerab04 = await Cabecerab04.findOneAndUpdate({ _id: req.params.id},cabecerab04, {new: true});
        res.json(cabecerab04)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerCabecerab04 = async (req, res) => {

    try {
        let cabecerab04 = await Cabecerab04.findById(req.params.id);
        if(!cabecerab04) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(cabecerab04)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCabecerab04 = async (req, res) => {

    try {
        let cabecerab04 = await Cabecerab04.findById(req.params.id);

        if(!cabecerab04) {
            res.status(404).json({ msg: 'No existe tal cosa o cabecera'})

        }
        await Cabecerab04.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Cabecera eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}