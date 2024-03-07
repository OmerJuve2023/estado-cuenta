import {Router} from "express";
import {
    addProduct,
    deleteProduct,
    getProductById, getProductByName,
    listProducts,
    updateProduct
} from "../controllers/product.controller.js";

const router = Router();

router.get('/list', listProducts);
router.post('/add', addProduct);
router.put('/update/:id', updateProduct);
router.get('/get/:id', getProductById);
router.delete('/delete/:id', deleteProduct);
router.get('/getByName', getProductByName);
export default router;