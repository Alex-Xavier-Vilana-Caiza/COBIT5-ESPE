const Tabla3 = require("../models/Tabla3");


exports.crearTabla3 = async (req, res) => {
    
    try {
        let tabla3;
        //Creamos el producto
        tabla3 = new Tabla3(req.body);

        await tabla3.save();
        res.send(tabla3);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerTablas33 = async (req, res) => {

    try {
        
        const tablas3 = await Tabla3.find();
        res.json(tablas3)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarTabla3 = async (req, res) => {

    try {
        const {BAI03,tbl01,tbl1,tbl2, tbl3,tbl4,tbl5,tbl7,tbl8,tbl9,tbl10,tbl11,tbl12,tbl13,tbl14,tbl15,tbl16,tbl17,tbl18,tbl19,tbl20,tbl21,tbl22,tbl23,tbl24,tbl25,tbl26,tbl27, } = req.body;
        let tabla3 = await Tabla3.findById(req.params.id);

        if(!tabla3) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        tabla3.BAI03 = BAI03;
        tabla3.tbl1 = tbl1;
        tabla3.tbl2 = tbl2;
        tabla3.tbl3 = tbl3;
        tabla3.tbl4 = tbl4;
        tabla3.tbl5 = tbl5;
        tabla3.tbl7 = tbl7;
        tabla3.tbl8 = tbl8;
        tabla3.tbl9 = tbl9;
        tabla3.tbl10 = tbl10;
        tabla3.tbl11 = tbl11;
        tabla3.tbl12 = tbl12;
        tabla3.tbl13 = tbl13;
        tabla3.tbl14 = tbl14;
        tabla3.tbl15 = tbl15;
        tabla3.tbl16 = tbl16;
        tabla3.tbl17 = tbl17;
        tabla3.tbl18 = tbl18;
        tabla3.tbl19 = tbl19;
        tabla3.tbl20 = tbl20;
        tabla3.tbl21 = tbl21;
        tabla3.tbl22 = tbl22;
        tabla3.tbl23 = tbl23;
        tabla3.tbl24 = tbl24;
        tabla3.tbl25 = tbl25;
        tabla3.tbl26 = tbl26;
        tabla3.tbl27 = tbl27;

        tabla3 = await Tabla3.findOneAndUpdate({ _id: req.params.id},tabla3, {new: true});
        res.json(tabla3)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerTabla3 = async (req, res) => {

    try {
        let tabla3 = await Tabla3.findById(req.params.id);
        if(!tabla3) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(tabla3)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarTabla3 = async (req, res) => {

    try {
        let tabla3 = await Tabla3.findById(req.params.id);

        if(!tabla3) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Tabla3.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Producto eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}