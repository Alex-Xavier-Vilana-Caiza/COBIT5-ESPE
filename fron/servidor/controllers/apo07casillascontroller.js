const Apo07casilla = require("../models/Apo07casilla");

exports.crearApo07casilla = async (req, res) => {
    
    try {
        let apo07casilla;
        
        apo07casilla= new Apo07casilla(req.body);

        await apo07casilla.save();
        res.send(apo07casilla);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo07casillas = async (req, res) => {

    try {
        
        const apo07casillas = await Apo07casilla.find();
        res.json(apo07casillas)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo07casilla = async (req, res) => {

    try {
        const {apo07casilla1, apo07casilla2, apo07casilla3, apo07casilla4, apo07casilla5, apo07casilla6, apo07casilla7, apo07casilla8,
        apo07casilla9, apo07casilla10, apo07casilla11, apo07casilla12, apo07casilla13, apo07casilla14, apo07casilla15, apo07casilla16,
        apo07casilla17, apo07casilla18, apo07casilla19, apo07casilla20, apo07casilla21, apo07casilla22, apo07casilla23, apo07casilla24,
        apo07casilla25, apo07casilla26, apo07casilla27} = req.body;
        let apo07casilla= await Apo07casilla.findById(req.params.id);

        if(!apo07casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo07casilla.apo07casilla1 = apo07casilla1;
        apo07casilla.apo07casilla2 = apo07casilla2;
        apo07casilla.apo07casilla3 = apo07casilla3;
        apo07casilla.apo07casilla4 = apo07casilla4;
        apo07casilla.apo07casilla5 = apo07casilla5;
        apo07casilla.apo07casilla6 = apo07casilla6;
        apo07casilla.apo07casilla7 = apo07casilla7;
        apo07casilla.apo07casilla8 = apo07casilla8;
        apo07casilla.apo07casilla9 = apo07casilla9;
        apo07casilla.apo07casilla10 = apo07casilla10;
        apo07casilla.apo07casilla11 = apo07casilla11;
        apo07casilla.apo07casilla12 = apo07casilla12;
        apo07casilla.apo07casilla13 = apo07casilla13;
        apo07casilla.apo07casilla14 = apo07casilla14;
        apo07casilla.apo07casilla15 = apo07casilla15;
        apo07casilla.apo07casilla16 = apo07casilla16;
        apo07casilla.apo07casilla17 = apo07casilla17;
        apo07casilla.apo07casilla18 = apo07casilla18;
        apo07casilla.apo07casilla19 = apo07casilla19;
        apo07casilla.apo07casilla20 = apo07casilla20;
        apo07casilla.apo07casilla21 = apo07casilla21;
        apo07casilla.apo07casilla22 = apo07casilla22;
        apo07casilla.apo07casilla23 = apo07casilla23;
        apo07casilla.apo07casilla24 = apo07casilla24;
        apo07casilla.apo07casilla25 = apo07casilla25;
        apo07casilla.apo07casilla26 = apo07casilla26;
        apo07casilla.apo07casilla27 = apo07casilla27;
        
        apo07casilla= await Apo07casilla.findOneAndUpdate({ _id: req.params.id},apo07casilla, {new: true});
        res.json(apo07casilla)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo07casilla = async (req, res) => {

    try {
        let apo07casilla = await Apo07casilla.findById(req.params.id);
        if(!apo07casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo07casilla)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo07casilla = async (req, res) => {

    try {
        let apo07casilla = await Apo07casilla.findById(req.params.id);

        if(!apo07casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo07casilla.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 