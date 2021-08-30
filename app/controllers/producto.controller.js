const Producto = require("../models/producto.model.js");

//Post

exports.create = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const producto = new Producto({
    nombre: req.body.nombre,
    precio: req.body.precio
  });

  Producto.create(producto, (err, data) => {
    if (err)  
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(producto);
  });
};

//Get

exports.findAll = (req, res) => {
    Producto.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else {
        console.log(data)
        res.send(data);}

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
  const producto = new Producto({
    nombre: req.body.nombre,
    precio: req.body.precio
  });

  Producto.updateById(
    req.params.productoId,
    producto,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Product with id ${req.params.productoId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Product with id " + req.params.productoId
          });
        }
      } else res.send(producto);
    }
  );
};

//Delete

exports.delete = (req, res) => {
  console.log("hola");

  Producto.remove(req.params.productoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.productoId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.productoId
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};
  