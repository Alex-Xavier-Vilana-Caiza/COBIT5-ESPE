const Edm05casilla = require("../models/Edm05casilla");


exports.crearEdm05casilla = async (req, res) => {
    
    try {
        let edm05casilla;
        //Creamos el producto
        edm05casilla = new Edm05casilla(req.body);

        await edm05casilla.save();
        res.send(edm05casilla);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al crear el registro');
        
    }
}

exports.obtenerEdm05casillas = async (req, res) => {

    try {
        
        const edm05casillas = await Edm05casilla.find();
        res.json(edm05casillas)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener los registros');
        
    }
}

exports.actualizarEdm05casilla = async (req, res) => {

    try {
        const { edm05casilla1, edm05casilla2, edm05casilla3, edm05casilla4, edm05casilla5, edm05casilla6, edm05casilla7, edm05casilla8,
            edm05casilla9, edm05casilla10, edm05casilla11, edm05casilla12, edm05casilla13, edm05casilla14, edm05casilla15, edm05casilla16,
            edm05casilla17, edm05casilla18, edm05casilla19, edm05casilla20, edm05casilla21, edm05casilla22, edm05casilla23, edm05casilla24,
            edm05casilla25, edm05casilla26, edm05casilla27} = req.body;
        let edm05casilla = await Edm05casilla.findById(req.params.id);

        if(!edm05casilla) {
            res.status(404).json({ msg: 'No existe el registro'})

        }
        edm05casilla.edm05casilla1 = edm05casilla1;
        edm05casilla.edm05casilla2 = edm05casilla2;
        edm05casilla.edm05casilla3 = edm05casilla3;
        edm05casilla.edm05casilla4 = edm05casilla4;
        edm05casilla.edm05casilla5 = edm05casilla5;
        edm05casilla.edm05casilla6 = edm05casilla6;
        edm05casilla.edm05casilla7 = edm05casilla7;
        edm05casilla.edm05casilla8 = edm05casilla8;
        edm05casilla.edm05casilla9 = edm05casilla9;
        edm05casilla.edm05casilla10 = edm05casilla10;
        edm05casilla.edm05casilla11 = edm05casilla11;
        edm05casilla.edm05casilla12 = edm05casilla12;
        edm05casilla.edm05casilla13 = edm05casilla13;
        edm05casilla.edm05casilla14 = edm05casilla14;
        edm05casilla.edm05casilla15 = edm05casilla15;
        edm05casilla.edm05casilla16 = edm05casilla16;
        edm05casilla.edm05casilla17 = edm05casilla17;
        edm05casilla.edm05casilla18 = edm05casilla18;
        edm05casilla.edm05casilla19 = edm05casilla19;
        edm05casilla.edm05casilla20 = edm05casilla20;
        edm05casilla.edm05casilla21 = edm05casilla21;
        edm05casilla.edm05casilla22 = edm05casilla22;
        edm05casilla.edm05casilla23 = edm05casilla23;
        edm05casilla.edm05casilla24 = edm05casilla24;
        edm05casilla.edm05casilla25 = edm05casilla25;
        edm05casilla.edm05casilla26 = edm05casilla26;
        edm05casilla.edm05casilla27 = edm05casilla27;
        
        edm05casilla = await Edm05casilla.findOneAndUpdate({ _id: req.params.id},edm05casilla, {new: true});
        res.json(edm05casilla)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al actualizar el registro');
    }

}

exports.obtenerEdm05casilla = async (req, res) => {

    try {
        let edm05casilla = await Edm05casilla.findById(req.params.id);
        if(!edm05casilla) {
            res.status(404).json({ msg: 'No existe el registro'})

        }
        res.json(edm05casilla)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener el registro');
    }
}

exports.eliminarEdm05casilla = async (req, res) => {

    try {
        let edm05casilla = await Edm05casilla.findById(req.params.id);

        if(!edm05casilla) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Edm05casilla.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al eliminar el registro');
    }

}