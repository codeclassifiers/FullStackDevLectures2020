// Modules imported
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// Routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const characterRouter = require("./routes/character");
const areaRouter = require("./routes/area");

// Instance of express js
const app = express();

// NPM module related code
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Route definitions
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/character", characterRouter);
app.use("/area", areaRouter);

module.exports = app;
