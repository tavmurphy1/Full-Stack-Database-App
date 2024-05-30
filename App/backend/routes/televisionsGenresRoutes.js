const express = require("express");
const router = express.Router();
const {
  getTelevisionsGenres
} = require("../controllers/televisionsGenresController");

router.get("/", getTelevisionsGenres);

module.exports = router;
