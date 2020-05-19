const express = require('express');
const api = express.Router();

const productoControl = require('../control/productoControl');

/* api.get('/saludo', (req, res) => {
    console.log(" Mi primera ruta. ");
   })
 */
  api.post('/crear', productoControl.crearProducto);
  api.get('/mostrar', productoControl.obtenerProducto);
  api.put('/actualizar/:id', productoControl.actualizarProducto);

  api.delete('/eliminar/:id', productoControl.eliminarProducto);
  
   
   module.exports = api;


   