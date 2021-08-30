const Usuario = require("../models/usuario.model.js");
const jwt = require('jsonwebtoken');


const jwtClave = "pR0Y3(tO_d3lil4h";

exports.jwtClave;//{ jwtClave, jwt };


//Post

exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    const usuario = new Usuario({
        username: req.body.username,
        nombre_completo: req.body.nombre_completo,
        email: req.body.email,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        password: req.body.password
    });
  
    Usuario.create(usuario, (err, data) => {
      if (err)  
        res.status(500).send({
          message:
            err.message || "Ocuarrio un error al crear el usuario."
        });
      else res.send(usuario);
    });
  };

//login creacion token

exports.login = (req, res) =>{
  Usuario.findByUser(req.body.username, (err, data) => {
    if(req.body.username == data[0].user_name && req.body.password == data[0].password){
      let token = jwt.sign({usuario: data[0].user_name, admin: data[0].administrador, id: data[0].id}, jwtClave)
      res.status(200).send({token: token})
    }else{
      console.log(req.body.username);
      console.log(data[0].user_name);





      res.status(401).send({error: "usuario o clave incorrectos"})
    }
  })
};

//midleware verificacion Token

exports.verificarToken = (req, res, next) =>{

  let token = req.headers.authorization;

  if(token){
    token = token.split(" ")[1];
    let decodificado = jwt.verify(token, jwtClave);
    console.log(decodificado);
    if(!decodificado || decodificado.admin == 0){
      retornarUsuarioNoAutorizado(res);
    }else{
      next();
      return decodificado
    }
  }else{
    retornarUsuarioNoAutorizado(res);
  }
}

retornarUsuarioNoAutorizado = (respuesta) =>{
  respuesta.status(401).send({error: "usuario no autorizado"})
}


//GET BY ID

exports.userById = (req, res) => {
  Usuario.findById(req.params.usuarioId ,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocurrio u error buscando los usuarios."
      });
    else {
      console.log(data)
      res.send(data);}

  });
};

// MIDLEWARE GET OWN INFO

exports.verificarId = (req, res, next) =>{
  
  let userId = req.params.usuarioId;
  let token = req.headers.authorization;
  console.log(token);
  if(token){
    token = token.split(" ")[1];
    let decodificado = jwt.verify(token, jwtClave);
console.log(decodificado.id);
    if(!decodificado || decodificado.admin == 0){
      if(decodificado.id != userId){
        retornarUsuarioNoAutorizado(res);
      }else{
        next();
      }
    }else{
      next();
    }
  }else{
    retornarUsuarioNoAutorizado(res);
  }
}