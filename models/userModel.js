import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
      minLength: 8,
      maxLength: 22,
    },
    middlename: {
      type: String,
      trim: true,
      minLength: 8,
      maxLength: 22,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      minLength: 8,
      maxLength: 22,
    },
    dob: {
      type: Date,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    phonenumber: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
    },
    occupation: {
      type: String,
      default: "",
    },
    company: {
      type: String,
      default: "",
    },

    password: {
      type: String,
      required: true,
      minLength: 6,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", userSchema);
