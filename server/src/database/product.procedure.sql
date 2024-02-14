use estado_cuenta;;
CREATE PROCEDURE IF NOT EXISTS InsertProduct(
    IN p_name VARCHAR(100),
    IN p_price DECIMAL(10, 2),
    IN p_description TEXT
)
BEGIN
    INSERT INTO product (name, price, description) VALUES (p_name, p_price, p_description);
END;;

CREATE PROCEDURE IF NOT EXISTS GetAllProducts()
BEGIN
    SELECT * FROM product;
END;;

CREATE PROCEDURE IF NOT EXISTS GetProductByID(
    IN p_id INT
)
BEGIN
    SELECT * FROM product WHERE id = p_id;
END;;

CREATE PROCEDURE IF NOT EXISTS UpdateProduct(
    IN p_id INT,
    IN p_name VARCHAR(100),
    IN p_price DECIMAL(10, 2),
    IN p_description TEXT
)
BEGIN
    UPDATE product SET name = p_name, price = p_price, description = p_description WHERE id = p_id;
END;;

CREATE PROCEDURE IF NOT EXISTS DeleteProduct(
    IN p_id INT
)
BEGIN
    DELETE FROM product WHERE id = p_id;
END;;

