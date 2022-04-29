const Apo010casilla = require("../models/Apo010casilla");

exports.crearApo010casilla = async (req, res) => {
    
    try {
        let apo010casilla;
        
        apo010casilla= new Apo010casilla(req.body);

        await apo010casilla.save();
        res.send(apo010casilla);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo010casillas = async (req, res) => {

    try {
        
        const apo010casillas = await Apo010casilla.find();
        res.json(apo010casillas)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo010casilla = async (req, res) => {

    try {
        const {apo010casilla1, apo010casilla2, apo010casilla3, apo010casilla4, apo010casilla5, apo010casilla6, apo010casilla7, apo010casilla8,
        apo010casilla9, apo010casilla10, apo010casilla11, apo010casilla12, apo010casilla13, apo010casilla14, apo010casilla15, apo010casilla16,
        apo010casilla17, apo010casilla18, apo010casilla19, apo010casilla20, apo010casilla21, apo010casilla22, apo010casilla23, apo010casilla24,
        apo010casilla25, apo010casilla26, apo010casilla27} = req.body;
        let apo010casilla= await Apo010casilla.findById(req.params.id);

        if(!apo010casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo010casilla.apo010casilla1 = apo010casilla1;
        apo010casilla.apo010casilla2 = apo010casilla2;
        apo010casilla.apo010casilla3 = apo010casilla3;
        apo010casilla.apo010casilla4 = apo010casilla4;
        apo010casilla.apo010casilla5 = apo010casilla5;
        apo010casilla.apo010casilla6 = apo010casilla6;
        apo010casilla.apo010casilla7 = apo010casilla7;
        apo010casilla.apo010casilla8 = apo010casilla8;
        apo010casilla.apo010casilla9 = apo010casilla9;
        apo010casilla.apo010casilla10 = apo010casilla10;
        apo010casilla.apo010casilla11 = apo010casilla11;
        apo010casilla.apo010casilla12 = apo010casilla12;
        apo010casilla.apo010casilla13 = apo010casilla13;
        apo010casilla.apo010casilla14 = apo010casilla14;
        apo010casilla.apo010casilla15 = apo010casilla15;
        apo010casilla.apo010casilla16 = apo010casilla16;
        apo010casilla.apo010casilla17 = apo010casilla17;
        apo010casilla.apo010casilla18 = apo010casilla18;
        apo010casilla.apo010casilla19 = apo010casilla19;
        apo010casilla.apo010casilla20 = apo010casilla20;
        apo010casilla.apo010casilla21 = apo010casilla21;
        apo010casilla.apo010casilla22 = apo010casilla22;
        apo010casilla.apo010casilla23 = apo010casilla23;
        apo010casilla.apo010casilla24 = apo010casilla24;
        apo010casilla.apo010casilla25 = apo010casilla25;
        apo010casilla.apo010casilla26 = apo010casilla26;
        apo010casilla.apo010casilla27 = apo010casilla27;
        
        apo010casilla= await Apo010casilla.findOneAndUpdate({ _id: req.params.id},apo010casilla, {new: true});
        res.json(apo010casilla)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo010casilla = async (req, res) => {

    try {
        let apo010casilla = await Apo010casilla.findById(req.params.id);
        if(!apo010casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo010casilla)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo010casilla = async (req, res) => {

    try {
        let apo010casilla = await Apo010casilla.findById(req.params.id);

        if(!apo010casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo010casilla.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 