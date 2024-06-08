

CREATE TABLE usuarios (
  nombre VARCHAR(22) DEFAULT NULL,
  apellido VARCHAR(22) DEFAULT NULL,
  cedula INT NOT NULL,
  correo VARCHAR(40) NOT NULL,
  contrasena VARCHAR(44) DEFAULT NULL,
  rol ENUM('admin','cajero') DEFAULT NULL,
  PRIMARY KEY (cedula),
  UNIQUE KEY correo (correo)
);


INSERT INTO usuarios (nombre, apellido, cedula, correo, contrasena, rol)
VALUES ('Julian', 'Gomez', 123456789, 'juan@example.com', 'Contr@seña123', 'admin');

