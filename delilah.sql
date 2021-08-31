/*DROP TABLE productos;
DROP TABLE pedidos;
DROP TABLE usuarios;*/

CREATE TABLE `delilah`.`productos` ( 
    `id` INT(10) NOT NULL AUTO_INCREMENT , 
    `nombre` VARCHAR(50) NOT NULL , 
    `precio` INT(30) NOT NULL ,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `delilah`.`usuarios` (
    `id` INT(10) NOT NULL AUTO_INCREMENT , 
    `user_name` VARCHAR(30) NOT NULL ,
    `nombre_completo` VARCHAR(30) NOT NULL , 
    `email` VARCHAR(30) NOT NULL , 
    `telefono` INT(15) NOT NULL , 
    `direccion` VARCHAR(40) NOT NULL , 
    `contraseña` VARCHAR(30) NOT NULL , 
    `administrador` BOOLEAN NOT NULL , 
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `delilah`.`pedidos` ( 
    `id_pedido` INT(10) NOT NULL AUTO_INCREMENT , 
    `id_usuarios` INT(30) NOT NULL , 
    `estado` VARCHAR(30) NULL , 
    `hora` TIME NULL, 
    `descripcion` VARCHAR(50),
    `metodo_pago` VARCHAR(30),
    `total` FLOAT,
    PRIMARY KEY (`id_pedido`)
) ENGINE = InnoDB;

CREATE TABLE `delilah`.`orders_products` ( 
    `pedido_prod_id` INT(10) NOT NULL AUTO_INCREMENT , 
    `pedido_id` INT(30) NOT NULL ,
    `producto_id` INT(30) NOT NULL , 
    `total_productos`  INT(30) NULL , 
    PRIMARY KEY (`pedido_prod_id`)) ENGINE = InnoDB;

INSERT INTO `pedidos` (`id_pedido`, `id_usuarios`, `estado`, `hora`, `descripcion`, `metodo_pago`, `total`) VALUES
    (NULL, 1, 'Nuevo', '17:47:41', 'Ok', 'Efectivo', '25'),
    (NULL, 2, 'Preparando', '18:01:38', 'Ok', 'Efectivo', '5'),
    (NULL, 3, 'Enviado', '17:07:17', 'Ok', 'Tarjeta', '7'),
    (NULL, 3, 'Entregado', '23:45:57', 'Ok', 'Tarjeta', '2');

INSERT INTO `productos` (`id`, `nombre`, `precio`) VALUES
    (NULL, 'Pizza', 15),
    (NULL, 'Hamburguesa', 10),
    (NULL, 'Taco', 5),
    (NULL, 'Agua', 2);

INSERT INTO `usuarios` (`id`, `user_name`, `nombre_completo`, `email`, `telefono`, `direccion`, `contraseña`, `administrador`) VALUES 
    (NULL, 'PedroP', 'Pedro Perez', 'Pedro@gmail.com', '88888888', 'Calle grande 1', '1234', TRUE),
    (NULL, 'JoseS', 'Jose Silva', 'Jose@gmail.com', '77777777', 'Calle grande 2', '2345', FALSE), 
    (NULL, 'JuanM', 'Juan Mora', 'Juan@gmail.com', '66666666', 'calle grande 3', '3456', FALSE);

INSERT INTO `orders_products` (`pedido_prod_id`, `pedido_id`, `producto_id`, `total_productos`) VALUES
    (NULL, 1, 1, 2),
    (NULL, 1, 2, 1),
    (NULL, 2, 3, 2),
    (NULL, 3, 3, 3),
    (NULL, 3, 4, 3),
    (NULL, 4, 4, 1);



