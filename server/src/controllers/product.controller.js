import {pool} from "../database/db.js";

export const listProducts = async (req, res) => {
    try {
        const [result] = await pool.query("call GetAllProducts()");
        console.log(result);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export const addProduct = async (req, res) => {
    try {
        const {name, price, description} = req.body;
        await pool.query("call InsertProduct(?, ?,?)", [name, price, description]);
        res.status(201).json({message: "se agregó correctamente el nuevo producto"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const updateProduct = async (req, res) => {
    try {
        const {name, price, description} = req.body;
        const {id} = req.params;
        await pool.query("call UpdateProduct(?, ?, ?, ?)", [id, name, price, description]);
        res.status(202).json({message: "se actualizó correctamente el producto"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const getProductById = async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await pool.query("call GetProductById(?)", [id]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        await pool.query("call DeleteProduct(?)", [id]);
        res.status(200).json({message: "se eliminó correctamente el producto"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}