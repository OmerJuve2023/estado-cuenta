import {Router} from "express";
import {
    addProduct,
    deleteProduct,
    getProductById,
    listProducts,
    updateProduct
} from "../controllers/product.controller.js";

const router = Router();

router.get('/list', listProducts);
router.post('/add', addProduct);
router.put('/update/:id', updateProduct);
router.get('/get/:id', getProductById);
router.delete('/delete/:id', deleteProduct);
export default router;