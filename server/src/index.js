import {PORT} from "./config/config.js";
import express from "express";

import customerRoutes from "./routes/customer.routes.js";
import indexRoutes from "./routes/index.routes.js";


const app = express();


app.use("/api/customer", customerRoutes);
app.use("/api/index", indexRoutes);

app.listen(PORT);
console.log(`Server on port http://localhost:${PORT}`);
