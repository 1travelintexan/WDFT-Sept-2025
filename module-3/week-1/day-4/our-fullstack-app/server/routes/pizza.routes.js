const { isAuthenticated } = require("../middlewares/jwt.middleware");
const PizzaModel = require("../models/Pizza.model");
const router = require("express").Router();
const uploader = require("../middlewares/cloudinary.config");
router.get("/all-pizzas", async (req, res, next) => {
  try {
    const allPizzasInDB = await PizzaModel.find().populate(
      "creator",
      "username _id"
    );
    res.status(200).json(allPizzasInDB);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/single-pizza/:pizzaId", async (req, res) => {
  try {
    const onePizza = await PizzaModel.findById(req.params.pizzaId);
    res.status(200).json(onePizza);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/users-pizzas/:userId", async (req, res) => {
  try {
    const usersPizzas = await PizzaModel.find({ creator: req.params.userId });
    res.status(200).json(usersPizzas);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
//route to create a pizza
router.post(
  "/create-a-pizza",
  uploader.single("imageUrl"),
  async (req, res) => {
    try {
      console.log("here is the file--->", req.file);
      const createdPizza = await PizzaModel.create({
        ...req.body,
        image: req.file?.path,
      });
      console.log("pizza created", createdPizza);
      res.status(201).json(createdPizza);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
);

router.delete("/delete-a-pizza/:pizzaId", async (req, res) => {
  try {
    const deletedPizza = await PizzaModel.findByIdAndDelete(req.params.pizzaId);
    res.status(200).json({ message: "Pizza Deleted", deletedPizza });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
