const express = require("express");
const router = express.Router();
const {
  getActors,
  createActor,
  deleteActor,
} = require("../controllers/actorsController");

router.get("/", getActors);
router.post("/", createActor);
router.delete("/:id", deleteActor);

module.exports = router;
