const express = require("express");
const router = express.Router();
const {
  getMovies,
  getMovieByID,
  createMovie,
  createMovieGenre,
  createMovieActor,
  createMovieDirector,
  updateMovie,
  updateMovieGenre,
  updateMovieActor,
  updateMovieDirector,
  deleteMovie,
  getMoviesGenres,
  getMoviesActors,
  getMoviesDirectors,
  getGenres,
  getActors,
  getDirectors,
} = require("../controllers/moviesController");

router.get("/", getMovies);
router.get("/moviegenres", getMoviesGenres);
router.get("/movieactors", getMoviesActors);
router.get("/moviedirectors", getMoviesDirectors);
router.get("/genres", getGenres);
router.get("/actors", getActors);
router.get("/directors", getDirectors);
router.get("/:id", getMovieByID);
router.post("/", createMovie);
router.post("/moviegenre", createMovieGenre);
router.post("/movieactor", createMovieActor);
router.post("/moviedirector", createMovieDirector);
router.put("/:id", updateMovie);
router.put("/moviegenres/:id", updateMovieGenre);
router.put("/movieactors/:id", updateMovieActor);
router.put("/moviedirectors/:id", updateMovieDirector);
router.delete("/:id", deleteMovie);

module.exports = router;
