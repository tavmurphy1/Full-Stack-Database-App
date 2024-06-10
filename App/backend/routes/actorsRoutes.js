//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of routes to match our project's mySQL Actors table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

const express = require("express");
const router = express.Router();

// imports routes from controller file
const {
  getActors,
  createActor,
  deleteActor,
} = require("../controllers/actorsController");

// creates routes to access database queries
router.get("/", getActors);
router.post("/", createActor);
router.delete("/:id", deleteActor);

module.exports = router;
