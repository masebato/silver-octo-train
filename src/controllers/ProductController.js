const productService = require("../services/ProductService");

const addProductToBranch = async (req, res) => {
  try {
    const { branchId, name, stock } = req.body;

    const product = await productService.addProductToBranch(
      branchId,
      name,
      stock
    );

    res.status(201).json({
      message: "Producto creado exitosamente",
      product,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear el producto",
      error: error.message,
    });
  }
};

const deleteProductFromBranch = async (req, res) => {
  try {
    const { productId } = req.params;

    const result = await productService.deleteProductFromBranch(productId);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: "Error al eliminar el producto",
      error: error.message,
    });
  }
};

const updateProductStock = async (req, res) => {
  try {
    const { productId } = req.params;
    const { stock } = req.body;

    const updatedProduct = await productService.updateProductStock(
      productId,
      stock
    );

    res.status(200).json({
      message: "Stock actualizado exitosamente",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al actualizar el stock",
      error: error.message,
    });
  }
};

const getTopStockedProductsByFranchise = async (req, res) => {
  try {
    const { franchiseId } = req.params;

    const results = await productService.getTopStockedProductsByFranchise(
      franchiseId
    );

    res.status(200).json({
      message: "Productos con más stock por sucursal",
      data: results,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener los productos",
      error: error.message,
    });
  }
};

const updateProductName = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name } = req.body;

    const updatedProduct = await productService.updateProductName(
      productId,
      name
    );

    res.status(200).json({
      message: "Nombre del producto actualizado exitosamente",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al actualizar el nombre del producto",
      error: error.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({
      message: "Error al obtener los productos",
      error: error.message,
    });
  }
};

module.exports = {
  addProductToBranch,
  deleteProductFromBranch,
  updateProductStock,
  getTopStockedProductsByFranchise,
  updateProductName,
  getAllProducts,
};
