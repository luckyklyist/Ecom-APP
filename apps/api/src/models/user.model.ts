import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 5,
    max: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 20,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("user", userSchema);
export default User;
