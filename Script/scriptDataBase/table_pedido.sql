

CREATE TABLE pedido (
  id INT NOT NULL AUTO_INCREMENT,
  valor_pagado INT DEFAULT NULL,
  valor_total INT DEFAULT NULL,
  fecha DATE DEFAULT NULL,
  hora TIME DEFAULT NULL,
  estado VARCHAR(20) DEFAULT NULL,
  mesa_id INT DEFAULT NULL,
  PRIMARY KEY (id),
  KEY mesa_id (mesa_id),
  CONSTRAINT pedido_ibfk_1 FOREIGN KEY (mesa_id) REFERENCES mesa (id),
) ;

