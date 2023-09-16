"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: String,
    email: String,
});
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
// const kittySchema = new mongoose.Schema({
//     name: String,
// });
// const Kitten = mongoose.model("Kitten", kittySchema);
// const silence = new Kitten({ name: "Silence" });
// silence.save();
