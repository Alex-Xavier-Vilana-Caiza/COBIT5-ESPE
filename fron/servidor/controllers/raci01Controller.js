const Raci01 = require("../models/Raci01");


exports.crearRaci01 = async (req, res) => {
    
    try {
        let raci01;
        //Creamos el raci01

        raci01 = new Raci01(req.body);

        await raci01.save();
        res.send(raci01);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerRaci01s = async (req, res) => {

    try {
        
        const raci01s = await Raci01.find();
        res.json(raci01s)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarRaci01 = async (req, res) => {

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
        let raci01 = await Raci01.findById(req.params.id);

        if(!raci01) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }

       
        raci01.dss = dss;
        raci01.dss1 = dss1;
        raci01.dss2 = dss2;
        raci01.dss3 = dss3;
        raci01.dss4 = dss4;
        raci01.dss5 = dss5;
        raci01.dss6 = dss6;
        raci01.dss7 = dss7;
        raci01.dss8 = dss8;
        raci01.dss9 = dss9;
        raci01.dss10 = dss10;
        raci01.dss11 = dss11;
        raci01.dss12 = dss12;
        raci01.dss13 = dss13;
        raci01.dss14 = dss14;
        raci01.dss15 = dss15;
        raci01.dss16 = dss16;
        raci01.dss17 = dss17;
        raci01.dss18 = dss18;
        raci01.dss19 = dss19;
        raci01.dss20 = dss20;
        raci01.dss21 = dss21;
        raci01.dss22 = dss22;
        raci01.dss23 = dss23;
        raci01.dss24 = dss24;
        raci01.dss25 = dss25;
        raci01.dss26 = dss26;


        

        raci01 = await Raci01.findOneAndUpdate({ _id: req.params.id},raci01, {new: true});
        res.json(raci01)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerRaci01 = async (req, res) => {

    try {
        let raci01 = await Raci01.findById(req.params.id);
        if(!raci01) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        res.json(raci01)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarRaci01 = async (req, res) => {

    try {
        let raci01 = await Raci01.findById(req.params.id);

        if(!raci01) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        await Raci01.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Raci01 eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}