const Producto = require('../modelos/producto'); 

function crearProducto(req, res){
    var producto = new Producto();  
    var parametros = req.body;
    producto.nombre = parametros.nombre;
    producto.marca = parametros.marca;
    producto.precio = parametros.precio;
    producto.unidades = parametros.unidades;

    producto.save((err, productoNuevo)=>{
        if(err){
            res.status(500).send({ message: "Error en el sevidor"});
        } else{
            if(!productoNuevo){
                res.status(200).send({ message: "No fue posible realizar el registro", statusCode:400 });
            } else{
                res.status(200).send({
                    status: 'Producto creado',
                    producto: productoNuevo,
                    statusCode:200
                });
            }
        }
    });
}

function obtenerProducto(req, res){
    Producto.find((err, productosEncontrados)=>{
        if(err){
            res.status(500).send({ message: "Error en el servidor" });
        }else{
            if(!productosEncontrados){
                res.status(200).send({ message: "No fue posible actualizar los datos" , statusCode:400 });
            } else{
                res.status(200).send({
                    status: 'Productos Encontrados',
                    producto: productosEncontrados,
                    statusCode:200 
                });
            }
        }
    });
}

function actualizarProducto(req, res){
    var productoId = req.params.id;
    var nuevosDatosProducto = req.body;

    Producto.findByIdAndUpdate(productoId, nuevosDatosProducto, (err, productoActualizado)=>{
        if(err){
            res.status(500).send({ message: "Error en el servidor" });
        }else{
            if(!productoActualizado){
                res.status(200).send({ message: "No fue posible actualizar los datos", statusCode:400  });
            } else{
                res.status(200).send({
                    status: 'Producto Actualizado',
                    producto: nuevosDatosProducto,
                    statusCode:200 
                });
            }
        }
    });
}

function eliminarProducto(req, res){
    var productoId = req.params.id;
    Producto.findByIdAndDelete(productoId, (err, productoEliminado) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar' });
        } else {
            if (!productoEliminado) {
                res.status(404).send({ message: 'No se pudo eliminar la cancion', statusCode:400  });
            } else {
                res.status(200).send({ 
                    status: 'Producto Eliminada',
                    producto: productoEliminado,
                    statusCode:200 
                });
            }
        }

    });
}

module.exports = {
    crearProducto,
    obtenerProducto,
    actualizarProducto,
    eliminarProducto
    
};