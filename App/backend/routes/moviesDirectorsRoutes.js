const express = require("express");
const router = express.Router();
const {
  getMoviesDirectors
} = require("../controllers/moviesDirectorsController");

router.get("/", getMoviesDirectors);

module.exports = router;
