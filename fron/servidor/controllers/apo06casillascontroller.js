const Apo06casilla = require("../models/Apo06casilla");

exports.crearApo06casilla = async (req, res) => {
    
    try {
        let apo06casilla;
        
        apo06casilla= new Apo06casilla(req.body);

        await apo06casilla.save();
        res.send(apo06casilla);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo06casillas = async (req, res) => {

    try {
        
        const apo06casillas = await Apo06casilla.find();
        res.json(apo06casillas)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo06casilla = async (req, res) => {

    try {
        const {apo06casilla1, apo06casilla2, apo06casilla3, apo06casilla4, apo06casilla5, apo06casilla6, apo06casilla7, apo06casilla8,
        apo06casilla9, apo06casilla10, apo06casilla11, apo06casilla12, apo06casilla13, apo06casilla14, apo06casilla15, apo06casilla16,
        apo06casilla17, apo06casilla18, apo06casilla19, apo06casilla20, apo06casilla21, apo06casilla22, apo06casilla23, apo06casilla24,
        apo06casilla25, apo06casilla26, apo06casilla27} = req.body;
        let apo06casilla= await Apo06casilla.findById(req.params.id);

        if(!apo06casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo06casilla.apo06casilla1 = apo06casilla1;
        apo06casilla.apo06casilla2 = apo06casilla2;
        apo06casilla.apo06casilla3 = apo06casilla3;
        apo06casilla.apo06casilla4 = apo06casilla4;
        apo06casilla.apo06casilla5 = apo06casilla5;
        apo06casilla.apo06casilla6 = apo06casilla6;
        apo06casilla.apo06casilla7 = apo06casilla7;
        apo06casilla.apo06casilla8 = apo06casilla8;
        apo06casilla.apo06casilla9 = apo06casilla9;
        apo06casilla.apo06casilla10 = apo06casilla10;
        apo06casilla.apo06casilla11 = apo06casilla11;
        apo06casilla.apo06casilla12 = apo06casilla12;
        apo06casilla.apo06casilla13 = apo06casilla13;
        apo06casilla.apo06casilla14 = apo06casilla14;
        apo06casilla.apo06casilla15 = apo06casilla15;
        apo06casilla.apo06casilla16 = apo06casilla16;
        apo06casilla.apo06casilla17 = apo06casilla17;
        apo06casilla.apo06casilla18 = apo06casilla18;
        apo06casilla.apo06casilla19 = apo06casilla19;
        apo06casilla.apo06casilla20 = apo06casilla20;
        apo06casilla.apo06casilla21 = apo06casilla21;
        apo06casilla.apo06casilla22 = apo06casilla22;
        apo06casilla.apo06casilla23 = apo06casilla23;
        apo06casilla.apo06casilla24 = apo06casilla24;
        apo06casilla.apo06casilla25 = apo06casilla25;
        apo06casilla.apo06casilla26 = apo06casilla26;
        apo06casilla.apo06casilla27 = apo06casilla27;
        
        apo06casilla= await Apo06casilla.findOneAndUpdate({ _id: req.params.id},apo06casilla, {new: true});
        res.json(apo06casilla)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo06casilla = async (req, res) => {

    try {
        let apo06casilla = await Apo06casilla.findById(req.params.id);
        if(!apo06casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo06casilla)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo06casilla = async (req, res) => {

    try {
        let apo06casilla = await Apo06casilla.findById(req.params.id);

        if(!apo06casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo06casilla.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 