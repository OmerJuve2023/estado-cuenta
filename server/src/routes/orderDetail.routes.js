import {Router} from "express";
import {pool} from "../database/db.js";

const router = Router();

router.get('/list', async (req, res) => {
    try {
        const [result] = await pool.query("call GetAllOrderDetails()");
        console.log(result);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.post('/add', async (req, res) => {
    try {
        const {order_id, product_id, quantity, price} = req.body;
        await pool.query("call InsertOrderDetail(?,?,?,?,?)", [order_id, product_id, quantity, price, (quantity * price)]);
        res.status(201).json({message: "se agregó correctamente el nuevo detalle de pedido"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const {order_id, product_id, quantity, price} = req.body;
        const {id} = req.params;
        await pool.query("call UpdateOrderDetail(?,?, ?, ?, ?,?)", [id, order_id, product_id, quantity, price, (quantity * price)]);
        res.status(202).json({message: "se actualizó correctamente el detalle de pedido"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

router.get('/get/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const [result] = await pool.query("call GetOrderDetailById(?)", [id]);
        res.send(result[0]);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
router.delete('/delete/:id', async (req, res) => {
    try {
        const {id} = req.params;
        await pool.query("call DeleteOrderDetail(?)", [id]);
        res.status(200).json({message: "se eliminó correctamente el detalle de pedido"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
export default router;