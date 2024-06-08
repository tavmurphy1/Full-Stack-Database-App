const express = require("express");
const router = express.Router();
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
