const Raci06 = require("../models/Raci06");


exports.crearRaci06 = async (req, res) => {
    
    try {
        let raci06;
        //Creamos el raci06

        raci06 = new Raci06(req.body);

        await raci06.save();
        res.send(raci06);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerRaci06s = async (req, res) => {

    try {
        
        const raci06s = await Raci06.find();
        res.json(raci06s)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarRaci06 = async (req, res) => {

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
        let raci06 = await Raci06.findById(req.params.id);

        if(!raci06) {
            res.status(404).json({ msg: 'No existe tal cosa o raci06'})

        }

       
        raci06.dss = dss;
        raci06.dss1 = dss1;
        raci06.dss2 = dss2;
        raci06.dss3 = dss3;
        raci06.dss4 = dss4;
        raci06.dss5 = dss5;
        raci06.dss6 = dss6;
        raci06.dss7 = dss7;
        raci06.dss8 = dss8;
        raci06.dss9 = dss9;
        raci06.dss10 = dss10;
        raci06.dss11 = dss11;
        raci06.dss12 = dss12;
        raci06.dss13 = dss13;
        raci06.dss14 = dss14;
        raci06.dss15 = dss15;
        raci06.dss16 = dss16;
        raci06.dss17 = dss17;
        raci06.dss18 = dss18;
        raci06.dss19 = dss19;
        raci06.dss20 = dss20;
        raci06.dss21 = dss21;
        raci06.dss22 = dss22;
        raci06.dss23 = dss23;
        raci06.dss24 = dss24;
        raci06.dss25 = dss25;
        raci06.dss26 = dss26;


        

        raci06 = await Raci06.findOneAndUpdate({ _id: req.params.id},raci06, {new: true});
        res.json(raci06)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerRaci06 = async (req, res) => {

    try {
        let raci06 = await Raci06.findById(req.params.id);
        if(!raci06) {
            res.status(404).json({ msg: 'No existe tal cosa o raci06'})

        }
        res.json(raci06)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarRaci06 = async (req, res) => {

    try {
        let raci06 = await Raci06.findById(req.params.id);

        if(!raci06) {
            res.status(404).json({ msg: 'No existe tal cosa o raci06'})

        }
        await Raci06.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Raci06 eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}