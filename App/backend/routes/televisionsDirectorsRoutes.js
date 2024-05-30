const express = require("express");
const router = express.Router();
const {
  getTelevisionsDirectors
} = require("../controllers/televisionsDirectorsController");

router.get("/", getTelevisionsDirectors);

module.exports = router;
