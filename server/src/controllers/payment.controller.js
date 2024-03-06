import {pool} from "../database/db.js";

export const listPayment = async (req, res) => {
    try {
        const [result] = await pool.query("call GetAllPaymentsByName()");
        console.log(result);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const addPayment = async (req, res) => {
    try {
        const {order_id, amount} = req.body;
        await pool.query("call InsertPayment(?,?)", [order_id, amount]);
        res.status(201).json({message: "se agregó correctamente el nuevo pago"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export const updatePayment = async (req, res) => {
    try {
        const {order_id, amount, payment_date} = req.body;
        const {id} = req.params;
        await pool.query("call UpdatePayment(?,?, ?, ?)", [id, order_id, amount, payment_date]);
        res.status(202).json({message: "se actualizó correctamente el pago"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const getPaymentById = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await pool.query("call GetPaymentById(?)", [id]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const deletePayment = async (req, res) => {
    try {
        const {id} = req.params;
        await pool.query("call DeletePayment(?)", [id]);
        res.status(200).json({message: "se eliminó correctamente el pago"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}