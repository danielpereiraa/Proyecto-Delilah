const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const rutas = require("./app/routes/productos.routes.js");
rutas(app);


app.listen(3000, () => {console.log("servidor en ejecucion")});

