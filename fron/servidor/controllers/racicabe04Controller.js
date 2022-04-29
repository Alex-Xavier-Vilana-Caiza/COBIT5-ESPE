const Racicabe04 = require("../models/Racicabe04");


exports.crearRacicabe04 = async (req, res) => {
    
    try {
        let racicabe04;
        //Creamos el racicabe04

        racicabe04 = new Racicabe04(req.body);

        await racicabe04.save();
        res.send(racicabe04);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerRacicabe04s = async (req, res) => {

    try {
        
        const racicabe04s = await Racicabe04.find();
        res.json(racicabe04s)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarRacicabe04 = async (req, res) => {

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
        let racicabe04 = await Racicabe04.findById(req.params.id);

        if(!racicabe04) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        
        racicabe04.gestion1=gestion1;
        racicabe04.gestion2=gestion2;
        racicabe04.gestion3=gestion3;
        racicabe04.gestion4=gestion4;
        racicabe04.gestion5=gestion5;
        racicabe04.gestion6=gestion6;
        racicabe04.gestion7=gestion7;
        racicabe04.gestion8=gestion8;
        racicabe04.gestion9=gestion9;
        racicabe04.gestion10=gestion10;
        racicabe04.gestion11=gestion11;
        racicabe04.gestion12=gestion12;
        racicabe04.gestion13=gestion13;
        racicabe04.gestion14=gestion14;
        racicabe04.gestion15=gestion15;
        racicabe04.gestion16=gestion16;
        racicabe04.gestion17=gestion17;
        racicabe04.gestion18=gestion18;
        racicabe04.gestion19=gestion19;
        racicabe04.gestion20=gestion20;
        racicabe04.gestion21=gestion21;
        racicabe04.gestion22=gestion22;
        racicabe04.gestion23=gestion23;
        racicabe04.gestion24=gestion24;
        racicabe04.gestion25=gestion25;
        racicabe04.gestion26=gestion26;

      
        

        racicabe04 = await Racicabe04.findOneAndUpdate({ _id: req.params.id},racicabe04, {new: true});
        res.json(racicabe04)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerRacicabe04 = async (req, res) => {

    try {
        let racicabe04 = await Racicabe04.findById(req.params.id);
        if(!racicabe04) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        res.json(racicabe04)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarRacicabe04 = async (req, res) => {

    try {
        let racicabe04 = await Racicabe04.findById(req.params.id);

        if(!racicabe04) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        await Racicabe04.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Raci01 eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}