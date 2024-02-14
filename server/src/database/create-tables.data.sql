-- Iniciar una transacción
START TRANSACTION;;

-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS estado_cuenta;;

-- Seleccionar la base de datos
USE estado_cuenta;;

-- Crear tabla de clientes si no existe
CREATE TABLE IF NOT EXISTS customer
(
    id      INT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(100) NOT NULL,
    email   VARCHAR(100) NOT NULL,
    phone   VARCHAR(20),
    address VARCHAR(255)
    );;

-- Crear tabla de productos si no existe
CREATE TABLE IF NOT EXISTS product
(
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100)   NOT NULL,
    price       DECIMAL(10, 2) NOT NULL,
    description TEXT
    );;

-- Crear tabla de pedidos si no existe
CREATE TABLE IF NOT EXISTS `order`
(
    id           INT AUTO_INCREMENT PRIMARY KEY,
    customer_id  INT,
    order_date   DATE                                       NOT NULL,
    total_amount DECIMAL(10, 2)                             NOT NULL,
    status       ENUM ('pending', 'completed', 'cancelled') NOT NULL,
    CONSTRAINT fk_order_customer FOREIGN KEY (customer_id) REFERENCES customer (id)
    );;

-- Crear tabla de detalles de pedidos si no existe
CREATE TABLE IF NOT EXISTS order_detail
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    order_id   INT,
    product_id INT,
    quantity   INT            NOT NULL,
    price      DECIMAL(10, 2) NOT NULL,
    subtotal   DECIMAL(10, 2) NOT NULL,
    CONSTRAINT fk_order_detail_order FOREIGN KEY (order_id) REFERENCES `order` (id),
    CONSTRAINT fk_order_detail_product FOREIGN KEY (product_id) REFERENCES product (id)
    );;

-- Crear tabla de pagos si no existe
CREATE TABLE IF NOT EXISTS payment
(
    id           INT AUTO_INCREMENT PRIMARY KEY,
    order_id     INT,
    amount       DECIMAL(10, 2) NOT NULL,
    payment_date DATE           NOT NULL,
    CONSTRAINT fk_payment_order FOREIGN KEY (order_id) REFERENCES `order` (id)
    );;

-- Hacer commit de la transacción
COMMIT;;
