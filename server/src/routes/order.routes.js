import {Router} from "express";
import {addOrder, deleteOrder, getOrderById, listOrder, updateOrder} from "../controllers/order.controller.js";

const router = Router();

router.get('/list', listOrder);
router.post('/add', addOrder);
router.put('/update/:id', updateOrder);
router.get('/get/:id', getOrderById);
router.delete('/delete/:id', deleteOrder);

export default router;