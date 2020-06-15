const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyparser = require("body-parser");
const userRoute = require("./api/routes/users");

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://aadhar:NBhKqjWVJ1zn4Ajq@cluster0-uwdpi.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// For logging requests to terminal using morgan
// All incoming requests
app.use(morgan("dev"));

// Parsing the requests
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Handling cors error
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes
app.use("/users", userRoute);

// If request did not match any API
app.use((req, res, nxt) => {
  const error = new Error("Not Found");
  error.status = 404;
  nxt(error);
});

// Handle all errors throughout the app
app.use((error, req, res, nxt) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
