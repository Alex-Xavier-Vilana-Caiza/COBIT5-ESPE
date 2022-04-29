const Apo013casilla = require("../models/Apo013casilla");

exports.crearApo013casilla = async (req, res) => {
    
    try {
        let apo013casilla;
        
        apo013casilla= new Apo013casilla(req.body);

        await apo013casilla.save();
        res.send(apo013casilla);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo013casillas = async (req, res) => {

    try {
        
        const apo013casillas = await Apo013casilla.find();
        res.json(apo013casillas)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo013casilla = async (req, res) => {

    try {
        const {apo013casilla1, apo013casilla2, apo013casilla3, apo013casilla4, apo013casilla5, apo013casilla6, apo013casilla7, apo013casilla8,
        apo013casilla9, apo013casilla10, apo013casilla11, apo013casilla12, apo013casilla13, apo013casilla14, apo013casilla15, apo013casilla16,
        apo013casilla17, apo013casilla18, apo013casilla19, apo013casilla20, apo013casilla21, apo013casilla22, apo013casilla23, apo013casilla24,
        apo013casilla25, apo013casilla26, apo013casilla27} = req.body;
        let apo013casilla= await Apo013casilla.findById(req.params.id);

        if(!apo013casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo013casilla.apo013casilla1 = apo013casilla1;
        apo013casilla.apo013casilla2 = apo013casilla2;
        apo013casilla.apo013casilla3 = apo013casilla3;
        apo013casilla.apo013casilla4 = apo013casilla4;
        apo013casilla.apo013casilla5 = apo013casilla5;
        apo013casilla.apo013casilla6 = apo013casilla6;
        apo013casilla.apo013casilla7 = apo013casilla7;
        apo013casilla.apo013casilla8 = apo013casilla8;
        apo013casilla.apo013casilla9 = apo013casilla9;
        apo013casilla.apo013casilla10 = apo013casilla10;
        apo013casilla.apo013casilla11 = apo013casilla11;
        apo013casilla.apo013casilla12 = apo013casilla12;
        apo013casilla.apo013casilla13 = apo013casilla13;
        apo013casilla.apo013casilla14 = apo013casilla14;
        apo013casilla.apo013casilla15 = apo013casilla15;
        apo013casilla.apo013casilla16 = apo013casilla16;
        apo013casilla.apo013casilla17 = apo013casilla17;
        apo013casilla.apo013casilla18 = apo013casilla18;
        apo013casilla.apo013casilla19 = apo013casilla19;
        apo013casilla.apo013casilla20 = apo013casilla20;
        apo013casilla.apo013casilla21 = apo013casilla21;
        apo013casilla.apo013casilla22 = apo013casilla22;
        apo013casilla.apo013casilla23 = apo013casilla23;
        apo013casilla.apo013casilla24 = apo013casilla24;
        apo013casilla.apo013casilla25 = apo013casilla25;
        apo013casilla.apo013casilla26 = apo013casilla26;
        apo013casilla.apo013casilla27 = apo013casilla27;
        
        apo013casilla= await Apo013casilla.findOneAndUpdate({ _id: req.params.id},apo013casilla, {new: true});
        res.json(apo013casilla)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo013casilla = async (req, res) => {

    try {
        let apo013casilla = await Apo013casilla.findById(req.params.id);
        if(!apo013casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo013casilla)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo013casilla = async (req, res) => {

    try {
        let apo013casilla = await Apo013casilla.findById(req.params.id);

        if(!apo013casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo013casilla.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 