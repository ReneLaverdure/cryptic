import mongoose from "mongoose";

const mongodbConnection = `mongodb://127.0.0.1:27017/cryptic`;

export async function dbConnection() {
    await mongoose
        .connect(mongodbConnection)
        .then(() => console.log("===== Connected to Database ====="))
        .catch((err) => console.log(err));
}
