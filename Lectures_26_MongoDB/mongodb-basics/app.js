const express = require("express");
// Step 1: Importing mongoose module
const mongoose = require("mongoose");

// Step 2: Make a connection to remote mongodb server
mongoose.connect(
  "<mongodb-atlas-connection-string-to-be-added-here>",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  function (err) {
    if (err) {
      console.log("err in connection", err);
    } else {
      console.log("connection to database completed");
    }
  }
);
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const studentsRouter = require("./routes/student");
const charactedRouter = require("./routes/character");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/students", studentsRouter);
app.use("/character", charactedRouter);
module.exports = app;
