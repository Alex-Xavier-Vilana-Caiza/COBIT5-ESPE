const Apo08casilla = require("../models/Apo08casilla");

exports.crearApo08casilla = async (req, res) => {
    
    try {
        let apo08casilla;
        
        apo08casilla= new Apo08casilla(req.body);

        await apo08casilla.save();
        res.send(apo08casilla);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo08casillas = async (req, res) => {

    try {
        
        const apo08casillas = await Apo08casilla.find();
        res.json(apo08casillas)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo08casilla = async (req, res) => {

    try {
        const {apo08casilla1, apo08casilla2, apo08casilla3, apo08casilla4, apo08casilla5, apo08casilla6, apo08casilla7, apo08casilla8,
        apo08casilla9, apo08casilla10, apo08casilla11, apo08casilla12, apo08casilla13, apo08casilla14, apo08casilla15, apo08casilla16,
        apo08casilla17, apo08casilla18, apo08casilla19, apo08casilla20, apo08casilla21, apo08casilla22, apo08casilla23, apo08casilla24,
        apo08casilla25, apo08casilla26, apo08casilla27} = req.body;
        let apo08casilla= await Apo08casilla.findById(req.params.id);

        if(!apo08casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo08casilla.apo08casilla1 = apo08casilla1;
        apo08casilla.apo08casilla2 = apo08casilla2;
        apo08casilla.apo08casilla3 = apo08casilla3;
        apo08casilla.apo08casilla4 = apo08casilla4;
        apo08casilla.apo08casilla5 = apo08casilla5;
        apo08casilla.apo08casilla6 = apo08casilla6;
        apo08casilla.apo08casilla7 = apo08casilla7;
        apo08casilla.apo08casilla8 = apo08casilla8;
        apo08casilla.apo08casilla9 = apo08casilla9;
        apo08casilla.apo08casilla10 = apo08casilla10;
        apo08casilla.apo08casilla11 = apo08casilla11;
        apo08casilla.apo08casilla12 = apo08casilla12;
        apo08casilla.apo08casilla13 = apo08casilla13;
        apo08casilla.apo08casilla14 = apo08casilla14;
        apo08casilla.apo08casilla15 = apo08casilla15;
        apo08casilla.apo08casilla16 = apo08casilla16;
        apo08casilla.apo08casilla17 = apo08casilla17;
        apo08casilla.apo08casilla18 = apo08casilla18;
        apo08casilla.apo08casilla19 = apo08casilla19;
        apo08casilla.apo08casilla20 = apo08casilla20;
        apo08casilla.apo08casilla21 = apo08casilla21;
        apo08casilla.apo08casilla22 = apo08casilla22;
        apo08casilla.apo08casilla23 = apo08casilla23;
        apo08casilla.apo08casilla24 = apo08casilla24;
        apo08casilla.apo08casilla25 = apo08casilla25;
        apo08casilla.apo08casilla26 = apo08casilla26;
        apo08casilla.apo08casilla27 = apo08casilla27;
        
        apo08casilla= await Apo08casilla.findOneAndUpdate({ _id: req.params.id},apo08casilla, {new: true});
        res.json(apo08casilla)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo08casilla = async (req, res) => {

    try {
        let apo08casilla = await Apo08casilla.findById(req.params.id);
        if(!apo08casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo08casilla)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo08casilla = async (req, res) => {

    try {
        let apo08casilla = await Apo08casilla.findById(req.params.id);

        if(!apo08casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo08casilla.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 