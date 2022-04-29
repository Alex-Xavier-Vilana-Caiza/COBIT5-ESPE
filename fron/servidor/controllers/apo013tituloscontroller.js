const Apo013titulo = require("../models/Apo013titulo");

exports.crearApo013titulo = async (req, res) => {
    
    try {
        let apo013titulo;
        
        apo013titulo= new Apo013titulo(req.body);

        await apo013titulo.save();
        res.send(apo013titulo);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo013titulos = async (req, res) => {

    try {
        
        const apo013titulos = await Apo013titulo.find();
        res.json(apo013titulos)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo013titulo = async (req, res) => {

    try {
        const {apo013titulo1, apo013titulo2, apo013titulo3, apo013titulo4, apo013titulo5, apo013titulo6, apo013titulo7, apo013titulo8,
        apo013titulo9, apo013titulo10, apo013titulo11, apo013titulo12, apo013titulo13, apo013titulo14, apo013titulo15, apo013titulo16,
        apo013titulo17, apo013titulo18, apo013titulo19, apo013titulo20, apo013titulo21, apo013titulo22, apo013titulo23, apo013titulo24,
        apo013titulo25, apo013titulo26} = req.body;
        let apo013titulo= await Apo013titulo.findById(req.params.id);

        if(!apo013titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo013titulo.apo013titulo1 = apo013titulo1;
        apo013titulo.apo013titulo2 = apo013titulo2;
        apo013titulo.apo013titulo3 = apo013titulo3;
        apo013titulo.apo013titulo4 = apo013titulo4;
        apo013titulo.apo013titulo5 = apo013titulo5;
        apo013titulo.apo013titulo6 = apo013titulo6;
        apo013titulo.apo013titulo7 = apo013titulo7;
        apo013titulo.apo013titulo8 = apo013titulo8;
        apo013titulo.apo013titulo9 = apo013titulo9;
        apo013titulo.apo013titulo10 = apo013titulo10;
        apo013titulo.apo013titulo11 = apo013titulo11;
        apo013titulo.apo013titulo12 = apo013titulo12;
        apo013titulo.apo013titulo13 = apo013titulo13;
        apo013titulo.apo013titulo14 = apo013titulo14;
        apo013titulo.apo013titulo15 = apo013titulo15;
        apo013titulo.apo013titulo16 = apo013titulo16;
        apo013titulo.apo013titulo17 = apo013titulo17;
        apo013titulo.apo013titulo18 = apo013titulo18;
        apo013titulo.apo013titulo19 = apo013titulo19;
        apo013titulo.apo013titulo20 = apo013titulo20;
        apo013titulo.apo013titulo21 = apo013titulo21;
        apo013titulo.apo013titulo22 = apo013titulo22;
        apo013titulo.apo013titulo23 = apo013titulo23;
        apo013titulo.apo013titulo24 = apo013titulo24;
        apo013titulo.apo013titulo25 = apo013titulo25;
        apo013titulo.apo013titulo26 = apo013titulo26;
        
        apo013titulo= await Apo013titulo.findOneAndUpdate({ _id: req.params.id},apo013titulo, {new: true});
        res.json(apo013titulo)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo013titulo = async (req, res) => {

    try {
        let apo013titulo = await Apo013titulo.findById(req.params.id);
        if(!apo013titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo013titulo)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo013titulo = async (req, res) => {

    try {
        let apo013titulo = await Apo013titulo.findById(req.params.id);

        if(!apo013titulo) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo013titulo.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 