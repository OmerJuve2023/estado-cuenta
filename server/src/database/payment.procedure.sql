USE estado_cuenta;;

CREATE PROCEDURE IF NOT EXISTS InsertPayment(
    IN p_order_id INT,
    IN p_amount DECIMAL(10, 2),
    IN p_payment_date DATE
)
BEGIN
    INSERT INTO payment (order_id, amount, payment_date)
    VALUES (p_order_id, p_amount, p_payment_date);
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
    IN p_payment_date DATE
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
