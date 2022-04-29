const Racicabe06 = require("../models/Racicabe06");


exports.crearRacicabe06 = async (req, res) => {
    
    try {
        let racicabe06;
        //Creamos el racicabe06

        racicabe06 = new Racicabe06(req.body);

        await racicabe06.save();
        res.send(racicabe06);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerRacicabe06s = async (req, res) => {

    try {
        
        const racicabe06s = await Racicabe06.find();
        res.json(racicabe06s)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarRacicabe06 = async (req, res) => {

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
        let racicabe06 = await Racicabe06.findById(req.params.id);

        if(!racicabe06) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        
        racicabe06.gestion1=gestion1;
        racicabe06.gestion2=gestion2;
        racicabe06.gestion3=gestion3;
        racicabe06.gestion4=gestion4;
        racicabe06.gestion5=gestion5;
        racicabe06.gestion6=gestion6;
        racicabe06.gestion7=gestion7;
        racicabe06.gestion8=gestion8;
        racicabe06.gestion9=gestion9;
        racicabe06.gestion10=gestion10;
        racicabe06.gestion11=gestion11;
        racicabe06.gestion12=gestion12;
        racicabe06.gestion13=gestion13;
        racicabe06.gestion14=gestion14;
        racicabe06.gestion15=gestion15;
        racicabe06.gestion16=gestion16;
        racicabe06.gestion17=gestion17;
        racicabe06.gestion18=gestion18;
        racicabe06.gestion19=gestion19;
        racicabe06.gestion20=gestion20;
        racicabe06.gestion21=gestion21;
        racicabe06.gestion22=gestion22;
        racicabe06.gestion23=gestion23;
        racicabe06.gestion24=gestion24;
        racicabe06.gestion25=gestion25;
        racicabe06.gestion26=gestion26;

      
        

        racicabe06 = await Racicabe06.findOneAndUpdate({ _id: req.params.id},racicabe06, {new: true});
        res.json(racicabe06)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerRacicabe06 = async (req, res) => {

    try {
        let racicabe06 = await Racicabe06.findById(req.params.id);
        if(!racicabe06) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        res.json(racicabe06)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarRacicabe06 = async (req, res) => {

    try {
        let racicabe06 = await Racicabe06.findById(req.params.id);

        if(!racicabe06) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        await Racicabe06.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Raci01 eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}