//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of routes to match our project's mySQL Movies table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

const express = require("express");
const router = express.Router();

// imports routes from controller file
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

// creates routes to access database queries
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
