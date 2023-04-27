const { User } = require("../models/index");
const bcrypt = require("bcrypt");
require("dotenv").config();
const login = async ({ email, password }) => {
  //   console.log("login user in user repo");
  const existingUser = await User.findOne({ email: email }).exec();
  if (existingUser) {
    let isMatch = await bcrypt.compare(password, existingUser.password);
    if (!!isMatch) {
    } else {
      throw new Error("cant login");
    }
  } else {
    throw new Error("cant login");
  }
};

const register = async ({ name, email, password, phoneNumber, address }) => {
  const existingUser = await User.findOne({ email: email }).exec();
  if (!!existingUser) {
    console.log("user already exist");
    throw exception;
  }
  const hashedPassword = await bcrypt.hash(
    password,
    parseInt(process.env.SALT_ROUNDS)
  );
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    phoneNumber,
    address,
  });
  return {
    ...newUser._doc,
    password: "Hidden",
  };
};

module.exports = {
  login,
  register,
};
