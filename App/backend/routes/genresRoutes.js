const express = require("express");
const router = express.Router();
const {
  getGenres,
  createGenre,
  deleteGenre,
} = require("../controllers/genresController");

router.get("/", getGenres);
router.post("/", createGenre);
router.delete("/:id", deleteGenre);

module.exports = router;
