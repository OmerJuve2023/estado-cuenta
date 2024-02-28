import {config} from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "my-secret-pw";
export const DB_DATABASE = process.env.DB_DATABASE || "estado_cuenta";
export const DB_PORT = process.env.DB_PORT || 3306;
export const CONNECTION_LIMIT = process.env.CONNECTION_LIMIT || 20;
export const QUEUE_LIMIT = process.env.QUEUE_LIMIT || 100;
export const WAIT_FOR_CONNECTIONS = process.env.WAIT_FOR_CONNECTIONS || true;
export const MULTIPLE_STATEMENTS = process.env.MULTIPLE_STATEMENTS || true;
