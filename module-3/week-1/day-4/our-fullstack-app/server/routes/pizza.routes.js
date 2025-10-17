const { isAuthenticated } = require("../middlewares/jwt.middleware");
const router = require("express").Router();

router.get("/all-pizzas", isAuthenticated, (req, res, next) => {
  res.json("Made it to the pizza route file");
});

module.exports = router;
