import {PORT} from "./config/config.js";
import express from "express";
import bodyParser from "body-parser";
import customerRoutes from "./routes/customer.routes.js";
import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";
import orderDetailRoutes from "./routes/orderDetail.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import {executeSQLScript} from "./config/executeSQLScript.js";

const app = express();

/**
 * Configura el middleware para parsear el cuerpo de las solicitudes
 */

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/api/customer", customerRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/orderDetail", orderDetailRoutes);
app.use("/api/payment", paymentRoutes);


const filesToExecute = [
    './src/database/create-tables.data.sql',
    './src/database/product.procedure.sql',
    './src/database/customer.procedure.sql',
    './src/database/order.procedure.sql',
    './src/database/orderDetail.procedure.sql',
    './src/database/payment.procedure.sql',
];

app.listen(PORT, () => {
    process.env.TZ = 'America/Lima';
    executeSQLScript(filesToExecute);
    console.log(`Servidor Express corriendo en http://localhost:${PORT}`);

});