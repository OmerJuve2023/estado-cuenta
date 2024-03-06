use estado_cuenta;;
CREATE PROCEDURE IF NOT EXISTS InsertOrderDetail(
    IN p_order_id INT,
    IN p_product_id INT,
    IN p_quantity INT,
    IN p_price DECIMAL(10, 2)
)
BEGIN
    INSERT INTO order_detail (order_id, product_id, quantity, price, subtotal)
    VALUES (p_order_id, p_product_id, p_quantity, p_price, (p_quantity * p_price));
    update orders
    set total_amount= (SELECT SUM(subtotal) FROM order_detail WHERE order_id = p_order_id)
    WHERE id = p_order_id;
END;

CREATE PROCEDURE IF NOT EXISTS GetOrderDetailByID(
    IN p_order_detail_id INT
)
BEGIN
    SELECT * FROM order_detail WHERE id = p_order_detail_id;
END;;

CREATE PROCEDURE IF NOT EXISTS UpdateOrderDetail(
    IN p_order_detail_id INT,
    IN p_order_id INT,
    IN p_product_id INT,
    IN p_quantity INT,
    IN p_price DECIMAL(10, 2)
)
BEGIN
    UPDATE order_detail
    SET order_id   = p_order_id,
        product_id = p_product_id,
        quantity   = p_quantity,
        price      = p_price,
        subtotal   = (p_quantity * p_price)
    WHERE id = p_order_detail_id;
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