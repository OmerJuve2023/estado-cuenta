import {createPool} from "mysql2/promise.js";

import {
    CONNECTION_LIMIT,
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USER, MULTIPLE_STATEMENTS,
    QUEUE_LIMIT,
    WAIT_FOR_CONNECTIONS
} from "../config/config.js";

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT,
    connectionLimit: CONNECTION_LIMIT,
    queueLimit: QUEUE_LIMIT,
    waitForConnections: WAIT_FOR_CONNECTIONS,
    multipleStatements: MULTIPLE_STATEMENTS
});