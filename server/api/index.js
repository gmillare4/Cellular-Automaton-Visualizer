const router = require("express").Router();

// Example Route
router.use("/exampleRoute", require("./exampleRoute"));

// 404 Error Handling: user requrest does not exist
router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
