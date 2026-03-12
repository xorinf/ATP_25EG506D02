import { Schema, model } from "mongoose";
// create user scheme
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required!"],
            minLength: [4, "Min length of username is 4 characters!"],
            maxLength: [6, "Username size exceeds by 6 characters!"],
        },
        password: {
            type: String,
            required: [true, "Password Required!"],
            // RegExp : '[0-9]'
        },
        email: {
            type: String,
            required: [true, "Email Required"],
            unique: [true, "Email already existed!"],
        },
        age: {
            type: Number,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    },
);

// genrate user model
export const UserModel = model("user", userSchema);
