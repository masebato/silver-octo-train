const express = require("express");
const {
  addBranchToFranchise,
  updateBranchName,
} = require("../controllers/BranchController");
const router = express.Router();

router.post("/add-to-franchise", addBranchToFranchise);
router.put("/:branchId", updateBranchName);

module.exports = router;
