const Apo09titulo = require("../models/Apo09titulo");

exports.crearApo09titulo = async (req, res) => {
    
    try {
        let apo09titulo;
        
        apo09titulo= new Apo09titulo(req.body);

        await apo09titulo.save();
        res.send(apo09titulo);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo09titulos = async (req, res) => {

    try {
        
        const apo09titulos = await Apo09titulo.find();
        res.json(apo09titulos)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo09titulo = async (req, res) => {

    try {
        const {apo09titulo1, apo09titulo2, apo09titulo3, apo09titulo4, apo09titulo5, apo09titulo6, apo09titulo7, apo09titulo8,
        apo09titulo9, apo09titulo10, apo09titulo11, apo09titulo12, apo09titulo13, apo09titulo14, apo09titulo15, apo09titulo16,
        apo09titulo17, apo09titulo18, apo09titulo19, apo09titulo20, apo09titulo21, apo09titulo22, apo09titulo23, apo09titulo24,
        apo09titulo25, apo09titulo26} = req.body;
        let apo09titulo= await Apo09titulo.findById(req.params.id);

        if(!apo09titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo09titulo.apo09titulo1 = apo09titulo1;
        apo09titulo.apo09titulo2 = apo09titulo2;
        apo09titulo.apo09titulo3 = apo09titulo3;
        apo09titulo.apo09titulo4 = apo09titulo4;
        apo09titulo.apo09titulo5 = apo09titulo5;
        apo09titulo.apo09titulo6 = apo09titulo6;
        apo09titulo.apo09titulo7 = apo09titulo7;
        apo09titulo.apo09titulo8 = apo09titulo8;
        apo09titulo.apo09titulo9 = apo09titulo9;
        apo09titulo.apo09titulo10 = apo09titulo10;
        apo09titulo.apo09titulo11 = apo09titulo11;
        apo09titulo.apo09titulo12 = apo09titulo12;
        apo09titulo.apo09titulo13 = apo09titulo13;
        apo09titulo.apo09titulo14 = apo09titulo14;
        apo09titulo.apo09titulo15 = apo09titulo15;
        apo09titulo.apo09titulo16 = apo09titulo16;
        apo09titulo.apo09titulo17 = apo09titulo17;
        apo09titulo.apo09titulo18 = apo09titulo18;
        apo09titulo.apo09titulo19 = apo09titulo19;
        apo09titulo.apo09titulo20 = apo09titulo20;
        apo09titulo.apo09titulo21 = apo09titulo21;
        apo09titulo.apo09titulo22 = apo09titulo22;
        apo09titulo.apo09titulo23 = apo09titulo23;
        apo09titulo.apo09titulo24 = apo09titulo24;
        apo09titulo.apo09titulo25 = apo09titulo25;
        apo09titulo.apo09titulo26 = apo09titulo26;
        
        apo09titulo= await Apo09titulo.findOneAndUpdate({ _id: req.params.id},apo09titulo, {new: true});
        res.json(apo09titulo)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo09titulo = async (req, res) => {

    try {
        let apo09titulo = await Apo09titulo.findById(req.params.id);
        if(!apo09titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo09titulo)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo09titulo = async (req, res) => {

    try {
        let apo09titulo = await Apo09titulo.findById(req.params.id);

        if(!apo09titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo09titulo.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 