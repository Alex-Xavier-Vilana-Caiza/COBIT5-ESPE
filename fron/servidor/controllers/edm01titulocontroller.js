const Edm01titulo = require("../models/Edm01titulo");


exports.crearEdm01titulo = async (req, res) => {
    
    try {
        let edm01titulo;
        //Creamos el producto
        edm01titulo = new Edm01titulo(req.body);

        await edm01titulo.save();
        res.send(edm01titulo);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al crear el registro');
        
    }
}

exports.obtenerEdm01titulos = async (req, res) => {

    try {
        
        const edm01titulos = await Edm01titulo.find();
        res.json(edm01titulos)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al traer los registros');
        
    }
}

exports.actualizarEdm01titulo = async (req, res) => {

    try {
        const { edm01titulo1, edm01titulo2, edm01titulo3, edm01titulo4, edm01titulo5, edm01titulo6, edm01titulo7, edm01titulo8,
            edm01titulo9, edm01titulo10, edm01titulo11, edm01titulo12, edm01titulo13, edm01titulo14, edm01titulo15, edm01titulo16,
            edm01titulo17, edm01titulo18, edm01titulo19, edm01titulo20, edm01titulo21, edm01titulo22, edm01titulo23, edm01titulo24,
            edm01titulo25, edm01titulo26} = req.body;

        let edm01titulo = await Edm01titulo.findById(req.params.id);

        if(!edm01titulo) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        edm01titulo.edm01titulo1 = edm01titulo1;
        edm01titulo.edm01titulo2 = edm01titulo2;
        edm01titulo.edm01titulo3 = edm01titulo3;
        edm01titulo.edm01titulo4 = edm01titulo4;
        edm01titulo.edm01titulo5 = edm01titulo5;
        edm01titulo.edm01titulo6 = edm01titulo6;
        edm01titulo.edm01titulo7 = edm01titulo7;
        edm01titulo.edm01titulo8 = edm01titulo8;
        edm01titulo.edm01titulo9 = edm01titulo9;
        edm01titulo.edm01titulo10 = edm01titulo10;
        edm01titulo.edm01titulo11 = edm01titulo11;
        edm01titulo.edm01titulo12 = edm01titulo12;
        edm01titulo.edm01titulo13 = edm01titulo13;
        edm01titulo.edm01titulo14 = edm01titulo14;
        edm01titulo.edm01titulo15 = edm01titulo15;
        edm01titulo.edm01titulo16 = edm01titulo16;
        edm01titulo.edm01titulo17 = edm01titulo17;
        edm01titulo.edm01titulo18 = edm01titulo18;
        edm01titulo.edm01titulo19 = edm01titulo19;
        edm01titulo.edm01titulo20 = edm01titulo20;
        edm01titulo.edm01titulo21 = edm01titulo21;
        edm01titulo.edm01titulo22 = edm01titulo22;
        edm01titulo.edm01titulo23 = edm01titulo23;
        edm01titulo.edm01titulo24 = edm01titulo24;
        edm01titulo.edm01titulo25 = edm01titulo25;
        edm01titulo.edm01titulo26 = edm01titulo26;

        edm01titulo = await Edm01titulo.findOneAndUpdate({ _id: req.params.id},edm01titulo, {new: true});
        res.json(edm01titulo)


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar');
    }

}

exports.obtenerEdm01titulo = async (req, res) => {

    try {
        let edm01titulo = await Edm01titulo.findById(req.params.id);
        if(!edm01titulo) {
            res.status(404).json({ msg: 'No existe el registro'})

        }
        res.json(edm01titulo)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener el registro');
    }
}

exports.eliminarEdm01titulo = async (req, res) => {

    try {
        let edm01titulo = await Edm01titulo.findById(req.params.id);

        if(!edm01titulo) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Edm01titulo.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al eliminar el producto');
    }

}