const Cabecera3 = require("../models/Cabecera3");


exports.crearCabecera3 = async (req, res) => {
    
    try {
        let cabecera3;
        //Creamos el producto
        cabecera3 = new Cabecera3(req.body);

        await cabecera3.save();
        res.send(cabecera3);

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.obtenerCabeceras3 = async (req, res) => {

    try {
        
        const cabeceras3 = await Cabecera3.find();
        res.json(cabeceras3)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
        
    }
}

exports.actualizarCabecera3 = async (req, res) => {

    try {
        const { zza, zzb, zzc,zzd,zze,zzf,zzg,
            zzh,
            zzi,
            zzj,
            zzk,
            zzl,
            zzm,
            zzn,
            zzo,
            zzp,
            zzq,
            zzr,
            zzs,
            zzt,
            zzu,
            zzv,
            zzw,
            zzx,
            zzy,
            zzz} = req.body;
        let cabecera3 = await Cabecera3.findById(req.params.id);

        if(!cabecera3) {
            res.status(404).json({ msg: 'No existe tal cosa o cabecera3'})

        }

        cabecera3.zza = zza;
        cabecera3.zzb = zzb;
        cabecera3.zzc = zzc;
        cabecera3.zzd = zzd;
        cabecera3.zze = zze;
        cabecera3.zzf = zzf;
        cabecera3.zzg = zzg;
        cabecera3.zzh = zzh;
        cabecera3.zzi = zzi;
        cabecera3.zzj = zzj;
        cabecera3.zzk = zzk;
        cabecera3.zzl = zzl;
        cabecera3.zzm = zzm;
        cabecera3.zzn = zzn;
        cabecera3.zzo = zzo;
        cabecera3.zzp = zzp;
        cabecera3.zzq = zzq;
        cabecera3.zzr = zzr;
        cabecera3.zzs = zzs;
        cabecera3.zzt = zzt;
        cabecera3.zzu = zzu;
        cabecera3.zzv = zzv;
        cabecera3.zzw = zzw;
        cabecera3.zzx = zzx;
        cabecera3.zzy = zzy;
        cabecera3.zzz = zzz;
        cabecera3 = await Cabecera3.findOneAndUpdate({ _id: req.params.id},cabecera3, {new: true});
        res.json(cabecera3)


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerCabecera3 = async (req, res) => {

    try {
        let cabecera3 = await Cabecera3.findById(req.params.id);
        if(!cabecera3) {
            res.status(404).json({ msg: 'No existe tal cosa o producto'})

        }
        res.json(cabecera3)

    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCabecera3 = async (req, res) => {

    try {
        let cabecera3 = await Cabecera3.findById(req.params.id);

        if(!cabecera3) {
            res.status(404).json({ msg: 'No existe tal cosa o cabecera'})

        }
        await Cabecera3.findOneAndRemove({ _id: req.params.id })
        res.json({ msg:'Cabecera eliminado exitosamente'})


    } catch (error) {
        console.log(error),
        res.status(500).send('Hubo un error');
    }
}