const Raci04 = require("../models/Raci04");


exports.crearRaci04 = async (req, res) => {

    try {
        let raci04;
        //Creamos el raci04

        raci04 = new Raci04(req.body);

        await raci04.save();
        res.send(raci04);

    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error');

    }
}

exports.obtenerRaci04s = async (req, res) => {

    try {

        const raci04s = await Raci04.find();
        res.json(raci04s)

    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error');

    }
}

exports.actualizarRaci04 = async (req, res) => {

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
        let raci04 = await Raci04.findById(req.params.id);

        if (!raci04) {
            res.status(404).json({ msg: 'No existe tal cosa o raci04' })

        }

      
        raci04.dss = dss;
        raci04.dss1 = dss1;
        raci04.dss2 = dss2;
        raci04.dss3 = dss3;
        raci04.dss4 = dss4;
        raci04.dss5 = dss5;
        raci04.dss6 = dss6;
        raci04.dss7 = dss7;
        raci04.dss8 = dss8;
        raci04.dss9 = dss9;
        raci04.dss10 = dss10;
        raci04.dss11 = dss11;
        raci04.dss12 = dss12;
        raci04.dss13 = dss13;
        raci04.dss14 = dss14;
        raci04.dss15 = dss15;
        raci04.dss16 = dss16;
        raci04.dss17 = dss17;
        raci04.dss18 = dss18;
        raci04.dss19 = dss19;
        raci04.dss20 = dss20;
        raci04.dss21 = dss21;
        raci04.dss22 = dss22;
        raci04.dss23 = dss23;
        raci04.dss24 = dss24;
        raci04.dss25 = dss25;
        raci04.dss26 = dss26;


        raci04 = await Raci04.findOneAndUpdate({ _id: req.params.id }, raci04, { new: true });
        res.json(raci04)


    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error');
    }

}

exports.obtenerRaci04 = async (req, res) => {

    try {
        let raci04 = await Raci04.findById(req.params.id);
        if (!raci04) {
            res.status(404).json({ msg: 'No existe tal cosa o raci04' })

        }
        res.json(raci04)

    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error');
    }
}

exports.eliminarRaci04 = async (req, res) => {

    try {
        let raci04 = await Raci04.findById(req.params.id);

        if (!raci04) {
            res.status(404).json({ msg: 'No existe tal cosa o raci04' })

        }
        await Raci04.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Raci04 eliminado exitosamente' })


    } catch (error) {
        console.log(error),
            res.status(500).send('Hubo un error');
    }

}