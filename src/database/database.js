const mongoose = require("mongoose");
require("dotenv").config();
const connect = async () => {
  try {
    let connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("connect to mongodb success");
    return connection;
  } catch (error) {
    const { code } = error;
    debugger;
    if (error.code == 8000) {
      throw new Error("wrong database's username and password");
    } else if (code == "ENOTFOUND") {
      throw new Error("wrong server name");
    }
    throw new Error("cannot connect to mongodb");
  }
};

module.exports = connect;
