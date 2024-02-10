import {createPool} from "mysql2/promise.js";

import {DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER} from "../config/config.js";

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
});
