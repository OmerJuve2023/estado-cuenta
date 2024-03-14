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
    IN p_id INT,
    IN p_order_id INT,
    IN p_product_id INT,
    IN p_quantity INT
)
BEGIN
    DECLARE v_price DECIMAL(10, 2);
    DECLARE v_subtotal DECIMAL(10, 2);

    -- Obtener el precio del producto del detalle del pedido
    SELECT price
    INTO v_price
    FROM product
    WHERE id = p_product_id;

    -- Calcular el subtotal basado en la nueva cantidad y el precio del producto
    SET v_subtotal = p_quantity * v_price;

    -- Actualizar el detalle del pedido con los nuevos valores
    UPDATE order_detail
    SET product_id = p_product_id,
        quantity   = p_quantity,
        price      = v_price,
        subtotal   = v_subtotal
    WHERE id = p_id;

    -- Actualizar el total_amount en la orden correspondiente
    UPDATE orders
    SET total_amount = (SELECT SUM(subtotal)
                        FROM order_detail
                        WHERE order_id = p_order_id)
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

CREATE PROCEDURE IF NOT EXISTS GetOrderDetailsHome(IN orderID INT)
BEGIN
    SELECT od.id, od.order_id, p.name, od.price, od.quantity, od.subtotal
    FROM order_detail od
             JOIN product p ON p.id = od.product_id
    WHERE od.order_id = orderID;
END;;