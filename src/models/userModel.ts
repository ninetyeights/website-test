import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "用户名不能为空"],
      match: [/^[a-zA-Z0-9]+$/, "用户名无效"],
    },
    password: {
      type: String,
      required: [true, "密码不能为空"],
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);

export default User;
