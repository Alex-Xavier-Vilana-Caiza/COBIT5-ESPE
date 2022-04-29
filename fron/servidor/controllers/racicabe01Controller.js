const Racicabe01 = require("../models/Racicabe01");


exports.crearRacicabe01 = async (req, res) => {
    
    try {
        let racicabe01;
        //Creamos el racicabe01

        racicabe01 = new Racicabe01(req.body);

        await racicabe01.save();
        res.send(racicabe01);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerRacicabe01s = async (req, res) => {

    try {
        
        const racicabe01s = await Racicabe01.find();
        res.json(racicabe01s)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarRacicabe01 = async (req, res) => {

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
        let racicabe01 = await Racicabe01.findById(req.params.id);

        if(!racicabe01) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        
        racicabe01.gestion1=gestion1;
        racicabe01.gestion2=gestion2;
        racicabe01.gestion3=gestion3;
        racicabe01.gestion4=gestion4;
        racicabe01.gestion5=gestion5;
        racicabe01.gestion6=gestion6;
        racicabe01.gestion7=gestion7;
        racicabe01.gestion8=gestion8;
        racicabe01.gestion9=gestion9;
        racicabe01.gestion10=gestion10;
        racicabe01.gestion11=gestion11;
        racicabe01.gestion12=gestion12;
        racicabe01.gestion13=gestion13;
        racicabe01.gestion14=gestion14;
        racicabe01.gestion15=gestion15;
        racicabe01.gestion16=gestion16;
        racicabe01.gestion17=gestion17;
        racicabe01.gestion18=gestion18;
        racicabe01.gestion19=gestion19;
        racicabe01.gestion20=gestion20;
        racicabe01.gestion21=gestion21;
        racicabe01.gestion22=gestion22;
        racicabe01.gestion23=gestion23;
        racicabe01.gestion24=gestion24;
        racicabe01.gestion25=gestion25;
        racicabe01.gestion26=gestion26;

      
        

        racicabe01 = await Racicabe01.findOneAndUpdate({ _id: req.params.id},racicabe01, {new: true});
        res.json(racicabe01)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerRacicabe01 = async (req, res) => {

    try {
        let racicabe01 = await Racicabe01.findById(req.params.id);
        if(!racicabe01) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        res.json(racicabe01)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarRacicabe01 = async (req, res) => {

    try {
        let racicabe01 = await Racicabe01.findById(req.params.id);

        if(!racicabe01) {
            res.status(404).json({ msg: 'No existe tal cosa o raci01'})

        }
        await Racicabe01.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Raci01 eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}