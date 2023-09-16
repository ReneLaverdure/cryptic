"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const connection_1 = require("./db/connection");
// ===== Routes =====
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
const PORT = 3000;
// ===== Server Setup =====
(0, connection_1.dbConnection)();
app.use((0, body_parser_1.json)());
// ===== Routes Setup =====
app.use("/user", user_1.default);
app.listen(PORT, () => {
    console.log("server is up on PORT: " + PORT);
});
