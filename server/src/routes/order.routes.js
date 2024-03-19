import {Router} from "express";
import {
    addOrder,
    deleteOrder,
    getOrderByAvailable,
    getOrderById, getOrderByOrderToName,
    listOrder,
    updateOrder
} from "../controllers/order.controller.js";
import {getOrderByAllName} from "../controllers/orderDetail.controller.js";

const router = Router();

router.get('/list', listOrder);
router.post('/add', addOrder);
router.put('/update/:id', updateOrder);
router.get('/get/:id', getOrderById);
router.delete('/delete/:id', deleteOrder);
router.get('/getByAvailable', getOrderByAvailable);
router.get('/getByOrderToName/:id', getOrderByOrderToName);
router.get('/GetAllName', getOrderByAllName);
export default router;