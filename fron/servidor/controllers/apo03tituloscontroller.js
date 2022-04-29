const Apo03titulo = require("../models/Apo03titulo");

exports.crearApo03titulo = async (req, res) => {
    
    try {
        let apo03titulo;
        
        apo03titulo= new Apo03titulo(req.body);

        await apo03titulo.save();
        res.send(apo03titulo);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo03titulos = async (req, res) => {

    try {
        
        const apo03titulos = await Apo03titulo.find();
        res.json(apo03titulos)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo03titulo = async (req, res) => {

    try {
        const {apo03titulo1, apo03titulo2, apo03titulo3, apo03titulo4, apo03titulo5, apo03titulo6, apo03titulo7, apo03titulo8,
        apo03titulo9, apo03titulo10, apo03titulo11, apo03titulo12, apo03titulo13, apo03titulo14, apo03titulo15, apo03titulo16,
        apo03titulo17, apo03titulo18, apo03titulo19, apo03titulo20, apo03titulo21, apo03titulo22, apo03titulo23, apo03titulo24,
        apo03titulo25, apo03titulo26} = req.body;
        let apo03titulo= await Apo03titulo.findById(req.params.id);

        if(!apo03titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo03titulo.apo03titulo1 = apo03titulo1;
        apo03titulo.apo03titulo2 = apo03titulo2;
        apo03titulo.apo03titulo3 = apo03titulo3;
        apo03titulo.apo03titulo4 = apo03titulo4;
        apo03titulo.apo03titulo5 = apo03titulo5;
        apo03titulo.apo03titulo6 = apo03titulo6;
        apo03titulo.apo03titulo7 = apo03titulo7;
        apo03titulo.apo03titulo8 = apo03titulo8;
        apo03titulo.apo03titulo9 = apo03titulo9;
        apo03titulo.apo03titulo10 = apo03titulo10;
        apo03titulo.apo03titulo11 = apo03titulo11;
        apo03titulo.apo03titulo12 = apo03titulo12;
        apo03titulo.apo03titulo13 = apo03titulo13;
        apo03titulo.apo03titulo14 = apo03titulo14;
        apo03titulo.apo03titulo15 = apo03titulo15;
        apo03titulo.apo03titulo16 = apo03titulo16;
        apo03titulo.apo03titulo17 = apo03titulo17;
        apo03titulo.apo03titulo18 = apo03titulo18;
        apo03titulo.apo03titulo19 = apo03titulo19;
        apo03titulo.apo03titulo20 = apo03titulo20;
        apo03titulo.apo03titulo21 = apo03titulo21;
        apo03titulo.apo03titulo22 = apo03titulo22;
        apo03titulo.apo03titulo23 = apo03titulo23;
        apo03titulo.apo03titulo24 = apo03titulo24;
        apo03titulo.apo03titulo25 = apo03titulo25;
        apo03titulo.apo03titulo26 = apo03titulo26;
        
        apo03titulo= await Apo03titulo.findOneAndUpdate({ _id: req.params.id},apo03titulo, {new: true});
        res.json(apo03titulo)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo03titulo = async (req, res) => {

    try {
        let apo03titulo = await Apo03titulo.findById(req.params.id);
        if(!apo03titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo03titulo)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo03titulo = async (req, res) => {

    try {
        let apo03titulo = await Apo03titulo.findById(req.params.id);

        if(!apo03titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo03titulo.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 