const Apo012casilla = require("../models/Apo012casilla");

exports.crearApo012casilla = async (req, res) => {
    
    try {
        let apo012casilla;
        
        apo012casilla= new Apo012casilla(req.body);

        await apo012casilla.save();
        res.send(apo012casilla);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerApo012casillas = async (req, res) => {

    try {
        
        const apo012casillas = await Apo012casilla.find();
        res.json(apo012casillas)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarApo012casilla = async (req, res) => {

    try {
        const {apo012casilla1, apo012casilla2, apo012casilla3, apo012casilla4, apo012casilla5, apo012casilla6, apo012casilla7, apo012casilla8,
        apo012casilla9, apo012casilla10, apo012casilla11, apo012casilla12, apo012casilla13, apo012casilla14, apo012casilla15, apo012casilla16,
        apo012casilla17, apo012casilla18, apo012casilla19, apo012casilla20, apo012casilla21, apo012casilla22, apo012casilla23, apo012casilla24,
        apo012casilla25, apo012casilla26, apo012casilla27} = req.body;
        let apo012casilla= await Apo012casilla.findById(req.params.id);

        if(!apo012casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        apo012casilla.apo012casilla1 = apo012casilla1;
        apo012casilla.apo012casilla2 = apo012casilla2;
        apo012casilla.apo012casilla3 = apo012casilla3;
        apo012casilla.apo012casilla4 = apo012casilla4;
        apo012casilla.apo012casilla5 = apo012casilla5;
        apo012casilla.apo012casilla6 = apo012casilla6;
        apo012casilla.apo012casilla7 = apo012casilla7;
        apo012casilla.apo012casilla8 = apo012casilla8;
        apo012casilla.apo012casilla9 = apo012casilla9;
        apo012casilla.apo012casilla10 = apo012casilla10;
        apo012casilla.apo012casilla11 = apo012casilla11;
        apo012casilla.apo012casilla12 = apo012casilla12;
        apo012casilla.apo012casilla13 = apo012casilla13;
        apo012casilla.apo012casilla14 = apo012casilla14;
        apo012casilla.apo012casilla15 = apo012casilla15;
        apo012casilla.apo012casilla16 = apo012casilla16;
        apo012casilla.apo012casilla17 = apo012casilla17;
        apo012casilla.apo012casilla18 = apo012casilla18;
        apo012casilla.apo012casilla19 = apo012casilla19;
        apo012casilla.apo012casilla20 = apo012casilla20;
        apo012casilla.apo012casilla21 = apo012casilla21;
        apo012casilla.apo012casilla22 = apo012casilla22;
        apo012casilla.apo012casilla23 = apo012casilla23;
        apo012casilla.apo012casilla24 = apo012casilla24;
        apo012casilla.apo012casilla25 = apo012casilla25;
        apo012casilla.apo012casilla26 = apo012casilla26;
        apo012casilla.apo012casilla27 = apo012casilla27;
        
        apo012casilla= await Apo012casilla.findOneAndUpdate({ _id: req.params.id},apo012casilla, {new: true});
        res.json(apo012casilla)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerApo012casilla = async (req, res) => {

    try {
        let apo012casilla = await Apo012casilla.findById(req.params.id);
        if(!apo012casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        res.json(apo012casilla)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarApo012casilla = async (req, res) => {

    try {
        let apo012casilla = await Apo012casilla.findById(req.params.id);

        if(!apo012casilla) {
            res.status(404).json({ msg: 'No existe '})

        }
        await Apo012casilla.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:' eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

} 