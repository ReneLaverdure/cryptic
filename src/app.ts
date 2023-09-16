import express from "express";
import { json } from "body-parser";
import { dbConnection } from "./db/connection";

// ===== Routes =====
import userRoutes from "./routes/user";

const app = express();
const PORT = 3000;

// ===== Server Setup =====
dbConnection();
app.use(json());

// ===== Routes Setup =====
app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log("server is up on PORT: " + PORT);
});
