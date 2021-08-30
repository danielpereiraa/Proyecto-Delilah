module.exports = app => {
  const productos = require("../controllers/producto.controller.js");
  const usuarios = require("../controllers/usuario.controller.js");
  const pedidos = require("../controllers/pedido.controller.js");

//CRUD Productos
  app.post("/v1/productos", usuarios.verificarToken, productos.create);
  app.get("/v1/productos",  productos.findAll);
  app.put("/v1/productos/:productoId", usuarios.verificarToken, productos.update);
  app.delete("/v1/productos/:productoId", usuarios.verificarToken, productos.delete);

//CRUD Usuarios
  app.post("/v1/usuarios", usuarios.create);
  app.post("/v1/login", usuarios.login)
  app.get("/v1/usuarios/:usuarioId", usuarios.verificarId, usuarios.userById);

//CRUD Pedidos
  app.get("/v1/pedidos", pedidos.findAll)
  app.get("/v1/pedidos/:pedidoId", usuarios.verificarId, pedidos.findById)
  app.post("/v1/pedidos", pedidos.createPedido);
  app.put("/v1/pedidos/:pedidoId", usuarios.verificarToken, pedidos.update);
  app.delete("/v1/pedidos/:pedidoId", usuarios.verificarToken, pedidos.delete);


//midleaware global
  app.use((err, req, res, next) => {
    if(err){
      res.status(500).send(err);
    }else{
      next();
    }
  })

};  