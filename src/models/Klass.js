const { Schema, ObjectId } = require("mongoose");
const mongoose = require("mongoose");
module.exports = mongoose.model(
  "Klass",
  new Schema({
    id: { type: ObjectId },
    name: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 3,
        message: "Class name must be at least 3 characters",
      },
    },
  })
);
