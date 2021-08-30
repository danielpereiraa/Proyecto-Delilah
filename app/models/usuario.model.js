const db = require("./db.js");

const Usuario = function(usuario) {
    this.id = usuario.id
    this.username = usuario.username;
    this.nombre_completo = usuario.nombre_completo;
    this.email = usuario.email;
    this.telefono = usuario.telefono;
    this.direccion = usuario.direccion;
    this.password = usuario.password
};


Usuario.create = (nuevoUsuario, result) => {
    db.query('INSERT INTO usuarios VALUES (NULL, :username, :nombre_completo, :email, :telefono, :direccion, :password)', 
            {replacements : nuevoUsuario})
        .then(res => {
        result(null, res)
        console.log("Usuario creado: ", { 
            username: nuevoUsuario.username,
            nombre_completo: nuevoUsuario.nombre_completo,
            email: nuevoUsuario.email,
            telefono: nuevoUsuario.telefono,
            direccion: nuevoUsuario.direccion,
            password: nuevoUsuario.password,
            admin: nuevoUsuario.admin
        })})
        .catch(err =>
        {console.error(err)})
}

Usuario.findByUser = (user_sin_login, result) => {
    db.query('SELECT * FROM usuarios WHERE user_name LIKE :user',
            {replacements : {user: user_sin_login}, type: db.QueryTypes.SELECT})
        .then(res => {
            result(null, res)
            console.log(res)
            })
        .catch(err => {console.log(err)})
};

Usuario.findById = (userId, result) => {
    db.query('SELECT * FROM usuarios WHERE id = :id',
            {replacements : {id: userId}, type: db.QueryTypes.SELECT})
        .then(res => {
            result(null, res)
            })
        .catch(err => {console.log(err)})
};

module.exports = Usuario;
