const express = require("express");
const router = express.Router();

const franchiseRoutes = require("./FranchiseRoutes");
const branchRoutes = require("./branchRoutes");
const productRoutes = require("./ProductRoutes");

router.use("/franchises", franchiseRoutes);
router.use("/branches", branchRoutes);
router.use("/products", productRoutes);

module.exports = router;
