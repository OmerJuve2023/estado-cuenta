import {config} from "dotenv";

config();

export const PORT = process.env.PORT;
export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASS;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_PORT = process.env.DB_PORT;
export const CONNECTION_LIMIT = process.env.CONNECTION_LIMIT;
export const QUEUE_LIMIT = process.env.QUEUE_LIMIT;
export const WAIT_FOR_CONNECTIONS = process.env.WAIT_FOR_CONNECTIONS;
export const MULTIPLE_STATEMENTS = process.env.MULTIPLE_STATEMENTS;