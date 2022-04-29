const Apo05titulo = require("../models/Apo05titulo");

exports.crearApo05titulo = async (req, res) => {
    
    try {
        let apo05titulo;
        
        apo05titulo= new Apo05titulo(req.body);

        await apo05titulo.save();
        res.send(apo05titulo);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo05titulos = async (req, res) => {

    try {
        
        const apo05titulos = await Apo05titulo.find();
        res.json(apo05titulos)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo05titulo = async (req, res) => {

    try {
        const {apo05titulo1, apo05titulo2, apo05titulo3, apo05titulo4, apo05titulo5, apo05titulo6, apo05titulo7, apo05titulo8,
        apo05titulo9, apo05titulo10, apo05titulo11, apo05titulo12, apo05titulo13, apo05titulo14, apo05titulo15, apo05titulo16,
        apo05titulo17, apo05titulo18, apo05titulo19, apo05titulo20, apo05titulo21, apo05titulo22, apo05titulo23, apo05titulo24,
        apo05titulo25, apo05titulo26} = req.body;
        let apo05titulo= await Apo05titulo.findById(req.params.id);

        if(!apo05titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo05titulo.apo05titulo1 = apo05titulo1;
        apo05titulo.apo05titulo2 = apo05titulo2;
        apo05titulo.apo05titulo3 = apo05titulo3;
        apo05titulo.apo05titulo4 = apo05titulo4;
        apo05titulo.apo05titulo5 = apo05titulo5;
        apo05titulo.apo05titulo6 = apo05titulo6;
        apo05titulo.apo05titulo7 = apo05titulo7;
        apo05titulo.apo05titulo8 = apo05titulo8;
        apo05titulo.apo05titulo9 = apo05titulo9;
        apo05titulo.apo05titulo10 = apo05titulo10;
        apo05titulo.apo05titulo11 = apo05titulo11;
        apo05titulo.apo05titulo12 = apo05titulo12;
        apo05titulo.apo05titulo13 = apo05titulo13;
        apo05titulo.apo05titulo14 = apo05titulo14;
        apo05titulo.apo05titulo15 = apo05titulo15;
        apo05titulo.apo05titulo16 = apo05titulo16;
        apo05titulo.apo05titulo17 = apo05titulo17;
        apo05titulo.apo05titulo18 = apo05titulo18;
        apo05titulo.apo05titulo19 = apo05titulo19;
        apo05titulo.apo05titulo20 = apo05titulo20;
        apo05titulo.apo05titulo21 = apo05titulo21;
        apo05titulo.apo05titulo22 = apo05titulo22;
        apo05titulo.apo05titulo23 = apo05titulo23;
        apo05titulo.apo05titulo24 = apo05titulo24;
        apo05titulo.apo05titulo25 = apo05titulo25;
        apo05titulo.apo05titulo26 = apo05titulo26;
        
        apo05titulo= await Apo05titulo.findOneAndUpdate({ _id: req.params.id},apo05titulo, {new: true});
        res.json(apo05titulo)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo05titulo = async (req, res) => {

    try {
        let apo05titulo = await Apo05titulo.findById(req.params.id);
        if(!apo05titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo05titulo)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo05titulo = async (req, res) => {

    try {
        let apo05titulo = await Apo05titulo.findById(req.params.id);

        if(!apo05titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo05titulo.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 