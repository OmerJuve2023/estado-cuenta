import {Router} from "express";
import {pool} from "../database/db.js";

const router = Router();

router.get('/list', async (req, res) => {
    try {
        const [result] = await pool.query("call GetAllOrders()");
        console.log(result);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.post('/add', async (req, res) => {
    try {
        const {customer_id, order_date, quantity, status} = req.body;
        await pool.query("call InsertOrder(?,?,?,?)", [customer_id, order_date, quantity, status]);
        res.status(201).json({message: "se agregó correctamente el nuevo pedido"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const {customer_id, order_date, quantity, status} = req.body;
        const {id} = req.params;
        await pool.query("call UpdateOrder(?,?, ?, ?, ?)", [id, customer_id, order_date, quantity, status]);
        res.status(202).json({message: "se actualizó correctamente el pedido"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.get('/get/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await pool.query("call GetOrderById(?)", [id]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const {id} = req.params;
        await pool.query("call DeleteOrder(?)", [id]);
        res.status(200).json({message: "se eliminó correctamente el pedido"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

export default router;