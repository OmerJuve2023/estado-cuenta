import {pool} from "../database/db.js";
import {or} from "sequelize";

export const listOrder = async (req, res) => {
    try {
        const [result] = await pool.query("call GetAllOrdersByName()");
        console.log(result);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const addOrder = async (req, res) => {
    try {
        const {customer_id, total_amount, status} = req.body;
        await pool.query("call InsertOrder(?,?,?)", [customer_id, total_amount, status]);
        res.status(201).json({message: "se agregó correctamente el nuevo pedido"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const updateOrder = async (req, res) => {
    try {
        const {customer_id, order_date, total_amount, status} = req.body;
        const {id} = req.params;
        await pool.query("call UpdateOrder(?,?, ?, ?, ?)", [id, customer_id, order_date, total_amount, status]);
        res.status(202).json({message: "se actualizó correctamente el pedido"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const getOrderById = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await pool.query("call GetOrderById(?)", [id]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const deleteOrder = async (req, res) => {
    try {
        const {id} = req.params;
        await pool.query("call DeleteOrder(?)", [id]);
        res.status(200).json({message: "se eliminó correctamente el pedido"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export const getOrderByAvailable = async (req, res) => {
    try {
        const [result] = await pool.query("call GetOrderByAvailable()");
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export const getOrderByOrderToName = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await pool.query("call GetOrderToNameByOrderID(?)", [id]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
