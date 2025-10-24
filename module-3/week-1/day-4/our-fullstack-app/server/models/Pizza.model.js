const { Schema, model } = require("mongoose");

const pizzaSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://plus.unsplash.com/premium_photo-1733259709671-9dbf22bf02cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVmYXVsdCUyMHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
  },
  directions: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const PizzaModel = model("Pizza", pizzaSchema);
module.exports = PizzaModel;
