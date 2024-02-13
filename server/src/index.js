import {PORT} from "./config/config.js";
import express from "express";
import bodyParser from "body-parser";
import customerRoutes from "./routes/customer.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// Configura el middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/api/customer", customerRoutes);
app.use("/api/index", indexRoutes);

app.listen(PORT);
console.log(`Server on port http://localhost:${PORT}`);
