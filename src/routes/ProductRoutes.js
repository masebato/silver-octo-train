const express = require("express");
const {
  addProductToBranch,
  deleteProductFromBranch,
  updateProductStock,
  getTopStockedProductsByFranchise,
  updateProductName,
} = require("../controllers/ProductController");
const router = express.Router();

router.post("/add-to-branch", addProductToBranch);
router.delete("/:productId", deleteProductFromBranch);
router.put("/:productId/stock", updateProductStock);
router.get("/top-stocked/:franchiseId", getTopStockedProductsByFranchise);
router.put("/:productId", updateProductName);

module.exports = router;
