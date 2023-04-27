const isEmail = require("validator/lib/isEmail");
const { Schema, ObjectId } = require("mongoose");
const mongoose = require("mongoose");
module.exports = mongoose.model(
  "User",
  new Schema({
    id: { type: ObjectId },
    name: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 3,
        message: "Username must be at least 3 characters",
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
    password: {
      type: String,
      required: true,
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
      required: false,
    },
  })
);
