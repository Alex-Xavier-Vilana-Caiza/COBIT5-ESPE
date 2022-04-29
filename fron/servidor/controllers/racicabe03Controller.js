const Racicabe03 = require("../models/Racicabe03");


exports.crearRacicabe03 = async (req, res) => {
    
    try {
        let racicabe03;
        //Creamos el racicabe03

        racicabe03 = new Racicabe03(req.body);

        await racicabe03.save();
        res.send(racicabe03);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerRacicabe03s = async (req, res) => {

    try {
        
        const racicabe03s = await Racicabe03.find();
        res.json(racicabe03s)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarRacicabe03 = async (req, res) => {

    try {
        const { 
            
            gestion1,
            gestion2,
            gestion3,
            gestion4,
            gestion5,
            gestion6,
            gestion7,
            gestion8,
            gestion9,
            gestion10,
            gestion11,
            gestion12,
            gestion13,
            gestion14,
            gestion15,
            gestion16,
            gestion17,
            gestion18,
            gestion19,
            gestion20,
            gestion21,
            gestion22,
            gestion23,
            gestion24,
            gestion25,
            gestion26,
        
        
        } = req.body;
        let racicabe03 = await Racicabe03.findById(req.params.id);

        if(!racicabe03) {
            res.status(404).json({ msg: 'No existe tal cosa o raci02'})

        }
        
        racicabe03.gestion1=gestion1;
        racicabe03.gestion2=gestion2;
        racicabe03.gestion3=gestion3;
        racicabe03.gestion4=gestion4;
        racicabe03.gestion5=gestion5;
        racicabe03.gestion6=gestion6;
        racicabe03.gestion7=gestion7;
        racicabe03.gestion8=gestion8;
        racicabe03.gestion9=gestion9;
        racicabe03.gestion10=gestion10;
        racicabe03.gestion11=gestion11;
        racicabe03.gestion12=gestion12;
        racicabe03.gestion13=gestion13;
        racicabe03.gestion14=gestion14;
        racicabe03.gestion15=gestion15;
        racicabe03.gestion16=gestion16;
        racicabe03.gestion17=gestion17;
        racicabe03.gestion18=gestion18;
        racicabe03.gestion19=gestion19;
        racicabe03.gestion20=gestion20;
        racicabe03.gestion21=gestion21;
        racicabe03.gestion22=gestion22;
        racicabe03.gestion23=gestion23;
        racicabe03.gestion24=gestion24;
        racicabe03.gestion25=gestion25;
        racicabe03.gestion26=gestion26;

      
        

        racicabe03 = await Racicabe03.findOneAndUpdate({ _id: req.params.id},racicabe03, {new: true});
        res.json(racicabe03)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerRacicabe03 = async (req, res) => {

    try {
        let racicabe03 = await Racicabe03.findById(req.params.id);
        if(!racicabe03) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        res.json(racicabe03)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarRacicabe03 = async (req, res) => {

    try {
        let racicabe03 = await Racicabe03.findById(req.params.id);

        if(!racicabe03) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        await Racicabe03.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Raci01 eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}