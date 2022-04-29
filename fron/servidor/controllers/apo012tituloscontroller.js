const Apo012titulo = require("../models/Apo012titulo");

exports.crearApo012titulo = async (req, res) => {
    
    try {
        let apo012titulo;
        
        apo012titulo= new Apo012titulo(req.body);

        await apo012titulo.save();
        res.send(apo012titulo);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo012titulos = async (req, res) => {

    try {
        
        const apo012titulos = await Apo012titulo.find();
        res.json(apo012titulos)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo012titulo = async (req, res) => {

    try {
        const {apo012titulo1, apo012titulo2, apo012titulo3, apo012titulo4, apo012titulo5, apo012titulo6, apo012titulo7, apo012titulo8,
        apo012titulo9, apo012titulo10, apo012titulo11, apo012titulo12, apo012titulo13, apo012titulo14, apo012titulo15, apo012titulo16,
        apo012titulo17, apo012titulo18, apo012titulo19, apo012titulo20, apo012titulo21, apo012titulo22, apo012titulo23, apo012titulo24,
        apo012titulo25, apo012titulo26} = req.body;
        let apo012titulo= await Apo012titulo.findById(req.params.id);

        if(!apo012titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo012titulo.apo012titulo1 = apo012titulo1;
        apo012titulo.apo012titulo2 = apo012titulo2;
        apo012titulo.apo012titulo3 = apo012titulo3;
        apo012titulo.apo012titulo4 = apo012titulo4;
        apo012titulo.apo012titulo5 = apo012titulo5;
        apo012titulo.apo012titulo6 = apo012titulo6;
        apo012titulo.apo012titulo7 = apo012titulo7;
        apo012titulo.apo012titulo8 = apo012titulo8;
        apo012titulo.apo012titulo9 = apo012titulo9;
        apo012titulo.apo012titulo10 = apo012titulo10;
        apo012titulo.apo012titulo11 = apo012titulo11;
        apo012titulo.apo012titulo12 = apo012titulo12;
        apo012titulo.apo012titulo13 = apo012titulo13;
        apo012titulo.apo012titulo14 = apo012titulo14;
        apo012titulo.apo012titulo15 = apo012titulo15;
        apo012titulo.apo012titulo16 = apo012titulo16;
        apo012titulo.apo012titulo17 = apo012titulo17;
        apo012titulo.apo012titulo18 = apo012titulo18;
        apo012titulo.apo012titulo19 = apo012titulo19;
        apo012titulo.apo012titulo20 = apo012titulo20;
        apo012titulo.apo012titulo21 = apo012titulo21;
        apo012titulo.apo012titulo22 = apo012titulo22;
        apo012titulo.apo012titulo23 = apo012titulo23;
        apo012titulo.apo012titulo24 = apo012titulo24;
        apo012titulo.apo012titulo25 = apo012titulo25;
        apo012titulo.apo012titulo26 = apo012titulo26;
        
        apo012titulo= await Apo012titulo.findOneAndUpdate({ _id: req.params.id},apo012titulo, {new: true});
        res.json(apo012titulo)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo012titulo = async (req, res) => {

    try {
        let apo012titulo = await Apo012titulo.findById(req.params.id);
        if(!apo012titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo012titulo)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo012titulo = async (req, res) => {

    try {
        let apo012titulo = await Apo012titulo.findById(req.params.id);

        if(!apo012titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo012titulo.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 