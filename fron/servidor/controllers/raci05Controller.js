const Raci05 = require("../models/Raci05");


exports.crearRaci05 = async (req, res) => {

    try {
        let raci05;
        //Creamos el raci05

        raci05 = new Raci05(req.body);

        await raci05.save();
        res.send(raci05);

    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error');

    }
}

exports.obtenerRaci05s = async (req, res) => {

    try {

        const raci05s = await Raci05.find();
        res.json(raci05s)

    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error');

    }
}

exports.actualizarRaci05 = async (req, res) => {

    try {
        const {
           
            dss,
            dss1,
            dss2,
            dss3,
            dss4,
            dss5,
            dss6,
            dss7,
            dss8,
            dss9,
            dss10,
            dss11,
            dss12,
            dss13,
            dss14,
            dss15,
            dss16,
            dss17,
            dss18,
            dss19,
            dss20,
            dss21,
            dss22,
            dss23,
            dss24,
            dss25,
            dss26,
           
            

        } = req.body;
        let raci05 = await Raci05.findById(req.params.id);

        if (!raci05) {
            res.status(404).json({ msg: 'No existe tal cosa o raci05' })

        }

        raci05.dss = dss;
        raci05.dss1 = dss1;
        raci05.dss2 = dss2;
        raci05.dss3 = dss3;
        raci05.dss4 = dss4;
        raci05.dss5 = dss5;
        raci05.dss6 = dss6;
        raci05.dss7 = dss7;
        raci05.dss8 = dss8;
        raci05.dss9 = dss9;
        raci05.dss10 = dss10;
        raci05.dss11 = dss11;
        raci05.dss12 = dss12;
        raci05.dss13 = dss13;
        raci05.dss14 = dss14;
        raci05.dss15 = dss15;
        raci05.dss16 = dss16;
        raci05.dss17 = dss17;
        raci05.dss18 = dss18;
        raci05.dss19 = dss19;
        raci05.dss20 = dss20;
        raci05.dss21 = dss21;
        raci05.dss22 = dss22;
        raci05.dss23 = dss23;
        raci05.dss24 = dss24;
        raci05.dss25 = dss25;
        raci05.dss26 = dss26;

      



        raci05 = await Raci05.findOneAndUpdate({ _id: req.params.id }, raci05, { new: true });
        res.json(raci05)


    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error');
    }

}

exports.obtenerRaci05 = async (req, res) => {

    try {
        let raci05 = await Raci05.findById(req.params.id);
        if (!raci05) {
            res.status(404).json({ msg: 'No existe tal cosa o raci05' })

        }
        res.json(raci05)

    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error');
    }
}

exports.eliminarRaci05 = async (req, res) => {

    try {
        let raci05 = await Raci05.findById(req.params.id);

        if (!raci05) {
            res.status(404).json({ msg: 'No existe tal cosa o raci05' })

        }
        await Raci05.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Raci05 eliminado exitosamente' })


    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error');
    }

}