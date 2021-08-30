const db = require("./db.js");

const Pedido = function(pedido) {
    this.id = pedido.id;
    this.id_usuarios = pedido.id_usuarios;
    this.estado = pedido.estado;
    this.hora = pedido.hora;
    this.metodo_pago = pedido.metodo_pago;
    this.descripcion = pedido.descripcion,
    this.total = pedido.total;

};

Pedido.getAll = (result) => {
    db.query("SELECT * FROM pedidos pe JOIN usuarios u ON pe.id_usuarios = u.id ORDER BY hora DESC;" , { type: db.QueryTypes.SELECT })
    .then(res =>{      
        result(null, res);
        })
    .catch(err => console.error(err))
  };

Pedido.getAllById = (usuarioId, result) => {
db.query("SELECT * FROM pedidos JOIN usuarios ON pedidos.id_usuarios = usuarios.id WHERE usuarios.id = :usuario_id ORDER BY hora DESC;" , 
        {replacements : {usuario_id: usuarioId}, type: db.QueryTypes.SELECT })
.then(res =>{      
    result(null, res);
    })
.catch(err => console.error(err))
};

Pedido.findById = (pedidoId, result) => {
    db.query("SELECT * FROM pedidos pe JOIN usuarios u ON pe.id_usuarios = u.id WHERE pe.id_pedido = :pedido_id;",
        {replacements : {pedido_id: pedidoId}, type: db.QueryTypes.SELECT})
    .then(res => {
        result(null, res)
        })
    .catch(err => {console.log(err)})
};

Pedido.create = (nuevoPedido, result) => {
    console.log("holaa");

    db.query('INSERT INTO pedidos VALUES (NULL, :id_productos, :id_usuarios, NULL, NULL)', 
            {replacements : nuevoPedido})
        .then(res => {
        result(null, res)
        console.log("Pedido creado: ", { 
            id_productos: nuevoPedido.id_productos,
            id_usuarios: nuevoPedido.id_usuarios
        })})
        .catch(err =>
        {console.error(err)})
}

//UPDATE

Pedido.updateById = (pedidoId, pedidoNuevo, result) => {
    db.query('UPDATE pedidos SET id_productos = :id_productos, estado = :estado WHERE id_pedidos = :id', 
    {replacements:{id_productos: pedidoNuevo.id_productos, estado: pedidoNuevo.estado, id: pedidoId}})
    .then(res => {
        result(null, res)
        console.log("Pedido actualizado ", { 
            id: productoId,
            id_productos: pedidoNuevo.id_productos,
            estado: pedidoNuevo.estado
        })
    })
    .catch(err =>
        {console.error(err)})
}

//DELETE
Pedido.remove = (pedidoId, result) => {
    db.query("DELETE FROM pedidos WHERE id_pedido = :id",
            {replacements : {id: pedidoId }}
    ).then(res => {
        result(null, res)
        console.log(res)}
    ).catch(err =>
        console.error(err))
}

module.exports = Pedido;