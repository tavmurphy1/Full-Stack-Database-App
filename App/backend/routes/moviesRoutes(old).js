const express = require("express");
const router = express.Router();
const {
  getMovies,
  //getPersonByID,
  //createPerson,
  //updatePerson,
  //deletePerson,
} = require("../controllers/moviesController");

router.get("/api/movies", getMovies);
//router.get("/:id", getPersonByID);
//router.post("/", createPerson);
//router.put("/:id", updatePerson);
//router.delete("/:id", deletePerson);

module.exports = router;
