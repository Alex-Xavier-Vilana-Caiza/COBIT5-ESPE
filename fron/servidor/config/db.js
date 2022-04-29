module.exports = {
    db: 'mongodb://localhost:27017/SG478'
 };

const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'});

const conectarDB = async () => {

    try {

        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true, 

            useUnifiedTopology: true 
        })
        console.log('Data-Base....Connect ');
        
    } catch (error) {
        console.log(error);
        process.exit(1); //Detenemos la app
    }
}

module.exports = conectarDB 