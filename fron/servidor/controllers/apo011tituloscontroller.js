const Apo011titulo = require("../models/Apo011titulo");

exports.crearApo011titulo = async (req, res) => {
    
    try {
        let apo011titulo;
        
        apo011titulo= new Apo011titulo(req.body);

        await apo011titulo.save();
        res.send(apo011titulo);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo011titulos = async (req, res) => {

    try {
        
        const apo011titulos = await Apo011titulo.find();
        res.json(apo011titulos)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo011titulo = async (req, res) => {

    try {
        const {apo011titulo1, apo011titulo2, apo011titulo3, apo011titulo4, apo011titulo5, apo011titulo6, apo011titulo7, apo011titulo8,
        apo011titulo9, apo011titulo10, apo011titulo11, apo011titulo12, apo011titulo13, apo011titulo14, apo011titulo15, apo011titulo16,
        apo011titulo17, apo011titulo18, apo011titulo19, apo011titulo20, apo011titulo21, apo011titulo22, apo011titulo23, apo011titulo24,
        apo011titulo25, apo011titulo26} = req.body;
        let apo011titulo= await Apo011titulo.findById(req.params.id);

        if(!apo011titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo011titulo.apo011titulo1 = apo011titulo1;
        apo011titulo.apo011titulo2 = apo011titulo2;
        apo011titulo.apo011titulo3 = apo011titulo3;
        apo011titulo.apo011titulo4 = apo011titulo4;
        apo011titulo.apo011titulo5 = apo011titulo5;
        apo011titulo.apo011titulo6 = apo011titulo6;
        apo011titulo.apo011titulo7 = apo011titulo7;
        apo011titulo.apo011titulo8 = apo011titulo8;
        apo011titulo.apo011titulo9 = apo011titulo9;
        apo011titulo.apo011titulo10 = apo011titulo10;
        apo011titulo.apo011titulo11 = apo011titulo11;
        apo011titulo.apo011titulo12 = apo011titulo12;
        apo011titulo.apo011titulo13 = apo011titulo13;
        apo011titulo.apo011titulo14 = apo011titulo14;
        apo011titulo.apo011titulo15 = apo011titulo15;
        apo011titulo.apo011titulo16 = apo011titulo16;
        apo011titulo.apo011titulo17 = apo011titulo17;
        apo011titulo.apo011titulo18 = apo011titulo18;
        apo011titulo.apo011titulo19 = apo011titulo19;
        apo011titulo.apo011titulo20 = apo011titulo20;
        apo011titulo.apo011titulo21 = apo011titulo21;
        apo011titulo.apo011titulo22 = apo011titulo22;
        apo011titulo.apo011titulo23 = apo011titulo23;
        apo011titulo.apo011titulo24 = apo011titulo24;
        apo011titulo.apo011titulo25 = apo011titulo25;
        apo011titulo.apo011titulo26 = apo011titulo26;
        
        apo011titulo= await Apo011titulo.findOneAndUpdate({ _id: req.params.id},apo011titulo, {new: true});
        res.json(apo011titulo)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo011titulo = async (req, res) => {

    try {
        let apo011titulo = await Apo011titulo.findById(req.params.id);
        if(!apo011titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo011titulo)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo011titulo = async (req, res) => {

    try {
        let apo011titulo = await Apo011titulo.findById(req.params.id);

        if(!apo011titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo011titulo.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 