import mongoose from "mongoose";
// import validator from 'validator';

const register = mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: [true, "Please Add First Name"],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    LastName: {
      type: String,
      required: [true, "Please Add Last Name"],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    Email: {
      type: String,
      required: [true, "Please Add Email"],
      unique: true,
      trim: true,
      lowercase: true,
      // validate: [validator.isEmail, 'Please provide a valid email'],
    },
    Password: {
      type: String,
      required: [true, "Please Add Password"],
      minlength: 8,
      trim: true,
    },
    otp: {
      type: String,
    },
    expiresIn: {
      type: Date,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Users", register);
