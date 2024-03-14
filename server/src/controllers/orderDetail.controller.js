import {pool} from "../database/db.js";

export const listOrderDetails = async (req, res) => {
    try {
        const [result] = await pool.query("call GetAllOrderDetailsByName()");
        console.log(result);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export const addOrderDetail = async (req, res) => {
    try {
        const {order_id, product_id, quantity} = req.body;
        await pool.query("call InsertOrderDetail(?,?,?)", [order_id, product_id, quantity]);
        res.status(201).json({message: "se agregó correctamente el nuevo detalle de pedido"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const updateOrderDetail = async (req, res) => {
    try {
        const {order_id, product_id, quantity} = req.body;
        const {id} = req.params;
        await pool.query("call UpdateOrderDetail(?, ?, ?, ?)", [id, order_id, product_id, quantity]);
        res.status(202).json({message: "se actualizó correctamente el detalle de pedido"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const getOrderDetailById = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await pool.query("call GetOrderDetailById(?)", [id]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const deleteOrderDetail = async (req, res) => {
    try {
        const {id} = req.params;
        await pool.query("call DeleteOrderDetail(?)", [id]);
        res.status(200).json({message: "se eliminó correctamente el detalle de pedido"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const getHome = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await pool.query("call GetOrderDetailsHome(?)",[id]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}