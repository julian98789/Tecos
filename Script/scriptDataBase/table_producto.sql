

CREATE TABLE producto (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) DEFAULT NULL,
  descripcion TEXT,
  categoria VARCHAR(100) DEFAULT NULL,
  imagen TEXT,
  precio INT DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO restaurante.producto
( nombre, descripcion, categoria, imagen, precio)
VALUES('Tlayudas', 'La tlayuda, también conocida como clayuda ', 'platos fuertes', '/img/menu/1712696800930_Tlayudas.jpeg', 25000);

