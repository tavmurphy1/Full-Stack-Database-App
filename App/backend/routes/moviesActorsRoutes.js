const express = require("express");
const router = express.Router();
const {
  getMoviesActors
} = require("../controllers/moviesActorsController");

router.get("/", getMoviesActors);

module.exports = router;
