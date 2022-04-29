const Apo07titulo = require("../models/Apo07titulo");

exports.crearApo07titulo = async (req, res) => {
    
    try {
        let apo07titulo;
        
        apo07titulo= new Apo07titulo(req.body);

        await apo07titulo.save();
        res.send(apo07titulo);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo07titulos = async (req, res) => {

    try {
        
        const apo07titulos = await Apo07titulo.find();
        res.json(apo07titulos)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo07titulo = async (req, res) => {

    try {
        const {apo07titulo1, apo07titulo2, apo07titulo3, apo07titulo4, apo07titulo5, apo07titulo6, apo07titulo7, apo07titulo8,
        apo07titulo9, apo07titulo10, apo07titulo11, apo07titulo12, apo07titulo13, apo07titulo14, apo07titulo15, apo07titulo16,
        apo07titulo17, apo07titulo18, apo07titulo19, apo07titulo20, apo07titulo21, apo07titulo22, apo07titulo23, apo07titulo24,
        apo07titulo25, apo07titulo26} = req.body;
        let apo07titulo= await Apo07titulo.findById(req.params.id);

        if(!apo07titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo07titulo.apo07titulo1 = apo07titulo1;
        apo07titulo.apo07titulo2 = apo07titulo2;
        apo07titulo.apo07titulo3 = apo07titulo3;
        apo07titulo.apo07titulo4 = apo07titulo4;
        apo07titulo.apo07titulo5 = apo07titulo5;
        apo07titulo.apo07titulo6 = apo07titulo6;
        apo07titulo.apo07titulo7 = apo07titulo7;
        apo07titulo.apo07titulo8 = apo07titulo8;
        apo07titulo.apo07titulo9 = apo07titulo9;
        apo07titulo.apo07titulo10 = apo07titulo10;
        apo07titulo.apo07titulo11 = apo07titulo11;
        apo07titulo.apo07titulo12 = apo07titulo12;
        apo07titulo.apo07titulo13 = apo07titulo13;
        apo07titulo.apo07titulo14 = apo07titulo14;
        apo07titulo.apo07titulo15 = apo07titulo15;
        apo07titulo.apo07titulo16 = apo07titulo16;
        apo07titulo.apo07titulo17 = apo07titulo17;
        apo07titulo.apo07titulo18 = apo07titulo18;
        apo07titulo.apo07titulo19 = apo07titulo19;
        apo07titulo.apo07titulo20 = apo07titulo20;
        apo07titulo.apo07titulo21 = apo07titulo21;
        apo07titulo.apo07titulo22 = apo07titulo22;
        apo07titulo.apo07titulo23 = apo07titulo23;
        apo07titulo.apo07titulo24 = apo07titulo24;
        apo07titulo.apo07titulo25 = apo07titulo25;
        apo07titulo.apo07titulo26 = apo07titulo26;
        
        apo07titulo= await Apo07titulo.findOneAndUpdate({ _id: req.params.id},apo07titulo, {new: true});
        res.json(apo07titulo)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo07titulo = async (req, res) => {

    try {
        let apo07titulo = await Apo07titulo.findById(req.params.id);
        if(!apo07titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo07titulo)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo07titulo = async (req, res) => {

    try {
        let apo07titulo = await Apo07titulo.findById(req.params.id);

        if(!apo07titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo07titulo.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 