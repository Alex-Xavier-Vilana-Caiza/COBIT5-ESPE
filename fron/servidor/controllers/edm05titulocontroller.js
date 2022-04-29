const Edm05titulo = require("../models/Edm05titulo");


exports.crearEdm05titulo = async (req, res) => {
    
    try {
        let edm05titulo;
        //Creamos el producto
        edm05titulo = new Edm05titulo(req.body);

        await edm05titulo.save();
        res.send(edm05titulo);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al crear el registro');
        
    }
}

exports.obtenerEdm05titulos = async (req, res) => {

    try {
        
        const edm05titulos = await Edm05titulo.find();
        res.json(edm05titulos)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al traer los registros');
        
    }
}

exports.actualizarEdm05titulo = async (req, res) => {

    try {
        const { edm05titulo1, edm05titulo2, edm05titulo3, edm05titulo4, edm05titulo5, edm05titulo6, edm05titulo7, edm05titulo8,
            edm05titulo9, edm05titulo10, edm05titulo11, edm05titulo12, edm05titulo13, edm05titulo14, edm05titulo15, edm05titulo16,
            edm05titulo17, edm05titulo18, edm05titulo19, edm05titulo20, edm05titulo21, edm05titulo22, edm05titulo23, edm05titulo24,
            edm05titulo25, edm05titulo26} = req.body;

        let edm05titulo = await Edm05titulo.findById(req.params.id);

        if(!edm05titulo) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        edm05titulo.edm05titulo1 = edm05titulo1;
        edm05titulo.edm05titulo2 = edm05titulo2;
        edm05titulo.edm05titulo3 = edm05titulo3;
        edm05titulo.edm05titulo4 = edm05titulo4;
        edm05titulo.edm05titulo5 = edm05titulo5;
        edm05titulo.edm05titulo6 = edm05titulo6;
        edm05titulo.edm05titulo7 = edm05titulo7;
        edm05titulo.edm05titulo8 = edm05titulo8;
        edm05titulo.edm05titulo9 = edm05titulo9;
        edm05titulo.edm05titulo10 = edm05titulo10;
        edm05titulo.edm05titulo11 = edm05titulo11;
        edm05titulo.edm05titulo12 = edm05titulo12;
        edm05titulo.edm05titulo13 = edm05titulo13;
        edm05titulo.edm05titulo14 = edm05titulo14;
        edm05titulo.edm05titulo15 = edm05titulo15;
        edm05titulo.edm05titulo16 = edm05titulo16;
        edm05titulo.edm05titulo17 = edm05titulo17;
        edm05titulo.edm05titulo18 = edm05titulo18;
        edm05titulo.edm05titulo19 = edm05titulo19;
        edm05titulo.edm05titulo20 = edm05titulo20;
        edm05titulo.edm05titulo21 = edm05titulo21;
        edm05titulo.edm05titulo22 = edm05titulo22;
        edm05titulo.edm05titulo23 = edm05titulo23;
        edm05titulo.edm05titulo24 = edm05titulo24;
        edm05titulo.edm05titulo25 = edm05titulo25;
        edm05titulo.edm05titulo26 = edm05titulo26;

        edm05titulo = await Edm05titulo.findOneAndUpdate({ _id: req.params.id},edm05titulo, {new: true});
        res.json(edm05titulo)


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar');
    }

}

exports.obtenerEdm05titulo = async (req, res) => {

    try {
        let edm05titulo = await Edm05titulo.findById(req.params.id);
        if(!edm05titulo) {
            res.status(404).json({ msg: 'No existe el registro'})

        }
        res.json(edm05titulo)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener el registro');
    }
}

exports.eliminarEdm05titulo = async (req, res) => {

    try {
        let edm05titulo = await Edm05titulo.findById(req.params.id);

        if(!edm05titulo) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Edm05titulo.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al eliminar el producto');
    }

}