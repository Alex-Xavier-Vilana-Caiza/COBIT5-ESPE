const Cabecerados = require("../models/Cabecerados");

exports.crearCabecerados = async (req, res ) => {
    
    try {
        let cabecerados;
    
        cabecerados = new Cabecerados(req.body);

        await cabecerados.save();
        res.send(cabecerados);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerCabecerasdo = async (req, res) => {

    try {
        
        const cabecerasdos = await Cabecerados.find();
        res.json(cabecerasdos)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarCabecerados = async (req, res) => {

    try {
        const { dosa,dosb,dosc,dosd,dose,dosf,dosg,dosh,dosi,dosj,dosk,dosl,dosm,dosn,doso,dosp,dosq,dosr,doss,dost,dosu,dosv,dosw,dosx,dosy,dosz} = req.body;
        let cabecerados = await Cabecerados.findById(req.params.id);

        if(!cabecerados) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }

        cabecerados.dosa = dosa;
        cabecerados.dosb = dosb;
        cabecerados.dosc = dosc;
        cabecerados.dosd = dosd;
        cabecerados.dose = dose;
        cabecerados.dosf = dosf;
        cabecerados.dosg = dosg;
        cabecerados.dosh = dosh;
        cabecerados.dosi = dosi;
        cabecerados.dosj = dosj;
        cabecerados.dosk = dosk;
        cabecerados.dosl = dosl;
        cabecerados.dosm = dosm;
        cabecerados.dosn = dosn;
        cabecerados.doso = doso;
        cabecerados.dosp = dosp;
        cabecerados.dosq = dosq;
        cabecerados.dosr = dosr;
        cabecerados.doss = doss;
        cabecerados.dost = dost;
        cabecerados.dosu = dosu;
        cabecerados.dosv = dosv;
        cabecerados.dosw = dosw;
        cabecerados.dosx = dosx;
        cabecerados.dosy = dosy;
        cabecerados.dosz = dosz;
       
    
      
        cabecerados = await Cabecerados.findOneAndUpdate({ _id: req.params.id},cabecerados, {new: true});
        res.json(cabecerados)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}
exports.obtenerCabecerados = async (req, res) => {

    try {
        let cabecerados = await Cabecerados.findById(req.params.id);
        if(!cabecerados) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(cabecerados)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}
exports.eliminarCabecerados = async (req, res) => {

    try {
        let cabecerados = await Cabecerados.findById(req.params.id);

        if(!cabecerados) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Cabecerados.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}