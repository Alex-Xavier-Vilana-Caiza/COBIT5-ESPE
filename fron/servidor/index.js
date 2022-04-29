const express = require('express');
const conectarDB = require('./config/db')
const cors = require("cors")

//creamos el servicio 

const app = express();
//Conectamos a la DB
conectarDB();
app.use(cors());


app.use(express.json());
//EDM
app.use('/api/seconds', require('./routes/second'));
app.use('/api/heads',require('./routes/headd'))
app.use('/api/edm01titulo', require('./routes/edm01titulo'));
app.use('/api/edm01casilla', require('./routes/edm01casilla'));
app.use('/api/edm05titulo', require('./routes/edm05titulo'));
app.use('/api/edm05casilla', require('./routes/edm05casilla'));
app.use('/api/apo06titulo', require('./routes/apo06titulo'));
app.use('/api/apo06casilla', require('./routes/apo06casilla'));
app.use('/api/heads3',require('./routes/head33'));
app.use('/api/threes',require('./routes/threes'));
app.use('/api/heads4',require('./routes/head44'));
app.use('/api/fours',require('./routes/fours'));
//APO
////APO6
app.use('/api/apo06titulo', require('./routes/apo06titulo'));
app.use('/api/apo06casilla', require('./routes/apo06casilla'));
////APO3
app.use('/api/apo03titulo', require('./routes/apo03titulo'));
app.use('/api/apo03casilla', require('./routes/apo03casilla'));
////APO4
app.use('/api/apo04titulo', require('./routes/apo04titulo'));
app.use('/api/apo04casilla', require('./routes/apo04casilla'));
///APO5
app.use('/api/apo05titulo', require('./routes/apo05titulo'));
app.use('/api/apo05casilla', require('./routes/apo05casilla'));
//APO7
app.use('/api/apo07titulo', require('./routes/apo07titulo'));
app.use('/api/apo07casilla', require('./routes/apo07casilla'));
/////APO8
app.use('/api/apo08titulo', require('./routes/apo08titulo'));
app.use('/api/apo08casilla', require('./routes/apo08casilla'));
//APO9
app.use('/api/apo09titulo', require('./routes/apo09titulo'));
app.use('/api/apo09casilla', require('./routes/apo09casilla'));
//APO10
app.use('/api/apo010titulo', require('./routes/apo010titulo'));
app.use('/api/apo010casilla', require('./routes/apo010casilla'));
//APO11
app.use('/api/apo011titulo', require('./routes/apo011titulo'));
app.use('/api/apo011casilla', require('./routes/apo011casilla'));
//APO12
app.use('/api/apo012titulo', require('./routes/apo012titulo'));
app.use('/api/apo012casilla', require('./routes/apo012casilla'));
//APO13
app.use('/api/apo013titulo', require('./routes/apo013titulo'));
app.use('/api/apo013casilla', require('./routes/apo013casilla'));
/////---mea
app.use('/api/tablados', require('./routes/tablados'));
app.use('/api/cabecerados', require('./routes/cabecerados'));
app.use('/api/tablazz', require('./routes/tablaz'));
app.use('/api/cabeceraz', require('./routes/cabeceraz'));
app.use('/api/cabecerax', require('./routes/cabecerax'));
app.use('/api/tablax', require('./routes/tablax'));
//BAI
app.use('/api/tabla3', require('./routes/tabla3'));
app.use('/api/tablauno', require('./routes/tablauno'));
app.use('/api/tablatres', require('./routes/tablatres'));
app.use('/api/tablaocho', require('./routes/tablaocho'));
app.use('/api/tablasiete', require('./routes/tablasiete'));
app.use('/api/tablaseis', require('./routes/tablaseis'));
app.use('/api/racicuatros', require('./routes/racicuatro'));
app.use('/api/bai05', require('./routes/bai05'));
app.use('/api/bai09', require('./routes/bai09'));
app.use('/api/bai10', require('./routes/bai10'));
app.use('/api/cabeceras1', require('./routes/cabecera1'));
app.use('/api/cabeceras3', require('./routes/cabecera3'));
app.use('/api/cabeceras8', require('./routes/cabecera8'));
app.use('/api/cabeceras6', require('./routes/cabecera6'));
app.use('/api/cabeceras7', require('./routes/cabecera7'));
app.use('/api/cabecerasb03', require('./routes/cabecerab03'));
app.use('/api/cabecerasb04', require('./routes/cabecerab04'));
app.use('/api/cabecerasb05', require('./routes/cabecerab05'));
app.use('/api/cabecerasb09', require('./routes/cabecerab09'));
app.use('/api/cabecerasb10', require('./routes/cabecerab10'));

//raci dss

app.use('/api/raci01s', require('./routes/raci01'));
app.use('/api/racicabe01s', require('./routes/racicabe01'));
app.use('/api/raci02s', require('./routes/raci02'));
app.use('/api/racicabe02s', require('./routes/racicabe02'));
app.use('/api/raci03s', require('./routes/raci03'));
app.use('/api/racicabe03s', require('./routes/racicabe03'));
app.use('/api/raci04s', require('./routes/raci04'));
app.use('/api/racicabe04s', require('./routes/racicabe04'));
app.use('/api/raci05s', require('./routes/raci05'));
app.use('/api/racicabe05s', require('./routes/racicabe05'));
app.use('/api/raci06s', require('./routes/raci06'));
app.use('/api/racicabe06s', require('./routes/racicabe06'));

app.listen(4000, () => {
    console.log('Connected....Server')
}) 