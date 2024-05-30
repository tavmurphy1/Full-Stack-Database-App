const express = require("express");
const router = express.Router();
const {
  getTelevisionsActors
} = require("../controllers/televisionsActorsController");

router.get("/", getTelevisionsActors);

module.exports = router;
