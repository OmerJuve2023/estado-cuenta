use estado_cuenta;;
CREATE PROCEDURE IF NOT EXISTS InsertOrderDetail(
    IN p_order_id INT,
    IN p_product_id INT,
    IN p_quantity INT
)
BEGIN
    INSERT INTO order_detail(order_id, product_id, quantity, price, subtotal)
    SELECT p_order_id, p_product_id, p_quantity, p.price, (p_quantity * p.price)
    FROM product p
    WHERE p.id = p_product_id;

    UPDATE orders
    SET total_amount= (SELECT SUM(subtotal) FROM order_detail WHERE order_id = p_order_id)
    WHERE id = p_order_id;
END;;

CREATE PROCEDURE IF NOT EXISTS GetOrderDetailByID(
    IN p_order_detail_id INT
)
BEGIN
    SELECT * FROM order_detail WHERE id = p_order_detail_id;
END;;

CREATE PROCEDURE IF NOT EXISTS UpdateOrderDetail(
    IN p_order_id INT,
    IN p_product_id INT,
    IN p_quantity INT
)
BEGIN
    DECLARE existing_record INT;

    -- Check if a record exists
    SELECT COUNT(*) INTO existing_record
    FROM order_detail
    WHERE order_id = p_order_id AND product_id = p_product_id;

    IF existing_record > 0 THEN
        -- Update existing record
        UPDATE order_detail
        SET quantity = p_quantity,
            price = (SELECT price FROM product WHERE id = p_product_id),
            subtotal = (p_quantity * (SELECT price FROM product WHERE id = p_product_id))
        WHERE order_id = p_order_id AND product_id = p_product_id;
    ELSE
        -- Insert new record (same logic as before)
        INSERT INTO order_detail(order_id, product_id, quantity, price, subtotal)
        SELECT p_order_id, p_product_id, p_quantity, p.price, (p_quantity * p.price)
        FROM product p
        WHERE p.id = p_product_id;
    END IF;

    -- Update total_amount in orders table (assuming foreign key relationship)
    UPDATE orders
    SET total_amount = (SELECT SUM(subtotal) FROM order_detail WHERE order_id = p_order_id)
    WHERE id = p_order_id;
END;;

CREATE PROCEDURE IF NOT EXISTS DeleteOrderDetail(
    IN p_order_detail_id INT
)
BEGIN
    DELETE FROM order_detail WHERE id = p_order_detail_id;
END;;

CREATE PROCEDURE IF NOT EXISTS GetAllOrderDetails()
BEGIN
    SELECT * FROM order_detail;
END;;

CREATE PROCEDURE IF NOT EXISTS GetAllOrderDetailsByName()
BEGIN
    select od.id,
           od.order_id,
           od.product_id,
           c.name as "customer",
           p.name as "product",
           od.quantity,
           od.price,
           od.subtotal
    from order_detail od
             join orders o on od.order_id = o.id
             join product p on od.product_id = p.id
             join customer c on o.customer_id = c.id;
END;;