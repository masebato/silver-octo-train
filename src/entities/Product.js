class Product {
  constructor(model) {
    this.model = model;
  }

  async create(productName, stock, branchId) {
    return await this.model.create({
      name: productName,
      stock: stock || 0,
      branchId,
    });
  }

  async updateStock(productId, stock) {
    const product = await this.model.findByPk(productId);
    product.stock = stock;
    await product.save();
    return product;
  }

  async validateProduct(productId) {
    return await this.model.findByPk(productId);
  }

  async validateNameForBranch(name, branchId) {
    return await this.model.findOne({ where: { name, branchId } });
  }

  async delete(productId) {
    const product = await this.model.findByPk(productId);
    await product.destroy();
  }

  async updateName(productId, newName) {
    const product = await this.model.findByPk(productId);
    product.name = newName;
    await product.save();
    return product;
  }

  async getAllProducts() {
    return await this.model.findAll();
  }
}

module.exports = Product;
