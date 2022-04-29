const Apo06titulo = require("../models/Apo06titulo");

exports.crearApo06titulo = async (req, res) => {
    
    try {
        let apo06titulo;
        
        apo06titulo= new Apo06titulo(req.body);

        await apo06titulo.save();
        res.send(apo06titulo);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo06titulos = async (req, res) => {

    try {
        
        const apo06titulos = await Apo06titulo.find();
        res.json(apo06titulos)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo06titulo = async (req, res) => {

    try {
        const {apo06titulo1, apo06titulo2, apo06titulo3, apo06titulo4, apo06titulo5, apo06titulo6, apo06titulo7, apo06titulo8,
        apo06titulo9, apo06titulo10, apo06titulo11, apo06titulo12, apo06titulo13, apo06titulo14, apo06titulo15, apo06titulo16,
        apo06titulo17, apo06titulo18, apo06titulo19, apo06titulo20, apo06titulo21, apo06titulo22, apo06titulo23, apo06titulo24,
        apo06titulo25, apo06titulo26} = req.body;
        let apo06titulo= await Apo06titulo.findById(req.params.id);

        if(!apo06titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo06titulo.apo06titulo1 = apo06titulo1;
        apo06titulo.apo06titulo2 = apo06titulo2;
        apo06titulo.apo06titulo3 = apo06titulo3;
        apo06titulo.apo06titulo4 = apo06titulo4;
        apo06titulo.apo06titulo5 = apo06titulo5;
        apo06titulo.apo06titulo6 = apo06titulo6;
        apo06titulo.apo06titulo7 = apo06titulo7;
        apo06titulo.apo06titulo8 = apo06titulo8;
        apo06titulo.apo06titulo9 = apo06titulo9;
        apo06titulo.apo06titulo10 = apo06titulo10;
        apo06titulo.apo06titulo11 = apo06titulo11;
        apo06titulo.apo06titulo12 = apo06titulo12;
        apo06titulo.apo06titulo13 = apo06titulo13;
        apo06titulo.apo06titulo14 = apo06titulo14;
        apo06titulo.apo06titulo15 = apo06titulo15;
        apo06titulo.apo06titulo16 = apo06titulo16;
        apo06titulo.apo06titulo17 = apo06titulo17;
        apo06titulo.apo06titulo18 = apo06titulo18;
        apo06titulo.apo06titulo19 = apo06titulo19;
        apo06titulo.apo06titulo20 = apo06titulo20;
        apo06titulo.apo06titulo21 = apo06titulo21;
        apo06titulo.apo06titulo22 = apo06titulo22;
        apo06titulo.apo06titulo23 = apo06titulo23;
        apo06titulo.apo06titulo24 = apo06titulo24;
        apo06titulo.apo06titulo25 = apo06titulo25;
        apo06titulo.apo06titulo26 = apo06titulo26;
        
        apo06titulo= await Apo06titulo.findOneAndUpdate({ _id: req.params.id},apo06titulo, {new: true});
        res.json(apo06titulo)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo06titulo = async (req, res) => {

    try {
        let apo06titulo = await Apo06titulo.findById(req.params.id);
        if(!apo06titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo06titulo)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo06titulo = async (req, res) => {

    try {
        let apo06titulo = await Apo06titulo.findById(req.params.id);

        if(!apo06titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo06titulo.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 