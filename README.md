# Backend "Delilah Restó", App de pedidos de comida

El objetivo del trabajo es generar el backend de una app de pedidos de comida llamada Delilah Restó, generando la arquitectura, bases de datos relacionales, endpoints funcionales y documentación.

## Recursos y tecnologías utilizadas

* Node.js
* Nodemon
* Express
* JWT para autenticación via Token
* MySQL
* Sequelize
* Postman para manejo de endpoints y testing
* Swagger para documentación de API

## Como intalar y utilizar la API:

### 1 - Clonar proyecto
Clonar el repositorio desde el [siguiente link](https://github.com/danielpereiraa/Proyecto-Delilah/tree/master).

Desde la consola con el siguiente link:

git clone https://github.com/danielpereiraa/Proyecto-Delilah.git .

### 2 - Instalación de dependencias
npm install

### 3 - Creando base de datos
* Abrir XAMPP y asegurarse que el puerto sobre el cual se está ejecutando es el 3306
* Inicializar los servicios de Apache y MySQL
* Abrir el panel de control del servicio MySQL
* Generar una nueva base de datos llamada delilah desde el panel de control
* Importar el archivo delilah.sql desde el panel de administracion recuerde editar el archivo app/confign/db.config.js con los datos de su entorno

### 4 - Iniciar el servidor
node server

### 5 - Listo para usar!
Testear los endpoints provistos desde postman para poder hacer uso de la API y base de datos generadas

