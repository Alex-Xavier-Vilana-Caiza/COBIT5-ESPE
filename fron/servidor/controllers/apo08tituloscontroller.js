const Apo08titulo = require("../models/Apo08titulo");

exports.crearApo08titulo = async (req, res) => {
    
    try {
        let apo08titulo;
        
        apo08titulo= new Apo08titulo(req.body);

        await apo08titulo.save();
        res.send(apo08titulo);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo08titulos = async (req, res) => {

    try {
        
        const apo08titulos = await Apo08titulo.find();
        res.json(apo08titulos)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo08titulo = async (req, res) => {

    try {
        const {apo08titulo1, apo08titulo2, apo08titulo3, apo08titulo4, apo08titulo5, apo08titulo6, apo08titulo7, apo08titulo8,
        apo08titulo9, apo08titulo10, apo08titulo11, apo08titulo12, apo08titulo13, apo08titulo14, apo08titulo15, apo08titulo16,
        apo08titulo17, apo08titulo18, apo08titulo19, apo08titulo20, apo08titulo21, apo08titulo22, apo08titulo23, apo08titulo24,
        apo08titulo25, apo08titulo26} = req.body;
        let apo08titulo= await Apo08titulo.findById(req.params.id);

        if(!apo08titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo08titulo.apo08titulo1 = apo08titulo1;
        apo08titulo.apo08titulo2 = apo08titulo2;
        apo08titulo.apo08titulo3 = apo08titulo3;
        apo08titulo.apo08titulo4 = apo08titulo4;
        apo08titulo.apo08titulo5 = apo08titulo5;
        apo08titulo.apo08titulo6 = apo08titulo6;
        apo08titulo.apo08titulo7 = apo08titulo7;
        apo08titulo.apo08titulo8 = apo08titulo8;
        apo08titulo.apo08titulo9 = apo08titulo9;
        apo08titulo.apo08titulo10 = apo08titulo10;
        apo08titulo.apo08titulo11 = apo08titulo11;
        apo08titulo.apo08titulo12 = apo08titulo12;
        apo08titulo.apo08titulo13 = apo08titulo13;
        apo08titulo.apo08titulo14 = apo08titulo14;
        apo08titulo.apo08titulo15 = apo08titulo15;
        apo08titulo.apo08titulo16 = apo08titulo16;
        apo08titulo.apo08titulo17 = apo08titulo17;
        apo08titulo.apo08titulo18 = apo08titulo18;
        apo08titulo.apo08titulo19 = apo08titulo19;
        apo08titulo.apo08titulo20 = apo08titulo20;
        apo08titulo.apo08titulo21 = apo08titulo21;
        apo08titulo.apo08titulo22 = apo08titulo22;
        apo08titulo.apo08titulo23 = apo08titulo23;
        apo08titulo.apo08titulo24 = apo08titulo24;
        apo08titulo.apo08titulo25 = apo08titulo25;
        apo08titulo.apo08titulo26 = apo08titulo26;
        
        apo08titulo= await Apo08titulo.findOneAndUpdate({ _id: req.params.id},apo08titulo, {new: true});
        res.json(apo08titulo)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo08titulo = async (req, res) => {

    try {
        let apo08titulo = await Apo08titulo.findById(req.params.id);
        if(!apo08titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo08titulo)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo08titulo = async (req, res) => {

    try {
        let apo08titulo = await Apo08titulo.findById(req.params.id);

        if(!apo08titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo08titulo.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 