const Raci03 = require("../models/Raci03");



exports.crearRaci03 = async (req, res) => {
    
    try {
        let raci03;
        //Creamos el raci03

        raci03 = new Raci03(req.body);

        await raci03.save();
        res.send(raci03);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerRaci03s = async (req, res) => {

    try {
        
        const raci03s = await Raci03.find();
        res.json(raci03s)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarRaci03 = async (req, res) => {

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
        let raci03 = await Raci03.findById(req.params.id);

        if(!raci03) {
            res.status(404).json({ msg: 'No existe tal cosa o raci03'})

        }
       
        raci03.dss = dss;
        raci03.dss1 = dss1;
        raci03.dss2 = dss2;
        raci03.dss3 = dss3;
        raci03.dss4 = dss4;
        raci03.dss5 = dss5;
        raci03.dss6 = dss6;
        raci03.dss7 = dss7;
        raci03.dss8 = dss8;
        raci03.dss9 = dss9;
        raci03.dss10 = dss10;
        raci03.dss11 = dss11;
        raci03.dss12 = dss12;
        raci03.dss13 = dss13;
        raci03.dss14 = dss14;
        raci03.dss15 = dss15;
        raci03.dss16 = dss16;
        raci03.dss17 = dss17;
        raci03.dss18 = dss18;
        raci03.dss19 = dss19;
        raci03.dss20 = dss20;
        raci03.dss21 = dss21;
        raci03.dss22 = dss22;
        raci03.dss23 = dss23;
        raci03.dss24 = dss24;
        raci03.dss25 = dss25;
        raci03.dss26 = dss26;

        

        raci03= await Raci03.findOneAndUpdate({ _id: req.params.id},raci03, {new: true});
        res.json(raci03)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerRaci03 = async (req, res) => {

    try {
        let raci03 = await Raci03.findById(req.params.id);
        if(!raci03) {
            res.status(404).json({ msg: 'No existe tal cosa o raci03'})

        }
        res.json(raci03)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarRaci03 = async (req, res) => {

    try {
        let raci03 = await Raci03.findById(req.params.id);

        if(!raci03) {
            res.status(404).json({ msg: 'No existe tal cosa o raci03'})

        }
        await Raci03.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Raci03 eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}