const Apo05casilla = require("../models/Apo05casilla");

exports.crearApo05casilla = async (req, res) => {
    
    try {
        let apo05casilla;
        
        apo05casilla= new Apo05casilla(req.body);

        await apo05casilla.save();
        res.send(apo05casilla);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo05casillas = async (req, res) => {

    try {
        
        const apo05casillas = await Apo05casilla.find();
        res.json(apo05casillas)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo05casilla = async (req, res) => {

    try {
        const {apo05casilla1, apo05casilla2, apo05casilla3, apo05casilla4, apo05casilla5, apo05casilla6, apo05casilla7, apo05casilla8,
        apo05casilla9, apo05casilla10, apo05casilla11, apo05casilla12, apo05casilla13, apo05casilla14, apo05casilla15, apo05casilla16,
        apo05casilla17, apo05casilla18, apo05casilla19, apo05casilla20, apo05casilla21, apo05casilla22, apo05casilla23, apo05casilla24,
        apo05casilla25, apo05casilla26, apo05casilla27} = req.body;
        let apo05casilla= await Apo05casilla.findById(req.params.id);

        if(!apo05casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo05casilla.apo05casilla1 = apo05casilla1;
        apo05casilla.apo05casilla2 = apo05casilla2;
        apo05casilla.apo05casilla3 = apo05casilla3;
        apo05casilla.apo05casilla4 = apo05casilla4;
        apo05casilla.apo05casilla5 = apo05casilla5;
        apo05casilla.apo05casilla6 = apo05casilla6;
        apo05casilla.apo05casilla7 = apo05casilla7;
        apo05casilla.apo05casilla8 = apo05casilla8;
        apo05casilla.apo05casilla9 = apo05casilla9;
        apo05casilla.apo05casilla10 = apo05casilla10;
        apo05casilla.apo05casilla11 = apo05casilla11;
        apo05casilla.apo05casilla12 = apo05casilla12;
        apo05casilla.apo05casilla13 = apo05casilla13;
        apo05casilla.apo05casilla14 = apo05casilla14;
        apo05casilla.apo05casilla15 = apo05casilla15;
        apo05casilla.apo05casilla16 = apo05casilla16;
        apo05casilla.apo05casilla17 = apo05casilla17;
        apo05casilla.apo05casilla18 = apo05casilla18;
        apo05casilla.apo05casilla19 = apo05casilla19;
        apo05casilla.apo05casilla20 = apo05casilla20;
        apo05casilla.apo05casilla21 = apo05casilla21;
        apo05casilla.apo05casilla22 = apo05casilla22;
        apo05casilla.apo05casilla23 = apo05casilla23;
        apo05casilla.apo05casilla24 = apo05casilla24;
        apo05casilla.apo05casilla25 = apo05casilla25;
        apo05casilla.apo05casilla26 = apo05casilla26;
        apo05casilla.apo05casilla27 = apo05casilla27;
        
        apo05casilla= await Apo05casilla.findOneAndUpdate({ _id: req.params.id},apo05casilla, {new: true});
        res.json(apo05casilla)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo05casilla = async (req, res) => {

    try {
        let apo05casilla = await Apo05casilla.findById(req.params.id);
        if(!apo05casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo05casilla)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo05casilla = async (req, res) => {

    try {
        let apo05casilla = await Apo05casilla.findById(req.params.id);

        if(!apo05casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo05casilla.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 