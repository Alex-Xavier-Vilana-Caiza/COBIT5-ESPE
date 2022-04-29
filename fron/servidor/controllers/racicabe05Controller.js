const Racicabe05 = require("../models/Racicabe05");


exports.crearRacicabe05 = async (req, res) => {
    
    try {
        let racicabe05;
        //Creamos el racicabe05

        racicabe05 = new Racicabe05(req.body);

        await racicabe05.save();
        res.send(racicabe05);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerRacicabe05s = async (req, res) => {

    try {
        
        const racicabe05s = await Racicabe05.find();
        res.json(racicabe05s)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarRacicabe05 = async (req, res) => {

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
        let racicabe05 = await Racicabe05.findById(req.params.id);

        if(!racicabe05) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        
        racicabe05.gestion1=gestion1;
        racicabe05.gestion2=gestion2;
        racicabe05.gestion3=gestion3;
        racicabe05.gestion4=gestion4;
        racicabe05.gestion5=gestion5;
        racicabe05.gestion6=gestion6;
        racicabe05.gestion7=gestion7;
        racicabe05.gestion8=gestion8;
        racicabe05.gestion9=gestion9;
        racicabe05.gestion10=gestion10;
        racicabe05.gestion11=gestion11;
        racicabe05.gestion12=gestion12;
        racicabe05.gestion13=gestion13;
        racicabe05.gestion14=gestion14;
        racicabe05.gestion15=gestion15;
        racicabe05.gestion16=gestion16;
        racicabe05.gestion17=gestion17;
        racicabe05.gestion18=gestion18;
        racicabe05.gestion19=gestion19;
        racicabe05.gestion20=gestion20;
        racicabe05.gestion21=gestion21;
        racicabe05.gestion22=gestion22;
        racicabe05.gestion23=gestion23;
        racicabe05.gestion24=gestion24;
        racicabe05.gestion25=gestion25;
        racicabe05.gestion26=gestion26;

      
        

        racicabe05 = await Racicabe05.findOneAndUpdate({ _id: req.params.id},racicabe05, {new: true});
        res.json(racicabe05)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerRacicabe05 = async (req, res) => {

    try {
        let racicabe05 = await Racicabe05.findById(req.params.id);
        if(!racicabe05) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        res.json(racicabe05)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarRacicabe05 = async (req, res) => {

    try {
        let racicabe05 = await Racicabe05.findById(req.params.id);

        if(!racicabe05) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        await Racicabe05.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Raci01 eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}