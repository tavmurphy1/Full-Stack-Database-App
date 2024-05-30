const express = require("express");
const router = express.Router();
const {
  getEpisodes,
  getTVShows,
  createEpisode,
  deleteEpisode,
} = require("../controllers/episodesController");

router.get("/", getEpisodes);
router.get("/tvshows", getTVShows);
router.post("/", createEpisode);
router.delete("/:id", deleteEpisode);

module.exports = router;
