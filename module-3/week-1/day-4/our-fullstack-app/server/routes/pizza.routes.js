const router = require("express").Router();
router.get("/", (req, res, next) => {
  res.json("Made it to the pizza route file");
});
module.exports = router;
