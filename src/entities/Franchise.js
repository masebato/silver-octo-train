class Franchise {
  constructor(model) {
    this.model = model;
  }

  async create(name) {
    return await this.model.create({ name });
  }

  async updateName(franchiseId, newName) {
    const franchise = await this.model.findByPk(franchiseId);
    if (!franchise) {
      throw new Error("La franquicia no existe");
    }
    franchise.name = newName;
    await franchise.save();

    return franchise;
  }

  async findAll() {
    return await this.model.findAll({ include: "branches" });
  }

  async findById(id) {
    return await this.model.findByPk(id, { include: "branches" });
  }

  async getTopStockedProductsByFranchise(franchiseId, Branch, Product) {
    const franchise = await this.model.findByPk(franchiseId, {
      include: {
        model: Branch,
        as: "branches",
        include: {
          model: Product,
          as: "products",
        },
      },
    });

    return franchise;
  }
}

module.exports = Franchise;
