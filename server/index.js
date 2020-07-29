const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5500;

const app = express();

// Logging Middleware
app.use(morgan("dev"));

// Body Parsing Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use("/api", require("./api"));

// Static File Middleware
app.use(express.static(path.join(__dirname, "../public")));

// Send HTML: requests that don't match API Routes
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public"));
});

// 500 Error: something wrong on our part
app.use(function (err, req, res, next) {
  console.error(err);
  console.err(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

// Listen and start server on PORT 5500
app.listen(PORT, function () {
  console.log("The server smiles upon you");
  console.log("Hello");
  console.log(`Your server, listening on port ${PORT}`);
});

module.exports = app;
