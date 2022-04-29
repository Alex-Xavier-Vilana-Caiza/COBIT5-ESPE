const Cabecera8 = require("../models/Cabecera8");


exports.crearCabecera8 = async (req, res) => {
    
    try {
        let cabecera8;
        //Creamos el producto
        cabecera8 = new Cabecera8(req.body);

        await cabecera8.save();
        res.send(cabecera8);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerCabeceras8 = async (req, res) => {

    try {
        
        const cabeceras8 = await Cabecera8.find();
        res.json(cabeceras8)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarCabecera8 = async (req, res) => {

    try {
        const { maa, mab, mac,mad,mae,maf,mag,
            mah,
            mai,
            maj,
            mak,
            mal,
            mam,
            man,
            mao,
            map,
            maq,
            mar,
            mas,
            mat,
            mau,
            mav,
            maw,
            max,
            may,
            maz} = req.body;
        let cabecera8 = await Cabecera8.findById(req.params.id);

        if(!cabecera8) {
            res.status(404).json({ msg: 'No existe tal cosa o cabecera8'})

        }

        cabecera8.maa = maa;
        cabecera8.mab = mab;
        cabecera8.mac = mac;
        cabecera8.mad = mad;
        cabecera8.mae = mae;
        cabecera8.maf = maf;
        cabecera8.mag = mag;
        cabecera8.mah = mah;
        cabecera8.mai = mai;
        cabecera8.maj = maj;
        cabecera8.mak = mak;
        cabecera8.mal = mal;
        cabecera8.mam = mam;
        cabecera8.man = man;
        cabecera8.mao = mao;
        cabecera8.map = map;
        cabecera8.maq = maq;
        cabecera8.mar = mar;
        cabecera8.mas = mas;
        cabecera8.mat = mat;
        cabecera8.mau = mau;
        cabecera8.mav = mav;
        cabecera8.maw = maw;
        cabecera8.max = max;
        cabecera8.may = may;
        cabecera8.maz = maz;
        cabecera8 = await Cabecera8.findOneAndUpdate({ _id: req.params.id},cabecera8, {new: true});
        res.json(cabecera8)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerCabecera8 = async (req, res) => {

    try {
        let cabecera8 = await Cabecera8.findById(req.params.id);
        if(!cabecera8) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(cabecera8)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCabecera8 = async (req, res) => {

    try {
        let cabecera8 = await Cabecera8.findById(req.params.id);

        if(!cabecera8) {
            res.status(404).json({ msg: 'No existe tal cosa o cabecera'})

        }
        await Cabecera8.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Cabecera eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}