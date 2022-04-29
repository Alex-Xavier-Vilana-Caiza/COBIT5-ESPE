const Edm01casilla = require("../models/Edm01casilla");


exports.crearEdm01casilla = async (req, res) => {
    
    try {
        let edm01casilla;
        //Creamos el producto
        edm01casilla = new Edm01casilla(req.body);

        await edm01casilla.save();
        res.send(edm01casilla);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al crear el registro');
        
    }
}

exports.obtenerEdm01casillas = async (req, res) => {

    try {
        
        const edm01casillas = await Edm01casilla.find();
        res.json(edm01casillas)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener los registros');
        
    }
}

exports.actualizarEdm01casilla = async (req, res) => {

    try {
        const { edm01casilla1, edm01casilla2, edm01casilla3, edm01casilla4, edm01casilla5, edm01casilla6, edm01casilla7, edm01casilla8,
            edm01casilla9, edm01casilla10, edm01casilla11, edm01casilla12, edm01casilla13, edm01casilla14, edm01casilla15, edm01casilla16,
            edm01casilla17, edm01casilla18, edm01casilla19, edm01casilla20, edm01casilla21, edm01casilla22, edm01casilla23, edm01casilla24,
            edm01casilla25, edm01casilla26, edm01casilla27} = req.body;
        let edm01casilla = await Edm01casilla.findById(req.params.id);

        if(!edm01casilla) {
            res.status(404).json({ msg: 'No existe el registro'})

        }
        edm01casilla.edm01casilla1 = edm01casilla1;
        edm01casilla.edm01casilla2 = edm01casilla2;
        edm01casilla.edm01casilla3 = edm01casilla3;
        edm01casilla.edm01casilla4 = edm01casilla4;
        edm01casilla.edm01casilla5 = edm01casilla5;
        edm01casilla.edm01casilla6 = edm01casilla6;
        edm01casilla.edm01casilla7 = edm01casilla7;
        edm01casilla.edm01casilla8 = edm01casilla8;
        edm01casilla.edm01casilla9 = edm01casilla9;
        edm01casilla.edm01casilla10 = edm01casilla10;
        edm01casilla.edm01casilla11 = edm01casilla11;
        edm01casilla.edm01casilla12 = edm01casilla12;
        edm01casilla.edm01casilla13 = edm01casilla13;
        edm01casilla.edm01casilla14 = edm01casilla14;
        edm01casilla.edm01casilla15 = edm01casilla15;
        edm01casilla.edm01casilla16 = edm01casilla16;
        edm01casilla.edm01casilla17 = edm01casilla17;
        edm01casilla.edm01casilla18 = edm01casilla18;
        edm01casilla.edm01casilla19 = edm01casilla19;
        edm01casilla.edm01casilla20 = edm01casilla20;
        edm01casilla.edm01casilla21 = edm01casilla21;
        edm01casilla.edm01casilla22 = edm01casilla22;
        edm01casilla.edm01casilla23 = edm01casilla23;
        edm01casilla.edm01casilla24 = edm01casilla24;
        edm01casilla.edm01casilla25 = edm01casilla25;
        edm01casilla.edm01casilla26 = edm01casilla26;
        edm01casilla.edm01casilla27 = edm01casilla27;
        
        edm01casilla = await Edm01casilla.findOneAndUpdate({ _id: req.params.id},edm01casilla, {new: true});
        res.json(edm01casilla)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al actualizar el registro');
    }

}

exports.obtenerEdm01casilla = async (req, res) => {

    try {
        let edm01casilla = await Edm01casilla.findById(req.params.id);
        if(!edm01casilla) {
            res.status(404).json({ msg: 'No existe el registro'})

        }
        res.json(edm01casilla)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al obtener el registro');
    }
}

exports.eliminarEdm01casilla = async (req, res) => {

    try {
        let edm01casilla = await Edm01casilla.findById(req.params.id);

        if(!edm01casilla) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Edm01casilla.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error al eliminar el registro');
    }

}