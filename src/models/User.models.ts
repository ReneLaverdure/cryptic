import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model("User", UserSchema);

export default User;

// const kittySchema = new mongoose.Schema({
//     name: String,
// });

// const Kitten = mongoose.model("Kitten", kittySchema);

// const silence = new Kitten({ name: "Silence" });

// silence.save();
