const { body, validationResult } = require("express-validator");
const { userRepository } = require("../repositories/index");
const { EventEmitter } = require("node:events");

const myEvent = new EventEmitter();

myEvent.on("event.register.user", (params) => {
  console.log(`They talked about : ${JSON.stringify(params)}`);
});

const login = async (req, res) => {
  //email, password
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const { email, password } = req.body;
  try {
    await userRepository.login({ email, password });
    res.status(200).json({
      message: "Login successfully",
    });
  } catch (exception) {
    res.status(400).json({
      message: "Cant login",
    });
  }
};

const register = async (req, res) => {
  const { name, email, password, phoneNumber, address } = req.body;
  myEvent.emit("event.register.user", { name, email });
  try {
    debugger;
    const user = await userRepository.register({
      name,
      email,
      password,
      phoneNumber,
      address,
    });
    res.status(201).json({
      message: "Register successfully",
      data: user,
    });
  } catch (exception) {
    debugger;
    res.status(400).json({
      message: "Cant register",
    });
  }
};

const getAllDetail = async (req, res) => {
  res.send("Get all user detail");
};

module.exports = {
  login,
  register,
  getAllDetail,
};
