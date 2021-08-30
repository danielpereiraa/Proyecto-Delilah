const Pedido = require("../models/pedido.model.js");
const PedidoProducto = require("../models/ped.pro.model.js");
const jwt = require('jsonwebtoken');
const jwtClave = "pR0Y3(tO_d3lil4h";

//import { jwtClave, jwt } from 'usuario.controller.js';

var newArray = [];
var ownArray = [];


// GET
exports.findAll = (req, res) => {
  let token = req.headers.authorization;

  token = token.split(" ")[1];
  let decodificado = jwt.verify(token, jwtClave);
  console.log(decodificado.admin)
  console.log(decodificado.admin == 1)


  if(decodificado.admin == 1){
    console.log("decodificado.iddd")

    Pedido.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else {    
        for (let i = 0; i < data.length; i++) {
          PedidoProducto.getAll(data[i].id_pedido, (err, productos) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred."
              });
            else {
              var pedido = {
                estado: data[i].estado,
                hora: data[i].hora,
                id_pedido: data[i].id_pedido,
                descripcion : productos,
                metodo_pago: data[i].metodo_pago,
                total: data[i].total,
                nombre_completo: data[i].nombre_completo,
                direccion: data[i].direccion
              }
              newArray.push(pedido)
            }
          });
        }
      }
      res.send(newArray);
      newArray = [];
    });
  }else{
    Pedido.getAllById(decodificado.id ,(err, data)=> {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else {    
        for (let i = 0; i < data.length; i++) {
          PedidoProducto.getAll(data[i].id_pedido, (err, productos) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred."
              });
            else {
              var pedido = {
                estado: data[i].estado,
                hora: data[i].hora,
                id_pedido: data[i].id_pedido,
                descripcion : productos,
                metodo_pago: data[i].metodo_pago,
                total: data[i].total,
                nombre_completo: data[i].nombre_completo,
                direccion: data[i].direccion
              }

              ownArray.push(pedido)
            }
          });
        }
      }
      res.send(ownArray);
      ownArray = [];
    });
  }
};


exports.findById = (req, res) => {
  Pedido.findById(req.params.pedidoId ,(err, data) => {
    if (err)
      res.status(500).send({
        message:
        err.message || "Ocurrio un error buscando los usuarios."
      });
    else {
      PedidoProducto.getAll(req.params.pedidoId, (err, productos) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else {
          console.log(productos)
          var pedido = {
            estado: data[0].estado,
            hora: data[0].hora,
            id: data[0].id,
            descripcion : productos,
            metodo_pago: data[0].metodo_pago,
            total: data[0].total,
            nombre_completo: data[0].nombre_completo,
            direccion: data[0].direccion
          }
          res.send(pedido);
          console.log(productos.nombre)
        }
      });

        console.log(data[0])
    }
  });
};

//POST

exports.createPedido = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log("prueba")

  const newpedido = new Pedido({
      id_productos: req.body.id_productos,
      id_usuarios: req.body.id_usuarios
  });
  console.log("prueba")

  Pedido.create(newpedido, (err, data) => {
    if (err)  
      res.status(500).send({
        message:
          err.message || "Ocuarrio un error al crear el usuario."
      });
    else res.send(newpedido);
  });
};
  
//Update

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const newpedido = new Pedido({
    id_productos: req.body.id_productos,
    estado: req.body.estado
});

  Pedido.updateById(
    req.params.pedidoId,
    newpedido,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Product with id ${req.params.pedidoId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Product with id " + req.params.pedidoId
          });
        }
      } else res.send(newpedido);
    }
  );
};

//Delete

exports.delete = (req, res) => {
console.log(req.params.pedidoId)
  Pedido.remove(req.params.pedidoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.pedidoId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.pedidoId
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};
  