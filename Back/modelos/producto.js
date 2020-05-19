const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    nombre: String,
    marca: String,
    precio: Number,
    unidades: Number
});

module.exports = mongoose.model('Producto', ProductoSchema);