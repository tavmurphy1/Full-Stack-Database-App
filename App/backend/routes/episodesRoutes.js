//Citation for the following file:
// Date: 5/22/2024
// Adapted from react-starter-app provided in OSU CS340
// The original file was used as a template. It was modified to fit our project by changing names of routes to match our project's mySQL Episodes table.
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app
// Authors: Devin Daniels and Zachary Maes under the supervision of Dr. Michael Curry and Dr. Danielle Safonte

const express = require("express");
const router = express.Router();

// imports routes from controller file
const {
  getEpisodes,
  getTVShows,
  createEpisode,
  deleteEpisode,
} = require("../controllers/episodesController");

// creates routes to access database queries
router.get("/", getEpisodes);
router.get("/tvshows", getTVShows);
router.post("/", createEpisode);
router.delete("/:id", deleteEpisode);

module.exports = router;
