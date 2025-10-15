const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//import the models
const PetModel = require("./models/pet.model");
const UserModel = require("./models/user.model");
//connecting to the DB
mongoose
  .connect("mongodb://127.0.0.1:27017/our-first-db")
  .then(() => {
    console.log("You connected to the DB, nice work :)");
  })
  .catch((err) => console.log(err));

//********************** */ user routes start here *********************

app.post("/create-a-user", (req, res) => {
  UserModel.create(req.body)
    .then((theNewUserInDB) => {
      console.log("new user created successfully!", theNewUserInDB);
      res.status(201).json(theNewUserInDB);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Problem creating the user", err });
    });
});

app.get("/one-user/:userId", async (req, res) => {
  //with async and await
  try {
    const foundUser = await UserModel.findById(req.params.userId)
      .select("username pets")
      .populate("pets", "name age image");
    if (foundUser) {
      res.status(200).json(foundUser);
    } else {
      res.status(200).json({ message: "user not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: "Problem searching for a user", err });
  }

  // with .then and .catch
  //   UserModel.findById(req.params.userId)
  //     .then((user) => {
  //       console.log("Here is your user: ", user);
  //       if (user) {
  //         res.status(200).json(user);
  //       } else {
  //         res.status(200).json({ message: "user not found" });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res
  //         .status(500)
  //         .json({ errorMessage: "Problem searching for a user", err });
  //     });
});

//I will make a delete from China
app.delete("/one-user/:userId", (req, res) => {
  UserModel.findByIdAndDelete(req.params.userId)
    .then((deletedUser) => {
      console.log("this is the unlucky dude who got deleted", deletedUser);
      res.status(204).json(deletedUser);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "Problem delete the user, meow", err });
    });
});

//********************** */ pet routes start here *********************
//this route will create a pet
app.post("/create-a-pet", async (req, res) => {
  //with async and await
  try {
    const createdPet = await PetModel.create(req.body);
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.body.owner,
      {
        $push: { pets: createdPet._id },
      },
      { new: true }
    ).populate("pets");

    res.status(201).json({ createdPet, updatedUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMessage: "Problem creating the pet", err });
  }

  //with .then and .catch
  //   PetModel.create(req.body)
  //     .then((theNewPetInDB) => {
  //       console.log("here is the new pet", theNewPetInDB);
  //       res.status(201).json(theNewPetInDB);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).json({ errorMessage: "Problem creating the pet", err });
  //     });
});

//
//this route gets all the pets from the DB
app.get("/pets", (req, res) => {
  //use a promise to get all the pets from the DB
  PetModel.find()
    .then((pets) => {
      console.log("here are all the pets", pets);
      res.status(200).json(pets);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Problem finding the pets", err });
    });
});

//find one specific pet
app.get("/one-pet/:petId", (req, res) => {
  const { petId } = req.params;
  PetModel.findById(petId)
    // use the .populate() to fill the _id of the 'owner' field to be the actual data
    .populate("owner", "username")
    .then((foundPet) => {
      console.log("here is the one pet", foundPet);
      res.status(200).json(foundPet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Problem finding one pet", err });
    });
});

//this route deletes a pet from the DB
app.delete("/one-pet/:petId", (req, res) => {
  PetModel.findByIdAndDelete(req.params.petId)
    .then((deletedPet) => {
      console.log("pet deleted", deletedPet);
      res.status(204).json(deletedPet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Problem deleting one pet", err });
    });
});

//this route updates a pet
app.patch("/update-a-pet/:petId", (req, res) => {
  PetModel.findByIdAndUpdate(req.params.petId, req.body, { new: true })
    .then((updatedPet) => {
      console.log("here is the updated pet", updatedPet);
      res.status(200).json(updatedPet);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Problem updating the pet", err });
    });
});
//start the server with the .listen method
app.listen(5005, () => {
  console.log("server running on port 5005");
});
