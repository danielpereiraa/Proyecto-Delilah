# Backend "Delilah Restó", App de pedidos de comida

Trabajo #3 del curso de Desarrollo Web Full Stack de Acámica.

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



Project #3 from the Full Stack Web Development career in Acámica.

The goal of the project was to generate the backend for a food app called "Delilah Resto", generating the architecture, relational databases, functional endpoints and documentation for the project.

## Resources and technologies used:

* Node.js
* Nodemon
* Express
* JWT for Token Authentication
* MySQL
* Sequelize
* Postman for endpoint handling & testing
* Swagger for API documentation

## Instalation and Project Initialization:

### 1 - Clone Project
Clone the repository from the [link](https://github.com/danielpereiraa/Proyecto-Delilah/tree/master).

You can also clone it from your terminal:

git clone https://github.com/danielpereiraa/Proyecto-Delilah.git .

### 2 - Install the required dependencies
npm install

### 3 - Creating the database
* Open XAMPP and make sure the port being used is number 3306
* Start the Apache and MySQL services
* Open the Admin panel for the MySQL Service
* Create a new database called delilah from the panel
* Import the file located in delilah.sql from the control panel, remember to edit the file app/confign/db.config.js with your environment data

### 4 - Starting the server
node server

### 5 - It's ready to use!
You can now test the provided endpoints to make use of the API and database connection
