const express = require("express");
const router = express.Router();
const {
  getMoviesGenres
} = require("../controllers/moviesGenresController");

router.get("/", getMoviesGenres);

module.exports = router;
