const isEmail = require("validator/lib/isEmail");
const { Schema, ObjectId } = require("mongoose");
const mongoose = require("mongoose");
module.exports = mongoose.model(
  "Student",
  new Schema({
    id: { type: ObjectId },
    name: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 3,
        message: "Student name must be at least 3 characters",
      },
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value) => isEmail,
        message: "Email is incorrect format",
      },
    },
    languages: {
      type: [String],
    },
    gender: {
      type: String,
      required: true,
      enum: {
        values: ["male", "female"],
        message: "Value is not supported",
      },
    },
    phoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: (phoneNumber) => phoneNumber.length >= 10,
        message: "Phone number is not valid",
      },
    },
    address: {
      type: String,
      required: true,
    },
  })
);
