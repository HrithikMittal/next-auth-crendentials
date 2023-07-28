import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    match: [/^[a-zA-Z0-9]+$/, "Username must be alphanumeric"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

module.exports = User;
