const Apo010titulo = require("../models/Apo010titulo");

exports.crearApo010titulo = async (req, res) => {
    
    try {
        let apo010titulo;
        
        apo010titulo= new Apo010titulo(req.body);

        await apo010titulo.save();
        res.send(apo010titulo);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo010titulos = async (req, res) => {

    try {
        
        const apo010titulos = await Apo010titulo.find();
        res.json(apo010titulos)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo010titulo = async (req, res) => {

    try {
        const {apo010titulo1, apo010titulo2, apo010titulo3, apo010titulo4, apo010titulo5, apo010titulo6, apo010titulo7, apo010titulo8,
        apo010titulo9, apo010titulo10, apo010titulo11, apo010titulo12, apo010titulo13, apo010titulo14, apo010titulo15, apo010titulo16,
        apo010titulo17, apo010titulo18, apo010titulo19, apo010titulo20, apo010titulo21, apo010titulo22, apo010titulo23, apo010titulo24,
        apo010titulo25, apo010titulo26} = req.body;
        let apo010titulo= await Apo010titulo.findById(req.params.id);

        if(!apo010titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo010titulo.apo010titulo1 = apo010titulo1;
        apo010titulo.apo010titulo2 = apo010titulo2;
        apo010titulo.apo010titulo3 = apo010titulo3;
        apo010titulo.apo010titulo4 = apo010titulo4;
        apo010titulo.apo010titulo5 = apo010titulo5;
        apo010titulo.apo010titulo6 = apo010titulo6;
        apo010titulo.apo010titulo7 = apo010titulo7;
        apo010titulo.apo010titulo8 = apo010titulo8;
        apo010titulo.apo010titulo9 = apo010titulo9;
        apo010titulo.apo010titulo10 = apo010titulo10;
        apo010titulo.apo010titulo11 = apo010titulo11;
        apo010titulo.apo010titulo12 = apo010titulo12;
        apo010titulo.apo010titulo13 = apo010titulo13;
        apo010titulo.apo010titulo14 = apo010titulo14;
        apo010titulo.apo010titulo15 = apo010titulo15;
        apo010titulo.apo010titulo16 = apo010titulo16;
        apo010titulo.apo010titulo17 = apo010titulo17;
        apo010titulo.apo010titulo18 = apo010titulo18;
        apo010titulo.apo010titulo19 = apo010titulo19;
        apo010titulo.apo010titulo20 = apo010titulo20;
        apo010titulo.apo010titulo21 = apo010titulo21;
        apo010titulo.apo010titulo22 = apo010titulo22;
        apo010titulo.apo010titulo23 = apo010titulo23;
        apo010titulo.apo010titulo24 = apo010titulo24;
        apo010titulo.apo010titulo25 = apo010titulo25;
        apo010titulo.apo010titulo26 = apo010titulo26;
        
        apo010titulo= await Apo010titulo.findOneAndUpdate({ _id: req.params.id},apo010titulo, {new: true});
        res.json(apo010titulo)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo010titulo = async (req, res) => {

    try {
        let apo010titulo = await Apo010titulo.findById(req.params.id);
        if(!apo010titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo010titulo)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo010titulo = async (req, res) => {

    try {
        let apo010titulo = await Apo010titulo.findById(req.params.id);

        if(!apo010titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo010titulo.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 