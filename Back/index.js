const mongoose = require('mongoose');
const app = require('./app');
mongoose.connect('mongodb://localhost:27017/MercadoBIT', { useNewUrlParser: true, useUnifiedTopology: true}, (error, res) => {
 if (error){
   console.log("Error al conectarnos con la DB.")
 }else{
   console.log("Nos conectamos correctamente.")
   app.listen(3000, () => {
    console.log("Estamos conectados en el puerto 3000");
})
 }
})
