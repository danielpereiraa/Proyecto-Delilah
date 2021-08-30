const db = require("./db.js");

const Producto = function(producto) {
    this.id = producto.id
    this.nombre = producto.nombre;
    this.precio = producto.precio;
};

Producto.create = (productoNuevo, result) => {
    db.query('INSERT INTO productos VALUES (NULL, :nombre, :precio)', 
            {replacements : productoNuevo})
        .then(res => {
        result(null, res)
        console.log("Produto creado: ", { 
            nombre: productoNuevo.nombre,
            precio: productoNuevo.precio
        })})
        .catch(err =>
        {console.error(err)})
}
    

Producto.getAll = (result) => {
    db.query("SELECT * FROM productos" , { type: db.QueryTypes.SELECT })
    .then(res =>{      
        result(null, res);
        })
    .catch(err => console.error(err))
  };


Producto.updateById = (productoId, productoNuevo, result) => {
    db.query('UPDATE productos SET nombre = :nombre, precio = :precio WHERE id = :id', 
    {replacements:{nombre: productoNuevo.nombre, precio: productoNuevo.precio, id: productoId}})
    .then(res => {
        result(null, res)
        console.log("Producto actualizado ", { 
            id: productoId,
            nombre: productoNuevo.nombre,
            precio: productoNuevo.precio
        })
    })
    .catch(err =>
        {console.error(err)})
}


Producto.remove = (productoId, result) => {
    db.query("DELETE FROM productos WHERE id = :id",
            {replacements : {id: productoId }}
    ).then(res => {
        result(null, res)
        console.log(res)}
    ).catch(err =>
        console.error(err))
}

  module.exports = Producto;