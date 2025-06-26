import { model, Schema } from "mongoose";
const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    phone: {
      type: String,
      required: true,
      unique: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    role: {
      type: String,
      enum: ["admin", "instructor", "student"],
      default: "student",
    },
    profileImage: { type: String },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);
export default model("User", UserSchema);
