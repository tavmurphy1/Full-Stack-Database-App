const express = require("express");
const router = express.Router();
const {
  getMovies,
  getMovieByID,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/moviesController");

router.get("/", getMovies);
router.get("/:id", getMovieByID);
router.post("/", createMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
