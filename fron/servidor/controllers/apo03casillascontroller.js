const Apo03casilla = require("../models/Apo03casilla");

exports.crearApo03casilla = async (req, res) => {
    
    try {
        let apo03casilla;
        
        apo03casilla= new Apo03casilla(req.body);

        await apo03casilla.save();
        res.send(apo03casilla);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo03casillas = async (req, res) => {

    try {
        
        const apo03casillas = await Apo03casilla.find();
        res.json(apo03casillas)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo03casilla = async (req, res) => {

    try {
        const {apo03casilla1, apo03casilla2, apo03casilla3, apo03casilla4, apo03casilla5, apo03casilla6, apo03casilla7, apo03casilla8,
        apo03casilla9, apo03casilla10, apo03casilla11, apo03casilla12, apo03casilla16, apo03casilla14, apo03casilla15, apo03casilla13,
        apo03casilla17, apo03casilla18, apo03casilla19, apo03casilla20, apo03casilla21, apo03casilla22, apo03casilla23, apo03casilla24,
        apo03casilla25, apo03casilla26, apo03casilla27} = req.body;
        let apo03casilla= await Apo03casilla.findById(req.params.id);

        if(!apo03casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo03casilla.apo03casilla1 = apo03casilla1;
        apo03casilla.apo03casilla2 = apo03casilla2;
        apo03casilla.apo03casilla3 = apo03casilla3;
        apo03casilla.apo03casilla4 = apo03casilla4;
        apo03casilla.apo03casilla5 = apo03casilla5;
        apo03casilla.apo03casilla6 = apo03casilla6;
        apo03casilla.apo03casilla7 = apo03casilla7;
        apo03casilla.apo03casilla8 = apo03casilla8;
        apo03casilla.apo03casilla9 = apo03casilla9;
        apo03casilla.apo03casilla10 = apo03casilla10;
        apo03casilla.apo03casilla11 = apo03casilla11;
        apo03casilla.apo03casilla12 = apo03casilla12;
        apo03casilla.apo03casilla13 = apo03casilla13;
        apo03casilla.apo03casilla14 = apo03casilla14;
        apo03casilla.apo03casilla15 = apo03casilla15;
        apo03casilla.apo03casilla16 = apo03casilla16;
        apo03casilla.apo03casilla17 = apo03casilla17;
        apo03casilla.apo03casilla18 = apo03casilla18;
        apo03casilla.apo03casilla19 = apo03casilla19;
        apo03casilla.apo03casilla20 = apo03casilla20;
        apo03casilla.apo03casilla21 = apo03casilla21;
        apo03casilla.apo03casilla22 = apo03casilla22;
        apo03casilla.apo03casilla23 = apo03casilla23;
        apo03casilla.apo03casilla24 = apo03casilla24;
        apo03casilla.apo03casilla25 = apo03casilla25;
        apo03casilla.apo03casilla26 = apo03casilla26;
        apo03casilla.apo03casilla27 = apo03casilla27;
        
        apo03casilla= await Apo03casilla.findOneAndUpdate({ _id: req.params.id},apo03casilla, {new: true});
        res.json(apo03casilla)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo03casilla = async (req, res) => {

    try {
        let apo03casilla = await Apo03casilla.findById(req.params.id);
        if(!apo03casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo03casilla)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo03casilla = async (req, res) => {

    try {
        let apo03casilla = await Apo03casilla.findById(req.params.id);

        if(!apo03casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo03casilla.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 