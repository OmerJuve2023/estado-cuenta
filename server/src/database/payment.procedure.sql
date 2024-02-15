USE estado_cuenta;;

CREATE PROCEDURE InsertPayment(
    IN p_order_id INT,
    IN p_amount DECIMAL(10, 2)
)
BEGIN
    DECLARE total_paid DECIMAL(10, 2);
    DECLARE total_order DECIMAL(10, 2);

    INSERT INTO payment (order_id, amount, payment_date)
    VALUES (p_order_id, p_amount, date_format(NOW(), '%Y-%m-%d %H:%i:%s'));

    -- Calcular el total pagado para el pedido
    SELECT COALESCE(SUM(amount), 0) INTO total_paid FROM payment WHERE order_id = p_order_id;

    -- Obtener el total del pedido
    SELECT total_amount INTO total_order FROM orders WHERE id = p_order_id;

    -- Verificar si el total pagado es igual al total del pedido
    IF total_paid >= total_order THEN
        -- Actualizar el estado del pedido a "completed"
        UPDATE orders SET status = 'completed' WHERE id = p_order_id;
    END IF;

END;;

CREATE PROCEDURE IF NOT EXISTS GetPaymentById(
    IN p_payment_id INT
)
BEGIN
    SELECT * FROM payment WHERE id = p_payment_id;
END;;

CREATE PROCEDURE IF NOT EXISTS UpdatePayment(
    IN p_payment_id INT,
    IN p_order_id INT,
    IN p_amount DECIMAL(10, 2),
    IN p_payment_date DATETIME
)
BEGIN
    UPDATE payment
    SET order_id     = p_order_id,
        amount       = p_amount,
        payment_date = p_payment_date
    WHERE id = p_payment_id;
END;;

CREATE PROCEDURE IF NOT EXISTS DeletePayment(
    IN p_payment_id INT
)
BEGIN
    DELETE FROM payment WHERE id = p_payment_id;
END;;

CREATE PROCEDURE IF NOT EXISTS GetAllPayments()
BEGIN
    SELECT * FROM payment;
END;;
