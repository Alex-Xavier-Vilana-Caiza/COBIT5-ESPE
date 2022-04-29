const Apo04titulo = require("../models/Apo04titulo");

exports.crearApo04titulo = async (req, res) => {
    
    try {
        let apo04titulo;
        
        apo04titulo= new Apo04titulo(req.body);

        await apo04titulo.save();
        res.send(apo04titulo);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo04titulos = async (req, res) => {

    try {
        
        const apo04titulos = await Apo04titulo.find();
        res.json(apo04titulos)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo04titulo = async (req, res) => {

    try {
        const {apo04titulo1, apo04titulo2, apo04titulo3, apo04titulo4, apo04titulo5, apo04titulo6, apo04titulo7, apo04titulo8,
        apo04titulo9, apo04titulo10, apo04titulo11, apo04titulo12, apo04titulo13, apo04titulo14, apo04titulo15, apo04titulo16,
        apo04titulo17, apo04titulo18, apo04titulo19, apo04titulo20, apo04titulo21, apo04titulo22, apo04titulo23, apo04titulo24,
        apo04titulo25, apo04titulo26} = req.body;
        let apo04titulo= await Apo04titulo.findById(req.params.id);

        if(!apo04titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo04titulo.apo04titulo1 = apo04titulo1;
        apo04titulo.apo04titulo2 = apo04titulo2;
        apo04titulo.apo04titulo3 = apo04titulo3;
        apo04titulo.apo04titulo4 = apo04titulo4;
        apo04titulo.apo04titulo5 = apo04titulo5;
        apo04titulo.apo04titulo6 = apo04titulo6;
        apo04titulo.apo04titulo7 = apo04titulo7;
        apo04titulo.apo04titulo8 = apo04titulo8;
        apo04titulo.apo04titulo9 = apo04titulo9;
        apo04titulo.apo04titulo10 = apo04titulo10;
        apo04titulo.apo04titulo11 = apo04titulo11;
        apo04titulo.apo04titulo12 = apo04titulo12;
        apo04titulo.apo04titulo13 = apo04titulo13;
        apo04titulo.apo04titulo14 = apo04titulo14;
        apo04titulo.apo04titulo15 = apo04titulo15;
        apo04titulo.apo04titulo16 = apo04titulo16;
        apo04titulo.apo04titulo17 = apo04titulo17;
        apo04titulo.apo04titulo18 = apo04titulo18;
        apo04titulo.apo04titulo19 = apo04titulo19;
        apo04titulo.apo04titulo20 = apo04titulo20;
        apo04titulo.apo04titulo21 = apo04titulo21;
        apo04titulo.apo04titulo22 = apo04titulo22;
        apo04titulo.apo04titulo23 = apo04titulo23;
        apo04titulo.apo04titulo24 = apo04titulo24;
        apo04titulo.apo04titulo25 = apo04titulo25;
        apo04titulo.apo04titulo26 = apo04titulo26;
        
        apo04titulo= await Apo04titulo.findOneAndUpdate({ _id: req.params.id},apo04titulo, {new: true});
        res.json(apo04titulo)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo04titulo = async (req, res) => {

    try {
        let apo04titulo = await Apo04titulo.findById(req.params.id);
        if(!apo04titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo04titulo)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo04titulo = async (req, res) => {

    try {
        let apo04titulo = await Apo04titulo.findById(req.params.id);

        if(!apo04titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo04titulo.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 