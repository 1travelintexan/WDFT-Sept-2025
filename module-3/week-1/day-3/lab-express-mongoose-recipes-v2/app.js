const express = require("express");
const logger = require("morgan");

const app = express();
const RecipeModel = require("./models/Recipe.model");
// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());

// Iteration 1 - Connect to MongoDB
// DATABASE CONNECTION
const mongoose = require("mongoose");

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb://127.0.0.1:27017/express-mongoose-recipes-dev";

mongoose
  .connect(MONGODB_URI)
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

// ROUTES
//  GET  / route - This is just an example route
app.get("/", (req, res) => {
  res.send("<h1>LAB | Express Mongoose Recipes</h1>");
});

//  Iteration 3 - Create a Recipe route
//  POST  /recipes route
app.post("/recipes", async (req, res) => {
  console.log("request.body", req.body);
  //with async and await
  try {
    const createdRecipe = await RecipeModel.create({
      ...req.body,
      title: req.body.recipeTitle,
    });
    res.status(201).json(createdRecipe);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ errorMessage: "Problem creating recipe", actualError: err });
  }

  //with .then and .catch
  //   RecipeModel.create(req.body)
  //     .then((newRecipe) => {
  //       console.log("recipe created!", newRecipe);
  //       res.status(201).json(newRecipe);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res
  //         .status(500)
  //         .json({ errorMessage: "Problem creating recipe", actualError: err });
  //     });
});

//  Iteration 4 - Get All Recipes
//  GET  /recipes route
app.get("/recipes", async (req, res) => {
  try {
    const allRecipes = await RecipeModel.find();
    res.status(200).json(allRecipes);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ errorMessage: "Problem getting the recipes", actualError: err });
  }
});
//  Iteration 5 - Get a Single Recipe
//  GET  /recipes/:id route
app.get("/recipes/:recipeId", async (req, res) => {
  try {
    const oneSpecificRecipe = await RecipeModel.findById(req.params.recipeId);
    res.status(200).json(oneSpecificRecipe);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ errorMessage: "Problem getting one recipe", actualError: err });
  }
});
//  Iteration 6 - Update a Single Recipe
//  PUT  /recipes/:id route
app.put("/recipes/:recipeId", async (req, res) => {
  try {
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      req.params.recipeId,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedRecipe);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ errorMessage: "Problem updating the recipe", actualError: err });
  }
});
//  Iteration 7 - Delete a Single Recipe
//  DELETE  /recipes/:id route
app.delete("/recipes/:id", async (req, res) => {
  try {
    const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "recipe deleted", deletedRecipe });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ errorMessage: "Problem deleteing the recipe", actualError: err });
  }
});

// Start the server
app.listen(3000, () => console.log("My first app listening on port 3000!"));

//❗️DO NOT REMOVE THE BELOW CODE
module.exports = app;
