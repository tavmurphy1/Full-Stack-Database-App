const express = require("express");
const router = express.Router();
const {
  getMovies,
  getMovieByID,
  createMovie,
  updateMovie,
  deleteMovie,
  getMoviesGenres,
  getMoviesActors,
  getMoviesDirectors,
} = require("../controllers/moviesController");

router.get("/", getMovies);
router.get("/genres", getMoviesGenres);
router.get("/actors", getMoviesActors);
router.get("/directors", getMoviesDirectors);
router.get("/:id", getMovieByID);
router.post("/", createMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
