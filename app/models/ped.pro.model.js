const db = require("./db.js");

const PedidoProducto = function(pedidoProducto) {
    this.id = pedidoProducto.id;
    this.productos_id = pedidoProducto.productos_id;
    this.pedido_id = pedidoProducto.pedido_id;
    this.total_productos = pedidoProducto.total_productos;
};


PedidoProducto.getAll = (pedidoId, result) => {
    db.query("SELECT productos.nombre, productos.precio, orders_products.total_productos FROM orders_products JOIN productos WHERE pedido_id = :pedido_id  AND orders_products.producto_id = productos.id" , 
    {replacements : {pedido_id: pedidoId}, type: db.QueryTypes.SELECT })
    .then(res =>{      
        result(null, res);
        })
    .catch(err => console.error(err))
  };

  module.exports = PedidoProducto;