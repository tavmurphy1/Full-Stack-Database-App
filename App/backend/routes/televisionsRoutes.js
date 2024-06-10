//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of routes to match our project's mySQL Televisions table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

const express = require("express");
const router = express.Router();

// imports routes from controller file
const {
  getTelevisions,
  getTelevisionByID,
  createTelevision,
  createTelevisionGenre,
  createTelevisionActor,
  createTelevisionDirector,
  updateTelevision,
  updateTelevisionGenre,
  updateTelevisionActor,
  updateTelevisionDirector,
  deleteTelevision,
  getTelevisionsGenres,
  getTelevisionsActors,
  getTelevisionsDirectors,
  getGenres,
  getActors,
  getDirectors,
} = require("../controllers/televisionsController");

// creates routes to access database queries
router.get("/", getTelevisions);
router.get("/televisiongenres", getTelevisionsGenres);
router.get("/televisionactors", getTelevisionsActors);
router.get("/televisiondirectors", getTelevisionsDirectors);
router.get("/genres", getGenres);
router.get("/actors", getActors);
router.get("/directors", getDirectors);
router.get("/:id", getTelevisionByID);
router.post("/", createTelevision);
router.post("/televisiongenre", createTelevisionGenre);
router.post("/televisionactor", createTelevisionActor);
router.post("/televisiondirector", createTelevisionDirector);
router.put("/:id", updateTelevision);
router.put("/televisiongenres/:id", updateTelevisionGenre);
router.put("/televisionactors/:id", updateTelevisionActor);
router.put("/televisiondirectors/:id", updateTelevisionDirector);
router.delete("/:id", deleteTelevision);

module.exports = router;
