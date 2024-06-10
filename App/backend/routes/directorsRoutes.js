//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of routes to match our project's mySQL Directors table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

const express = require("express");
const router = express.Router();

// imports routes from controller file
const {
  getDirectors,
  createDirector,
  deleteDirector,
} = require("../controllers/directorsController");

// creates routes to access database queries
router.get("/", getDirectors);
router.post("/", createDirector);
router.delete("/:id", deleteDirector);

module.exports = router;
