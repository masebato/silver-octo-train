const express = require("express");
const {
  addBranchToFranchise,
  updateBranchName,
  getAllBranches,
} = require("../controllers/BranchController");
const router = express.Router();

router.get("/", getAllBranches);
router.post("/add-to-franchise", addBranchToFranchise);
router.put("/:branchId", updateBranchName);

module.exports = router;
