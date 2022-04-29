const Cabecerab10 = require("../models/Cabecerab10");



exports.crearCabecerab10 = async (req, res) => {
5
    try {
        let cabecerab10;
        //Creamos el producto
        cabecerab10 = new Cabecerab10(req.body);

        await cabecerab10.save();
        res.send(cabecerab10);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerCabecerasb10 = async (req, res) => {

    try {
        
        const cabecerasb10 = await Cabecerab10.find();
        res.json(cabecerasb10)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarCabecerab10 = async (req, res) => {

    try {
        const { ll1,ll2,ll3,ll4,ll5,ll6,ll7,ll8,ll9,ll10,ll11,ll12,ll13,ll14,ll15,ll16,ll17,ll18,ll19,ll20,ll21,ll22,ll23,ll24,ll25,ll26 } = req.body;
        let cabecerab10 = await Cabecerab10.findById(req.params.id);
        if(!cabecerab10) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }

        
        cabecerab10.ll1= ll1;
        cabecerab10.ll2= ll2;
        cabecerab10.ll3= ll3;
        cabecerab10.ll4= ll4;
        cabecerab10.ll5= ll5;
        cabecerab10.ll6= ll6;
        cabecerab10.ll7= ll7;
        cabecerab10.ll8= ll8;
        cabecerab10.ll9= ll9;
        cabecerab10.ll10= ll10;
        cabecerab10.ll11= ll11;
        cabecerab10.ll12= ll12;
        cabecerab10.ll13= ll13;
        cabecerab10.ll14= ll14;
        cabecerab10.ll15= ll15;
        cabecerab10.ll16= ll16;
        cabecerab10.ll17= ll17;
        cabecerab10.ll18= ll18;
        cabecerab10.ll19= ll19;
        cabecerab10.ll20= ll20;
        cabecerab10.ll21= ll21;
        cabecerab10.ll22= ll22;
        cabecerab10.ll23= ll23;
        cabecerab10.ll24= ll24;
        cabecerab10.ll25= ll25;
        cabecerab10.ll26= ll26;
        
        
        cabecerab10 = await Cabecerab10.findOneAndUpdate({ _id: req.params.id},cabecerab10, {new: true});
        res.json(cabecerab10)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerCabecerab10 = async (req, res) => {

    try {
        let cabecerab10 = await Cabecerab10.findById(req.params.id);
        if(!cabecerab10) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(cabecerab10)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCabecerab10 = async (req, res) => {

    try {
        let cabecerab10 = await Cabecerab10.findById(req.params.id);

        if(!cabecerab10) {
            res.status(404).json({ msg: 'No existe tal cosa o cabecera'})

        }
        await Cabecerab10.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Cabecera eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}