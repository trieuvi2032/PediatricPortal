import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: false }, // assuming photo is a URL, and it's optional
  role: {
    type: String,
    required: true,
    enum: ["admin", "user"],
    default: "user",
  },
});

const User = models.User || model("User", UserSchema);

export default User;
