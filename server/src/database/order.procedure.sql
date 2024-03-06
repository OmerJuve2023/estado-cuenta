use estado_cuenta;;
CREATE PROCEDURE IF NOT EXISTS InsertOrder(
    IN p_customer_id INT,
    IN p_total_amount DECIMAL(10, 2),
    IN p_status ENUM ('pending', 'completed', 'cancelled')
)
BEGIN
    INSERT INTO orders (customer_id, order_date, total_amount, status)
    VALUES (p_customer_id, date_format(NOW(), '%Y-%m-%d %H:%i:%s'), p_total_amount, p_status);
END;;

CREATE PROCEDURE IF NOT EXISTS GetOrderById(
    IN p_order_id INT
)
BEGIN
    SELECT * FROM orders WHERE id = p_order_id;
END;;

CREATE PROCEDURE IF NOT EXISTS UpdateOrder(
    IN p_order_id INT,
    IN p_customer_id INT,
    IN p_order_date DATETIME,
    IN p_total_amount DECIMAL(10, 2),
    IN p_status ENUM ('pending', 'completed', 'cancelled')
)
BEGIN
    UPDATE orders
    SET customer_id  = p_customer_id,
        order_date   = p_order_date,
        total_amount = p_total_amount,
        status       = p_status
    WHERE id = p_order_id;
END;;

CREATE PROCEDURE IF NOT EXISTS DeleteOrder(
    IN p_order_id INT
)
BEGIN
    DELETE FROM orders WHERE id = p_order_id;
END;;


CREATE PROCEDURE IF NOT EXISTS GetAllOrders()
BEGIN
    SELECT * FROM orders;
END;;

CREATE PROCEDURE IF NOT EXISTS GetAllOrdersByName()
BEGIN
    SELECT o.id, o.customer_id, c.name, o.total_amount, o.order_date, o.status
    FROM orders o
             JOIN customer c ON o.customer_id = c.id;
END ;;
