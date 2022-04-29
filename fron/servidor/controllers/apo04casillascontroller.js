const Apo04casilla = require("../models/Apo04casilla");

exports.crearApo04casilla = async (req, res) => {
    
    try {
        let apo04casilla;
        
        apo04casilla= new Apo04casilla(req.body);

        await apo04casilla.save();
        res.send(apo04casilla);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo04casillas = async (req, res) => {

    try {
        
        const apo04casillas = await Apo04casilla.find();
        res.json(apo04casillas)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo04casilla = async (req, res) => {

    try {
        const {apo04casilla1, apo04casilla2, apo04casilla3, apo04casilla4, apo04casilla5, apo04casilla6, apo04casilla7, apo04casilla8,
        apo04casilla9, apo04casilla10, apo04casilla11, apo04casilla12, apo04casilla13, apo04casilla14, apo04casilla15, apo04casilla16,
        apo04casilla17, apo04casilla18, apo04casilla19, apo04casilla20, apo04casilla21, apo04casilla22, apo04casilla23, apo04casilla24,
        apo04casilla25, apo04casilla26, apo04casilla27} = req.body;
        let apo04casilla= await Apo04casilla.findById(req.params.id);

        if(!apo04casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo04casilla.apo04casilla1 = apo04casilla1;
        apo04casilla.apo04casilla2 = apo04casilla2;
        apo04casilla.apo04casilla3 = apo04casilla3;
        apo04casilla.apo04casilla4 = apo04casilla4;
        apo04casilla.apo04casilla5 = apo04casilla5;
        apo04casilla.apo04casilla6 = apo04casilla6;
        apo04casilla.apo04casilla7 = apo04casilla7;
        apo04casilla.apo04casilla8 = apo04casilla8;
        apo04casilla.apo04casilla9 = apo04casilla9;
        apo04casilla.apo04casilla10 = apo04casilla10;
        apo04casilla.apo04casilla11 = apo04casilla11;
        apo04casilla.apo04casilla12 = apo04casilla12;
        apo04casilla.apo04casilla13 = apo04casilla13;
        apo04casilla.apo04casilla14 = apo04casilla14;
        apo04casilla.apo04casilla15 = apo04casilla15;
        apo04casilla.apo04casilla16 = apo04casilla16;
        apo04casilla.apo04casilla17 = apo04casilla17;
        apo04casilla.apo04casilla18 = apo04casilla18;
        apo04casilla.apo04casilla19 = apo04casilla19;
        apo04casilla.apo04casilla20 = apo04casilla20;
        apo04casilla.apo04casilla21 = apo04casilla21;
        apo04casilla.apo04casilla22 = apo04casilla22;
        apo04casilla.apo04casilla23 = apo04casilla23;
        apo04casilla.apo04casilla24 = apo04casilla24;
        apo04casilla.apo04casilla25 = apo04casilla25;
        apo04casilla.apo04casilla26 = apo04casilla26;
        apo04casilla.apo04casilla27 = apo04casilla27;
        
        apo04casilla= await Apo04casilla.findOneAndUpdate({ _id: req.params.id},apo04casilla, {new: true});
        res.json(apo04casilla)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo04casilla = async (req, res) => {

    try {
        let apo04casilla = await Apo04casilla.findById(req.params.id);
        if(!apo04casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo04casilla)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo04casilla = async (req, res) => {

    try {
        let apo04casilla = await Apo04casilla.findById(req.params.id);

        if(!apo04casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo04casilla.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 