const { Branch, Product, Franchise } = require("../models");
const ProductEntity = require("../entities/Product");
const BranchEntity = require("../entities/Branch");
const FranchiseEntity = require("../entities/Franchise");

class ProductService {
  constructor() {
    this.product = new ProductEntity(Product);
    this.branch = new BranchEntity(Branch);
    this.franchise = new FranchiseEntity(Franchise);
  }

  async addProductToBranch(branchId, productName, stock) {
    const branch = await this.branch.validateBranch(branchId);
    if (!branch) {
      throw new Error("La sucursal no existe");
    }

    if (stock < 0) {
      throw new Error("El stock no puede ser un valor negativo");
    }
    const existingProduct = await this.product.validateNameForBranch(
      productName,
      branchId
    );

    if (existingProduct) {
      throw new Error("Ya existe un producto con este nombre en la sucursal");
    }

    const product = await this.product.create(productName, stock, branchId);

    return product;
  }

  async deleteProductFromBranch(productId) {
    const product = await this.product.validateProduct(productId);
    if (!product) {
      throw new Error("El producto no existe");
    }

    await this.product.delete(productId);

    return { message: `El producto con ID ${productId} ha sido eliminado` };
  }

  async updateProductStock(productId, newStock) {
    const product = await this.product.validateProduct(productId);
    if (!product) {
      throw new Error("El producto no existe");
    }

    if (newStock < 0) {
      throw new Error("El stock no puede ser negativo");
    }

    const updatedProduct = await this.product.updateStock(productId, newStock);

    return updatedProduct;
  }

  async getTopStockedProductsByFranchise(franchiseId) {
    const franchise = await this.franchise.getTopStockedProductsByFranchise(
      franchiseId,
      Branch,
      Product
    );

    if (!franchise) {
      throw new Error("La franquicia no existe");
    }

    const results = franchise.branches.map((branch) => {
      const topProduct = branch.products.reduce(
        (max, product) => (product.stock > (max?.stock || 0) ? product : max),
        null
      );

      return {
        branchId: branch.id,
        branchName: branch.name,
        topProduct: topProduct || null,
      };
    });

    return results;
  }
  async updateProductName(productId, newName) {
    const product = await this.product.validateProduct(productId);
    if (!product) {
      throw new Error("El producto no existe");
    }

    if (!newName || newName.trim() === "") {
      throw new Error("El nombre no puede estar vacío");
    }

    return await this.product.updateName(productId, newName);
  }

  async getAllProducts() {
    return await this.product.getAllProducts();
  }
}

module.exports = new ProductService();
