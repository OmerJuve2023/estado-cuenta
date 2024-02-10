import {Router} from "express";
import {pool} from "../database/db.js";

const router = Router();

router.get("/add", (req, res) => {
    res.render("personas/add");
});

router.get('/list', async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM customer');
        res.render('personas/list', {personas: result});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
export default router;