const express = require("express");
const router = express.Router();
const {
  getDirectors,
  createDirector,
  deleteDirector,
} = require("../controllers/directorsController");

router.get("/", getDirectors);
router.post("/", createDirector);
router.delete("/:id", deleteDirector);

module.exports = router;
