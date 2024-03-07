use estado_cuenta;;
CREATE PROCEDURE IF NOT EXISTS InsertCustomer(
    IN p_name VARCHAR(100),
    IN p_email VARCHAR(100),
    IN p_phone VARCHAR(20),
    IN p_address VARCHAR(255)
)
BEGIN
    INSERT INTO customer (name, email, phone, address) VALUES (p_name, p_email, p_phone, p_address);
END;;

CREATE PROCEDURE IF NOT EXISTS GetAllCustomers()
BEGIN
    SELECT * FROM customer;
END;;

CREATE PROCEDURE IF NOT EXISTS GetCustomerByID(
    IN p_id INT
)
BEGIN
    SELECT * FROM customer WHERE id = p_id;
END;;

CREATE PROCEDURE IF NOT EXISTS UpdateCustomer(
    IN p_id INT,
    IN p_name VARCHAR(100),
    IN p_email VARCHAR(100),
    IN p_phone VARCHAR(20),
    IN p_address VARCHAR(255)
)
BEGIN
    UPDATE customer SET name = p_name, email = p_email, phone = p_phone, address = p_address WHERE id = p_id;
END;;

CREATE PROCEDURE IF NOT EXISTS DeleteCustomer(
    IN p_id INT
)
BEGIN
    DELETE FROM customer WHERE id = p_id;
END;;

CREATE PROCEDURE IF NOT EXISTS GetCustomersByName()
BEGIN
    select c.id, c.name from customer c;
END;;
