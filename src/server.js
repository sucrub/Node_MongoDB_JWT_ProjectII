const express = require("express");
require("dotenv").config();
const app = express();
const { userRouter, studentRouter } = require("./routes/index");
const connect = require("./database/database");
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/users", userRouter);
app.use("/students", studentRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, async () => {
  await connect();
  console.log(`listening on port: ${PORT}`);
});
