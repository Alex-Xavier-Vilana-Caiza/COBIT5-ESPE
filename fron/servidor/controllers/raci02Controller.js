const Raci02 = require("../models/Raci02");


exports.crearRaci02 = async (req, res) => {

    try {
        let raci02;
        //Creamos el raci02

        raci02 = new Raci02(req.body);

        await raci02.save();
        res.send(raci02);

    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error');

    }
}

exports.obtenerRaci02s = async (req, res) => {

    try {

        const raci02s = await Raci02.find();
        res.json(raci02s)

    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error');

    }
}

exports.actualizarRaci02 = async (req, res) => {

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
        let raci02 = await Raci02.findById(req.params.id);

        if (!raci02) {
            res.status(404).json({ msg: 'No existe tal cosa o raci02' })

        }

        raci02.dss = dss;
        raci02.dss1 = dss1;
        raci02.dss2 = dss2;
        raci02.dss3 = dss3;
        raci02.dss4 = dss4;
        raci02.dss5 = dss5;
        raci02.dss6 = dss6;
        raci02.dss7 = dss7;
        raci02.dss8 = dss8;
        raci02.dss9 = dss9;
        raci02.dss10 = dss10;
        raci02.dss11 = dss11;
        raci02.dss12 = dss12;
        raci02.dss13 = dss13;
        raci02.dss14 = dss14;
        raci02.dss15 = dss15;
        raci02.dss16 = dss16;
        raci02.dss17 = dss17;
        raci02.dss18 = dss18;
        raci02.dss19 = dss19;
        raci02.dss20 = dss20;
        raci02.dss21 = dss21;
        raci02.dss22 = dss22;
        raci02.dss23 = dss23;
        raci02.dss24 = dss24;
        raci02.dss25 = dss25;
        raci02.dss26 = dss26;

       



        raci02 = await Raci02.findOneAndUpdate({ _id: req.params.id }, raci02, { new: true });
        res.json(raci02)


    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error');
    }

}

exports.obtenerRaci02 = async (req, res) => {

    try {
        let raci02 = await Raci02.findById(req.params.id);
        if (!raci02) {
            res.status(404).json({ msg: 'No existe tal cosa o raci02' })

        }
        res.json(raci02)

    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error');
    }
}

exports.eliminarRaci02 = async (req, res) => {

    try {
        let raci02 = await Raci02.findById(req.params.id);

        if (!raci02) {
            res.status(404).json({ msg: 'No existe tal cosa o raci02' })

        }
        await Raci02.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Raci02 eliminado exitosamente' })


    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error');
    }

}