import {pool} from "../database/db.js";

export const listCustomers = async (req, res) => {
    try {
        const [result] = await pool.query("call GetAllCustomers()");
        console.log(result);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const addCustomer = async (req, res) => {
    try {
        const {name, email, phone, address} = req.body;
        await pool.query("call InsertCustomer(?, ?,?,?)", [name, email, phone, address]);
        res.status(201).json({message: "se agregó correctamente el nuevo usuario"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export const updateCustomer = async (req, res) => {
    try {
        const {name, email, phone, address} = req.body;
        const {id} = req.params;
        await pool.query("call UpdateCustomer(?, ?, ?, ?, ?)", [id, name, email, phone, address]);
        res.status(202).json({message: "se agregó correctamente el nuevo usuario"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const getCustomerById = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await pool.query("call GetCustomerById(?)", [id]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const deleteCustomer = async (req, res) => {
    try {
        const {id} = req.params;
        await pool.query("call DeleteCustomer(?)", [id]);
        res.status(200).json({message: "se eliminó correctamente el usuario"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}