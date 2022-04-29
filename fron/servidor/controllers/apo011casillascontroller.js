const Apo011casilla = require("../models/Apo011casilla");

exports.crearApo011casilla = async (req, res) => {
    
    try {
        let apo011casilla;
        
        apo011casilla= new Apo011casilla(req.body);

        await apo011casilla.save();
        res.send(apo011casilla);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo011casillas = async (req, res) => {

    try {
        
        const apo011casillas = await Apo011casilla.find();
        res.json(apo011casillas)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo011casilla = async (req, res) => {

    try {
        const {apo011casilla1, apo011casilla2, apo011casilla3, apo011casilla4, apo011casilla5, apo011casilla6, apo011casilla7, apo011casilla8,
        apo011casilla9, apo011casilla10, apo011casilla11, apo011casilla12, apo011casilla13, apo011casilla14, apo011casilla15, apo011casilla16,
        apo011casilla17, apo011casilla18, apo011casilla19, apo011casilla20, apo011casilla21, apo011casilla22, apo011casilla23, apo011casilla24,
        apo011casilla25, apo011casilla26, apo011casilla27} = req.body;
        let apo011casilla= await Apo011casilla.findById(req.params.id);

        if(!apo011casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo011casilla.apo011casilla1 = apo011casilla1;
        apo011casilla.apo011casilla2 = apo011casilla2;
        apo011casilla.apo011casilla3 = apo011casilla3;
        apo011casilla.apo011casilla4 = apo011casilla4;
        apo011casilla.apo011casilla5 = apo011casilla5;
        apo011casilla.apo011casilla6 = apo011casilla6;
        apo011casilla.apo011casilla7 = apo011casilla7;
        apo011casilla.apo011casilla8 = apo011casilla8;
        apo011casilla.apo011casilla9 = apo011casilla9;
        apo011casilla.apo011casilla10 = apo011casilla10;
        apo011casilla.apo011casilla11 = apo011casilla11;
        apo011casilla.apo011casilla12 = apo011casilla12;
        apo011casilla.apo011casilla13 = apo011casilla13;
        apo011casilla.apo011casilla14 = apo011casilla14;
        apo011casilla.apo011casilla15 = apo011casilla15;
        apo011casilla.apo011casilla16 = apo011casilla16;
        apo011casilla.apo011casilla17 = apo011casilla17;
        apo011casilla.apo011casilla18 = apo011casilla18;
        apo011casilla.apo011casilla19 = apo011casilla19;
        apo011casilla.apo011casilla20 = apo011casilla20;
        apo011casilla.apo011casilla21 = apo011casilla21;
        apo011casilla.apo011casilla22 = apo011casilla22;
        apo011casilla.apo011casilla23 = apo011casilla23;
        apo011casilla.apo011casilla24 = apo011casilla24;
        apo011casilla.apo011casilla25 = apo011casilla25;
        apo011casilla.apo011casilla26 = apo011casilla26;
        apo011casilla.apo011casilla27 = apo011casilla27;
        
        apo011casilla= await Apo011casilla.findOneAndUpdate({ _id: req.params.id},apo011casilla, {new: true});
        res.json(apo011casilla)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo011casilla = async (req, res) => {

    try {
        let apo011casilla = await Apo011casilla.findById(req.params.id);
        if(!apo011casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo011casilla)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo011casilla = async (req, res) => {

    try {
        let apo011casilla = await Apo011casilla.findById(req.params.id);

        if(!apo011casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo011casilla.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 