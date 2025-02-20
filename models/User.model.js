const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
  },
  passwordHash: { String, required: [true, "Password is required"] },
});

const User = model("User", userSchema);

module.exports = User;
