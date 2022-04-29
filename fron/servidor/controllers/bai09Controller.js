const Bai09 = require("../models/Bai09");


exports.crearBai09 = async (req, res) => {
    
    try {
        let bai09;
        //Creamos el producto
        bai09 = new Bai09(req.body);

        await bai09.save();
        res.send(bai09);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerBai09s = async (req, res) => {

    try {
        
        const bai09s = await Bai09.find();
        res.json(bai09s)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarBai09 = async (req, res) => {

    try {
        const { i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17,i18,i19,i20,i21,i22,i23,i24,i25,i26,i27 } = req.body;
        let bai09 = await Bai09.findById(req.params.id);

        if(!bai09) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        bai09.i1 = i1;
        bai09.i2 = i2;
        bai09.i3 = i3;
        bai09.i4 = i4;
        bai09.i5 = i5;
        bai09.i6 = i6;
        bai09.i7 = i7;
        bai09.i8 = i8;
        bai09.i9 = i9;
        bai09.i10 = i10;
        bai09.i11 = i11;
        bai09.i12 = i12;
        bai09.i13 = i13;
        bai09.i14 = i14;
        bai09.i15 = i15;
        bai09.i16 = i16;
        bai09.i17 = i17;
        bai09.i18 = i18;
        bai09.i19 = i19;
        bai09.i20 = i20;
        bai09.i21 = i21;
        bai09.i22 = i22;
        bai09.i23 = i23;
        bai09.i24 = i24;
        bai09.i25 = i25;
        bai09.i26 = i26;
        bai09.i27 = i27;

        bai09 = await Bai09.findOneAndUpdate({ _id: req.params.id},bai09, {new: true});
        res.json(bai09)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerBai09 = async (req, res) => {

    try {
        let bai09 = await Bai09.findById(req.params.id);
        if(!bai09) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(bai09)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarBai09 = async (req, res) => {

    try {
        let bai09 = await Bai09.findById(req.params.id);

        if(!bai09) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        await Bai09.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Tabla eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}