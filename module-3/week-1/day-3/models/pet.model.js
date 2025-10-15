const { Schema, model } = require("mongoose");

//this defines the shape of the pet
const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ["Dog", "Cat", "Bird", "Snake", "Other"],
  },
  breed: String,
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2068",
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const PetModel = model("pet", petSchema);

//export the model for all the other files to use
module.exports = PetModel;
