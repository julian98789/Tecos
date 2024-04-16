

CREATE TABLE pedido_producto (
  id_pedido INT NOT NULL,
  id_producto INT NOT NULL,
  cantidad_producto INT DEFAULT NULL,
  valor_unitario INT DEFAULT NULL,
  PRIMARY KEY (id_pedido, id_producto),
  KEY id_producto (id_producto),
  CONSTRAINT pedido_producto_ibfk_1 FOREIGN KEY (id_pedido) REFERENCES pedido (id),
  CONSTRAINT pedido_producto_ibfk_2 FOREIGN KEY (id_producto) REFERENCES producto (id)
);
