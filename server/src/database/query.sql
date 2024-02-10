create
database if not exists estado_cuenta;

use
estado_cuenta;

-- Tabla para almacenar la información de los clientes
CREATE TABLE customer
(
    id      INT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(100) NOT NULL,
    email   VARCHAR(100) NOT NULL,
    phone   VARCHAR(20),
    address VARCHAR(255)
);


-- Tabla para almacenar la información de los productos disponibles
CREATE TABLE product
(
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100)   NOT NULL,
    price       DECIMAL(10, 2) NOT NULL,
    description TEXT
);

-- Tabla para los pedidos realizados por los clientes
CREATE TABLE `order`
(
    id           INT AUTO_INCREMENT PRIMARY KEY,
    customer_id  INT,
    order_date   DATE           NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status       ENUM('pending', 'completed', 'cancelled') NOT NULL,
    CONSTRAINT fk_order_customer FOREIGN KEY (customer_id) REFERENCES customer (id)
);

-- Tabla para los detalles de los pedidos, es decir, los productos incluidos en cada pedido
CREATE TABLE order_detail
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    order_id   INT,
    product_id INT,
    quantity   INT            NOT NULL,
    price      DECIMAL(10, 2) NOT NULL,
    subtotal   DECIMAL(10, 2) NOT NULL,
    CONSTRAINT fk_order_detail_order FOREIGN KEY (order_id) REFERENCES `order` (id),
    CONSTRAINT fk_order_detail_product FOREIGN KEY (product_id) REFERENCES product (id)
);

-- Tabla para los pagos realizados por los clientes
CREATE TABLE payment
(
    id           INT AUTO_INCREMENT PRIMARY KEY,
    order_id     INT,
    amount       DECIMAL(10, 2) NOT NULL,
    payment_date DATE           NOT NULL,
    CONSTRAINT fk_payment_order FOREIGN KEY (order_id) REFERENCES `order` (id)
);
