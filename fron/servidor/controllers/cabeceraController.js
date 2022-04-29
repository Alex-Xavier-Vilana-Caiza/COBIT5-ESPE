const Cabecera = require("../models/Cabecera");

exports.crearCabecera = async (req, res ) => {
    
    try {
        let cabecera;
    
        cabecera = new Cabecera(req.body);

        await cabecera.save();
        res.send(cabecera);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerCabeceras = async (req, res) => {

    try {
        
        const cabeceras = await Cabecera.find();
        res.json(cabeceras)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarCabecera = async (req, res) => {

    try {
        const { ab, bb, cb,db,} = req.body;
        let cabecera = await Cabecera.findById(req.params.id);

        if(!cabecera) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }

        cabecera.ab = ab;
        cabecera.bb = bb;
        cabecera.cb  = cb;
        cabecera.db = db;

        cabecera = await Cabecera.findOneAndUpdate({ _id: req.params.id},cabecera, {new: true});
        res.json(cabecera)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}
exports.obtenerCabecera = async (req, res) => {

    try {
        let cabecera = await Cabecera.findById(req.params.id);
        if(!cabecera) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(cabecera)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}
exports.eliminarCabecera = async (req, res) => {

    try {
        let cabecera = await Cabecera.findById(req.params.id);

        if(!cabecera) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Cabecera.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}