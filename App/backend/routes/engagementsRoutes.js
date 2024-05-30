const express = require("express");
const router = express.Router();
const {
  getEngagements,
  getUsers,
  getMovies,
  getTVShows,
  //getTelevisionByID,
  createEngagement,
  //updateTelevision,
  deleteEngagement,
} = require("../controllers/engagementsController");

router.get("/", getEngagements);
router.get("/users", getUsers);
router.get("/movies", getMovies);
router.get("/tvshows", getTVShows);
//router.get("/:id", getTelevisionByID);
router.post("/", createEngagement);
//router.put("/:id", updateTelevision);
router.delete("/:id", deleteEngagement);

module.exports = router;
