const Apo09casilla = require("../models/Apo09casilla");

exports.crearApo09casilla = async (req, res) => {
    
    try {
        let apo09casilla;
        
        apo09casilla= new Apo09casilla(req.body);

        await apo09casilla.save();
        res.send(apo09casilla);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo09casillas = async (req, res) => {

    try {
        
        const apo09casillas = await Apo09casilla.find();
        res.json(apo09casillas)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo09casilla = async (req, res) => {

    try {
        const {apo09casilla1, apo09casilla2, apo09casilla3, apo09casilla4, apo09casilla5, apo09casilla6, apo09casilla7, apo09casilla8,
        apo09casilla9, apo09casilla10, apo09casilla11, apo09casilla12, apo09casilla13, apo09casilla14, apo09casilla15, apo09casilla16,
        apo09casilla17, apo09casilla18, apo09casilla19, apo09casilla20, apo09casilla21, apo09casilla22, apo09casilla23, apo09casilla24,
        apo09casilla25, apo09casilla26, apo09casilla27} = req.body;
        let apo09casilla= await Apo09casilla.findById(req.params.id);

        if(!apo09casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo09casilla.apo09casilla1 = apo09casilla1;
        apo09casilla.apo09casilla2 = apo09casilla2;
        apo09casilla.apo09casilla3 = apo09casilla3;
        apo09casilla.apo09casilla4 = apo09casilla4;
        apo09casilla.apo09casilla5 = apo09casilla5;
        apo09casilla.apo09casilla6 = apo09casilla6;
        apo09casilla.apo09casilla7 = apo09casilla7;
        apo09casilla.apo09casilla8 = apo09casilla8;
        apo09casilla.apo09casilla9 = apo09casilla9;
        apo09casilla.apo09casilla10 = apo09casilla10;
        apo09casilla.apo09casilla11 = apo09casilla11;
        apo09casilla.apo09casilla12 = apo09casilla12;
        apo09casilla.apo09casilla13 = apo09casilla13;
        apo09casilla.apo09casilla14 = apo09casilla14;
        apo09casilla.apo09casilla15 = apo09casilla15;
        apo09casilla.apo09casilla16 = apo09casilla16;
        apo09casilla.apo09casilla17 = apo09casilla17;
        apo09casilla.apo09casilla18 = apo09casilla18;
        apo09casilla.apo09casilla19 = apo09casilla19;
        apo09casilla.apo09casilla20 = apo09casilla20;
        apo09casilla.apo09casilla21 = apo09casilla21;
        apo09casilla.apo09casilla22 = apo09casilla22;
        apo09casilla.apo09casilla23 = apo09casilla23;
        apo09casilla.apo09casilla24 = apo09casilla24;
        apo09casilla.apo09casilla25 = apo09casilla25;
        apo09casilla.apo09casilla26 = apo09casilla26;
        apo09casilla.apo09casilla27 = apo09casilla27;
        
        apo09casilla= await Apo09casilla.findOneAndUpdate({ _id: req.params.id},apo09casilla, {new: true});
        res.json(apo09casilla)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo09casilla = async (req, res) => {

    try {
        let apo09casilla = await Apo09casilla.findById(req.params.id);
        if(!apo09casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo09casilla)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo09casilla = async (req, res) => {

    try {
        let apo09casilla = await Apo09casilla.findById(req.params.id);

        if(!apo09casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo09casilla.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 