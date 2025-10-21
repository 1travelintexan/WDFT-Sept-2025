const { Schema, model } = require("mongoose");

const pizzaSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: String,
  directions: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const PizzaModel = model("Pizza", pizzaSchema);
module.exports = PizzaModel;
