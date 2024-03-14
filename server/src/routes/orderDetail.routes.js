import {Router} from "express";
import {
    addOrderDetail, deleteOrderDetail, getHome,
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
router.get('/home/:id', getHome());
export default router;