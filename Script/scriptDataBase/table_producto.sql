

CREATE TABLE producto (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) DEFAULT NULL,
  descripcion TEXT,
  categoria VARCHAR(100) DEFAULT NULL,
  imagen TEXT,
  precio INT DEFAULT NULL,
  estado ENUM('activo', 'agotado') DEFAULT 'activo',
  PRIMARY KEY (id)
);

-- Insertar un nuevo producto
INSERT INTO producto
(nombre, descripcion, categoria, imagen, precio, estado)
VALUES('Tlayudas', 'La tlayuda, también conocida como clayuda ', 'platos fuertes', '/img/menu/1712696800930_Tlayudas.jpeg', 25000, 'activo');
