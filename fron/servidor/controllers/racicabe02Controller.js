const Racicabe02 = require("../models/Racicabe02");


exports.crearRacicabe02 = async (req, res) => {
    
    try {
        let racicabe02;
        //Creamos el racicabe02

        racicabe02 = new Racicabe02(req.body);

        await racicabe02.save();
        res.send(racicabe02);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerRacicabe02s = async (req, res) => {

    try {
        
        const racicabe02s = await Racicabe02.find();
        res.json(racicabe02s)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarRacicabe02 = async (req, res) => {

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
        let racicabe02 = await Racicabe02.findById(req.params.id);

        if(!racicabe02) {
            res.status(404).json({ msg: 'No existe tal cosa o raci02'})

        }
        
        racicabe02.gestion1=gestion1;
        racicabe02.gestion2=gestion2;
        racicabe02.gestion3=gestion3;
        racicabe02.gestion4=gestion4;
        racicabe02.gestion5=gestion5;
        racicabe02.gestion6=gestion6;
        racicabe02.gestion7=gestion7;
        racicabe02.gestion8=gestion8;
        racicabe02.gestion9=gestion9;
        racicabe02.gestion10=gestion10;
        racicabe02.gestion11=gestion11;
        racicabe02.gestion12=gestion12;
        racicabe02.gestion13=gestion13;
        racicabe02.gestion14=gestion14;
        racicabe02.gestion15=gestion15;
        racicabe02.gestion16=gestion16;
        racicabe02.gestion17=gestion17;
        racicabe02.gestion18=gestion18;
        racicabe02.gestion19=gestion19;
        racicabe02.gestion20=gestion20;
        racicabe02.gestion21=gestion21;
        racicabe02.gestion22=gestion22;
        racicabe02.gestion23=gestion23;
        racicabe02.gestion24=gestion24;
        racicabe02.gestion25=gestion25;
        racicabe02.gestion26=gestion26;

      
        

        racicabe02 = await Racicabe02.findOneAndUpdate({ _id: req.params.id},racicabe02, {new: true});
        res.json(racicabe02)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerRacicabe02 = async (req, res) => {

    try {
        let racicabe02 = await Racicabe02.findById(req.params.id);
        if(!racicabe02) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        res.json(racicabe02)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarRacicabe02 = async (req, res) => {

    try {
        let racicabe02 = await Racicabe02.findById(req.params.id);

        if(!racicabe02) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        await Racicabe02.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Raci01 eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}