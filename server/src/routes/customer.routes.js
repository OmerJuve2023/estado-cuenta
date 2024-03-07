import {Router} from "express";
import {
    addCustomer,
    deleteCustomer,
    getCustomerById, getCustomerByName,
    listCustomers,
    updateCustomer
} from "../controllers/customer.controller.js";

const router = Router();

router.get('/list', listCustomers);

router.post('/add', addCustomer);

router.put('/update/:id', updateCustomer);

router.get('/get/:id', getCustomerById);

router.delete('/delete/:id', deleteCustomer);

router.get('/getByName', getCustomerByName);
export default router;