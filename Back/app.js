const express = require('express');
const app = express();


const ProductoRuta = require('./rutas/productoRutas');
/* OTORGAMOS TODO LOS PERMISOS PARA RECIBIR CUALQUIER TIPO DE INFORMACION */
app.use((req,res,next)=>{
 res.header('Access-Control-Allow-Origin', '*')
 /* Voy a tener acceso, control, seguimiento y origen de todos los datos que van a ingresar a la API */

 res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Request-Method');
 /* Acceso a todos los metadatos- cookies */

 res.header('Access-Control-Allow-Request-Method', 'GET,POST,PUT,DELETE,OPTIONS');
 /* Acceso a todos los metodos http- metodos de peticio */

 res.header('Allow', 'GET,POST,PUT,DELETE,OPTIONS');
/* Confirmacion estricta de los metodos a utilizar */

next();
})

app.use(express.json());
app.use('/api', ProductoRuta);

module.exports = app;