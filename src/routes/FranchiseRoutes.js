const express = require("express");
const {
  createFranchise,
  getAllFranchises,
  updateFranchiseName,
} = require("../controllers/franchiseController");
const router = express.Router();

router.post("/", createFranchise);
router.get("/", getAllFranchises);
router.put("/:franchiseId", updateFranchiseName);

module.exports = router;
