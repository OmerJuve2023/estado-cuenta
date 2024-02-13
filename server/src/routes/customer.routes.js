import {Router} from "express";
import {
    addCustomer,
    deleteCustomer,
    getCustomerById,
    listCustomers,
    updateCustomer
} from "../controllers/customer.controller.js";

const router = Router();

router.get('/list', listCustomers);

router.post('/add', addCustomer);

router.put('/update/:id', updateCustomer);

router.get('/get/:id', getCustomerById);

router.delete('/delete/:id', deleteCustomer);

export default router;