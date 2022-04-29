const Cabecerab03 = require("../models/Cabecerab03");



exports.crearCabecerab03 = async (req, res) => {
    
    try {
        let cabecerab03;
        //Creamos el producto
        cabecerab03 = new Cabecerab03(req.body);

        await cabecerab03.save();
        res.send(cabecerab03);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerCabecerasb03 = async (req, res) => {

    try {
        
        const cabecerasb03 = await Cabecerab03.find();
        res.json(cabecerasb03)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarCabecerab03 = async (req, res) => {

    try {
        const { cab1,cab2,cab3,cab4,cab5,cab6,cab7,cab8,cab9,cab10,cab11,cab12,cab13,cab14,cab15,cab16,cab17,cab18,cab19,cab20,cab21,cab22,cab23,cab24,cab25,cab26 } = req.body;
        let cabecerab03 = await Cabecerab03.findById(req.params.id);

        if(!cabecerab03) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }

        
        cabecerab03.cab1= cab1;
        cabecerab03.cab2= cab2;
        cabecerab03.cab3= cab3;
        cabecerab03.cab4= cab4;
        cabecerab03.cab5= cab5;
        cabecerab03.cab6= cab6;
        cabecerab03.cab7= cab7;
        cabecerab03.cab8= cab8;
        cabecerab03.cab9= cab9;
        cabecerab03.cab10= cab10;
        cabecerab03.cab11= cab11;
        cabecerab03.cab12= cab12;
        cabecerab03.cab13= cab13;
        cabecerab03.cab14= cab14;
        cabecerab03.cab15= cab15;
        cabecerab03.cab16= cab16;
        cabecerab03.cab17= cab17;
        cabecerab03.cab18= cab18;
        cabecerab03.cab19= cab19;
        cabecerab03.cab20= cab20;
        cabecerab03.cab21= cab21;
        cabecerab03.cab22= cab22;
        cabecerab03.cab23= cab23;
        cabecerab03.cab24= cab24;
        cabecerab03.cab25= cab25;
        cabecerab03.cab26= cab26;
        
        
        cabecerab03 = await Cabecerab03.findOneAndUpdate({ _id: req.params.id},cabecerab03, {new: true});
        res.json(cabecerab03)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerCabecerab03 = async (req, res) => {

    try {
        let cabecerab03 = await Cabecerab03.findById(req.params.id);
        if(!cabecerab03) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(cabecerab03)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCabecerab03 = async (req, res) => {

    try {
        let cabecerab03 = await Cabecerab03.findById(req.params.id);

        if(!cabecerab03) {
            res.status(404).json({ msg: 'No existe tal cosa o cabecera'})

        }
        await Cabecerab03.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Cabecera eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}