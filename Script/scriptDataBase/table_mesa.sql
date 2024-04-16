

CREATE TABLE mesa (
  id INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(100) DEFAULT NULL,
  estado ENUM('disponible','ocupada') NOT NULL DEFAULT 'disponible',
  PRIMARY KEY (id)
);

