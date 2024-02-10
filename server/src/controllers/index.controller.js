import {pool} from "../database/db.js";

export const getIndex = async (req, res) => {
    const result = await pool.query('SELECT * from product where id = 1');
    res.json(result);
}