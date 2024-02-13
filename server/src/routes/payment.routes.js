import {Router} from "express";
import {
    addPayment,
    deletePayment,
    getPaymentById,
    listPayment,
    updatePayment
} from "../controllers/payment.controller.js";

const router = Router();

router.get('/list', listPayment);
router.post('/add', addPayment);
router.put('/update/:id', updatePayment);
router.get('/get/:id', getPaymentById);
router.delete('/delete/:id', deletePayment);

export default router;