import {Router} from "express";
import {
    addOrderDetail, deleteOrderDetail,
    getOrderDetailById,
    listOrderDetails,
    updateOrderDetail
} from "../controllers/orderDetail.controller.js";

const router = Router();

router.get('/list', listOrderDetails);
router.post('/add', addOrderDetail);
router.put('/update/:id', updateOrderDetail);
router.get('/get/:id', getOrderDetailById);
router.delete('/delete/:id', deleteOrderDetail);
export default router;